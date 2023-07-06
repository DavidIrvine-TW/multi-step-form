import React from 'react'

function FinishUpCard({addOn}) {
  return (
    <div className="flex items-center justify-between py-[.75rem] text-coolgray text-btn-mb">
            <span>{addOn.title}</span>
            <span className="text-blue">{addOn.plan}</span>
    </div>
  )
}

export default FinishUpCard