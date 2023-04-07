import React from 'react'
import AppointmentChart from './(GridCharts)/AppointmentChart'
import CanceledChart from './(GridCharts)/CanceledChart'
import PatientsChart from './(GridCharts)/PatientsChart'
import UrgentChart from './(GridCharts)/UrgentChart'

export default function page() {
  return (
    <div className='container max-w-full'>
      <p className='text-xl lg:text-3xl font-bold text-gray-700 py-5 px-5 mt-16 lg:px-0'>Good morning, Dr Adam</p>
      <div className='grid grid-cols-1 xl:grid-cols-4 gap-5'>
        <AppointmentChart />
        <PatientsChart />
        <UrgentChart />
        <CanceledChart />
      </div>
    </div>
  )
}