"use client"

import { useEffect, useState } from "react"
import ModalBox from "./ModalBox";

export default function Word({ word, explanation }) {
    const [ showModal, setShowModal ] = useState(false);

    return (
        <>
            <span onMouseEnter={() => setShowModal(true)} onMouseLeave={() => setShowModal(false)} className={"cursor-pointer hover:underline decoration-dashed"}>{word}</span>
            {
                showModal ? <ModalBox>
                    
                </ModalBox> : <></>
            }
        </>
    )
}