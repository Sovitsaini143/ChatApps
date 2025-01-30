import React from 'react'

function loader() {
  return (
    <div className='flex h-screen items-center justify-center bg-sla'>
      <div className="flex w-58 flex-col gap-4">
  <div className="skeleton h-40 w-full"></div>
  <div className="skeleton h-6 w-60"></div>
  <div className="skeleton h-6 w-full"></div>
  <div className="skeleton h-6 w-full"></div>
</div>
    </div>
  )
}

export default loader
