import React from 'react'
import {Link} from 'react-router-dom'

export default function EmailButton({mailTo, label}) {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailTo;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
}