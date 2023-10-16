import React from 'react'

const Space = ({size}) => {
    if(size==='medium'){
        return (
          <div className='my-2'/>
        )
    }
    else if(size==='large'){
        return(
            <div className='my-32'/>
        )
    }
}

export default Space