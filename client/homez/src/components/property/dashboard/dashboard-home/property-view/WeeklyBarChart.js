"use client";
import React from "react";
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

const WeeklyBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={500}
        height={300}
        data={data?.data?.views?.viewsByOffer || []}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeLeft="transparent" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend />
        <Bar dataKey="views" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WeeklyBarChart;
