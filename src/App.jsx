import { useState } from 'react'
import './styles/App.css'
import About from './pages/About'
import Index from './pages/Index'
import Process from './pages/Process'
import FormPage from './pages/FormPage'
import {Routes,Route,BrowserRouter as Router,Link} from "react-router-dom"
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header/>
        <Routes>
          <Route path='/' exact element={<Index/>}></Route>
          <Route path='/process' element={<Process/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/formpage' element={<FormPage/>}></Route>
        </Routes>
        <Footer/>
      </ScrollToTop>
    </Router>
  )
}

export default App
