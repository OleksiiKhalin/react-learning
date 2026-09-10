import { useState } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import UserInput from './components/UserInput'

function App() {
  const [ userInputs, setUserInputs ] = useState({
    initialInvestment: 100,
    annualInvestment:  10,
    expectedReturn:    10,
    duration:          10,
  });
  const validInput = userInputs.duration > 0
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
      {validInput && <Result userInputs={userInputs}/> || <p>Duration cannot be negative</p>}
    </main>
  );
}

export default App
