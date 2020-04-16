const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');
const path = require('path');
const fs = require('fs');
module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: { minimize: true }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [CssWebpackPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new CssWebpackPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        port: 9090,
        after: function (app, server, compiler) {
            app.get('/*', function (req, res) {

                try {
                    const data = fs.readFileSync(path.join(__dirname, 'simulations/', req.params[0]), 'utf-8');
                    res.json(data);
                  } catch (err) {
                    res.status(500).json({succes: false, data: 'Internal error'});
                  }
                
            });
            app.post('/*', function (req, res) {
                try {
                    const data = fs.readFileSync(path.join(__dirname, 'simulations/', req.params[0]), 'utf-8');
                    res.json(data);
                  } catch (err) {
                    res.status(500).json({succes: false, data: 'Internal error'});
                  }
                
            });
        }
    }
}