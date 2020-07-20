import React, {useCallback, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'



export const DeletePage = () =>{
    const announcementId = useParams().id
    const history = useHistory()
    const {request} = useHttp()

    const deleteAnnouncement = useCallback(
        async () => {
            try{
                await request(`/announcement/delete/${announcementId}`,'DELETE', null)
                
                history.push('/announcements')
            }catch(e){
                console.log(e)
            }
        },
        
        [announcementId, request, history],
    )
 
    useEffect(() => {
        deleteAnnouncement()
    }, [deleteAnnouncement])


    return(
        <>
        Delete DeletePages
        </>
    )
}