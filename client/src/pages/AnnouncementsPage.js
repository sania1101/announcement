import React, { useState , useCallback, useEffect} from 'react'
import { useHttp } from '../hooks/http.hook'
import {AnnouncementList} from "../components/AnnoncementList"

export const AnnouncementsPage = ()=>{
    const [Announcements, setAnnouncements] = useState([])
    const {request} = useHttp()
    const fetchAnnouncements = useCallback(async()=>{
        try{
            const fetched = await request('/announcement/read' , 'GET', null)
            
            setAnnouncements(JSON.parse(fetched.data))
        }catch(e){
            console.log(e)
        }
    },[request])

    useEffect(()=>{
        fetchAnnouncements()
    },[fetchAnnouncements])
    
    if(Announcements.length>0){
        return(
            <AnnouncementList Announcements = {Announcements} />
        )
    }else{
        return(<p>Announcements don`t find</p>)
    }
    
}
