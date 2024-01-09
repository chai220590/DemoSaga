import React from 'react'
import Text from './Text'

function Input(props) {
    return (
        <div className={`flex bg-[#000000] items-center shadow-sm shadow-[#ffffff50] ${props.className}`}>
            <input style={{
                outline: "none"
            }} {...props} className={`flex-1 bg-[#000000] p-2 font-bold duration-300 text-sm text-white ${props.className}`} />

            {props.isLoading && <Text className="text-white text-sm mr-2">
                Loading...
            </Text>}
        </div>
    )
}

export default Input