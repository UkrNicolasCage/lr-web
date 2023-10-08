import { css } from '@emotion/css';

import { FAMILIES, SIZES, WEIGHTS, colors } from '../../../shared/styles';

export const mainContainerStyles = css`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: ${SIZES.h};
  font-family: ${FAMILIES.dmsans};
  height: 100vh;


  & > section:first-child {
    height: 100%;
    padding: ${SIZES.h} ${SIZES.xxl} ${SIZES.huge};
    display: flex;
    flex-direction: column;
    gap: ${SIZES.h};
    border-right: 1px solid ${colors.lightSilver};
    text-align: center;
    justify-content: space-between;

    p {
      font-size: ${SIZES.l};
      text-align: left;

      & > span {
        font-weight: ${WEIGHTS.medium};
        background: ${colors.honeydew};
      }
    }

     button {
      display: flex;
      width: 100%;
    }
  }

  & > section:last-child {
    padding: ${SIZES.huge};
    
  }
`