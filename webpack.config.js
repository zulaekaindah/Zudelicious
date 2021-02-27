module.exports = {
    entry:'./src/js/App.js',
    output: {
        path:'./public/',
        filename:'bundle.js'
    },
    devServer:{
        inline:true,
        port:3000,
        contentBase:'./public'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/(node_module)/,
                loader:'babel',
                query:{
                    presets:['react','es2021']
                }
            }
        ]
    }
}