import React from 'react'

interface NameStepProps {
  cb: (field: string, value: { label: string; value: string }[]) => void
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.cb('fullName', [
      { label: 'firstName', value: e.currentTarget.firstName.value },
      { label: 'lastName', value: e.currentTarget.lastName.value },
    ])
  }

  return (
    <form onSubmit={handleSubmission}>
      <label htmlFor="firstName">
        Name:
        <input type="text" required name="firstName" id="firstName" />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input type="text" required name="lastName" id="lastName" />
      </label>
      <button type="submit">Next</button>
    </form>
  )
}

export default NameStep
