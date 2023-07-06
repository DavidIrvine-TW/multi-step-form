import React from "react";
import CardStep from "../UI/CardStep";
import thankyou from "../../assets/icon-thank-you.svg";

function ThankYou() {
  return (
    <CardStep>
      <div className="flex items-center justify-center mt-[3rem] mb-[1.5rem] desktop:w-full ">
        <img src={thankyou} alt="Thank you icon" />
      </div>
      <div className="text-center text-head-mb text-blue mb-[0.5rem] desktop:text-head desktop:mb-[1rem]">
        <h1>Thank You!</h1>
      </div>
      <div className="text-center text-body-mb text-coolgray mb-[3rem]">
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </CardStep>
  );
}

export default ThankYou;
