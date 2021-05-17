import React from 'react'
import {FcApproval} from "react-icons/fc"
type Prop = {
    title: string
}

export const Toast = (title: Prop) =>{
    return (
        <div className="flex flex-row items-center fixed z-10 top-12 right-3 p-2 md:text-lg bg-white border-b-4 border-green-600 rounded">
            <p><FcApproval/></p>
            <p className="ml-2">{title.title}</p>
        </div>
    )
}
