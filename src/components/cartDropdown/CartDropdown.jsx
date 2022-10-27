import React from 'react'
import "./CartDropdown.css"
import Dropdown from "react-bootstrap/Dropdown";


export default function CartDropdown({ pd }) {

    console.log("product", pd)
    return (
        <>
            <Dropdown.Item>
                <div className='d-flex g-2 mx-4 mb-2 pb-2 item-wrapper'>
                    <img src={pd.image} alt="" className='me-2' />
                    <span>
                        <p className='fw-bolder'>{pd.model} {pd.brand} {pd.year} <br /> - {pd.color}</p>
                        <span> {pd.quantity} X ${pd.price} </span>
                    </span >
                </div>
            </Dropdown.Item>
        </>
    )
}
