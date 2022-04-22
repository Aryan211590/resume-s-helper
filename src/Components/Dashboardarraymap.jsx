import React from "react";
import DashboardArray from "./DashboardArray";
import Dashboardarrayput from "./Dashboardarrayput";
const ncard = (val) => {

  return (
    <>
      <Dashboardarrayput Name={val.Name} lastName={val.lastName} />
    </>
  );
};

const Dashboardarraymap = () => {

  return (
  <>
  {DashboardArray.map(ncard)}
  </>
  );
};

export default Dashboardarraymap;
