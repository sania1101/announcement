import React from 'react'
import {Link} from 'react-router-dom'

export const AnnouncementCard = ({Announcement}) =>{
    return(
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{Announcement.Title}</span>
                            <p>{Announcement.Description.substr(0, 15) + "..."}</p>
                        </div>
                        <div className="card-action">
                        <Link to = {`/detail/${Announcement._id}`}><p className="waves-effect waves-light btn-small" >Open</p></Link>
                        <Link to = {`/delete/${Announcement._id}`}><p className="red-effect red red-light btn-small">Delete</p></Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}