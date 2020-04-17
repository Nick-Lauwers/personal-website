import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

  	<BrowserRouter>
    	<Home/>
  	</BrowserRouter>,
  	
    document.body.appendChild(document.createElement('div')),
  )
})