import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Scatter,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";





const ActiveChart = () => {

    const data = [
        {
            name: 'Page A',
            uv: 4000,

        },
        {
            name: 'Page B',
            uv: 3000,

        },
        {
            name: 'Page C',
            uv: 2000,

        },
        {
            name: 'Page D',
            uv: 2780,

        },
        {
            name: 'Page E',
            uv: 1890,

        },
        {
            name: 'Page F',
            uv: 2390,

        },
        {
            name: 'Page G',
            uv: 3490,

        },
    ];



    return (
        <div className='w-full lg:w-[43vw]'>
            <p className='text-xs py-1 text-gray-600'>Income Statistics</p>
            <div>

                <ResponsiveContainer width="100%" height={500}>
                    <ComposedChart width={500} height={200} data={data} margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>

                        <CartesianGrid stroke="#CECED0" />
                        <XAxis scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />

                        <Area
                            type="monotone"
                            dataKey="total"
                            fill="#CECED0"
                            stroke="#CECED0"
                        />
                        <Bar dataKey="uv" barSize={20} fill="#ffc928" />
                        <Line type="monotone" stroke="#CECED0" />
                        <Scatter fill="red" />
                    </ComposedChart>
                </ResponsiveContainer>

            </div>
        </div>
    );
};

export default ActiveChart;