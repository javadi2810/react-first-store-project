import type React from "react";
import Navbar from "../navbar/Navbar";

type tLayout={
    children:React.ReactNode;
    className?:string;

}

function Layout({children , className}:tLayout) {
  return (
        <div className={` ${className}`}>
            <Navbar />
            {children}
        </div>
  )
}

export default Layout