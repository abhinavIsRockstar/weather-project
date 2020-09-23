import React, { useState, useEffect }  from 'react' 
import {Route,Redirect } from 'react-router'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
import LogIn from './LogIn';
import '../styles/sign_up.css'
import '../styles/form.css'
import { useHistory } from 'react-router-dom';


let userData = [];
console.log('user data at line 8' , userData)
function FormikContainer () {
    const history = useHistory();
    // const goLogin = () => history.push('login');

        // useEffect(()=> {
        //     console.log('use effect has been created');
        //     localStorage.setItem('userInfo',[])
           
           
        // },[])
      
        const dropDownOptions = [
            { key: 'select an option ', value: ''},
            { key : 'Varanasi', value: 'Varanasi'},
            { key : 'Noida', value: 'Noida'},
            { key : 'Delhi', value: 'Delhi'}
        ]

        const radioOptions = [
            
            { key : 'Male', value: 'Male'},
            { key : 'Female', value: 'Female'},
            { key : 'Transgender', value: 'Transgender'}
        ]
        const initialValues = {
            name : 'Abhinav Tiwari',
            password : '1234',
            email : 'navity.k@gmail.com', 
            city: 'Noida',
            country :'India',
            description : 'Yoo',
            selectOption : '',
            radioOption : ''
        }
        const validationSchema = Yup.object({
            name : Yup.string().required('Name is Required Bhai!'),
            password : Yup.string().required('Password is Required mere bhai'),
            email : Yup.string().required('Email is Required broo!'),
            description: Yup.string().required('Description is Required brooo!'),
            selectOption: Yup.string().required('Required selection'),
            radioOption: Yup.string().required('Required selection')
        })
        onsubmit = values => {
            userData.push(values)
            console.log('form values', values)
            console.log('user data', userData)
            localStorage.setItem('userInfo',JSON.stringify(userData))
            const data = localStorage.getItem('userInfo')
            console.log(data,'data') 
            goLogin()
            
        }
        function goLogin() {            
            history.push('/login')
        }
    return (
         
            <div className='sign-up-container'>
            <Formik
             initialValues ={initialValues}
             validationSchema = {validationSchema}
             onSubmit = {onsubmit}
            >
                {
                    formik => (
                    <div className='form'>
                    <Form>
                        <FormikControl 
                        control = 'input' 
                        type='text' 
                        label='Name' 
                        name='name'
                        required
                        />

                        <FormikControl 
                        control = 'input' 
                        type='password' 
                        label='Password' 
                        name='password'
                        required
                        />


                        <FormikControl 
                        control = 'input' 
                        type='email' 
                        label='Email' 
                        name='email'
                        required
                        />

                        <FormikControl 
                        control = 'input' 
                        type='text' 
                        label='City' 
                        name='city'
                        required
                        />


                        <FormikControl 
                        control = 'input' 
                        type='text' 
                        label='Country' 
                        name='country'
                        required
                        />


                        <FormikControl 
                        control = 'textarea' 
                        type='text' 
                        label='Description' 
                        name='description'
                        required
                        />

                        <FormikControl 
                        control ='select'
                        label = 'Selct a option'
                        name = 'selectOption' 
                        options = {dropDownOptions}
                        required
                        /> 

                        <FormikControl 
                        control ='radio'
                        label = 'Your Gender'
                        name = 'radioOption' 
                        options = {radioOptions}
                        re
                        /> 
                       <p> <span onClick={goLogin}>Log in</span> if You are already Registered</p>    
                        <button type='submit'>Submit</button>
                    </Form>
                    </div>
                     ) }
            </Formik>   
            </div>               
    )
}

export default FormikContainer