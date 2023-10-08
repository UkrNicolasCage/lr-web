import * as React from 'react';
import { Dialog as BlueprintDialog } from '@blueprintjs/core';

import { dialogStyles } from './dialog.styles';
import { classBuilder } from '../../utils';

interface IDialogProps {
    open: boolean;
    onClose: () => void;
    content: React.ReactNode;
		classes?: string
		portalContainer?: HTMLElement,
		usePortal?: boolean,
		backdropClassName?: string
		closeOnBackdropClick?: boolean
		closeOnEscapeKeyDown?: boolean
}

export const Dialog: React.FunctionComponent<IDialogProps> =
({
	open, onClose, content,
	classes, portalContainer, usePortal = true,
	backdropClassName,
	closeOnBackdropClick,
	closeOnEscapeKeyDown
}) => {
	return (
		<BlueprintDialog isOpen={open} onClose={onClose}
		className={classBuilder([dialogStyles, classes])}
		usePortal={usePortal}
		portalContainer={portalContainer}
		backdropClassName={backdropClassName}
		canOutsideClickClose={closeOnBackdropClick}
		canEscapeKeyClose={closeOnEscapeKeyDown}
				>
			{content}
		</BlueprintDialog>
	);
};
