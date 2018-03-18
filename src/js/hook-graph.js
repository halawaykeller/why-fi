import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styled from 'styled-components';
import HookConent from './hook-content';
import { data, data01, data02, education_level, income } from '../data/graph-data'
import { CartesianGrid, XAxis, YAxis, Tooltip, Area, AreaChart, Label, Legend } from 'recharts';

const HookGraph = (props) => (
    

    <React.Fragment>
        <h2>Internet Adoption Over Time</h2>
        <AreaChart width={600} height={400} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <Legend verticalAlign="top" height={36}/>
            <XAxis dataKey="name"/>
            <YAxis tick={false} type="number" label={{ value: 'Pertentage of internet adapotors', angle: -90 }}/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area name='Overall internet adoption' type='monotone' dataKey='internet_usage' stroke='#8884d8' fill='#8884d8' />
        </AreaChart>
        <HookConent />
        
        <h2>Internet Usage Based on Education Level</h2>
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
        
        <h2>Internet Usage Based on Average Household Income</h2>
        <AreaChart width={600} height={400} data={income} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
            <Legend verticalAlign="top" height={36}/>
            <XAxis dataKey="name" label={{value: 'Period from 2000-2018', position: 'bottom'}}/>
            <Label value='From 2000-2018' offset={0} position="insideBottom" />
            <YAxis tick={false} type="number" label={{ value: 'Pertentage of internet adapotors', angle: -90 }} />
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Area name='Less than 30,000' type='monotone' dataKey='low'      stackId="1" stroke='#8884d8' fill='#8884d8' />
            <Area name='30,000 - 50,000' type='monotone' dataKey='mid_low'  stackId="1" stroke='#82ca9d' fill='#82ca9d' />
            <Area name='50,000 - 75,000' type='monotone' dataKey='mid_high' stackId="1" stroke='#ffc658' fill='#ffc658' />
            <Area name='75,000+' type='monotone' dataKey='high'     stackId="1" stroke='#afeeee' fill='#afeeee' />
        </AreaChart>
        
        
    </React.Fragment>


)

export default HookGraph


