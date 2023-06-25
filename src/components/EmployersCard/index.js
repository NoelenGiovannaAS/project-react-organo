import './EmployersCard.css'
const EmployersCard = ({ name, img, role, background }) => {
    return (
        <div className='employer' >
            <div className='header' style={{ backgroundColor: background }}>
                <img src={img} alt={name} />
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{role}</h5>
            </div>
        </div>
    );
}

export default EmployersCard;