import React from 'react'
import {Outlet} from 'react-router-dom'

const Mainheader = () => {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default Mainheader