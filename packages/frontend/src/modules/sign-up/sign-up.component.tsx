import React from 'react'
import { Field } from 'react-final-form'

import { AuthLink, Form, FormInput } from '../../shared/components'
import { Button } from '../../shared/components'
import { validateFormValues } from '../../shared/utils'
import { signUpSchema } from '../../shared/validation'
import { useSignUp } from '../../shared/hooks'
import { RouterKeys } from '../../router/keys'
import { FIELDS_DATA } from './consts'

import { signUpStyles } from './index.styles'

export const SignUp: React.FC = () => {
  const validate = validateFormValues(signUpSchema)

  const {disabled, submitHandler} = useSignUp()

  return (
    <div className={signUpStyles}>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler} validationSchema={validate}>
        {FIELDS_DATA.map(({label, name, placeholder, type}, i) => {
          return <Field name={name} key={i}>
            {({ input, meta }): React.JSX.Element => {
              return (
                <FormInput
                  {...input}
                  label={label}
                  placeholder={placeholder}
                  type={type}
                  meta={meta}
                />
              );
            }}
          </Field>
        })}
        <Button text='Sign Up' type='submit' disabled={disabled}/>
        <AuthLink to={`/${RouterKeys.SIGN_IN}`} text='Are you already registered? Sign in!' />

      </Form>
    </div>
  )
}
