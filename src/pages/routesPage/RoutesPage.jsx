import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Base from '../Layout/Base'
import PageNotFound from '../../pages/PageNotFound'
import SignUp from '../../components/elements/SignUp'
import SignIn from '../../components/elements/SignIn'

const RoutesPage = () => {
    return (
        <>
            <BrowserRouter>
                <Base>
                    <Routes >
                        <Route index path='/' element={<SignUp />} />
                        <Route  path='/signin' element={<SignIn />} />
                        <Route path='/*' element={<PageNotFound />} />
                    </Routes>
                </Base>
            </BrowserRouter>
        </>
    )
}

export default RoutesPage