import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  PRODUCT_IDS_DETAILS,
  ProductIds,
} from 'src/containers/GenericFlow/index.constants'

interface IFlowDescriptionProps {}
const FlowDescription: React.FC<IFlowDescriptionProps> = (props) => {
  const location = useLocation()
  const purchaseLink = location.pathname.split('purchase=')[1] as ProductIds

  const selectedProduct =
    PRODUCT_IDS_DETAILS[purchaseLink] || PRODUCT_IDS_DETAILS[ProductIds.devIns]
  return (
    <>
      <p>{selectedProduct.description}</p>
      <Link to={selectedProduct.startLink}>Get started!</Link>
    </>
  )
}

export default FlowDescription
