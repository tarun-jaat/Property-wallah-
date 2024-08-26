import React, { useState } from 'react';
import { Button } from '@mui/material';

function Form({ type }) {
    // State variables for form fields
    const [reason, setReason] = useState('');
    const [isDealer, setIsDealer] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [homeLoan, setHomeLoan] = useState(false);
    const [siteVisits, setSiteVisits] = useState(false);
    const [termsAgreed, setTermsAgreed] = useState(false);

    // Handlers for input changes
    const handleReasonChange = (event) => setReason(event.target.value);
    const handleDealerChange = (event) => setIsDealer(event.target.value);
    const handleTimeChange = (event) => setTime(event.target.value);
    const handleHomeLoanChange = () => setHomeLoan(!homeLoan);
    const handleSiteVisitsChange = () => setSiteVisits(!siteVisits);
    const handleTermsChange = () => setTermsAgreed(!termsAgreed);

    const handleNameChange = (event) => setName(event.target.value);
    const handlePhoneChange = (event) => setPhone(event.target.value);
    const handleEmailChange = (event) => setEmail(event.target.value);

    return (
        <div>
            <div style={head}>
                <p>Please share your details to {type}</p>
                
            </div>

            <div style={main}>
                <div>
                    <p style={subHead}>BASIC INFORMATION</p>
                    <p>Your Reason to buy</p>
                    <input
                        type='radio'
                        name='reason'
                        value='Investment'
                        checked={reason === 'Investment'}
                        onChange={handleReasonChange}
                    /> <label>Investment</label>
                    <input
                        type='radio'
                        name='reason'
                        value='Self Use'
                        checked={reason === 'Self Use'}
                        onChange={handleReasonChange}
                    /> <label>Self Use</label>
                    <p>Are you a property dealer</p>
                    <input
                        type='radio'
                        name='dealer'
                        value='Yes'
                        checked={isDealer === 'Yes'}
                        onChange={handleDealerChange}
                    /> <label>Yes</label>
                    <input
                        type='radio'
                        name='dealer'
                        value='No'
                        checked={isDealer === 'No'}
                        onChange={handleDealerChange}
                    /> <label>No</label>
                    <br />
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        style={input}
                        onChange={handleNameChange}
                    />
                    <br />
                    <input
                        type='text'
                        placeholder='Phone'
                        value={phone}
                        style={input}
                        onChange={handlePhoneChange}
                    />
                    <br />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        style={input}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    < p style={subHead}>OPTIONAL INFORMATION</p>
                    <p>By when you are planning to buy the property?</p>
                    <input
                        type='radio'
                        name='time'
                        value='3 months'
                        checked={time === '3 months'}
                        onChange={handleTimeChange}
                    /> <label>3 months</label>
                    <input
                        type='radio'
                        name='time'
                        value='6 months'
                        checked={time === '6 months'}
                        onChange={handleTimeChange}
                    /> <label>6 months</label>
                    <input
                        type='radio'
                        name='time'
                        value='More than 6 months'
                        checked={time === 'More than 6 months'}
                        onChange={handleTimeChange}
                    /> <label>More than 6 months</label>
                    <br />
                    <br/>
                    <input
                        type='checkbox'
                        checked={homeLoan}
                        onChange={handleHomeLoanChange}
                    /> <label>I am interested in home loan</label>
                    <br />
                    <input
                        type='checkbox'
                        checked={siteVisits}
                        onChange={handleSiteVisitsChange}
                    /> <label>I am interested in site visits</label>
                    <br />
                    <input
                        type='checkbox'
                        checked={termsAgreed}
                        onChange={handleTermsChange}
                    /> <label>I agree to the Terms & Conditions and Privacy Policy</label>
                    <br />
                    <br />
                    <Button variant='contained'>{type}</Button>
                </div>
            </div>
        </div>
    );
}

const main = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "rgba(255,255,255,0.5)",
};

const head = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};
const subHead = {
    fontWeight: "bold",
}
const input={
    border:"none",
    width: "100%",
    margin:4
}
export default Form;
