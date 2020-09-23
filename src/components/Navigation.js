import React from 'react'
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import '../styles/home.css'

function Navigation () {

    return(
        // <Router>
        <div>             
            <main className='navigation-home'>
                <nav>
                    <ul className='navigation-list-items'>
                        <li className='navigation-list-item'><Link to='/'> Home </Link></li>
                        <li className='navigation-list-item'><Link to='/about'> About  </Link></li>
                        <li className='navigation-list-item'><Link to='/contact'> Contact </Link></li>
                    </ul>
                </nav>
            </main>
           
            {/* <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/> */}
        </div> 
         /* <Route path='/' component={Home}/> */
        // </Router>   
    )
}

export default Navigation