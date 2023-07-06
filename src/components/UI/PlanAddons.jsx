import React from "react";

function PlanAddons({ option, selectedAddOn, selectAddOn }) {

  const isSelected = selectedAddOn && selectedAddOn.some((addOn) => addOn.id === option.id);
  console.log(isSelected)

  const btnStyle = `hover:border hover:border-blue border border-lightgray p-[1rem] rounded-xl flex items-center justify-between mb-[1rem] 
                    ${isSelected ? "bg-magnolia border border-blue" : ""}`;

  const handleCheckboxChange = () => {
    selectAddOn(option);
  };

  return (
    <div className={btnStyle}>
      <div className="flex gap-[1rem]">
        <div>
          <input
            className="w-[20px] h-[20px]"
            type="checkbox"
            checked={isSelected}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="text-left">
          <p className="text-btn-mb text-blue font-bold">{option.title}</p>
          <p className="text-coolgray text-subhead-mb font-med">
            {option.content}
          </p>
        </div>
      </div>

      <div>
        <p className="text-blue text-subhead-mb">{option.plan}</p>
      </div>
    </div>
  );
}

export default PlanAddons;
