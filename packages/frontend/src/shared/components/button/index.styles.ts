import { css } from '@emotion/css';

import { FAMILIES, MEDIA, SIZES, WEIGHTS, colors } from '../../../shared/styles';

export const buttonStyles = (bg?: keyof typeof colors) => {
    const defaultBg =
    `linear-gradient(90deg, ${colors.midnightGreen} 0%, ${colors.blueSapphire} 100%)`

  return css`
     width: fit-content;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    gap: ${SIZES.xxsb};
    justify-content: center;
    align-items: center;
    padding: ${SIZES.xs} ${SIZES.xxl};
    background: ${bg ? colors[bg] : defaultBg};

    border: 1px solid ${colors.midnightGreen};

    box-shadow: 0px 1px 2px ${colors.darkJungleGreenTransparent};
    border-radius: ${SIZES.xxxxxl};

    font-family: ${FAMILIES.dmsans};
    font-weight: ${WEIGHTS.semiBold};
    font-size: ${SIZES.l};
    line-height: ${SIZES.xxxxl};
    color: ${colors.white};

    &:hover {
        background: ${colors.msuGreen};
    }

    &:focus {
        background: ${colors.midnightGreen};
        box-shadow:
            0px 0px 0px 4px ${colors.water},
            0px 1px 2px 0px ${colors.darkJungleGreenTransparent};
        outline: none;
    }

    &:disabled {
        border: 1px solid ${colors.lightSilver};
        background: ${colors.lightSilver};
        box-shadow: 0px 1px 2px 0px ${colors.darkJungleGreenTransparent};
    }

    @media screen and (max-width: ${MEDIA.tabletL}) {
        font-size: ${SIZES.m};
    }

    & > svg {
        width: ${SIZES.l};
        height: ${SIZES.l};
        & > path {
            stroke: ${colors.white};
        }
    }
    @media screen and (max-width: ${MEDIA.mobileXl}) {
        padding: ${SIZES.xs} ${SIZES.l};
    }
  `
}