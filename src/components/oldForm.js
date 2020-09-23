import React from 'react'
import { useFormik } from 'formik'
import '../styles/form.css'
import * as Yup from 'yup'

const initialValues = {
    name : '',
    email : '',
    city : ''
}

const onSubmit = values => {
    console.log('form data', values)
}

const validate = values => {
    // this function must return an object
    
    let errors = {}

    if(!values.name){
        errors.name = 'Required';
    }

    if(!values.email) {
        errors.email = 'Required';
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format';
    }

    if(!values.city) {
        errors.city = 'Required';
    }
    
    return errors;
 }

const validationSchema = Yup.object({
    name : Yup.string().required('Required!'),
    email : Yup.string().email('Invalid email format').required('Required!'),
    city : Yup.string().required('Required!')
})
function oldForm () {
     const formik = useFormik({
         initialValues,
         onSubmit,
         //validate
         validationSchema
     })

    // console.log('Form Values' ,formik.values)
    // console.log('Form errors' , formik.errors)
     console.log('Form Blur', formik.touched)
    return (
        <div>
            <h1> There will be  a form</h1>
            <br/>

            <form onSubmit= {formik.handleSubmit}> 
                <div className="form">
                <label htmlFor="name">name</label>
                <input type="text" id ="name"name="name" 
                onChange={formik.handleChange} 
                value={formik.values.name} 
                onBlur ={formik.handleBlur}/>

                { formik.touched.name && formik.errors.name ? <div className = "error">{formik.errors.name}</div>: null}

                <label htmlFor="email">email</label>
                <input type="email" id="email"name="email" 
                onChange={formik.handleChange} 
                value={formik.values.email}
                onBlur ={formik.handleBlur} />

                { formik.touched.email && formik.errors.email ? <div className = "error">{formik.errors.email}</div>: null}
                
                
                <label htmlFor="city">city</label>
                <input type="text" id="city" name="city" 
                onChange={formik.handleChange} 
                value={formik.values.city}
                onBlur ={formik.handleBlur} />

                {formik.touched.city && formik.errors.city ? <div className = "error">{formik.errors.city}</div>: null}
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default oldForm