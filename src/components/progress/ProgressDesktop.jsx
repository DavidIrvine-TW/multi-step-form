import React from "react";

function Progress({ step }) {
  const style =
    "rounded-full border border-white w-[33px] h-[33px] items-center justify-center flex font-bold text-btn-mb text-white";
  const styleActive =
    "bg-lightblue text-black rounded-full border border-white w-[33px] h-[33px] items-center justify-center flex font-bold";

  return (
    <header
      id="progress"
      className=" gap-[1rem] px-[2.5rem] py-[2rem] desktop:inline-flex flex-col hidden w-full"
    >
      <div className="flex gap-[1.5rem]  mb-[2rem] ">
        <div key={1} className={step === 1 ? `${styleActive}` : `${style}`}>
          1
        </div>
        <div>
          <p className="text-subhead-mb text-coolgray mb-[0.3rem]">STEP 1</p>
          <p className="text-btn-mb text-white tracking-[1px]">YOUR INFO</p>
        </div>
      </div>

      <div className="flex gap-[1.5rem] mb-[2rem]">
        <div key={2} className={step === 2 ? `${styleActive}` : `${style}`}>
          2
        </div>
        <div>
          <p className="text-subhead-mb text-coolgray mb-[0.3rem]">STEP 2</p>
          <p className="text-btn-mb text-white tracking-[1px]">SELECT A PLAN</p>
        </div>
      </div>

      <div className="flex gap-[1.5rem] mb-[2rem]">
        <div key={3} className={step === 3 ? `${styleActive}` : `${style}`}>
          3
        </div>
        <div>
          <p className="text-subhead-mb text-coolgray mb-[0.3rem]">STEP 3</p>
          <p className="text-btn-mb text-white tracking-[1px]">ADD-ONS</p>
        </div>
      </div>

      <div className="flex gap-[1.5rem] mb-[2rem]">
        <div key={4} className={step === 4 ? `${styleActive}` : `${style}`}>
          4
        </div>
        <div>
          <p className="text-subhead-mb text-coolgray mb-[0.3rem]">STEP 4</p>
          <p className="text-btn-mb text-white tracking-[1px]">SUMMARY</p>
        </div>
      </div>
    </header>
  );
}

export default Progress;
