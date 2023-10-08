import { css } from '@emotion/css';

import { FAMILIES, SIZES } from '../../shared/styles';

export const signInStyles = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > h1 {
    font-family: ${FAMILIES.bebasNeue};
    font-size: ${SIZES.header3};
    letter-spacing: 2px;
  }

  & > form {
    gap: ${SIZES.xxl};

    & > button {
      margin-top: ${SIZES.xl};
      width: 100%;
    }
  }

`