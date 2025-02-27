"use client"
import React, { useOptimistic } from 'react'
import ReservationCard from './ReservationCard'
import { deleteReservation } from '../_lib/actions';


function ReservationList({bookings}) {

    //The useOptimistic hook will take in the actual state and the then the callBack that crate the optimistic, gives us the state anf the setter funcion
   const [optimisticBookings, optimisticDelete] = useOptimistic(bookings, 
    (curBookings, bookingId)=>{
        return curBookings.filter(booking=>booking.id !==bookingId)
    })


    async function handleDelete (bookingId){
    optimisticDelete(bookingId)
    await deleteReservation(bookingId)
    }
    return (
        <ul className="space-y-6">
            {optimisticBookings.map((booking) => (
                <ReservationCard booking={booking} key={booking.id} onDelete={handleDelete}/>
            ))}
            </ul>
    )
}

export default ReservationList