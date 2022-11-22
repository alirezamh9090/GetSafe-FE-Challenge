import React from 'react'
import GenericFlow, { STEPS } from 'src/containers/GenericFlow'
import { ProductIds } from 'src/containers/GenericFlow/index.constants'

interface BuyflowProps {
  productId: ProductIds
}

const buyFlowSteps = [
  { step: STEPS.EMAIL, initialData: { email: '' } },
  { step: STEPS.AGE, initialData: { age: 0 } },
]

const Buyflow: React.FC<BuyflowProps> = (props) => {
  return <GenericFlow productId={props.productId} stepsDetail={buyFlowSteps} />
}

export default Buyflow
