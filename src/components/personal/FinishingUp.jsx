import React from "react";
import CardStep from "../UI/CardStep";
import FinishUpCard from "../UI/FinishUpCard";

function FinishingUp({increaseStep, decreaseStep, userPlan}) {

  const {selectedAddOn} =  userPlan
  console.log(userPlan)
  console.log(selectedAddOn)

    // Extract the plan values from userPlan and selectedAddOn
    const planValues = [
      userPlan.plan,
      ...userPlan.selectedAddOn.map((addOn) => addOn.plan),
    ];
  
    // Calculate the total based on planValues and userPlan billing
    const total = planValues.reduce((sum, amount, index) => {
      const numberString = amount.replace(/[^\d.-]/g, "");
      const number = parseFloat(numberString);
      if (index === 0 && userPlan.billing === "Monthly") {
        return sum + number * 12; // Multiply the first plan by 12 if billing is Monthly
      }
      return sum + number;
    }, 0);

  return (
    <form className="w-full h-full desktop:w-full">
      <CardStep>
        <div className="mb-[1.5rem] desktop:mb-[2.5rem]">
          <h1 className="text-head-mb text-blue mb-[0.5rem] desktop:text-head desktop:mb-[1rem]">
            Finishing up...
          </h1>
          <p className="text-body-mb text-coolgray desktop:text-body">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="w-full bg-magnolia rounded-xl p-[1rem]">
          <div className="flex items-center justify-between border-b border-lightgray pb-[.75rem]">
            <div className="text-btn-mb">
              <p className="font-med text-blue">{userPlan.title} ({userPlan.billing})</p>
              <p className="underline text-coolgray">Change</p>
            </div>
            <div>
              <p className="font-bold text-blue text-btn-mb">{userPlan.plan}</p>
            </div>
          </div>
          
          {selectedAddOn &&
            selectedAddOn.map((addOn, index) => (
              <FinishUpCard addOn={addOn} index={index} key={addOn.id} />
            ))}

        
        </div>

        <div className="flex items-center justify-between mt-[1.5rem] px-[1rem]">
          <span className="text-coolgray text-btn-mb">Total (per year)</span>
          <span className="text-body-mb text-purpleblue font-bold">
            ${total}/yr
          </span>
        </div>
      </CardStep>

      <div
        id="submit--container"
        className="desktop:static  absolute bottom-[0] bg-white w-[375px] h-[72px] p-[1rem] px-[0] desktop:w-full flex justify-between items-center desktop:mt-[2rem]"
      >
        <div>
          <button onClick={decreaseStep} className="text-coolgray text-btn-mb hover:text-blue font-bold">
            Go Back
          </button>
        </div>
        <div>
          <button  onClick={increaseStep} className="w-[97px] h-[40px] text-white font-bold text-btn-mb bg-purpleblue rounded-md hover:bg-pastelblue">
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
}

export default FinishingUp;
