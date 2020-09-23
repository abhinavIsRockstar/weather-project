import React from 'react'
import {Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import '../styles/form.css'
function Radio(props) {
    const { name,label, options, ...rest } = props
    return (
        <div className='radio-gender'>
            <label htmlFor={name}>{label}</label>
            <Field name ={name} {...rest}>

                {
                    ({field})=>{
                            return options.map(option => {
                                return (
                                    <React.Fragment key ={option.key}>
                                        <div>
                                        <input
                                         type='radio'
                                         id={option.value}
                                         {...field} 
                                         value ={option.value} 
                                         checked ={field.value === option.value}
                                         />
                                         <label htmlFor={option.value}>{option.key}</label>
                                         </div>
                                    </React.Fragment>

                                )
                            })
                    }
                }
            </Field>
            <ErrorMessage name ={name} component={TextError}/>

        </div>
    )
}

export default Radio