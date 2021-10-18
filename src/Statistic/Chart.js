import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
//import Title from "./Title";
import Typography from "@material-ui/core/Typography";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("Oct 1", 0),
  createData("Oct 2", 4),
  createData("Oct 3", 7),
  createData("Oct 4", 10),
  createData("Oct 5", 14),
  createData("Oct 6", 29),
  createData("Oct 7", 31),
  createData("Oct 8", 35),
  createData("Oct 9", 40),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Number of appointment booked
      </Typography>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Appointments
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
