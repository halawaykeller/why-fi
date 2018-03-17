import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { LineChart, Line, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Pie, PieChart } from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const data01 = [
      {name: 'Page A', value: 2400, amt: 2400},
      {name: 'Page B', value: 1398, amt: 2210},
      {name: 'Page C', value: 9800, amt: 2290},
      {name: 'Page D', value: 3908, amt: 2000},
      {name: 'Page E', value: 4800, amt: 2181},
      {name: 'Page F', value: 3800, amt: 2500},
      {name: 'Page G', value: 4300, amt: 2100},
];

const data02 = [
      {name: 'Page A', value: 4000, amt: 2400},
      {name: 'Page B', value: 3000, amt: 2210},
      {name: 'Page C', value: 2000, amt: 2290},
      {name: 'Page D', value: 2780, amt: 2000},
      {name: 'Page E', value: 1890, amt: 2181},
      {name: 'Page F', value: 2390, amt: 2500},
      {name: 'Page G', value: 3490, amt: 2100},
];

// TODO : Need to pass appropriate, relvant data to these charts - pick a chart, any chart 
// these are just example charts from http://recharts.org/#/en-US/examples
// feel free to choose different charts if needed 

const HookGraph = (props) => (

    <React.Fragment>
        <LineChart width={400} height={400} data={data}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
        
        <PieChart width={730} height={250}>
          <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
          <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
    </React.Fragment>


)

export default HookGraph


