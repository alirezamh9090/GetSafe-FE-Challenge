import React from 'react'
import { Link } from 'react-router-dom'
import { StepDataType } from 'src/containers/GenericFlow'

interface SummaryStepProps {
  collectedData: StepDataType
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      <div>Email: {props.collectedData.email}</div>
      <div>Age: {props.collectedData.age}</div>
      <div>
        <Link to="/purchased=dev_ins">Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
