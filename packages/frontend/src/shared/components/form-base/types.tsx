import React, { HTMLAttributes } from 'react';

export interface IChildProps extends HTMLAttributes<HTMLElement> {
  handleReset: () => void;
}

export interface IFormProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
	id?: string;
  validationSchema?: any;
  initialValues?: any;
}