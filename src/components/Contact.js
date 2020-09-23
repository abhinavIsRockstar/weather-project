import React from 'react'
import {Link} from 'react-router-dom'
function Contact () {

    return (

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
             <h1>This is a Contact Page</h1>
        </div>
    )

}

export default Contact