import { css } from '@emotion/css';

import backgroundImg from '../../../assets/images/auth-bg.png'

import { FAMILIES, MEDIA, SIZES } from '../../../shared/styles';

export const authContainerStyles = css`
  height: 100vh;

  display: grid;

  grid-template-columns: 2fr 1fr;

  & > div:nth-child(1){
        background-image: linear-gradient(90deg, rgba(21, 82, 91, 0.8) 0%, rgba(30, 108, 120, 0.8) 100%),
        url(${backgroundImg});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      @media screen and (max-width: ${MEDIA.tabletL}) {
          display: none;
    }
  }

  & > div:nth-child(2){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${SIZES.huge};
    font-family: ${FAMILIES.dmsans};
    font-size: ${SIZES.l};
  }

`