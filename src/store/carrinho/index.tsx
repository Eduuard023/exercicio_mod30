import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartItem {
  id: string
  name: string
  price: number
}

interface CartState {
  items: CartItem[]
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  } as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions
export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export default cartSlice.reducer
