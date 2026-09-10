import { useState } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import UserInput from './components/UserInput'

function App() {
  const [ userInputs, setUserInputs ] = useState({
    initialInvestment:  0,
    annualInvestment:   0,
    expectedReturn:   0,
    duration: 0,
  });
  function handleUserInput(event) {
      const name = event.target.name;
      const value = Number(event.target.value);
      setUserInputs(previous => ({
        ...previous,
        [name]: value,
      }));
  }
  return (
    <main>
      <Header />
      <UserInput userInputs={userInputs} onChange={handleUserInput}/>
      <Result userInputs={userInputs}/>
    </main>
  );
}

export default App
