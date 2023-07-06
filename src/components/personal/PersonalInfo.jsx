import React from "react";
import CardStep from "../UI/CardStep";
import { useState, useEffect } from "react";

function PersonalInfo({ step, increaseStep, setUserPlan }) {

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const [nameErrorMsg, setNameErrorMsg] = useState('')
  const [email, setEmail] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [validEmail, setValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneErrorMsg, setPhoneErrorMsg] = useState('')
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);
 
  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedEmail = localStorage.getItem("email");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");

    if (storedName) {
      setName(storedName);
    }

    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [name, email, phoneNumber]);



    const onSubmitHandler = (event) => {
    event.preventDefault()

    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^\d{3}-\d{3}-\d{4}$/;

    if (!name) {
        setValidName(false)
        setNameErrorMsg('This field is required!')
        isValid = false
    } else {
        setValidName(true)
        setNameErrorMsg('')
    }

    if(!email) {
        setValidEmail(false)
        setEmailErrorMsg('This field is required!')
        isValid = false
    } else if (!emailPattern.test(email)){
        setEmailErrorMsg('Enter a valid email!')
        setValidEmail(false)
        isValid = false
    } else {
        setEmailErrorMsg('')
        setValidEmail(true)
    }

    if(!phoneNumber) {
        setValidPhoneNumber(false)
        setPhoneErrorMsg('This field is required!')
        isValid = false
    } else if (!phoneNumberRegex.test(phoneNumber)){
        setPhoneErrorMsg('Enter a valid phone number!')
        setValidPhoneNumber(false)
    } else {
        setValidPhoneNumber(true)
        setPhoneErrorMsg('')
    }

    if (isValid) {
        const newUserPlan = { name, email, phoneNumber };
        setUserPlan(newUserPlan);
        console.log(newUserPlan)
        
        increaseStep()

    }
  };



  return (
    <form className="w-[375px] desktop:w-full h-full ">
      <CardStep step={step} increaseStep={increaseStep}>
        <div className="mb-[1.5rem] desktop:mb-[2.5rem]">
          <h1 className="text-head-mb text-blue mb-[0.5rem] desktop:text-head desktop:mb-[1rem]">Personal Info</h1>
          <p className="text-body-mb text-coolgray desktop:text-body">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div>
          <div className="mb-[1rem] desktop:mb-[1.5rem]">
            <label className="flex flex-col text-blue text-subhead-mb desktop:text-subhead">
              <div className="flex items-center justify-between">
                <div>Name</div>
                <div>
                  <p className="text-red font-bold">{nameErrorMsg}</p>
                </div>
              </div>

              <input
                className={validName ? 'px-[1rem] py-[0.75rem] h-[40px] desktop:h-[48px]' : 'border border-red px-[1rem] py-[0.75rem] h-[40px] desktop:h-[48px]'}
                type="text"
                placeholder="e.g. Freddie Mercury"
                required
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </label>
          </div>
          <div className="mb-[1rem] desktop:mb-[1.5rem]">
            <label className="flex flex-col text-blue text-subhead-mb desktop:text-subhead">
              <div className="flex items-center justify-between">
                <div>Email address</div>
                <div>
                  <p className="text-red font-bold">{emailErrorMsg}</p>
                </div>
              </div>
              <input
                className={validEmail ? 'px-[1rem] py-[0.75rem] h-[40px] desktop:h-[48px]' : 'border border-red px-[1rem] py-[0.75rem] h-[40px] desktop:h-[48px]'}
                type="email"
                placeholder="e.g. FreddieMercury@gmail.com"
                required
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </label>
          </div>
          <div className="mb-[1rem] desktop:mb-[1.5rem]">
            <label className="flex flex-col text-blue text-subhead-mb desktop:text-subhead">
              <div className="flex items-center justify-between">
                <div>Phone Number</div>
                <div>
                  <p className="text-red font-bold">{phoneErrorMsg}</p>
                </div>
              </div>
              <input
                 className={validPhoneNumber ? 'px-[1rem] py-[0.75rem] h-[40px] desktop:h-[48px]' : 'border border-red px-[1rem] py-[0.75rem] h-[40px] desktop:h-[48px]'}
                type="phone"
                placeholder="e.g. 1234-123-123"
                required
                onChange={(event) => setPhoneNumber(event.target.value)}
                value={phoneNumber}
              />
            </label>
          </div>
        </div>
      </CardStep>
      <div className="desktop:static absolute bottom-[0] bg-white desktop:w-full w-[375px] h-[72px] p-[1rem] desktop:pr-[0px] flex justify-end desktop:mt-[2rem]">
        <button
          type="submit"  
          onClick={onSubmitHandler}
          className={`w-[97px] h-[40px] text-white font-bold text-btn-mb bg-blue rounded-md desktop:text-btn`}
        >
          Next Step
        </button>
      </div>
    </form>
  );
}

export default PersonalInfo;
