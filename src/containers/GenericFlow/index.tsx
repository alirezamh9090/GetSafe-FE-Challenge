import React, { useState } from 'react'
import AgeStep from 'src/containers/Steps/AgeStep'
import EmailStep from 'src/containers/Steps/EmailStep'
import SummaryStep from 'src/containers/Steps/SummaryStep'
import {
  PRODUCT_IDS_DETAILS,
  ProductIds,
} from 'src/containers/GenericFlow/index.constants'
import NameStep from 'src/containers/Steps/NameStep'

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
  const { stepsDetail, productId, title } = props
  const initialData = stepsDetail.reduce((acc, stepsDetail) => {
    return { ...acc, ...stepsDetail.initialData }
  }, {})
  const [currentStep, setStep] = useState<STEPS>(props.stepsDetail[0].step)
  const [collectedData, updateData] = useState<StepDataType>(initialData)
  const getStepCallback = (field: string, value: any) => {
    if (typeof value !== 'string' && typeof value !== 'number') {
      const formattedValue = value.reduce(
        (acc: Record<string, string>, val: Record<string, string>) => ({
          ...acc,
          [val.label]: val.value,
        }),
        {}
      )
      updateData({ ...collectedData, ...formattedValue })
    } else {
      updateData({ ...collectedData, [field]: value })
    }
    const nextStepIndex =
      props.stepsDetail.findIndex(
        (stepsDetail) => stepsDetail.step === currentStep
      ) + 1
    const nextStep = props.stepsDetail[nextStepIndex]?.step || STEPS.SUMMARY
    setStep(nextStep)
  }

  return (
    <>
      <h4>{`Buying ${PRODUCT_IDS_DETAILS[productId].title}` || title}</h4>
      {currentStep === STEPS.EMAIL && <EmailStep cb={getStepCallback} />}
      {currentStep === STEPS.AGE && <AgeStep cb={getStepCallback} />}
      {currentStep === STEPS.FULLNAME && <NameStep cb={getStepCallback} />}
      {currentStep === STEPS.SUMMARY && (
        <SummaryStep
          collectedData={collectedData}
          purchaseLink={PRODUCT_IDS_DETAILS[productId].purchaseLink}
        />
      )}
    </>
  )
}

export default GenericFlow
