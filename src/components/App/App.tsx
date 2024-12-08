import { CSSProperties, useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { OptionType,
	defaultArticleState,
} from 'src/constants/articleProps'

import clsx from 'clsx';
import 'src/styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {

    const [fontSelect, setFontSelect] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontSizeSelect, setFontSizeSelect] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const [fontColorSelect, setFontColorSelect] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [backgroundColorSelect, setBackgroundColorSelect] =
		useState<OptionType>(defaultArticleState.backgroundColor);
	const [contentWidthSelect, setContentWidthSelect] =
		useState<OptionType>(defaultArticleState.contentWidth);

	const setDefaultSelections = () => {
		setFontSelect(defaultArticleState.fontFamilyOption);
		setFontSizeSelect(defaultArticleState.fontSizeOption);
		setFontColorSelect(defaultArticleState.fontColor);
		setBackgroundColorSelect(defaultArticleState.backgroundColor);
		setContentWidthSelect(defaultArticleState.contentWidth);

		setSelectStyles({
			fontFamily: defaultArticleState.fontFamilyOption.value,
			fontSize: defaultArticleState.fontSizeOption.value,
			fontColor: defaultArticleState.fontColor.value,
			backgroundColor: defaultArticleState.backgroundColor.value,
			contentWidth: defaultArticleState.contentWidth.value,
		});
	};

    const [selectStyles, setSelectStyles] = useState({
		fontFamily: defaultArticleState.fontFamilyOption.value,
		fontSize: defaultArticleState.fontSizeOption.value,
		fontColor: defaultArticleState.fontColor.value,
		backgroundColor: defaultArticleState.backgroundColor.value,
		contentWidth: defaultArticleState.contentWidth.value,
	});

	const handleFormSubmit = () => {
		setSelectStyles({
			fontFamily: fontSelect.value,
			fontSize: fontSizeSelect.value,
			fontColor: fontColorSelect.value,
			backgroundColor: backgroundColorSelect.value,
			contentWidth: contentWidthSelect.value,
		});
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': selectStyles.fontFamily,
					'--font-size': selectStyles.fontSize,
					'--font-color': selectStyles.fontColor,
					'--container-width': selectStyles.contentWidth,
					'--bg-color': selectStyles.backgroundColor,
				} as CSSProperties
			}>
			<ArticleParamsForm
				fontSelect={fontSelect}
				setFontSelect={setFontSelect}
				fontSizeSelect={fontSizeSelect}
				setFontSizeSelect={setFontSizeSelect}
				fontColorSelect={fontColorSelect}
				setFontColorSelect={setFontColorSelect}
				backgroundColorSelect={backgroundColorSelect}
				setBackgroundColorSelect={setBackgroundColorSelect}
				contentWidthSelect={contentWidthSelect}
				setContentWidthSelect={setContentWidthSelect}
				onReset={setDefaultSelections}
				onSubmit={handleFormSubmit}
			/>
			<Article />
		</main>
	);
};