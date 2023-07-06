import React from 'react'

function Progress({step}) {

    const style = 'rounded-full border border-white w-[33px] h-[33px] items-center justify-center flex font-bold text-btn-mb text-white'
    const styleActive = 'bg-lightblue text-black rounded-full border border-white w-[33px] h-[33px] items-center justify-center flex font-bold'

  return (
    <header id="progress" className='flex gap-[1rem] px-[6.125rem] py-[2rem] desktop:hidden  relative z-[1]'>
        <div key={1} className={step === 1 ? `${styleActive}` : `${style}`}>1</div>
        <div key={2} className={step === 2 ? `${styleActive}` : `${style}`}>2</div>
        <div key={3} className={step === 3 ? `${styleActive}` : `${style}`}>3</div>
        <div key={4} className={step === 4 ? `${styleActive}` : `${style}`}>4</div>
    </header>
  )
}

export default Progress