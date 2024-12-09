import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { RadioGroup } from 'src/ui/radio-group/RadioGroup';
import { Select } from 'src/ui/select/Select';
import { useOutsideClickClose } from 'src/ui/select/hooks/useOutsideClickClose';
import { Separator } from 'src/ui/separator/Separator';
import {
	OptionType,
	backgroundColors,
	contentWidthArr,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions
} from 'src/constants/articleProps';

import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

type ArticleStatesForm = {
	fontSelect: OptionType;
	setFontSelect: Dispatch<SetStateAction<OptionType>>;

	fontSizeSelect: OptionType;
	setFontSizeSelect: Dispatch<SetStateAction<OptionType>>;

	fontColorSelect: OptionType;
	setFontColorSelect: Dispatch<SetStateAction<OptionType>>;

	backgroundColorSelect: OptionType;
	setBackgroundColorSelect: Dispatch<SetStateAction<OptionType>>;

	contentWidthSelect: OptionType;
	setContentWidthSelect: Dispatch<SetStateAction<OptionType>>;

	onReset: () => void;
	onSubmit: () => void;
};

export const ArticleParamsForm = (props: ArticleStatesForm) => {

	const [formOpen, setFormOpen] = useState<boolean>(false);
	const asideRef = useRef<HTMLDivElement>(null);

	useOutsideClickClose({
		isOpen: formOpen,
		rootRef: asideRef,
		onChange: setFormOpen
	});

	const handleButtonClick = () => {
		setFormOpen(!formOpen);
	};

	const handleFontSelectChange = (fontSelected: OptionType) => {
		props.setFontSelect(fontSelected);
	};
	const handleFontSizeSelectChange = (fontSizeSelected: OptionType) => {
		props.setFontSizeSelect(fontSizeSelected);
	};
	const handleFontColorSelectChange = (fontColorSelected: OptionType) => {
		props.setFontColorSelect(fontColorSelected);
	};
	const handleBackgroundColorSelectChange = (
		backgroundColorSelected: OptionType
	) => {
		props.setBackgroundColorSelect(backgroundColorSelected);
	};
	const handleContentWidthSelectChange = (contentWidthSelected: OptionType) => {
		props.setContentWidthSelect(contentWidthSelected);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		props.onSubmit();	
	};

	const container = formOpen ? styles.container_open : styles.container;

	return (
		<>
			<ArrowButton onClick={handleButtonClick} isOpen={formOpen} />
			<aside className={clsx(styles.container, container)} ref={asideRef}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<Select
						selected={props.fontSelect}
						options={fontFamilyOptions}
						onChange={(fontSelected: OptionType) => {
							handleFontSelectChange(fontSelected);
						}}
						title='Шрифт'
					/>
					<RadioGroup
						name='radioFonts'
						options={fontSizeOptions}
						selected={props.fontSizeSelect}
						title='Размер шрифта'
						onChange={handleFontSizeSelectChange}
					/>
					<Select
						selected={props.fontColorSelect}
						options={fontColors}
						onChange={handleFontColorSelectChange}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={props.backgroundColorSelect}
						options={backgroundColors}
						onChange={handleBackgroundColorSelectChange}
						title='Цвет фона'
					/>
					<Select
						selected={props.contentWidthSelect}
						options={contentWidthArr}
						onChange={handleContentWidthSelectChange}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={props.onReset} />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};

