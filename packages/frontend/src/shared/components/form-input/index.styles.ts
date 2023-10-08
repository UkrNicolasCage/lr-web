import { css } from '@emotion/css';

import { FAMILIES, SIZES, WEIGHTS, colors } from '../../../shared/styles';

export const inputStyles = (error: boolean) => {
  return css`
    display: flex;
    flex-direction: column;
    gap: ${SIZES.xxs};
    width: 100%;
    
    & > label {
      font-size: ${SIZES.xl};
    }

   & > input {
      width: 100%;
      display: flex;
      align-items: center;
      padding: ${SIZES.xs} ${SIZES.m};
      gap: ${SIZES.xxsb};

      background: ${colors.white};
      outline: 1px solid ${error ? colors.lightSalmonPink : colors.lightSilver};
      border: 1px solid ${colors.transparent};

      box-shadow: 0px 1px 2px ${colors.darkJungleGreenTransparent};
      border-radius: ${SIZES.xxsb};
      color: ${error ? colors.errorText : colors.darkJungleGreen};
      font-size: ${SIZES.l};
      font-family: ${FAMILIES.dmsans};
      font-weight: ${WEIGHTS.normal};

      &::placeholder {
          font-size: ${SIZES.l};
          color: ${colors.auroMetalSaurus};
      }

      &:focus {
          border: 1px solid ${error ? colors.lightSalmonPink : colors.seaSerpent};
          outline: none;
          box-shadow:
              0px 0px 0px 4px ${error ? colors.mistyRose : colors.water},
              0px 1px 2px 0px ${colors.darkJungleGreenTransparent};
      }

      &:disabled {
          background: ${colors.ghostWhite};
          box-shadow: 0px 1px 2px 0px ${colors.darkJungleGreenTransparent};
          color: ${colors.auroMetalSaurus};
      }
   }

   & > p[role="alert"] {
    color: ${colors.errorText};
   }
  `
}