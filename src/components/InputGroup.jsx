import { useState } from 'react'
export default function InputGroup({children, name, userInputs, onChange}) {
    

    return(
        <div className='input-group'>
            <label>
                {children}
            </label>

            <input
                id='user-input'
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