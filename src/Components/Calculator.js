import React,{useState} from 'react';

function Calculator() {
    const [ot, setOt] = useState(0);
    const [reg, setReg] = useState(0);
    const [rate, setRate] = useState(19.25);
    const [netPay, setNetPay] = useState(null);
    const [grossPay,setGrossPay] = useState(null);

    const calc = () => {
     
     let hardOt = parseFloat(ot);
     let hardReg = parseFloat(reg);
     let hardRate = parseFloat(rate);

     let netOt = hardOt * 1.5 * hardRate;
     let netReg = hardReg * hardRate;
     const gross = netOt + netReg;
     const net = (netOt + netReg) * .65;
     
     setNetPay(net.toFixed(2));
    setGrossPay(gross.toFixed(2));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        calc();
    }
    const changePay = ({target}) => {
        const {value} = target;
        setRate(value);
    }
    const changeReg = ({target}) => {
        const {value} = target;
        setReg(value);
    }
    const changeOt = ({target}) => {
        const {value} = target;
        setOt(value);
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="pay-rate">Pay-rate</label>
        <input type="number" name="pay-rate" min="1" max="30" id="rate" step="0.01" onChange={changePay}></input>
        <h2>{rate}</h2>
        <label htmlFor="reg-hours">reg-hours</label>
        <input type="number" name="reg-hours" min="0" max="100" id="reg" step="0.1" onChange={changeReg}></input>
        <h2>{reg}</h2>
        <label htmlFor="ot-hours">ot-hours</label>
        <input type="number" name="ot-hours" min="0" max="30" id="ot" step="0.1" onChange={changeOt}></input>
        <h2>{ot}</h2>
        <button type="submit">Submit</button>
        </form>
        <h3>Gross Pay: {grossPay}</h3>
        <h3>Net Pay: {netPay}</h3>
            </div>
        );
}
    


export default Calculator;