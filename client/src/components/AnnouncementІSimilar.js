import React, {useCallback, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import {AnnouncementCard} from '../components/AnnouncementCard'

export const AnnouncementSimilar = () =>{
    const [Announcements ,setAnnouncements] = useState([])
    const {request} = useHttp()
    const announcementId = useParams().id
    const fetchAnnouncements = useCallback(async()=>{
        try{
            const fetched = await request(`/announcement/read/top/${announcementId}` , 'GET', null)

            setAnnouncements(fetched.data)
        }catch(e){
            console.log(e)
        }
    },[request, announcementId])

    useEffect(()=>{
        fetchAnnouncements()
    },[fetchAnnouncements])

    if(Announcements.length>0){
        return(
            <div>
                <p>Similar Announcement</p>
                {
                    Announcements.map( Announcement => {
                        return(
                            <AnnouncementCard Announcement = {Announcement} key = {Announcement._id} />
                        )
                    })
                }
            </div>
        )
    }else{
        return(<div><p>Similar announcements don`t find</p></div>)
    }
}