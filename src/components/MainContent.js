import React, {useState}from 'react'
import FormikContainer from './FormikContainer'
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom'
import LogIn from './LogIn'
import  '../styles/main_content.css'

function MainContent (){
    const [ signUpClicked, setsignUpClicked ] = useState(false)
    const [ loggedIn, setLoggedIn ] = useState (false)
    
    return (
        
       
           
            
             <div className='main-content-container'>
                <p>
                     Please<Link to='/signup'>Sign up</Link> or 
                    <Link to='/logIn'>Log in </Link>
                    if you are already registered
                </p>

                {/* <Router>
                                
                <Switch>
                <Route path='/login' component={LogIn} />
                <Route path='/signup' component={FormikContainer} />
                </Switch>
                </Router> */}
                
                {/* <button onClick={()=>{
                    setsignUpClicked(true)
                }}>Sign Up</button>  */}
                

                
                </div>
                
               

            
        
        
    )
}

export default MainContent