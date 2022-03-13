import React from 'react'
const Demo = ({ color, text }:{ color: string, text: string }) => {
    return <div style={{ color: color || ''}}>
        {text}
    </div>
}

export default Demo