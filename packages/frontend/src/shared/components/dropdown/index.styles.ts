import { css } from '@emotion/css';

import { FAMILIES, SIZES, WEIGHTS, colors } from '../../styles';

export const selectStyles = (error: boolean) => {
return css`
  display: flex;
  flex-direction: column;
  gap: ${SIZES.xxs};
  width: 100%;
  
  & > label {
    font-size: ${SIZES.xl};
  }

  & > * {
    width: 100%;
    
  }

  & > p[role="alert"] {
    color: ${colors.errorText};
   }
`
}