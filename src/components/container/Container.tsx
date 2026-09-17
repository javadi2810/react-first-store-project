import React from 'react'
type TContainer={
    children:React.ReactNode;
    className?:string;
}

function Container({children ,className}:TContainer) {
  return (
    <div className={`container mx-auto p-5 ${className}`}>
        {children}
    </div>
  )
}

export default Container;