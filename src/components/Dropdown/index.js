import './Dropdown.css'

const Dropdown = (props) => {
    return (
        <div className='Dropdown'>
            <label>{props.label}</label>
            <select onChange={event => props.changing(event.target.value)} required={props.required} value={props.value}>
                <option value="">Select the team</option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div >
    )
}

export default Dropdown