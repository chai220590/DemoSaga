import React from "react";

function Text(props) {
    return (
        <div
            {...props}
            className={`text-sm text-white ${props.className}`}
        >
            {props.children}
        </div>
    );
}

export default Text;
