import React, { useState } from 'react'
import AgeStep from 'src/containers/Steps/AgeStep'
import EmailStep from 'src/containers/Steps/EmailStep'
import SummaryStep from 'src/containers/Steps/SummaryStep'

interface BuyflowProps {
  productId: ProductIds
}

export enum ProductIds {
  devIns = 'dev_ins',
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: 'Developer Insurance',
}

export enum BUY_STEPS {
  EMAIL = 'email',
  AGE = 'age',
  SUMMARY = 'summary',
}

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState<BUY_STEPS>(BUY_STEPS.EMAIL)
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: BUY_STEPS) => (
    field: string,
    value: any
  ) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[props.productId]}</h4>
      {currentStep === BUY_STEPS.EMAIL && (
        <EmailStep cb={getStepCallback(BUY_STEPS.AGE)} />
      )}
      {currentStep === BUY_STEPS.AGE && (
        <AgeStep cb={getStepCallback(BUY_STEPS.SUMMARY)} />
      )}
      {currentStep === BUY_STEPS.SUMMARY && (
        <SummaryStep collectedData={collectedData} />
      )}
    </>
  )
}

export default Buyflow
