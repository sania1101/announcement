import React from 'react'
import {Link} from 'react-router-dom'

export const AnnouncementDetail = ({Announcement}) =>{
    const announcementDate = new Date(Announcement.CreateDate)
    
    return(
        <div className="row">
                <div className="col s12">
                    <div className="card blue darken-1">
                        <div className="card-content white-text">
                            <h3 className="card-title">{Announcement.Title}</h3>
                            <p>{Announcement.Description}</p>
                            <p>{`${announcementDate.getFullYear()}-${announcementDate.getMonth()+1}-${announcementDate.getDate()}  ${announcementDate.getHours()}:${announcementDate.getMinutes()}`}</p>
                        </div>
                        <div className="card-action">
                        <Link to = {`/edit/${Announcement._id}`}><p className="waves-effect waves-light btn-small" >Edit</p></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}