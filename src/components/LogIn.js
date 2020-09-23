import React, {useState,useEffect}from 'react'
import {Formik, Form } from 'formik'
import {useHistory, BrowserRouter as Router, Link, Redirect,Route } from 'react-router-dom'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import Weather from './Weather'
import News from './News'
import Home from './Home'
import '../styles/log_in.css'
import auth from './Auth'
import Data from './Data'


 //export const cityContext = React.createContext()



// let authenticate = false;
// console.log('authenticat on line 9', authenticate)


// let requiredCity 
function LogIn () {
    console.log(Data.city,'data city')
    const history = useHistory()
    let localData = JSON.parse(localStorage.getItem('userInfo'))
    console.log(localData,"localData")

    const [countryCode, setCountryCode ] = useState({
        india: 'in',
        usa: 'us',
        canada:'cn',
    })
    console.log(Object.entries(countryCode),'country code india')
    const [authenticate, setAuthenticate ] = useState(false)
    const [requiredCity,setRequiredCity ] = useState(null)
    const [requiredCountry,setRequiredCountry ] = useState(null)
    const initialValues = {
        email : 'navity.k@gmail.com',
        password : '1234'
    }

    const validationSchema = Yup.object({
        email: Yup.string().required('Required hai bhai'),
        password: Yup.string().required('Required hai bhai')
    })

    function goHome(){
        console.log('inside home function')
        // auth.isAuthenticate = false;
        // history.push('/',{
        //     'authenticate': 'true',
        //     'requiredCountry': requiredCountry,
        //     'requiredCity': requiredCity
        // })
        
      
    
    
    }

  useEffect(()=> {
    console.log('inside use effect',authenticate);
    
  },[authenticate])


    onsubmit = values => {
        let data =  [values];
        let demoEmail = values.email;
        let demoPassword = values.password
     //   console.log(localData,'local data')
        console.log('data', data)
        console.log('inside log in' ,values)
        localData.forEach(element => {
            console.log(element,'element')
            if(element.email === demoEmail && element.password === demoPassword){
                   setAuthenticate(true) 
                //    props.city = element.city;  
                //    this.props.requiredCity = element.city
                setRequiredCity(element.city)   
              
                
                // setRequiredCountry(element.country)   
               console.log(countryCode.country,'country code country')
               Object.entries(countryCode).forEach(item => {
                //    console.log(item[0],'item')
                //    console.log(item[1],'item 1')
                //    console.log(element.country,'item country')
                   if(item[0]===(element.country).toLowerCase()){
                    setRequiredCountry(item[1]) 
                  //  console.log('inside if')
                   }

               })  
                console.log('cheers!',authenticate) 
               // console.log('requiredCity',requiredCity )   
            //    history.push('/home',{
            //        authenticate: 'true'
            //    })          
               

               
                
            } else {
                console.log('haaat!',authenticate)
            }
           
            
        });
     //   console.log(requiredCountry,'required country')
        // {authenticate ? <Weather />: null}

        // {authenticate? <Weather />: <div>nope</div>}
        
    //    for (let i =0;i<data.length;i++){
    //        console.log(data[i],'for loop');
    //    }
    }

    

    return(
        <div className='log-in-main'>
           {/* <Route path='/home' component={Home} /> */}
       {authenticate?
        <div> 
           {/* <Weather  city = {requiredCity} /> <News  country = {requiredCountry}/> */}
           {console.log('working...')}
           {console.log(authenticate,'authenticate')}
           <Route path='/home'  component={Home}/>
           {/* <Link to='/' authenticate ={'true'} city ={ requiredCity} country={requiredCountry} />
           <Link to='/' authenticate ={'true'} city ={ requiredCity} country={requiredCountry} />

           <Route path='/' component={Weather}/>
           <Route path='/' component={News}/> */}
           
           {/* <Link to='/home'/> */}
           {/* <Home authenticate={'true'} country = {requiredCountry} city = {requiredCity} /> */}
           
           {/* <Route path='/home' component={Home} /> */}
           <Redirect to='/home' component={Home}/>
        </div> 
      
        : 
        

        <Formik
        initialValues ={initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onsubmit}
        
       >
           {
               formik => (
                <div className='log-in-form'>   
                <h1>Log In</h1>
                <Form >
                   <FormikControl 
                   control = 'input' 
                   type='email' 
                   label='Email' 
                   name='email'
                   />

                   <FormikControl 
                   control = 'input' 
                   type='password' 
                   label='Password' 
                   name='password'
                   />
                  
                  <button type='submit'>Submit</button>

                   </Form>
                   </div>
                ) }
       </Formik>  
        } 
        
       </div>               
)

}

export default LogIn