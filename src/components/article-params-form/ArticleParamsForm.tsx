import React, { useState, useRef, useEffect, FormEvent } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';
import {
	OptionType,
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	ArticleStateType,
} from 'src/constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	params: ArticleStateType;
	onApply: (params: ArticleStateType) => void;
	onReset: () => void;
};

export const ArticleParamsForm = ({
	params,
	onApply,
	onReset,
}: ArticleParamsFormProps) => {
	const [draftParams, setDraftParams] = useState<ArticleStateType>(params);
	const [isOpen, setIsOpen] = useState(false);
	const asideRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (isOpen) {
			setDraftParams(params);
		}
	}, [isOpen, params]);

	useEffect(() => {
		if (!isOpen) return;

		const handleClickOutside = (event: MouseEvent) => {
			if (
				asideRef.current &&
				!asideRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isOpen]);

	const handleToggle = () => setIsOpen((prev) => !prev);

	const handleApply = (event: FormEvent) => {
		event.preventDefault();
		onApply(draftParams);
	};

	const handleReset = () => {
		onReset();
		setDraftParams(defaultArticleState);
	};

	const handleChange =
		(key: keyof ArticleStateType) => (option: OptionType) => {
			setDraftParams((prev) => ({ ...prev, [key]: option }));
		};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={handleToggle} />
			<aside
				ref={asideRef}
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={handleApply}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>

					<Select
						title='Шрифт'
						selected={draftParams.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={handleChange('fontFamilyOption')}
					/>

					<RadioGroup
						title='Размер шрифта'
						name='fontSize'
						selected={draftParams.fontSizeOption}
						options={fontSizeOptions}
						onChange={handleChange('fontSizeOption')}
					/>

					<Select
						title='Цвет шрифта'
						selected={draftParams.fontColor}
						options={fontColors}
						onChange={handleChange('fontColor')}
					/>

					<Separator />

					<Select
						title='Цвет фона'
						selected={draftParams.backgroundColor}
						options={backgroundColors}
						onChange={handleChange('backgroundColor')}
					/>

					<Select
						title='Ширина контента'
						selected={draftParams.contentWidth}
						options={contentWidthArr}
						onChange={handleChange('contentWidth')}
					/>

					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
