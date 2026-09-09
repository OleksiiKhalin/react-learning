import { useState } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import UserInput from './components/UserInput'

function App() {
  const [ userInputs, setUserInputs ] = useState({
    initial:  0,
    annual:   0,
    return:   0,
    duration: 0,
  });
  function handleUserInput(event) {
      const name = event.target.name;
      const value = event.target.value;
      setUserInputs(previous => ({
        ...previous,
        [name]: value,
      }));
  }
  return (
    <main>
      <Header />
      <h1>React Investment Calculator</h1>
      <UserInput userInputs={userInputs} onChange={handleUserInput}/>
      <pre>{JSON.stringify(userInputs, null, 2)}</pre>
      <Result />
    </main>
  );
}

export default App
