const Post = require('./postsModelo')

module.exports = {
  async validateId(request, response, next) {
    const { id } = request.params

    try {
      const post = await Post.findById(id)
      response.post = post
      if (!post) {
        return response.status(404).json({ error: 'Post not found' })
      }
    } catch (error) {
      return response.status(400).json({ error: error.message })
    }
    next()
  }
}
