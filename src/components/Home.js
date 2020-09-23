import React, {useState} from 'react'
import {useHistory, BrowserRouter as Router, Link, Redirect,Route } from 'react-router-dom'
import Navigation from './Navigation'
import MainContent from './MainContent'
import Footer from './Footer'
import Weather from './Weather'
import News from './News'
import '../styles/log_in.css'
import auth from './Auth'
import AppContext from '../libs/ContextLibs'

function Home (props) {
    const [ loggedIn, setLoggedIn ] = useState(false)
    const history = useHistory();
    // let authenticate = JSON.parse(props.authenticate.state)
    // console.log(authenticate,'authenticate')
    // console.log(props.location.state.authenticate,'props in home')
    const value =typeof(props.location.state);
      console.log(value,'value')
    console.log('home page props', props)
    let demo  = auth.logIn
    console.log(demo,'demo')
    return (
      
        <div > 
         
        <Navigation />
         {
         props.authenticate?
         <div>
          
         <Weather city = {props.requiredCity}  /> 
         <News country = {props.country} />
         
         </div>
          :
        
        <div>
           <MainContent />
        </div>
        }
        
        <Footer />

        </div>

        )
}

export default Home