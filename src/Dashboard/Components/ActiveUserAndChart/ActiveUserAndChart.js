import React from 'react';
import ActiveChart from './ActiveChart';


const couponCode = [
    {
        "couponName": "ANNIVERSARY70",
        "discount": "25%"
    },
    {
        "couponName": "AUTHORKOS",
        "discount": "41%"
    },
    {
        "couponName": "BESTRONG",
        "discount": "17%"
    },
    {
        "couponName": "FIVESTARS",
        "discount": "21%"
    },
    {
        "couponName": "ANNIVERSARY70",
        "discount": "25%"
    },
    {
        "couponName": "LATROP2",
        "discount": "33%"
    },
    {
        "couponName": "LUCKYDAY",
        "discount": "11%"
    },
    {
        "couponName": "NEWYEAR",
        "discount": "17%"
    },
]





const ActiveUserAndChart = () => {




    return (
        <div className='flex flex-col lg:flex-row  gap-10 py-10 w-full'>
            <div className='w-full lg:w-96 p-5 bg-gray-100'>
                <h1 className='py-2 text-sm text-gray-600'>Active Users</h1>
                <div className='bg-blue-300 text-center p-5'>
                    <h1 className='text-3xl text-blue-900'>148</h1>
                </div>
                <div className='py-2'>
                    <h1 className='text-sm py-2 text-gray-600'>Recent Coupon History</h1>
                    {
                        couponCode && couponCode.map(code => <div className=''>
                            <div className='flex items-center w-full justify-between p-1'>
                                <p className='text-xs py-1 text-gray-600'>{code?.couponName}</p>
                                <p className='text-xs text-gray-600'>{code?.discount}</p>
                            </div>
                            <hr />
                        </div>)
                    }
                    <hr />
                </div>
            </div>
            <div className='bg-gray-100 p-5  ' >
                <ActiveChart />
            </div>
        </div>
    );
};

export default ActiveUserAndChart;