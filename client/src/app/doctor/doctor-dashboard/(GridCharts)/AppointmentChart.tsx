import AreaPlot from '@Components/Graphs/AreaPlot';
import React from 'react';

const AppointmentChart: React.FC = () => {
    const data = [
        {
            timePeriod: '2006 Q1',
            value: 1.5,
        },
        {
            timePeriod: '2006 Q2',
            value: 2.05,
        },
        {
            timePeriod: '2006 Q3',
            value: 3.08,
        },
        {
            timePeriod: '2006 Q4',
            value: 2.08,
        },
        {
            timePeriod: '2006 Q5',
            value: 3.08,
        },
        {
            timePeriod: '2006 Q9',
            value: 2.17,
        },
        {
            timePeriod: '2006 Q10',
            value: 3.26,
        },
    ];
    // const gradientColors = ['#00C2FF', '#0089FF'];

    return (
        <div className='shadow-[.2px_.2px_3px_1px] dark:shadow-slate-700 h-52 shadow-gray-100 rounded-lg overflow-hidden'>
            <div className='flex justify-between p-5'>
                <div className='flex gap-2'>
                    <p className='font-medium'>Appointment</p>
                    <p className='text-blue-500 bg-blue-100 rounded-full border border-blue-200 text-sm px-3 font-medium'>80bpm</p>
                </div>
                <div className='text-blue-500 text-sm font-medium'>220+ Week</div>
            </div>
            <div className='w-full h-full'>
                <AreaPlot color='blue' data={data} />
            </div>
        </div>
    );
};

export default AppointmentChart;