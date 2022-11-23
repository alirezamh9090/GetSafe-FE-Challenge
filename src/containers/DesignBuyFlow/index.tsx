import React from 'react'
import GenericFlow, { STEPS } from 'src/containers/GenericFlow'
import { ProductIds } from 'src/containers/GenericFlow/index.constants'

interface DesignBuyFlowProps {
  productId: ProductIds
}

const designFlowSteps = [
  { step: STEPS.EMAIL, initialData: { email: '' } },
  { step: STEPS.AGE, initialData: { age: 0 } },
  { step: STEPS.FULLNAME, initialData: { firstName: '', lastName: '' } },
]

const DesignBuyFlow: React.FC<DesignBuyFlowProps> = (props) => {
  return (
    <GenericFlow productId={props.productId} stepsDetail={designFlowSteps} />
  )
}

export default DesignBuyFlow
