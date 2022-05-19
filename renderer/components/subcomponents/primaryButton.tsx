import React from 'react'
import { IPrimaryButton } from '../../lib/interfaces'

const PrimaryButton: React.FC<IPrimaryButton> = (props) => {
    return (
        <button
            className='bg-accent hover:bg-accenthover rounded-sm p-4 py-1 transition-colors'
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}

export default PrimaryButton