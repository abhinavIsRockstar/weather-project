import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage,FieldArray } from 'formik'
import '../styles/form.css'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name : 'Abhinav Tiwari',
    email : '',
    city : '',
    address : '',
    comment: '',
    social : {
        facebook : '',
        twitter : ''
    },
    phone_numbers : ['', ''],
    phoneNumbers : ['']
}

const savedValues = {
    name : 'Abhinav Tiwari',
    email : 'navity.k@gmail.com',
    city : 'Noida',
    address : 'Sector 36',
    comment: 'Koyla Kaala Hai ',
    social : {
        facebook : 'abhinavhind',
        twitter : 'abhinavhind'
    },
    phone_numbers : ['8447378979', ''],
    phoneNumbers : ['1']
}

const onSubmit = (values,onSubmitProps) => {
    console.log('form data', values)
    console.log('onsubmit props', onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm();
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

const validateComments = value => {
    let error
    if(!value) {
        error = 'Required'
    }
    return error
}
function Forms () {
    
                const [ formValues, setFormValues ] = useState(null)
                console.log(formValues,'form values')
    // console.log('Form Values' ,formik.values)
    // console.log('Form errors' , formik.errors)
    // console.log('Form Blur', formik.touched)
    return (
        <Formik
                initialValues = {formValues || initialValues  }
                validationSchema = {validationSchema}
                onSubmit = {onSubmit}  
                enableReinitialize 
                // {/* validateOnChange= {false}   
                // validateOnBlur = {false}            */}
                > 
                { formik => {
                    console.log('fromik props', formik)
                    return(
                        <Form> 
                        <div className="form">
                        <label htmlFor="name">name</label>
                        <Field type="text" id ="name"name="name" />
                        <ErrorMessage name = 'name' component={TextError}/>
                        
                        <label htmlFor="email">email</label>
                        <Field
                         type="email"
                         id="email"
                         name="email" />
                        <ErrorMessage name = 'email' >
                            {
                                (errorMsg) => <div className='error'>{errorMsg}</div>
                            }
        
                        </ErrorMessage>
        
                        
                        
                        <label htmlFor="city">city</label>
                        <Field 
                        type="text" 
                        id="city" 
                        name="city" 
                        placeholder = "Your city" />
                        <ErrorMessage name = 'city' />
        
                        <label htmlFor ="comment">Comment</label>
                        <Field 
                        as = "textarea" 
                        type = "text" 
                        id ="comment" 
                        name ="comment"
                        validate = {validateComments}
                        
                        />
                        <ErrorMessage name='comment' component = {TextError} />
                        
                       
                        <label htmlFor ="address">Address</label>
                        <Field name="address">
                            {
                                (props) => {
                                   const {field, form, meta} = props;
                                    console.log('render props', props);
                                    return <div> 
                                            <input type ="text" id="address" {...field} />
                                            {meta.touched && meta.error ?<div>{meta.error}</div>:null}
                                            </div>
                                }
                            }
                        </Field>
        
                        <label htmlFor = "facebook">Facebook Id</label>
                        <Field type = "text" id ="facebook" name ="social.facebook" />
        
                        <label htmlFor = "twitter">Twitter Id</label>
                        <Field type = "text" id ="twitter" name ="social.twitter" />
        
                        <label htmlFor = "primary_phone">Primary Phone</label>
                        <Field type = "text" id ="primary_phone" name ="phone_numbers[0]" />
        
                        <label htmlFor = "secondary_phone">Secondary Phone</label>
                        <Field type = "text" id ="secondary_phone" name ="phone_numbers[1]" />
                       
                         <label htmlFor ="phoneNumbers">List of Phone Numbers</label>   
                         <FieldArray name = "phoneNumbers">
                             {
                                 (fieldArrayProps) => {
                                    console.log('field array props', fieldArrayProps)
                                    //console.log('form errors', form.erros)
                                    const {push,remove, form} = fieldArrayProps;
                                    const { values } = form;
                                    const { phoneNumbers } = values;
                                    return (
                                     <div>
                                       { phoneNumbers.map((phNumber, index) => (
                                            <div key = {index}>
                                                <Field name = {`phoneNumbers[${index}]`}/>
                                                {
                                                    index > 0 && 
                                                    <button type="button" onClick= {() => remove(index)}>-</button> 
                                                }
                                               
                                                <button type="button" onClick= {() => push('')}>+</button>
                                            </div>
                                       )) }
                                    </div>
                                    )
                                 }
                             }
                         </FieldArray>
                        </div>
                        {/* <button type="button" onClick={() => formik.validateField('comment')}>Validate comments</button>
                        <button type="button" onClick={() => formik.validateForm()}>validate all</button>

                        <button type="button" onClick={() => formik.setFieldTouched('comment')}>visit comments</button>
                        <button type="button" onClick={() => formik.setTouched({
                            name: true,
                            email: true,
                            city: true,
                            comments : true
                        })}>validate all</button>
                         */}
                        <button type="submit" disabled = {!(formik.isValid || formik.isSubmitting)}>submit</button>
                        <button type="button"onClick= { () => setFormValues(savedValues)}>Load Saved Data</button>
                        <button type='reset' >Reset</button>
                    </Form>
                    )
                }}
            
          
        </Formik>
    )
}

export default Forms