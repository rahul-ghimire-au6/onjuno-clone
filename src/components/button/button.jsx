import React, { Fragment } from 'react'
import './button.css'

export default function Button1({classnamevalue,buttonvalue}) {
    return (
        <Fragment>
            <button className={classnamevalue}>{buttonvalue}</button>
        </Fragment>
    )
}
