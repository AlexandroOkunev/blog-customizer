import { CSSProperties } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { ArticleProvider, useArticleParams } from 'src/context/ArticleContext';

import styles from './app.module.scss';

const AppContent = () => {
	const { params } = useArticleParams();

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': `'${params.fontFamilyOption.value}'`,
					'--font-size': params.fontSizeOption.value,
					'--font-color': params.fontColor.value,
					'--container-width': params.contentWidth.value,
					'--bg-color': params.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm />
			<Article />
		</main>
	);
};

export const App = () => {
	return (
		<ArticleProvider>
			<AppContent />
		</ArticleProvider>
	);
};
