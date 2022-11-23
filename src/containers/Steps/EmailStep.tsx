import React from 'react'
import SimpleForm from 'src/components/SimpleForm'

interface EmailStepProps {
  cb: (field: string, value: string) => void
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.cb('email', e.currentTarget.email.value)
  }

  return (
    <SimpleForm
      required
      type="email"
      name="email"
      id="email"
      onSubmit={handleSubmission}
    />
  )
}

export default EmailStep
