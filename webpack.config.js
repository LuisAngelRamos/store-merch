const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracrPlugin = require('mini-css-extract-plugin');
// Configuracion para empaquetar y levantar un servidor
module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		// Los loader permiten que webpack procese otros tipos de archivos y
		// los convierta en modulos validos
		rules: [
			{
				// Soporte para archivos de react
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					// Babel transforma nuestro codigo js en una version mas global
					loader: 'babel-loader',
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtracrPlugin.loader,
					},
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
		}),
		new MiniCssExtracrPlugin({
			filename: 'assets/[name].css',
		}),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		historyApiFallback: true,
		port: 3005,
	},
};
