const publicPath = process.env.NODE_ENV === 'production' ?
'/my_website/' : '/'

module.exports = {
  publicPath: publicPath,
}
