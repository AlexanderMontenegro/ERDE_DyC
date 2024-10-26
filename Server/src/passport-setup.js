// src/passport-setup.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Verificación de `email` desde el perfil de Google
    const email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;
    const name = profile.displayName || 'Usuario sin nombre';

    if (!email) {
      throw new Error('El perfil de Google no tiene un email asociado.');
    }

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        name,
        password: null,
      },
    });

    done(null, user);
  } catch (error) {
    console.error('Error en la estrategia de Google:', error.message);
    done(error, null);
  }
}));
