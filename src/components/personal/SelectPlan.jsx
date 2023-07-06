import Switch from "../UI/Switch";
import CardStep from "../UI/CardStep";
import arcade from "../../assets/icon-arcade.svg";
import advanced from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";
import PlanBtn from "../UI/PlanBtn";
import {useState, useEffect} from 'react'

function SelectPlan({increaseStep, decreaseStep, userPlan, setUserPlan}) {
  
  const [billing, setBilling] = useState('Monthly')
  const [arcadePlan, setArcadePlan] = useState('$9/mo')
  const [advancedPlan, setAdvancedPlan] = useState('$12/mo')
  const [proPlan, setProPlan] = useState('$15/mo')
  const options = [
    {
      id: 1,
      title: "Arcade",
      path: arcade,
      alt: 'logo-icon',
      plan: arcadePlan,
    },
    {
      id: 2,
      title: "Advanced",
      path: advanced,
      alt: 'logo-icon',
      plan: advancedPlan,
    },
    {
      id: 3,
      title: "Pro",
      path: pro,
      alt: 'logo-icon',
      plan: proPlan,
    },
  ];
  const [optionId, setOptionsId] = useState(options[0].id)

  const selectPlan = (plan) => {
    setOptionsId(plan.id)
  }

  const billingHandler = () => {
    setBilling(billing === 'Monthly' ? 'Yearly' : 'Monthly')
    setArcadePlan(arcadePlan === '$9/mo' ? '$90/yr' : '$9/mo')
    setAdvancedPlan(advancedPlan === '$12/mo' ? '$120/yr' : '$12/mo')
    setProPlan(proPlan === '$15/mo' ? '$150/yr ' : '$15/mo')
  }

  const monthlyStyle = billing === 'Monthly' ? 'text-blue' : 'text-coolgray'
  const yearlyStyle = billing === 'Yearly' ? ' text-blue' : 'text-coolgray '

  const selectedPlan = options.find((option) => option.id === optionId);
  const submitSelectedPlan = (event) => {
    event.preventDefault()
    const updatedUserPlan = {...userPlan, billing, title: selectedPlan.title, plan: selectedPlan.plan}
    setUserPlan(updatedUserPlan)
    increaseStep()
  }

  return (
    <form className="desktop:w-full h-full">
      <CardStep>
        <div className="mb-[1.5rem] desktop:mb-[2.5rem]">
          <h1 className="text-head-mb text-blue mb-[0.5rem] desktop:text-head desktop:mb-[1rem]">
            Select your plan
          </h1>
          <p className="text-body-mb text-coolgray desktop:text-body">
            You have the option of monthly or yearly billing.
          </p>
        </div>
        <div className="desktop:flex gap-[1rem] desktop:h-[180px] ">
          {options.map((option, index) => (
            <PlanBtn key={option.id} index={index} option={option} billing={billing} selectedPlan={selectedPlan} onSelect={selectPlan}/>
          ))}
        </div>

        <div className="flex w-full items-center text-btn-mb gap-[1.5rem] px-[3.5rem] bg-magnolia rounded-xl h-[48px] ">
          <div>
            <p className={monthlyStyle}>Monthly</p>
          </div>
          <div className="desktop:mx-auto ">
            <Switch billingHandler={billingHandler}/>
          </div>
          <div>
            <p className={yearlyStyle}>Yearly</p>
          </div>
        </div>
      </CardStep>
      <div
        id="submit--container"
        className="desktop:static absolute bottom-[0] bg-white desktop:w-full w-[375px] h-[72px] p-[1rem] desktop:px-[0] flex justify-between items-center desktop:mt-[4.9rem]"
      >
        <div>
          <button onClick={decreaseStep} className="text-coolgray text-btn-mb hover:text-blue font-bold">
            Go Back
          </button>
        </div>
        <div>
          <button type="submit" onClick={submitSelectedPlan} className="w-[97px] h-[40px] text-white font-bold text-btn-mb bg-blue rounded-md">
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
}

export default SelectPlan;
