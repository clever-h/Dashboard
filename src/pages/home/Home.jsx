import "./home.scss";
import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";

const Home = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
              <div className="widgets">
                  <Widget type="user"/>
                  <Widget type="call"/>
                  <Widget type="bugreport"/>
                  <Widget type="bpm" />
              </div>
              <div className="charts">
                  <Featured/>
                  <Chart/>
              </div>
              <div className="listContainer">
                  <div className="listTitle">Lastest Transaction</div>
              </div>
            </div>
        </div>
    );
}

export default Home;