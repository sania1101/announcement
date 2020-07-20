import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import{AnnouncementsPage} from './pages/AnnouncementsPage'
import{CreatePage} from './pages/CreatePage'
import{DetailPage} from './pages/DetailPage'
import {DeletePage} from './pages/DeletePage'
import{EditPage} from './pages/EditPage'
export const useRouts = () =>{
        return(
            <Switch>
                <Route path='/announcements' exact>
                    <AnnouncementsPage/>
                </Route>
                <Route path='/create' exact>
                    <CreatePage/>
                </Route>
                <Route path='/detail/:id' >
                    <DetailPage/>
                </Route>
                <Route path='/delete/:id' >
                    <DeletePage/>
                </Route>
                <Route path='/edit/:id' >
                    <EditPage/>
                </Route>
                <Redirect to='/create'></Redirect>
            </Switch>
        )
}