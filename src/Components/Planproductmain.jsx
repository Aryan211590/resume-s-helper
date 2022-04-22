import React from 'react'
import Customers from './Customers'
import Plan from './Ourplans/Plan'
import PlanFAQs from './Ourplans/PlanFAQs'
import { Planheader } from './Ourplans/Planheader'
import { PlanPremium } from './Ourplans/PlanPremium '
import { PlanSuccessstories } from './Ourplans/PlanSuccessstories'
const Planproductmain = () => {
  return (
    <>
      <Planheader />
      <Plan />
      <PlanFAQs />
      <PlanPremium />
      <PlanSuccessstories />
      <Customers />
    </>
  )
}

export default Planproductmain