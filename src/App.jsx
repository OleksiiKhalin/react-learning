import { CORE_CONCEPTS } from "./data"
import Header from './components/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from "./components/TabButton";
import DynamicContent from "./components/DynamicContent"
import { useState } from 'react'

function App() {
  const [contentValue, setContentValue] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const dynamicContent = {
    'components': 'look i am component',
    'tabs': 'look i am tab',
    'props': 'look i am props'
  }
  

  function handleClick(button) {
    setSelectedButton(button);
    setContentValue(dynamicContent[button]);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item)=><CoreConcept key={item.title} {...item}/>)}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedButton === 'components'}
              onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'tabs'}
              onClick={() => handleClick('tabs')}
            >
              Tabs
            </TabButton>
            <TabButton
              isSelected={selectedButton === 'props'}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
          </menu>
          {!contentValue ? (
            <p>Please press buttons</p>
          ) : (
            <DynamicContent value={contentValue} />
          )}


        </section>
      </main>
    </div>
  );
}

export default App;
