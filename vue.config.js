var path = require('path');

module.exports = {
    chainWebpack: config => {
        //this path is specific to my project
        config.resolve.alias.set('@scss', path.resolve('src/assets/scss')); 
    },
};