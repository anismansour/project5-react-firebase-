import React, { Component } from "react";
import GamesList from "../gamesList/GamesList";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <GamesList />
      </div>
    );
  }
}

export default Dashboard;
