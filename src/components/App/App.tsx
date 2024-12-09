import { CSSProperties, useState } from 'react';
import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { useArticleSettings } from '../article-params-form/hook/useArticleSettings';

import 'src/styles/index.scss';
import styles from '../../styles/index.module.scss';

export const App = () => {

    const {
        fontSelect,
        setFontSelect,
        fontSizeSelect,
        setFontSizeSelect,
        fontColorSelect,
        setFontColorSelect,
        backgroundColorSelect,
        setBackgroundColorSelect,
        contentWidthSelect,
        setContentWidthSelect,
        selectStyles,
        setDefaultSelections,
        handleFormSubmit,
    } = useArticleSettings();
    

	return (
		<main
			className={styles.main}
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