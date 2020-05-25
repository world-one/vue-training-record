var path = require('path');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-training-record/'
    : '/',
    chainWebpack: config => {
        //this path is specific to my project
        config.resolve.alias.set('@scss', path.resolve('src/assets/scss')); 
    },
};