import type { StorybookConfig } from '@storybook/react-webpack5';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions',
		{
			name: '@storybook/addon-styling-webpack',
			options: {
				rules: [
					{
						test: /\.css$/,
						sideEffects: true,
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: {
									modules: {
										auto: true,
									},
								},
							},
						],
					},
					{
						test: /\.s[ac]ss$/,
						sideEffects: true,
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: {
									modules: {
										auto: true,
									},
									importLoaders: 2,
								},
							},
							'resolve-url-loader',
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true,
								},
							},
						],
					},
				],
			},
		},
		'@storybook/addon-webpack5-compiler-swc',
	],
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				fonts: path.resolve(process.cwd(), 'src/fonts'),
				src: path.resolve(process.cwd(), 'src'),
				components: path.resolve(process.cwd(), 'src/components'),
			};
		}
		return config;
	},
	framework: {
		name: '@storybook/react-webpack5',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
};

export default config;
