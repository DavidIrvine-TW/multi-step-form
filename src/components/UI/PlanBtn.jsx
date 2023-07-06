import React from 'react'

function PlanBtn({option, billing, selectedPlan, onSelect}) {

  const isSelected = option.id === selectedPlan.id;

  const btnStyle = `p-[1rem] border border-lightgray rounded-xl w-full mb-[1rem] hover:border hover:border-blue ${isSelected ? 'bg-magnolia border-blue' : '' }`



  return (
    <button type="button" className={btnStyle} onClick={() => onSelect(option)}>
            <div className="flex gap-[1rem] desktop:flex desktop:flex-col">
                <div>
                    <img src={option.path} alt={option.alt}/>
                </div>
                <div className="text-left">
                    <p className="font-med text-blue text-body-mb ">{option.title}</p>
                    <p className="text-coolgray text-btn-mb mb-[6px]">{option.plan}</p>
                    <div className='w-full desktop:h-[20px]'>{billing === 'Monthly' ? ' ' : (<p className='text-blue text-subhead-mb'>2 months free</p>)}</div>
                </div>
            </div>
    </button>
  )
}

export default PlanBtn