import { css } from '@emotion/css';

import { FAMILIES, SIZES, WEIGHTS, colors } from '../../shared/styles';

export const scheduleStyles = css`
  font-family: ${FAMILIES.dmsans};
  display: flex;
  flex-direction: column;
  gap: ${SIZES.xs};
  width: 400px;

  & > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${SIZES.xxse};
    color: ${colors.darkJungleGreen};
    text-decoration: none;
    font-size: ${SIZES.xxl};
    font-weight: ${WEIGHTS.medium};
    :hover {
      text-decoration: none;
      font-weight: ${WEIGHTS.semiBold};
      outline: none;
    }
  }

  & > div {
    width: max-content;
    display: flex;
    flex-direction: row;
    gap: ${SIZES.h};
    align-items: center;
  }

  & > form {
    display: flex;
    flex-direction: column;
    gap: ${SIZES.m};
    justify-content: flex-start;

    & > * {
      width: 100%;

  
    }

        & > div:last-child {
        display: flex;
        flex-direction: row;
        gap: ${SIZES.m};
        align-items: center;
        justify-content: flex-end;

        & > button:first-child{
          background: ${colors.transparent};
          color: ${colors.darkJungleGreen};
        }
      }
  }

`

export const deleteButtonStyles = css`
  background: ${colors.errorText} !important;
  border: 1px solid ${colors.errorText} !important;

  width: 200px !important;

  &:focus {
        background: ${colors.errorText} !important;;
        box-shadow:
            0px 0px 0px 4px ${colors.lightRed} !important;
        outline: none;
    }
`