import React from "react";
import { Card } from "@mui/material";
import Chart from "./Chart";
import Header from "./Header";

const Dashboard = () => (
  <>
    <Card>
      <Header />
      <Chart />
    </Card>
  </>
);

export default Dashboard;
