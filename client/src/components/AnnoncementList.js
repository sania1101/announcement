import React from 'react'
import {AnnouncementCard} from '../components/AnnouncementCard'

export const AnnouncementList = ({Announcements}) =>{
    
    return(
        <div>
            {
                Announcements.map( Announcement => {
                    return(
                        <AnnouncementCard Announcement = {Announcement} key = {Announcement._id} />
                    )
                })
            }
        </div>
    )
}