import React from 'react'

const action = (window.location.pathname.split('/')[2]);

export default function Action() {

  return (
    <div className="bg-black d-flex justify-content-center" style={{color: "white"}}>
        <h1 className="bg-black mb-0">
            {action} data
        </h1>
    </div>
  )
}
