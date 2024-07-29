import React from "react";
import PieChart from "../common/Piechart";
import BarChart from "../common/Barchart";



const Content = () => {
  return (
    <div className="row my-4">
      <div className="col-lg-12 col-12">
        <div className="custom-block bg-white">
          <h5 className="mb-4">History</h5>
          <PieChart/>
        </div>
      </div> 
      <div className="col-lg-12 col-12"> 
        <div className="custom-block bg-white">
        <BarChart/>
        </div>
      </div>
    </div>
  );
};

export default Content;
