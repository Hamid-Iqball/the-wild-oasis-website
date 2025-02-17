import React from 'react'
import DateSelector from './DateSelector'
import ReservationForm from './ReservationForm'

function Reservation() {
  return (
    <div className=" grid grid-cols-2 gap-2 border p-2 border-primary-800 min-h-[400px] ">
        <DateSelector/>
        <ReservationForm/>
        </div>
  )
}

export default Reservation