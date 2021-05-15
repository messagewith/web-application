import React, { useEffect, useState, useRef, RefObject, FC } from "react";
import styled, { css } from "styled-components";
import {
  IsoCode,
  AVAILABLE_LANGUAGES,
  useTranslation,
} from "@messagewith/i18n";
import bgFlag from "@iconify/icons-emojione/flag-for-bulgaria";
import cnFlag from "@iconify/icons-emojione/flag-for-china";
import czFlag from "@iconify/icons-emojione/flag-for-czechia";
import dkFlag from "@iconify/icons-emojione/flag-for-denmark";
import nlFlag from "@iconify/icons-emojione/flag-for-netherlands";
import eeFlag from "@iconify/icons-emojione/flag-for-estonia";
import fiFlag from "@iconify/icons-emojione/flag-for-finland";
import frFlag from "@iconify/icons-emojione/flag-for-france";
import deFlag from "@iconify/icons-emojione/flag-for-germany";
import grFlag from "@iconify/icons-emojione/flag-for-greece";
import huFlag from "@iconify/icons-emojione/flag-for-hungary";
import itFlag from "@iconify/icons-emojione/flag-for-italy";
import jpFlag from "@iconify/icons-emojione/flag-for-japan";
import lvFlag from "@iconify/icons-emojione/flag-for-latvia";
import ltFlag from "@iconify/icons-emojione/flag-for-lithuania";
import plFlag from "@iconify/icons-emojione/flag-for-poland";
import ptFlag from "@iconify/icons-emojione/flag-for-portugal";
import roFlag from "@iconify/icons-emojione/flag-for-romania";
import ruFlag from "@iconify/icons-emojione/flag-for-russia";
import skFlag from "@iconify/icons-emojione/flag-for-slovakia";
import siFlag from "@iconify/icons-emojione/flag-for-slovenia";
import esFlag from "@iconify/icons-emojione/flag-for-spain";
import seFlag from "@iconify/icons-emojione/flag-for-sweden";
import enFlag from "@iconify/icons-emojione/flag-for-united-states";
import bxsDownArrow from "@iconify/icons-bx/bxs-down-arrow";
import Icon from "@iconify/react";
import { rgba } from "polished";
import { useOutsideClick } from "rooks";

const flags: { [isoCode in IsoCode]: typeof enFlag } = {
  [IsoCode.BG]: bgFlag,
  [IsoCode.CN]: cnFlag,
  [IsoCode.CZ]: czFlag,
  [IsoCode.DK]: dkFlag,
  [IsoCode.NL]: nlFlag,
  [IsoCode.EN]: enFlag,
  [IsoCode.EE]: eeFlag,
  [IsoCode.FI]: fiFlag,
  [IsoCode.FR]: frFlag,
  [IsoCode.DE]: deFlag,
  [IsoCode.GR]: grFlag,
  [IsoCode.HU]: huFlag,
  [IsoCode.IT]: itFlag,
  [IsoCode.JP]: jpFlag,
  [IsoCode.LV]: lvFlag,
  [IsoCode.LT]: ltFlag,
  [IsoCode.PL]: plFlag,
  [IsoCode.PT]: ptFlag,
  [IsoCode.RO]: roFlag,
  [IsoCode.RU]: ruFlag,
  [IsoCode.SK]: skFlag,
  [IsoCode.SI]: siFlag,
  [IsoCode.ES]: esFlag,
  [IsoCode.SE]: seFlag,
};

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 210px;
`;

const StyledList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  right: 0;
  top: 100%;
  list-style-type: none;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.washSuperHeavy};
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadiusR};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 210px;
  height: 260px;
  align-items: center;
  padding: 0;
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  margin: 5px 0 0;
  transition: transform 0.4s ease-in-out, opacity 0.3s ease-in-out;
  transform-origin: top right;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: scale(1);
      opacity: 1;
      pointer-events: all;
    `}

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.washSuperLight};
    border-top-right-radius: ${({ theme }) => theme.borderRadiusR};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadiusR};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.washMedium};
    border-radius: ${({ theme }) => theme.borderRadiusR};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.washHeavy};
  }

  ::-webkit-scrollbar-thumb:active {
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

const StyledItem = styled.li<{ $isCurrent: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  user-select: none;
  cursor: pointer;

  :first-of-type {
    padding-top: 15px;
  }
  :last-of-type {
    padding-bottom: 15px;
  }

  :hover {
    background: ${({ theme }) => theme.washSuperLight};
  }

  :active {
    background: ${({ theme }) => theme.washLight};
  }

  ${({ $isCurrent }) =>
    $isCurrent &&
    css`
      background: ${({ theme }) => rgba(theme.primary, 0.2)};

      :hover {
        background: ${({ theme }) => rgba(theme.primary, 0.2)};
      }

      :active {
        background: ${({ theme }) => rgba(theme.primary, 0.2)};
      }
    `}
`;

const StyledCurrentLanguage = styled.div<{ $isOpen: boolean }>`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.washSuperHeavy};
  user-select: none;
  cursor: pointer;
  padding: 10px 15px;
  transition: box-shadow 0.2s ease-in-out;
  border-radius: ${({ theme }) => theme.borderRadiusR};

  ${({ $isOpen, theme }) =>
    $isOpen &&
    css`
      box-shadow: ${theme.boxShadow};
      background: ${theme.background};
      border-radius: ${theme.borderRadiusR};
    `}
`;

const StyledArrow = styled(Icon)<{ $isOpen: boolean }>`
  margin-left: 12px;
  font-size: 1rem;
  transition: transform 0.2s ease-in-out;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      transform: rotate(180deg) !important;
    `}
`;

const StyledFlag = styled(Icon)`
  font-size: 2.4rem;
  margin-right: 15px;
`;

const ChangeLanguage: FC<Props> = ({ tabIndex = 0 }) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const { isoCode, changeLanguage } = useTranslation();

  const handleKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      setOpen((prevState) => !prevState);
    }
  };

  const handleCurrentLanguageClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemClick = (key: string) => {
    setOpen(false);
    changeLanguage(key as IsoCode);
  };

  const handleOutsideCLick = () => setOpen(false);

  const wrapper = useRef<HTMLDivElement>(null);
  useOutsideClick(
    wrapper as React.MutableRefObject<HTMLElement>,
    handleOutsideCLick
  );

  return (
    <StyledWrapper ref={wrapper}>
      <StyledCurrentLanguage
        onClick={handleCurrentLanguageClick}
        onKeyPress={handleKeypress}
        $isOpen={isOpen}
        role="button"
        aria-haspopup="listbox"
        aria-labelledby="select_language"
        tabIndex={tabIndex}
      >
        <StyledFlag icon={flags[isoCode]} />
        {AVAILABLE_LANGUAGES[isoCode].regionalName}
        <StyledArrow icon={bxsDownArrow} $isOpen={isOpen} />
      </StyledCurrentLanguage>

      <StyledList
        $isOpen={isOpen}
        role="listbox"
        aria-labelledby="select_language"
        aria-activedescendant={`select_language_${isoCode}`}
      >
        {Object.entries(AVAILABLE_LANGUAGES)
          .sort(([_, a], [__, b]) => (a.regionalName < b.regionalName ? -1 : 1))
          .map(([key, value], index) => (
            <StyledItem
              onClick={() => handleItemClick(key)}
              key={key}
              $isCurrent={isoCode === key}
              aria-selected={isoCode === key}
              role="option"
              id={`select_language_${key}`}
            >
              <StyledFlag icon={flags[key as IsoCode]} /> {value.regionalName}
            </StyledItem>
          ))}
      </StyledList>
    </StyledWrapper>
  );
};

interface Props {
  tabIndex?: number;
}

export default ChangeLanguage;
