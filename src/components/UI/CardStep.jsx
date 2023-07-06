import React from 'react'

function CardStep(props) {
  return (
    <article id="card--container" className='bg-white w-[343px] desktop:w-[450px] desktop:ml-[0] ml-[1rem] desktop:px-[0px] px-[1.5rem] py-[2rem] rounded-xl fade-in'>
        {props.children}
    </article>
  )
}

export default CardStep