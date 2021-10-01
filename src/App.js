import './App.css';
import {useState} from 'react';
import FillOptions from './FillOptions';

function App() {
  const [brutto,setBrutto] = useState('');
  const [vero,setVero] = useState('');
  const [veroSumma,setVeroSumma] = useState(0);
  const [tv,setTv] = useState(1);
  const [tyottomyysvakuutusSumma,setTyottomyysvakuutusSumma] = useState(0);
  const [te,setTe] = useState(1);
  const [tyoelakeSumma,setTyoelakeSumma] = useState(0);
  const [netto, setNetto] = useState(0);


  function calculate(e) {
    e.preventDefault();
    const veroEurot = brutto / 100 * vero;
    const teEurot = brutto / 100 * te;
    const tvEurot = brutto / 100 * tv;
    setVeroSumma(veroEurot);
    setTyoelakeSumma(teEurot);
    setTyottomyysvakuutusSumma(tvEurot);
    setNetto(brutto - veroEurot - teEurot - tvEurot);
  }

  return (
    <div id="container">
      <h3>Palkkalaskuri</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Brutto</label>
        </div>
        <input type="number" 
          value={brutto}
          onChange={e => setBrutto(e.target.value)}
          />
        <div>
          <label>Vero (%)</label>
          <output>{veroSumma} €</output>
        </div>
        <input type="number" 
          value={vero}
          onChange={e => setVero(e.target.value)}
        />
        <div>
          <label>Työttömyysvakuutus (%)</label>
          <output>{tyottomyysvakuutusSumma}</output>
        </div>
        <select
           value={tv}
           onChange={e => setTv(e.target.value)}
        >
          <FillOptions />
        </select>
        <div>
          <label>Työeläke (%)</label>
          <output>{tyoelakeSumma}</output>
        </div>
        <select
            value={te}
            onChange={e => setTe(e.target.value)}
        >
          <FillOptions />
        </select>
        <div>
          <label>Nettopalkkasi</label>
          <output id="netto">{netto}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;

/*import './App.css';
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

export default App;*/
