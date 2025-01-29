import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'

const Main: FC = () => {
    return (
        <main>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </main>
    )
}

export default Main