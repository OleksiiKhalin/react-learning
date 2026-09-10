import { useState } from 'react'
export default function InputGroup({children, name, userInputs, onChange}) {
    

    return(
        <div >
            <label htmlFor={name}>{children}</label>
            <input
                id={name}
                placeholder='input number'
                type='number'
                required
                name={name}
                value={userInputs[name]}
                onChange={onChange}
            />
        </div>
        
    );
}