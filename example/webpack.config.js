const fs = require('fs')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    // 多页面，多入口，对应出口（每次run都会打包多个文件）
    entry: fs.readdirSync(__dirname).reduce((entries, dir) => {
        const fullDir = path.join(__dirname, dir)
        const entry = path.join(fullDir, 'app.ts')

        if(fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)){
            entries[dir] = ['webpack-hot-middleware/client', entry]
        }
        return entries
    }, {}),

    output: {
        path: path.join(__dirname, 'dist'),
        // 动态name
        filename: '[name].js',
        // 打包后静态资源路径位置
        publicPath: '/dist/'
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                // loader顺序
                enforce: 'pre',
                use: ['tslint-loader']
            },
            {
                test: /\.tsx?$/,
                use: 
                [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    // 后缀
    resolve: {
        extensions:  ['.ts', '.tsx', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
}