import React from 'react'
import Link from 'next/link'
import { IIconButton } from '../../lib/interfaces'

const IconButton: React.FC<IIconButton> = (props) => {

    const classname = `text-darkhalf`

    if (props.href) {
        return (
            <Link href={props.href}>
                <button
                    className={classname}
                >
                    <props.icon size={props.size} className='text-darkhalf'/>
                </button>
            </Link>
        )
    }

    return (
        <button
            className={classname}
            onClick={props.onClick}
        >
            <props.icon size={props.size} className='text-darkhalf'/>
        </button>
    )
}

export default IconButton