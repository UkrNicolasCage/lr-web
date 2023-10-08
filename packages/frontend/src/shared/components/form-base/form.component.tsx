import React from 'react'
import { Form as FinalForm } from 'react-final-form'

import type { IChildProps, IFormProps } from './types';

import { formStyles } from './form.styles'

export const Form = ({
	children, onSubmit, id = 'form', validationSchema, initialValues
}: IFormProps,): React.ReactElement => {
	return (
		<FinalForm
			initialValues={initialValues}
			onSubmit={onSubmit}
			validate={validationSchema}
			render={({
				handleSubmit, form,
			},): React.ReactElement => {
				const childrenWithProps = React.Children.map(children, (child,) => {
					const handleReset = (): void => {
						form.reset()
					}

					if (React.isValidElement<IChildProps>(child,)) {
						return React.cloneElement<IChildProps>(child,
							{
								handleReset,
							},)
					}
					return child
				},)

				return (
					<form onSubmit={handleSubmit} className={formStyles} onReset={form.reset} id={id}>
						{childrenWithProps}
					</form>
				)
			}}
		/>
	)
}
