import React from 'react'
import { EventCard } from './EventCard'

export const EventProfile = () => {
    return (
        <div className='mt-5 px-5 flex flex-wrap gap-5'>
            {[0, 1, 2, 3].map((item, index) => (
                <EventCard key={item} />
            ))}
        </div>
    )
}
