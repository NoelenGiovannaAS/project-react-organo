import Banner from './components/Banner';
import Form from './components/Form';
import { useState } from 'react'
import Team from './components/Team';
import EmployersCard from './components/EmployersCard';
import Footer from './components/Footer';

function App() {
  const teams = [
    {
      name: 'Programming',
      primaryColor: '#57D278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX and Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovation and Management',
      primaryColor: '#FFBA29',
      secondaryColor: '#FFEEDF'
    }

  ]
  const [employers, setEmployers] = useState([])

  const newEmployer = (employer) => {
    setEmployers([...employers, employer])
  }

  return (
    <div className="App">
      <Banner />
      <Form teamName={teams.map(team => team.name)} employerInputed={employer => newEmployer(employer)} />

      {teams.map(team => <Team
        key={team.name}
        name={team.name}
        pryColor={team.primaryColor}
        sdyColor={team.secondaryColor}
        employers={employers.filter(employer => employer.team === team.name)}
      />)}
      <Footer />


    </div>
  );
}

export default App;
