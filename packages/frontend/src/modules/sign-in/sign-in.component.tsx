import React from 'react'
import { Field } from 'react-final-form'

import { AuthLink, Form, FormInput } from '../../shared/components'
import { Button } from '../../shared/components'
import { RouterKeys } from '../../router/keys'
import { validateFormValues } from '../../shared/utils'
import { signInSchema } from '../../shared/validation'
import { FIELDS_DATA } from './consts'
import { useSignIn } from '../../shared/hooks'

import { signInStyles } from './index.styles'

export const SignIn: React.FC = () => {
  const validate = validateFormValues(signInSchema)

  const {disabled, submitHandler} = useSignIn()

  return (
    <div className={signInStyles}>
      <h1>Sign In</h1>
      <Form onSubmit={submitHandler} validationSchema={validate}>
        {FIELDS_DATA.map(({label, name, placeholder, type}, i) => {
          return <Field name={name} key={name}>
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
        <Button text='Sign In' type='submit' disabled={disabled}/>
        <AuthLink to={`/${RouterKeys.SIGN_UP}`} text='Are you new here? Sign up!' />
      </Form>
    </div>
  )
}
