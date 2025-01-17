import React from 'react'
import Input from './Input'
import TextArea from './TextArea'
import Select from './Select'
import Radio from './Radio'

function FormikControl (props) {
    const { control, ...rest } = props
    console.log('props in formik control' , props)
        switch(control) {
                case  'input': 
                       return <Input {...rest} />
                case  'textarea': 
                        return <TextArea {...rest} />
                case  'select': return <Select {...rest} />
                case  'radio': return <Radio {...rest} />
                case  'checkbox':    
                case  'date':               
            default : return null
        }    
}

export default FormikControl