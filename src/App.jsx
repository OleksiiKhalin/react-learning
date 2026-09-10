import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  const hi = false;
  return (
    <>
      <Header style={hi&&{backgroundColor: 'black'}||{backgroundColor: 'white'}} />
      {/* <Header style={{backgroundColor: 'black'}} /> */}
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
