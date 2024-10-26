const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { productValidationRules, validateProduct } = require('../middleware/productValidator');
const authorize = require('../middleware/authorize');

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Gestión de productos
 */

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Crea un nuevo producto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       400:
 *         description: Datos inválidos
 *       403:
 *         description: Acceso denegado
 */
router.post('/', authorize('admin'), productValidationRules, validateProduct, productController.createProduct);

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
router.get('/', productController.getAllProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Datos del producto
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:id', productController.getProductById);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Actualiza un producto por ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       400:
 *         description: Datos inválidos
 *       403:
 *         description: Acceso denegado
 *       404:
 *         description: Producto no encontrado
 */
router.put('/:id', authorize('admin'), productValidationRules, validateProduct, productController.updateProduct);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Elimina un producto por ID
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     responses:
 *       204:
 *         description: Producto eliminado exitosamente
 *       403:
 *         description: Acceso denegado
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/:id', authorize('admin'), productController.deleteProduct);

/**
 * @swagger
 * /products/{id}/stock:
 *   patch:
 *     summary: Actualiza el stock de un producto
 *     tags: [Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Stock actualizado exitosamente
 *       403:
 *         description: Acceso denegado
 *       404:
 *         description: Producto no encontrado
 */
router.patch('/:id/stock', authorize('admin'), productController.updateStock);

module.exports = router;
