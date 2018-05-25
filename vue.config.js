module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        // module: {
        //     rules: [{
        //         test: /\.styl$/,
        //         use: [
        //             { loader: 'style-loader' },
        //             { loader: 'css-loader', options: { sourceMap: "true" } },
        //             { loader: 'stylus-loader' }
        //         ]
        //     }]
        // }
    }


}