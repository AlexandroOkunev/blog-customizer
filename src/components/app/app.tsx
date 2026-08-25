import React, { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

import styles from './app.module.scss';

export const App = () => {
	const [params, setParams] = useState<ArticleStateType>(defaultArticleState);

	const handleApplyParams = (newParams: ArticleStateType) => {
		setParams(newParams);
	};

	const handleResetParams = () => {
		setParams(defaultArticleState);
	};

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
			<ArticleParamsForm
				params={params}
				onApply={handleApplyParams}
				onReset={handleResetParams}
			/>
			<Article />
		</main>
	);
};
