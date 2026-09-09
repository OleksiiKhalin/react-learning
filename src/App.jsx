import { useState } from 'react'
import Header from './components/Header'
import Result from './components/Result'
import UserInput from './components/UserInput'

function App() {
  return (
    <main>
      <Header />
      <h1>React Investment Calculator</h1>
      <UserInput />
      <Result />
    </main>
  )
}

export default App
