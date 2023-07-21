const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    devtool:'eval-source-map',
    devServer: {
        static: {
          directory: path.join(__dirname, 'src'),
        },
        open:true,
        compress: true,
        port: 9000,
      },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({  
          filename: 'index.html',
          title: 'My-App',
          template: 'src/index.html'
        })
      ],
      resolve: {
        extensions: ['.tsx', '.ts', '.js'],
      },
      module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
          {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
         {
           test: /\.(woff|woff2|eot|ttf|otf)$/i,
           type: 'asset/resource',
         },
        ],
      },
      
  };

  