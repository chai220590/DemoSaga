import React from 'react'

function Card({ children, className }) {
    return (
        <div className={`border-black border bg-[#00000090] p-4 rounded-md ${className}`}>{children}</div>
    )
}

export default Card