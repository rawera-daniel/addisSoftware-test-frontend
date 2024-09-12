import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyle'
import AppLayout from './ui/AppLayout'
import AllSongs from './pages/AllSongs'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="allsongs" />} />
            <Route path="allsongs" element={<AllSongs />} />
          </Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
