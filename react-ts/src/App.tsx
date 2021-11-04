import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Miffy',
    },
    {
      first: 'Clark',
      last: 'Miffiy',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  return (
    <div className="App">
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="success" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes yo Leonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Vishwas" messageCount={20} isLoggedIn={true} />
      <Greet name="Miffy" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      ></Button>
      <Input
        value=""
        handleChange={(event) => console.log('event', event)}
      ></Input>
    </div>
  );
}

export default App;
