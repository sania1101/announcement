import React, {useCallback,useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { AnnouncementDetail } from '../components/AnnoncementDetail'
import { useHttp } from '../hooks/http.hook'
import { AnnouncementSimilar } from '../components/AnnouncementІSimilar'


export const DetailPage = () =>{
    const [Announcement ,setAnnouncement] = useState([])
    const {request} = useHttp()
    const announcementId = useParams().id

    const fetchAnnouncement = useCallback(async()=>{
        try{
            const fetched = await request(`/announcement/read/${announcementId}` , 'GET', null)

            setAnnouncement(fetched.data)
        }catch(e){
            console.log(e)
        }
    },[request,announcementId])

    useEffect(()=>{
        fetchAnnouncement()
    },[fetchAnnouncement])
    
    return(
        <div>
            <AnnouncementDetail Announcement={Announcement}></AnnouncementDetail>
            <AnnouncementSimilar></AnnouncementSimilar>
        </div>
    )
}