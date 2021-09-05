import React from "react";
import ChartComp from "./ChartComp";

function Home() {

  return (
    <div>
      <div className="PieChartGroup">
        <h1>Sentiment with respect to cities</h1>
        <h2>Islamabad Sentiment</h2>
        <ChartComp critarea="cities_sentiments_count" data="Islamabad" chartType="PieChart"/>
        <hr />
        <h2 >Karachi Sentiment</h2>
        <ChartComp critarea="cities_sentiments_count" data="Karachi" chartType="PieChart"/>
        <hr />
        <h2 >Lahore Sentiment</h2>
        <ChartComp critarea="cities_sentiments_count" data="Lahore" chartType="PieChart"/>
        <hr />
        <h2 >Peshawar Sentiment</h2>
        <ChartComp critarea="cities_sentiments_count" data="Peshawar" chartType="PieChart"/>
        <hr />
        <h2 >Quetta Sentiment</h2>
        <ChartComp critarea="cities_sentiments_count" data="Quetta" chartType="PieChart"/>
        <hr />
       </div>




      <div className="LineChart1">
        <h1>Sentiments over time period</h1>
        <h2>Islamabad Sentiment</h2>
        <ChartComp critarea="cities_sentiments_over_time_period" data="Islamabad" chartType="LineChart"/>
        <hr />
        <h2 >Karachi Sentiment</h2>
        <ChartComp critarea="cities_sentiments_over_time_period" data="Karachi" chartType="LineChart"/>
        <hr />
        <h2 >Lahore Sentiment</h2>
        <ChartComp critarea="cities_sentiments_over_time_period" data="Lahore" chartType="LineChart"/>
        <hr />
        <h2 >Peshawar Sentiment</h2>
        <ChartComp critarea="cities_sentiments_over_time_period" data="Peshawar" chartType="LineChart"/>
        <hr />
        <h2 >Quetta Sentiment</h2>
        <ChartComp critarea="cities_sentiments_over_time_period" data="Quetta" chartType="LineChart"/>
        <hr />
       </div>


      <div className="LineChart2">
        <h1>Sentiments over time period of all citie</h1>
        <h2>Positive Sentiment</h2>
        <ChartComp critarea="sentiments_by_city_over_time_period" data="Positive" chartType="LineChart"/>
        <hr />
        <h2 >Negative Sentiment</h2>
        <ChartComp critarea="sentiments_by_city_over_time_period" data="Negative" chartType="LineChart"/>
        <hr />
        <h2 >Neutral Sentiment</h2>
        <ChartComp critarea="sentiments_by_city_over_time_period" data="Neutral" chartType="LineChart"/>
        <hr />
        <h2 >Extremely Positive Sentiment</h2>
        <ChartComp critarea="sentiments_by_city_over_time_period" data="Extremely Positive" chartType="LineChart"/>
        <hr />
        <h2 >Extremely Negative Sentiment</h2>
        <ChartComp critarea="sentiments_by_city_over_time_period" data="Extremely Negative" chartType="LineChart"/>
        <hr />
       </div>

      </div>
    
  );
}

export default Home;
