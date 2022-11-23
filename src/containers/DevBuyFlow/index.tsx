import React from 'react'
import GenericFlow, { STEPS } from 'src/containers/GenericFlow'
import { ProductIds } from 'src/containers/GenericFlow/index.constants'

interface DevBuyFlowProps {
  productId: ProductIds
}

const buyFlowSteps = [
  { step: STEPS.EMAIL, initialData: { email: '' } },
  { step: STEPS.AGE, initialData: { age: 0 } },
]

const DevBuyFlow: React.FC<DevBuyFlowProps> = (props) => {
  return <GenericFlow productId={props.productId} stepsDetail={buyFlowSteps} />
}

export default DevBuyFlow
