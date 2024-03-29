import ColumnPlot from '@Components/Graphs/ColumnPlot';
import RaduilPiePlot from '@Components/Graphs/RaduilPiePlot';
import React from 'react'
import { BiBed } from 'react-icons/bi';
import Grids from './Grids';
interface GridStateProps {
  Value: number;
  Title: string;
  Icon: React.ReactNode;
}
const StateInfo: GridStateProps[] = [
  {
    Value: 555,
    Title: 'Patients',
    Icon: <BiBed />
  },
  {
    Value: 2164,
    Title: 'Avg. costs',
    Icon: <BiBed />
  },
  {
    Value: 112,
    Title: 'Staff Members',
    Icon: <BiBed />
  },
  {
    Value: 555,
    Title: 'Vehicles',
    Icon: <BiBed />
  },
  {
    Value: 220,
    Title: 'Appointment',
    Icon: <BiBed />
  },
  {
    Value: 10,
    Title: 'Operations',
    Icon: <BiBed />
  },
]
export default function page() {
  function GridState() {
    return (
      <div className='grid grid-cols-2 lg:grid-cols-4 xxl:grid-cols-6 gap-5'>
        {StateInfo.map((item, index) => (
          <div key={index} className='w-full h-32 flex items-center gap-5 p-5 border rounded-md shadow dark:shadow-slate-500'>
            <div className='bg-blue-100 text-blue-500 rounded-md w-16 h-16 flex justify-center items-center'>{item.Icon}</div>
            <div>
              <p className='text-lg font-medium'>{item.Value}</p>
              <p className='text-gray-500'>{item.Title}</p>
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <>
      <p className='text-lg font-semibold my-3'>Dashboard</p>
      <div className='space-y-5'>
        <GridState />
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5'>
          <div className='border rounded-md shadow col-span-2 pb-4 max-h-[33rem]'>
            <div className='flex items-center justify-between p-5'>
              <p className='font-medium'>Patients visit by Gender</p>
              {/* <div className='flex items-center gap-3 border rounded-md p-2 px-3'>
                2020 <BiChevronDown size={20} />
              </div> */}
            </div>
            <div className='p-5'>
              <ColumnPlot />
            </div>
          </div>
          <div className='border rounded-md shadow col-span-1 pb-4 max-h-[30rem]'>
            <div className='flex items-center justify-between p-5'>
              <p className='font-medium text-lg'>Doctors visit by Specialization</p>
              {/* <div className='flex items-center gap-3 border rounded-md p-2 px-3'>
                2020 <BiChevronDown size={20} />
              </div> */}
            </div>
            <RaduilPiePlot />
          </div>
        </div>
        <Grids />
      </div>
    </>
  )
}
