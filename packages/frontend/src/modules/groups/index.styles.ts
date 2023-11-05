import { css } from '@emotion/css';

import { FAMILIES, SIZES, WEIGHTS, colors } from '../../shared/styles';

export const schedulesStyles = css`
  width: fit-content;
  position: relative;
  display: flex;
  flex-direction: column;

  gap: ${SIZES.xl};

`

export const schedulesTableStyles = css`
    position: relative;
    overflow: hidden;
    border-radius: ${SIZES.xxl};
    box-shadow: 0 0 5px ${colors.lightSilver};
    border-collapse: collapse;
    border: 1px solid ${colors.transparent};
    width: max-content;

  td, th {
    border: 1px solid ${colors.lightSilver};
    color: ${colors.charcoal};
    font-family: ${FAMILIES.dmsans};
    font-weight: ${WEIGHTS.medium};
    text-align: center;
    padding: ${SIZES.m} ${SIZES.xxs};

  }

  a {
    :hover, :active, :focus {
      text-decoration: none;
      outline: none;
    }
  }

  & > thead {
    & > tr {
      & > th {
        font-size: ${SIZES.xl};
        padding: ${SIZES.xl};
        padding-right: ${SIZES.xxl};
        position: relative;
      }
      
    }
  }

  & > tbody {
    & > tr {
      & > td {
        font-size: ${SIZES.l};
      }

      &:nth-child(odd) {
        background: ${colors.ghostWhite};
      }



      :hover {
        background: ${colors.brightGrey};
        cursor: pointer;
      }
    }
  }
`

export const roundButtonStyles = css`
  position: fixed;
  bottom: 5%;
  right: 5%;
  font-size: ${SIZES.header3} !important;
  border-radius: 50% !important;
  padding: ${SIZES.xxxxl} ${SIZES.xxxxl} !important;

`

export const addScheduleDialogStyles = css` 
  background: ${colors.white};
  border-radius: ${SIZES.xxl};
    width: 400px;
`

export const addScheduleStyles = css`
  padding: ${SIZES.xl} ${SIZES.m};
  font-family: ${FAMILIES.dmsans};
  

  & > h2 {
    font-size: ${SIZES.h};
    margin: 0;
    font-family: ${FAMILIES.bebasNeue};
    text-align: center;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: ${SIZES.m};

    & > * {
      width: 100%;
    }

    & > div:last-child {
      margin-top: ${SIZES.m};
      display: flex;
      justify-content: center;
      flex-direction: row;
      gap: ${SIZES.m};

      & > button {
        min-width: 175px;
      }
    }
  }
`

export const searchStyles = css`
  width: 100%;
`

export const paginationStyles = css`
  display: flex;
  flex-direction: row;
  gap: ${SIZES.m};
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    flex-direction: row;
    gap: ${SIZES.m};
    align-items: center;
  }
`

export const paginationButtonStyles = (isSelected: boolean) => {
  const defaultBg =
    `linear-gradient(90deg, ${colors.midnightGreen} 0%, ${colors.blueSapphire} 100%)`

  return css`
    background: ${isSelected ? defaultBg : colors.transparent};
    border: ${isSelected ? 'none' : `1px solid ${colors.midnightGreen}`};
    color: ${isSelected ? colors.white : colors.midnightGreen};

    :hover, :focus, :active {
      color: ${colors.white};
    }
  `
}

export const sortButtonsStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.xxsi};
  position: absolute;
  right: 0;
  top: 5px;
  z-index: 10;

  :hover, :focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;

    :hover, :focus {
    outline: none;
  }
  }

  svg{
    height: ${SIZES.xs};
    width: ${SIZES.xs};
  }

  & > button:first-child > svg {
    transform: rotate(90deg);
  }

  & > button:last-child > svg {
    transform: rotate(-90deg);
  }
`