module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
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