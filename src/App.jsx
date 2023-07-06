import React, { useState } from "react";
import Background from "./components/Background";
import PersonalInfo from "./components/personal/PersonalInfo";
import Progress from "./components/progress/Progress";
import ProgressDesktop from "./components/progress/ProgressDesktop"
import SelectPlan from "./components/personal/SelectPlan";
import AddOns from "./components/personal/AddOns";
import FinishingUp from "./components/personal/FinishingUp";
import ThankYou from "./components/personal/ThankYou";
import backImgDk from './assets/bg-sidebar-desktop.svg'

function App() {
  const [step, setStep] = useState(1);
  const [userPlan, setUserPlan] = useState({});

  const increaseStep = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const decreaseStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  let componentToRender;

  switch (step) {
    case 1:
      componentToRender = (
        <PersonalInfo 
        increaseStep={increaseStep} 
        setUserPlan={setUserPlan} />
      );
      break;
    case 2:
      componentToRender = (
        <SelectPlan
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          userPlan={userPlan}
          setUserPlan={setUserPlan}
        />
      );
      break;
    case 3:
      componentToRender = (
        <AddOns
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          userPlan={userPlan}
          setUserPlan={setUserPlan}
        />
      );
      break;
    case 4:
      componentToRender = (
        <FinishingUp
          increaseStep={increaseStep}
          decreaseStep={decreaseStep}
          userPlan={userPlan}
        />
      );
      break;
    case 5:
      componentToRender = <ThankYou />;
      break;
    default:
      componentToRender = null;
  }

  return (
    <div
      id="wrapper"
      className="relative font-ubuntu h-screen w-screen desktop:flex desktop:justify-center desktop:items-center overflow-hidden mx-auto"
    >
      <Background />
      <Progress step={step} />
      <main className="overflow-hidden ">

        <div className="desktop:bg-white desktop:w-[940px] desktop:flex desktop:rounded-xl desktop:p-[1rem] ">
          <div className="relative">
            <img className="hidden desktop:inline-block" src={backImgDk}/>
            <div className=" absolute top-[0]">
              <ProgressDesktop step={step}/>
            </div>
          </div>
          <div className="desktop:pl-[6.25rem]">{componentToRender}</div>
        </div>

      </main>
    </div>
  );
}

export default App;
