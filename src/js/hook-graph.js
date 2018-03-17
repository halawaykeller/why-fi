import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { data, data01, data02, education_level } from '../data/graph-data'
import { LineChart, Line, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Pie, PieChart, Area, AreaChart } from 'recharts';

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
        
        <AreaChart width={600} height={400} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='internet_usage' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
        
        <AreaChart width={600} height={400} data={education_level} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area type='monotone' dataKey='less_than_hs' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area type='monotone' dataKey='some_college' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area type='monotone' dataKey='college_plus' stackId="1" stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
    </React.Fragment>


)

export default HookGraph


