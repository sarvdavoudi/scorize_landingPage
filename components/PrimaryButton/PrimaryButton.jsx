import React from 'react'

const PrimaryButton = ({children}) => {
  return (
    <button className=" bg-primary-color text-tertiary-color rounded-xl pt-3 pb-3 pl-4 pr-4 flex mt-0">{children}</button>
  )
}

export default PrimaryButton