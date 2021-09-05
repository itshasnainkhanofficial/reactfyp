import React from "react";
import Tweetsdata from "./ChartData.json";
import { Chart } from "react-google-charts";

function ChartComp({ critarea, data , chartType }) {
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

export default ChartComp;
