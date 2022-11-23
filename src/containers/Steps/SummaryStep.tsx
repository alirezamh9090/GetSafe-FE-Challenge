import React from 'react'
import { Link } from 'react-router-dom'
import { StepDataType } from 'src/containers/GenericFlow'

interface SummaryStepProps {
  collectedData: StepDataType
  purchaseLink: string
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <>
      {Object.entries(props.collectedData).map(([key, data]) => (
        <div key={key}>{`${capitalizeFirstLetter(key)}: ${data}`}</div>
      ))}
      <div>
        <Link to={props.purchaseLink}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
