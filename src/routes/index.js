const express = require('express')
const routes = express.Router()

//USERS
const UserController = require('../users/usersControllers')
const TokenMiddleware = require('../users/usersMiddlewares')

routes.get('/user', UserController.index)
routes.post('/user/register', UserController.store)

routes.post('/user/authenticate', UserController.login)
routes.get(
  '/user/:id',
  TokenMiddleware.checkToken,
  TokenMiddleware.validateToken
)

//POSTS
const PostController = require('../posts/postsControllers')
const postMiddleware = require('../posts/postsMiddlewares')

routes.get('/posts', PostController.index)
routes.post('/posts', PostController.store)
routes.put('/posts/:id', postMiddleware.validateId, PostController.update)
routes.delete('/posts/:id', postMiddleware.validateId, PostController.delete)

module.exports = routes
