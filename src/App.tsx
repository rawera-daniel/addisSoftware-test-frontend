import React from 'react'
import GlobalStyles from './styles/GlobalStyle'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}></Route>

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
