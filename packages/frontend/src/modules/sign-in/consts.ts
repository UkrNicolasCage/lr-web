export const FIELDS_DATA = Object([
  {
    name: 'email',
    label: 'Email',
    type: 'text',
    placeholder: 'Enter your email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  }
]) as Array<{
  name: string;
  label: string;
  type: 'email' | 'password' | 'text';
  placeholder: string;
}>;