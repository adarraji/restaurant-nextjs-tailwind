import { ActionTypes, CartType } from "@/types/types"
import { create } from "zustand"

const INITIAL_STATE = {
    products: [],
    totalItems: 0,
    totalPrice: 0,
};


export const useCartStore = create<CartType & ActionTypes>((set, get) => ({
    products: INITIAL_STATE.products,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,

    addToCart(item) {
        set((state) => ({
            products: [...state.products, item],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price,
        }))
    },
    removeFromCart(item) {
        set((state) => ({
            products: state.products.filter((product) => product.id !== item.id),
            totalItems: state.totalItems - item.quantity,
            totalPrice: state.totalPrice - item.price,
        }))
    },
}))

// export const useCartStore = create< CartType & ActionTypes >((set, get) => ({
//     peoducts: INITIAL_STATE.products,
//     totlaItems: INITIAL_STATE.totlaItems,
//     totalPrice: INITIAL_STATE.totalPrice,
//     addTocart(item) {
//         set((state) => ({
//             peoducts: [...state.products, item],
//             totalItems: state.totalItems + item.quantitiy,
//             totalPrice: state.totalPrice + item.price,
//         }))
//     },
//     removeFromCart(item) {
//         set((state) => ({
//             peoducts: state.products.filter(product => product.id !== item.id),
//             totalItems: state.totalItems - item.quantitiy,
//             totalPrice: state.totalPrice + -item.price
//         }))
//     },
// }))

// export const useCaerStore = create<CartType & ActionType>((get, set) => ({
//     peoducts: INITITAL_STATE.products,
//     totlaItems: INITITAL_STATE.totlaItems,
//     totalPrice: INITITAL_STATE.totalPrice,
//     addTocart(item) {
//         set(state) => ({
//             products: ...state.products,
//             quantitiy: state.totalItems + item.quantitiy,
//             totalPrice: state.totalPrice + item.price
//         })
//     }

// }))