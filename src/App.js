import './App.css';
import React, {useState} from 'react';


function App() {
  const [salary, setSalary] = useState('');
  const [tax, setTax] = useState('');
  const [pension, setPension] = useState();
  const [insurance, setInsurance] = useState();
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();
  const [result4, setResult4] = useState();
  /*const [netto, setNetto] = useState();

  function calculate(e) {
    e.preventDefault();
    const taxSum = salary / 100 * tax;
    const pensionSum = salary / 100 * pension;
    const insuranceSum = salary / 100 * insurance;
    setNetto(salary - taxSum - pensionSum - insuranceSum);
  }
  */ 

  function handleSubmit(e) {
    e.preventDefault();
    
    setResult1(salary * (tax / 100));
    setResult2(salary * (pension / 100));
    setResult3(salary * (insurance / 100));

    const payment = salary - (salary * (tax / 100)) - (salary * (pension / 100)) - (salary * (insurance / 100));
    setResult4(payment);
  }

  return (
    <>
    <h3>Loan Calculator</h3>
    <form onSubmit={handleSubmit}>
      <div id="container">
        <label>Salary</label><br></br>
        <input name="salary" type="number" value={salary} onChange={e => setSalary(e.target.value)}></input>
      </div>
      <div>
      <label>Tax (%) </label><output>{result1}</output> € <br></br>
        <input name="tax" type="number" value={tax} onChange={e => setTax(e.target.value)}></input>
      </div>
      <div>
        <label>Pension (%) </label><output>{result2}</output> € <br></br>
        <select name="pension" value={pension} onChange={e => setPension(e.target.value)}>
          <option value="0.25">0.25 %</option>
          <option value="0.5">0.50 %</option>
          <option value="0.75">0.75 %</option>
          <option value="1">1.00 %</option>
          <option value="1.5">1.50 %</option>
          <option value="2">2.00 %</option>
          <option value="2.5">2.50 %</option>
          <option value="3">3.00 %</option>
          <option value="3.5">3.50 %</option>
          <option value="4">4.00 %</option>
          <option value="4.5">4.50 %</option>
          <option value="5">5.00 %</option>
        </select>
      </div>
      <div>
        <label>Insurance (%) </label><output>{result3}</output> € <br></br>
        <select name="insurance" value={insurance} onChange={e => setInsurance(e.target.value)}>
          <option value="0.25">0.25 %</option>
          <option value="0.5">0.50 %</option>
          <option value="0.75">0.75 %</option>
          <option value="1">1.00 %</option>
          <option value="1.5">1.50 %</option>
          <option value="2">2.00 %</option>
          <option value="2.5">2.50 %</option>
          <option value="3">3.00 %</option>
          <option value="3.5">3.50 %</option>
          <option value="4">4.00 %</option>
          <option value="4.5">4.50 %</option>
          <option value="5">5.00 %</option>
        </select>
      </div>
      <div>
        <label>Your salary after payments</label><br></br>
        <output>{result4}</output>
      </div>
      <button>Calculate</button>
    </form>
    </>
  )
}

export default App;
