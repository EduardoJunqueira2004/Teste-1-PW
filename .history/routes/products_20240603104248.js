const productsRouter = require('express').Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');

// Rota para obter todos os produtos
productsRouter.get('/', authMiddleware, controller.getAllProducts);

// Rota para obter um produto por ID
productsRouter.get('/:id', authMiddleware, controller.getProductById);

// Rota para criar um novo produto
productsRouter.post('/', authMiddleware, controller.createProduct);

// Rota para atualizar um produto por ID
productsRouter.put('/:id', authMiddleware, controller.updateProduct);

// Rota para deletar um produto por ID
productsRouter.delete('/:id', authMiddleware, controller.deleteProduct);

module.exports = productsRouter;
