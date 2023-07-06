import React from "react";
import CardStep from "../UI/CardStep";
import PlanAddons from "../UI/PlanAddons";
import {useState} from 'react'

function AddOns({increaseStep, decreaseStep, userPlan, setUserPlan}) {
  const options = [
    {
      id: 1,
      title: "Online Services",
      content: "Access to multiplayer games",
      plan: "+$10/yr",
    },
    {
      id: 2,
      title: "Larger Storage",
      content: "Extra 1TB of cloud save",
      plan: "+$20/yr",
    },
    {
      id: 3,
      title: "Customizable profile",
      content: "Custom theme on your profile",
      plan: "+$20/yr",
    },
  ];
  const [selectedAddOn, setSelectedAddOn] = useState([])
  console.log(userPlan)
  console.log(selectedAddOn)

  const selectAddOn = (plan) => {
    const isSelected = selectedAddOn.some((addOn) => addOn.id === plan.id);
    if (isSelected) {
      setSelectedAddOn(selectedAddOn.filter((addOn) => addOn.id !== plan.id));
    } else {
      setSelectedAddOn([...selectedAddOn, plan]);
    }
  };
  const submitSelectedAddOn = () => {
    const updatedUserPlan = {...userPlan,  selectedAddOn}
    setUserPlan(updatedUserPlan)
    increaseStep()
  }






  return (
    <form className="w-full h-full desktop:w-full">
      <CardStep>
        <div className="mb-[1.5rem] desktop:mb-[2.5rem]">
          <h1 className="text-head-mb text-blue mb-[0.5rem] desktop:text-head desktop:mb-[1rem]">Pick add-ons</h1>
          <p className="text-body-mb text-coolgray desktop:text-body">
            Add-ons help enhance your gaming experience.
          </p>
        </div>

        {options.map((option, index) => (
          <PlanAddons option={option} key={option.id} index={index} selectedAddOn={selectedAddOn} selectAddOn={selectAddOn} />
        ))}
      </CardStep>

      <div id="submit--container" className="desktop:static absolute bottom-[0] bg-white w-[375px] h-[72px] p-[1rem] desktop:w-full desktop:px-[0] flex justify-between items-center desktop:mt-[4.2rem]">
        <div>
          <button onClick={decreaseStep} className="text-coolgray text-btn-mb hover:text-blue font-bold">Go Back</button>
        </div>
        <div>
          <button onClick={submitSelectedAddOn} className="w-[97px] h-[40px] text-white font-bold text-btn-mb bg-blue rounded-md">
            Next Step
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddOns;
