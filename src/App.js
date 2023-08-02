import React from 'react';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';

import Header from './components'
import Home from './Home'

import Contact from './Contact'


import About from './About'

import  NotFound from './NotFound'
import BlogItemDetails from './ListItems';

const App=()=>{
  return(
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/blogs/:id" element={<BlogItemDetails />}/>
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}


export default App