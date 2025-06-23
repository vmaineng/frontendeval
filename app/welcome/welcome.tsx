import { useState } from "react";

export function Welcome() {
  const [principalAmt, setPrincipalAmt] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(3);
  const [years, setYears] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const handleCalculateClick = () => {
    const monthlyRate = interestRate / 100 / 12;
    const monthlyPay = years * 12;

    const payment =
      (principalAmt * monthlyRate * (1 + monthlyRate) ** monthlyPay) /
      ((1 + monthlyRate) ** monthlyPay - 1);
    setMonthlyPayment(payment);
  };

  return (
    <div className="mb -2">
      <input
        type="number"
        value={principalAmt}
        onChange={(e) => setPrincipalAmt(Number(e.target.value))}
      />

      <input
        type="number"
        name="InterestRate"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
      />

      <input
        type="number"
        name="LengthOfLoan"
        value={years}
        onChange={(e) => setYears(Number(e.target.value))}
      />

      <button onClick={handleCalculateClick}>Calculate</button>

      <div>
        Your monthly mortgage payment will be ${monthlyPayment.toFixed(2)};
      </div>
    </div>
  );
}
