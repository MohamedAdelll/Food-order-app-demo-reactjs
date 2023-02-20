import { createContext, useReducer } from "react";

const cartContext = createContext({
    items: [],
    totalAmount: 0,
    addCartItem: function (item) { },
    removeCartItem: function (id) { }
})

function cartReducer(state, action) {
    console.log("State: ", state, "Action: ", action)
    const newState = { ...state }
    if (action.message === 'ADD') {
        const updatedTotalAmount = newState.totalAmount + action.item.amount
        const currItem = newState.items.find((menu) => menu.id === action.item.id)
        if (currItem) {
            currItem.amount += action.item.amount
            return { totalAmount: updatedTotalAmount, items: newState.items }
        }
        return { totalAmount: updatedTotalAmount, items: [...newState.items, action.item] }
    }
    if (action.message === 'REMOVE') {
        const currItem = newState.items.find((menu) => menu.id === action.id)
        if (!currItem) return newState
        const updatedTotalAmount = newState.totalAmount - 1
        currItem.amount -= 1
        if (currItem.amount === 0) {
            const index = newState.items.indexOf(currItem)
            newState.items.splice(index, 1)
        }
        return { totalAmount: updatedTotalAmount, items: newState.items }
    }
}


function CartContextProvider(props) {
    const [cartObj, dispatchCartObj] = useReducer(cartReducer, { items: [], totalAmount: 0 })
    console.log(cartObj)
    function addItemToCart(item) {
        // console.log(item)
        dispatchCartObj({ message: 'ADD', item })
    }

    function removeItemFromCart(id) {
        dispatchCartObj({ message: 'REMOVE', id })

    }
    return (
        <cartContext.Provider value={{
            ...cartObj,
            addCartItem: addItemToCart,
            removeCartItem: removeItemFromCart,
        }}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext
export { CartContextProvider }