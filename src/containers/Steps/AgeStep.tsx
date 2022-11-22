import React from 'react'
import SimpleForm from 'src/components/SimpleForm'

interface AgeStepProps {
  cb: (field: string, value: number) => void
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.cb('age', e.currentTarget.age.value)
  }

  return (
    <SimpleForm
      label={'Age: '}
      onSubmit={handleSubmission}
      defaultValue={0}
      type="number"
      name="age"
      id="age"
    />
  )
}

export default AgeStep
