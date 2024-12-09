import { useState } from 'react';
import { OptionType, defaultArticleState } from 'src/constants/articleProps';


export const useArticleSettings = () => {
  const [fontSelect, setFontSelect] = useState<OptionType>(
    defaultArticleState.fontFamilyOption
  );
  const [fontSizeSelect, setFontSizeSelect] = useState<OptionType>(
    defaultArticleState.fontSizeOption
  );
  const [fontColorSelect, setFontColorSelect] = useState<OptionType>(
    defaultArticleState.fontColor
  );
  const [backgroundColorSelect, setBackgroundColorSelect] = useState<OptionType>(
    defaultArticleState.backgroundColor
  );
  const [contentWidthSelect, setContentWidthSelect] = useState<OptionType>(
    defaultArticleState.contentWidth
  );

  const [selectStyles, setSelectStyles] = useState({
    fontFamily: defaultArticleState.fontFamilyOption.value,
    fontSize: defaultArticleState.fontSizeOption.value,
    fontColor: defaultArticleState.fontColor.value,
    backgroundColor: defaultArticleState.backgroundColor.value,
    contentWidth: defaultArticleState.contentWidth.value,
  });

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

  const handleFormSubmit = () => {
    setSelectStyles({
      fontFamily: fontSelect.value,
      fontSize: fontSizeSelect.value,
      fontColor: fontColorSelect.value,
      backgroundColor: backgroundColorSelect.value,
      contentWidth: contentWidthSelect.value,
    });
  };

  return {
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
  };
};