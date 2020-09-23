import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'


function Input (props) {
    const { label , name , ...rest } = props
    console.log('props in input ', props)
    return(
        <div className="">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name = {name} component={TextError}/>
        </div>
    )
}
export default Input