import React from 'react'
import Header from '../components/Header'
import Index from './Index'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'

function Home() {

    const {about , contact , education} = useParams()
    console.log('value is : ',about , contact , education)
    
  return (
    <>
        <Header/>
        <Index/>
        <Footer/>
    </>
  )
}

export default Home