import React from "react";
import Tweetsdata from "./NewChartData.json";
import { Chart } from "react-google-charts";

function NewChartComp({ critarea, data , chartType }) {
  // console.log(city);
  // console.log(data.cities_sentiments_count)
  
  return (
    <>
      <Chart
        height={"500px"}
        width={"100%"}
        chartType={chartType}
        loader={<div>Loading Chart</div>}
        data={[
          Tweetsdata[critarea].headers,
          ...Tweetsdata[critarea][data]
        ]}
        options={{
          legend: { position: 'top', alignment: 'center' },
          chartArea: { width: "80%" },
        }}
        legendToggle
      />
    </>
  );
}

export default NewChartComp;
