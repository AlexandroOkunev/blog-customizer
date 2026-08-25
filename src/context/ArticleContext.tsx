import { createContext, useContext, useState, ReactNode } from 'react';
import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

type ArticleContextType = {
	params: ArticleStateType;
	applyParams: (newParams: ArticleStateType) => void;
	resetParams: () => void;
};

const ArticleContext = createContext<ArticleContextType | null>(null);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
	const [params, setParams] = useState<ArticleStateType>(defaultArticleState);

	const applyParams = (newParams: ArticleStateType) => {
		setParams(newParams);
	};

	const resetParams = () => {
		setParams(defaultArticleState);
	};

	return (
		<ArticleContext.Provider value={{ params, applyParams, resetParams }}>
			{children}
		</ArticleContext.Provider>
	);
};

export const useArticleParams = () => {
	const context = useContext(ArticleContext);
	if (!context) {
		throw new Error('useArticleParams must be used within ArticleProvider');
	}
	return context;
};
