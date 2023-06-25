import './Form.css'
import TextField from '../TextField';
import Dropdown from '../Dropdown';
import Button from '../Button';
import { useState } from 'react'


const Form = (props) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [img, setImg] = useState('')
    const [team, setTeam] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.employerInputed({
            name,
            role,
            img,
            team
        })
        setName('')
        setRole('')
        setImg('')
        setTeam('')

    }
    return (
        <section className="form">
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField

                    required={true}
                    label="Nome"
                    placeholder="seu nome"
                    value={name}
                    changing={value => setName(value)}
                />

                <TextField

                    label="Cargo" placeholder="seu cargo"
                    value={role}
                    changing={value => setRole(value)}
                />
                <TextField

                    label="Imagem" placeholder="caminho da sua imagem"
                    value={img}
                    changing={value => setImg(value)}
                />
                <Dropdown

                    label="Team"
                    items={props.teamName}
                    required={true}
                    value={team}
                    changing={value => setTeam(value)}

                />
                <Button> Create Card </Button>
            </form>
        </section>

    );
}

export default Form;