import InputGroup from "./InputGroup";

export default function UserInput({userInputs, onChange}) {
    return(
        <div id="user-input">
            <InputGroup name='initial'  userInputs={userInputs} onChange={onChange}>INITIAL INVESTMENT</InputGroup>
            <InputGroup name='annual'   userInputs={userInputs} onChange={onChange}>ANNUAL INVESTMENT</InputGroup>
            <InputGroup name='return'   userInputs={userInputs} onChange={onChange}>EXPECTED RETURN</InputGroup>
            <InputGroup name='duration' userInputs={userInputs} onChange={onChange}>DURATION</InputGroup>
            Here will be user input
        </div>
    );
}