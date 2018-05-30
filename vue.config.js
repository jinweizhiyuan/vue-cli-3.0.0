module.exports = {
    baseUrl: '/',
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        devServer: {
            publicPath: '/'
        }
        // ,
        // module: {
        //     rules: [{
        //         test: /\.(.jpg|jpeg|png|svg|gif)$/,
        //         use: [
        //             { loader: 'url-loader' , options: {limit:512}}
        //         ]
        //     }]
        // }
    }


}