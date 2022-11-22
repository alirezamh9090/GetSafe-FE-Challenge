import React, { useState } from 'react'
import AgeStep from 'src/containers/Steps/AgeStep'
import EmailStep from 'src/containers/Steps/EmailStep'
import SummaryStep from 'src/containers/Steps/SummaryStep'
import {
  PRODUCT_IDS_TO_NAMES,
  ProductIds,
} from 'src/containers/GenericFlow/index.constants'

interface GenericProps {
  productId: ProductIds
  title?: string
  stepsDetail: { step: STEPS; initialData: StepDataType }[]
}

export enum STEPS {
  EMAIL = 'email',
  AGE = 'age',
  FULLNAME = 'fullname',
  SUMMARY = 'summary',
}

export type StepDataType = Omit<
  Partial<Record<STEPS, string | number>>,
  'summary'
>

const GenericFlow: React.FC<GenericProps> = (props) => {
  const [currentStep, setStep] = useState<STEPS>(props.stepsDetail[0].step)
  const [collectedData, updateData] = useState<StepDataType>({
    email: '',
    age: 0,
    fullname: '',
  })
  const getStepCallback = (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    const nextStepIndex =
      props.stepsDetail.findIndex(
        (stepsDetail) => stepsDetail.step === currentStep
      ) + 1
    const nextStep = props.stepsDetail[nextStepIndex]?.step || STEPS.SUMMARY
    setStep(nextStep)
  }

  return (
    <>
      <h4>
        {`Buying ${PRODUCT_IDS_TO_NAMES[props.productId]}` || props.title}
      </h4>
      {currentStep === STEPS.EMAIL && <EmailStep cb={getStepCallback} />}
      {currentStep === STEPS.AGE && <AgeStep cb={getStepCallback} />}
      {currentStep === STEPS.SUMMARY && (
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}

export default GenericFlow
