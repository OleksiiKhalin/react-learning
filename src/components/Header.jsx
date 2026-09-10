import headerImg from '../assets/investment-calculator-logo.png'
export default function Header() {
    return(
        <div id='header'>
            <img src={ headerImg } alt='big sack with money' />
            <h1>React Investment Calculator</h1>
        </div>
    );
}