import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
import NavLinks from './components/NavLinks'
import AboutPage from './components/pages/AboutPage'
// import FeedbackData from './data/FeedbackData'
import { FeedbackProvider } from './components/context/FeedbackContext'


const App = () => {

  return (
      <>
        <FeedbackProvider>
          <Header />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              } />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
            <NavLinks />
          </div>
          <AboutIconLink  />
        </FeedbackProvider>
     </>
  )
}

export default App
