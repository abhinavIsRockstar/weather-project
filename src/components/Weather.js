import React, { useState, useEffect, useContext } from 'react'
 import {cityContext} from './LogIn'

// let localData = JSON.parse(localStorage.getItem('userInfo'))
function Weather(props) {

    // let requiedCity= JSON.parse(localStorage.getItem('userInfo'))
    // requiedCity.forEach(element => {
    //     console.log(element.city,'element city') 
    // });
    
    
    console.log('props at line 13',props)
    // const userCity = useContext(cityContext)
    const [data,setData ] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [city1,setCity1] = useState([])
    const [temperature, setTemperature] = useState(null)
    let koyla ='koyla'
    // console.log(props,'props')
    useEffect(()=>{
        fetch('http://api.openweathermap.org/data/2.5/forecast?id=7279746&cnt=1&APPID=833d7b6df420d9acc5f3732382b91013')
        .then(response => response.json())
        .then(response => {
           
        // //    let city = Object.values(response.city);
        //     let city =['noida','delhi','mumbai']
        //     //  city1= Object.values(response.list[0])
        //     setCity1(Object.values(response.list[0]))
        //    setData(city)
        //     console.log(Object.values(response.list[0]),'response')
        //     console.log(city[1],'city')
            setIsLoading(false)
            console.log(response.city,'response city')
            setData(response.city)
            console.log(response.list[0].main.temp,'response at line 24')
            setTemperature(response.list[0].main.temp)
        })

    },[])
    return(
        <div className='weather'> 
            <h1>Weather Update</h1>

           {
           isLoading ? <h2>Loading...</h2> :
           <div>
           <h2>Your city is {JSON.stringify(props.city)}</h2>
           <h3>Temperature is : {temperature}</h3>
           { console.log(props.city,'props.city')}
           </div>
        
      } 
     
       </div>
    
    )
}

export default Weather