import { injectGlobal } from '@emotion/css'

import { colors } from './colors copy'

injectGlobal`
	html, body {
		height: 100%;
		margin:0;
		padding:0;
		font-family: 'Roboto', sans-serif;
	}

	body {
		line-height: 1.5;
		-webkit-font-smoothing: antialiased;
		background: ${colors.white};
	}

	:root {
		width: 100%;
		isolation: isolate;
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
	
	*:active, *:focus {
		outline: none;
	}

	* {
		margin: 0;
	}

	img, picture, video, canvas, svg {
		display: block;
		max-width: 100%;
		flex-shrink: 0;
	}

	p, h1, h2, h3, h4, h5, h6 {
		overflow-wrap: break-word;
		margin: 0;
		padding: 0;
	}
	

	button {
		cursor: pointer;
	}

	.hidden-el {
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}

	.bp4-overlay {
		z-index: 11111111111 !important;
	}
	

	  .bp4-dialog-container{
    display: flex !important;
    align-items: flex-start !important; /* Align to the top */
  }
`
