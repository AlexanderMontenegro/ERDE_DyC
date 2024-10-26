const authorize = (roles = []) => {
    // Roles puede ser un solo rol o un array de roles permitidos
    if (typeof roles === 'string') {
      roles = [roles];
    }
  
    return (req, res, next) => {
      if (!req.user || !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Acceso denegado' });
      }
      next();
    };
  };
  
  module.exports = authorize;