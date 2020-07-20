import React ,{useState, useEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'

export const CreatePage = () =>{
    const [Title, setTitle] = useState('')
    const [Description, setDescription]  = useState('')
    const{request} = useHttp()  
    const history =  useHistory()
         
    useEffect(()=>{
        window.M.updateTextFields()
    },[])

    const pressHendler = async event => {
        try{
            await request('/announcement/add', 'POST', {
                    Title,
                    Description,
                    CreateDate: new Date()
            })
            
            history.push('/announcements')
        }catch(e){
            console.log(e)
        }
    
    }

    return(
        <div className="row container FormAddNewAnnouncement">
            <div className = "container">
                <div className="input-field col s12">
                    <input id="Title" type="text" className="validate"  onChange = {e=>setTitle(e.target.value)}/>
                    <label className="active" htmlFor="Title">Title</label>
                </div>
                <div className="input-field col s12">
                    <input id="Description" type="text" className="validate" onChange = {e=>setDescription(e.target.value)} />
                    <label className="active" htmlFor="Description">Description</label>
                </div>
                <div className = "col s12 right-align"> 
                    <p onClick={pressHendler} className ="waves-effect waves-light btn btn-add">add</p>
                </div>
            </div>
      </div>
    )
}