import ResultHeadRow from './ResultHeadRow'
import ResultBodyRow from './ResultBodyRow'
import { calculateInvestmentResults } from "../util/investment";

export default function Result({ userInputs }) {
    const calculatedResults = calculateInvestmentResults(userInputs)
    return(
        <table id="result">
            <ResultHeadRow />
            <ResultBodyRow data={calculatedResults}/>
        </table>
    );
}