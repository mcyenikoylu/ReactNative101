const path = require('path');
module.export={
    mode: "development",
    entry: "./web/index.js",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        "presets": [
                            "@babel/preset-env",
                            "@babel/preset-react"
                        ],  
                    }
                },
            }
        ]
    },
    output: {
        path: path.resolve(__dirname,'./web'),
        filename: "bundle.js"
    }
}