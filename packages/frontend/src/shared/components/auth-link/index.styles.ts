import { css } from '@emotion/css';

import { FAMILIES, colors } from '../../../shared/styles';

export const authLinkStyles = css`
  color: ${colors.darkJungleGreen};
  font-family: ${FAMILIES.dmsans};
  text-decoration: underline;


  :active, :focus {
    outline: none;
  }

  :visited {
    color: ${colors.darkJungleGreen};
  }
`