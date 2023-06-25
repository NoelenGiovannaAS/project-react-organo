
import EmployersCard from '../EmployersCard';
import './Team.css'
const Team = (props) => {
    const css = { backgroundColor: props.sdyColor }
    return (
        props.employers.length > 0 ?
            <section className='team' style={css}>
                <h3 style={{ borderColor: props.pryColor }}> {props.name}</h3>
                <div className='employers'>
                    {props.employers.map(employer => <EmployersCard background={props.pryColor} key={employer.name} name={employer.name} role={employer.role} img={employer.img} />)}
                </div>
            </section>
            : '' //Ou && apenas no lugar de ? 
    );


}

export default Team;