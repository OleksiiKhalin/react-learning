import InputGroup from "./InputGroup";

export default function UserInput({userInputs, onChange}) {
    return(
        <div id="user-input">
            <div className="input-group">
                <InputGroup name='initialInvestment' userInputs={userInputs} onChange={onChange}>INITIAL INVESTMENT</InputGroup>
                <InputGroup name='annualInvestment'  userInputs={userInputs} onChange={onChange}>ANNUAL INVESTMENT</InputGroup>
                <InputGroup name='expectedReturn'    userInputs={userInputs} onChange={onChange}>EXPECTED RETURN</InputGroup>
                <InputGroup name='duration'          userInputs={userInputs} onChange={onChange}>DURATION</InputGroup>
            </div>
        </div>
    );
}