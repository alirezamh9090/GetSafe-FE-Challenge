import React from 'react'

interface ISimpleFormProps
  extends Omit<React.HTMLProps<HTMLInputElement>, 'onSubmit'> {
  id: string
  name: string
  label?: string
  className?: string
  inputClassName?: string
  buttonText?: string
  type?: 'number' | 'text' | 'email'
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const SimpleForm: React.FC<ISimpleFormProps> = (props) => {
  const {
    id,
    label,
    name,
    className,
    inputClassName,
    onSubmit,
    buttonText = 'Next',
    ...rest
  } = props
  return (
    <form className={className} onSubmit={onSubmit}>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={inputClassName}
        name={name || id}
        id={id || name}
        {...rest}
      />
      <button type="submit">{buttonText}</button>
    </form>
  )
}

export default SimpleForm
