import React from 'react'

function Switch({billingHandler}) {

  


  return (
    <label className="relative inline-block w-[38px] h-[20px]" aria-label="Dark mode">
    <input 
    className="peer opacity-0 w-0 h-0" 
    type="checkbox" 
    // checked={props.checked} 
    onChange={billingHandler}
    />
    <span className={`absolute cursor-pointer inset-0 rounded-[20px] bg-blue dark:bg-purple before:absolute 
    before:content-[''] before:h-[14px] before:w-[14px] before:rounded-full before:left-[3px] 
    before:bottom-[3px]  before:bg-white peer-checked:before:translate-x-[18px] 
    before:transition-all`}></span>
  </label>
  )
}

export default Switch