import React from "react";

function Button(props) {
    return (
        <button
            {...props}
            className={`font-bold duration-300 hover:rounded-xl text-sm text-white bg-[#00000090] p-2 rounded-md shadow-sm shadow-[#ffffff50] ${props.className}`}
        >
            {props.children}
        </button>
    );
}

export default Button;
