import React from 'react'
type TContainer={
    children:React.ReactNode;
    className?:string;
}

function Container({children ,className}:TContainer) {
  return (
    <div className={`container ${className}`}>
        {children}
    </div>
  )
}

export default Container;