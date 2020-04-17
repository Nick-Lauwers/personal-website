import React, { Component } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

class Layout extends Component { 

	render() {
		return (
			<div>
				<Header/>
				<Footer/>
			</div>
		)
	}
}

export default Layout