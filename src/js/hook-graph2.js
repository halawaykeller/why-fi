import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import HookConent from './hook-content';
import { data, data01, data02, education_level, income } from '../data/graph-data'
import { CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart, Label, Legend } from 'recharts';

const HookGraph2 = (props) => (
    

    <React.Fragment>
        
        <h1>Internet Usage Based on Education Level</h1>
        <AreaChart width={600} height={400} data={education_level} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <Legend verticalAlign="top" height={36}/>
            <XAxis dataKey="name"/>
            <YAxis tick={false} type="number" label={{ value: 'Pertentage of internet adapotors', angle: -90 }}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area name='Less than highschool' type='monotone' dataKey='less_than_hs' stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area name='Some college' type='monotone' dataKey='some_college' stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area name='College plus' type='monotone' dataKey='college_plus' stackId="1" stroke='#ffc658' fill='#ffc658' />
        </AreaChart>
        <HookConent />
        
    </React.Fragment>


)

export default HookGraph2


