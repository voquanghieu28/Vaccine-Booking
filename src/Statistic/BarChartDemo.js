import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    name: "Under 18",
    one: 4000,
    two: 2400,
  },
  {
    name: "18 - 30",
    one: 3000,
    two: 1398,
  },
  {
    name: "30 - 40",
    one: 2000,
    two: 9800,
  },
  {
    name: "40 - 50",
    one: 2780,
    two: 3908,
  },
  {
    name: "50 - 60",
    one: 1890,
    two: 4800,
  },
  {
    name: "60 -70",
    one: 2390,
    two: 3800,
  },
  {
    name: "70 - 80",
    one: 3490,
    two: 4300,
    amt: 2100,
  },
];

export default function BarChartDemo() {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Number of people vaccinated by age
      </Typography>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            name="One dose"
            dataKey="one"
            fill="#8884d8"
            background={{ fill: "#eee" }}
          />
          <Bar name="Two doses" dataKey="two" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
