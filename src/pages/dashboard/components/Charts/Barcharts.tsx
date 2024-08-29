import React, {useEffect, useState} from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axiosInstance from "@/pages/api/axiosInstance";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const Barcharts = () => {
  useEffect(() => {
    fetchChartData()
  })

  
const fetchChartData = async () => {
  try {
    const resonse = await axiosInstance.get(
      "/api/admin/users/chart?time=all_time&year=&month=&user_type=all"
    );
    console.log('bar',resonse.data);
  } catch (err) {
    console.log(err);
  }
};

  const data = {
    labels: [
      "Apr",
      "May",
      "June",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
    ],
    datasets: [
      {
        label: "Verified users",
        data: [3, 6, 9, 3.69, 4, 6, 2, 5, 9, 1, 9, 3],
        borderColor: "black",
        backgroundColor: "#ED459A",
        borderWidth: 1,
      },
      {
        label: "Pending users",
        data: [2, 3, 4, 1.69, 2, 3, 1, 2, 4, 1, 5, 2],
        borderColor: "black",
        backgroundColor: "#9510C9",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          callback: function (value: any) {
            return value + "%";
          },
        },
        grid: {
          display: false,
        },
      },
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default Barcharts;
