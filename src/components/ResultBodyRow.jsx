export default function ResultBodyRow({ data }) {
    return (
        <tbody>
            {data.map((row) => (
                <tr key={row.year}>
                    <td>{row.year}</td>
                    <td>{row.interest.toFixed(2)}</td>
                    <td>{row.cumInterest.toFixed(0)}</td>
                    <td>{row.valueEndOfYear.toFixed(0)}</td>
                    <td>{(row.annualInvestment*row.year+row.initialInvestment).toFixed(0)}</td>
                </tr>
            ))}
        </tbody>
    );
}