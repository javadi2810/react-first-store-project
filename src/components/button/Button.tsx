import type { ComponentProps } from "react";
import type React from "react";

type Tbutton=ComponentProps<"button">;

function Button({children ,...rest}:Tbutton) {
    return (
        <button  {...rest}>
            {children}
        </button>
    )
}

export default Button