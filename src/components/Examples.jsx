import TabButton from "./TabButton";
import DynamicContent from "./DynamicContent"
import { useState } from 'react'
import Section from './Section'
import Tabs from './Tabs'

export default function Examples() {
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
        <Section id='examples' title='Examples'>
      
          <Tabs buttonsContainer='menu' buttons={
            <>
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
            </>
            }>
            {!contentValue ? (
                <p>Please press buttons</p>
            ) : (
                <DynamicContent value={contentValue} />
            )}
          </ Tabs>       
        </Section>
    )
}