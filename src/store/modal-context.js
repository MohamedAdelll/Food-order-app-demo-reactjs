import { createContext, useState } from "react";

const modalContext = createContext({ showModal: false, setShowModal: () => { } })

function ModalContextProvider(props) {
    const [showModal, setShowModal] = useState(false)
    console.log(showModal)
    return (
        <modalContext.Provider value={{ showModal, setShowModal }}>
            {props.children}
        </modalContext.Provider>
    )
}

export default modalContext
export { ModalContextProvider }