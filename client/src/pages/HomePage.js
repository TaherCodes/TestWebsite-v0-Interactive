import React from "react";
import indiaImage from "../assets/Indian_General_Election_2019.png";
import PoliticalPartiesTable from "../components/PoliticalPartiesTable";
import PartyWiseSeatsTable from "../components/PartyWiseSeatsTable";
import PerformanceNationalPartiesTable from "../components/PerformanceNationalPartiesTable";
import PerformanceStatePartiesTable from "../components/PerformanceStatePartiesTable";
import "../styles/index.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-container">
        <div className="home-header">
          <h2>General Election 2019 India Map</h2>
        </div>
        <div className="india-map-container">
          <img src={indiaImage} alt="India Map" className="india-map" />
        </div>
      </div>
      <div className="home-table-container">
        <PoliticalPartiesTable />
        <PartyWiseSeatsTable />
        <PerformanceNationalPartiesTable />
        <PerformanceStatePartiesTable />
      </div>
    </div>
  );
};

export default HomePage;
