import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {
    //let value = 'Noelen'

    const [value, setValue] = useState('Noelen')
    const typing = (event) => {
        props.changing(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={typing} required={props.required} placeholder={`Digite o ${props.placeholder}...`} />
        </div>

    );
}

export default TextField;