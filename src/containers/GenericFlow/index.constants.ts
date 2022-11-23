export enum ProductIds {
  devIns = 'dev_ins',
  desIns = 'des_ins',
}

export const PRODUCT_IDS_DETAILS = {
  [ProductIds.devIns]: {
    title: 'Developer Insurance',
    description: "Welcome to Getsafe's Developer Insurance",
    purchaseLink: 'purchase=dev_ins',
    startLink: '/buy/insurance_dev',
  },
  [ProductIds.desIns]: {
    title: 'Designer Insurance',
    description: "Welcome to Getsafe's Designer Insurance",
    purchaseLink: 'purchase=des_ins',
    startLink: '/buy/insurance_des',
  },
}
