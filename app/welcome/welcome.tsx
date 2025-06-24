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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Morgtage Calculator
        </h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Principal Amount ($)
            </label>
            <input
              type="number"
              value={principalAmt}
              onChange={(e) => setPrincipalAmt(Number(e.target.value))}
            />
          </div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Interest Rate (%)
          </label>
          <input
            type="number"
            name="InterestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Loan Term (Years)
          </label>
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
      </div>
    </div>
  );
}
