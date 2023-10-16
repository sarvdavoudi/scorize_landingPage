import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className=" bg-primary-color text-tertiary-color rounded-xl p-3 flex ">{children}</button>
  )
}

export default PrimaryButton