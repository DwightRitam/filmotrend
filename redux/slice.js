import { createSlice } from "@reduxjs/toolkit";


const initialState={
    setcartno: 0,
    cart:0,
    addcartdata:{},
    tshirts:[],
    webtoken:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addcart:(state,{payload})=>{
            state.cart=payload
        },
        addcartdetails:(state,{payload})=>{
            state.addcartdata=payload
        },
        addtshirts:(state,{payload})=>{
            state.tshirts=payload
        },
        addstatecart:(state,{payload})=>{
            state.setcartno=payload
        },
        setwebtoken:(state,{payload})=>{
            state.webtoken=payload
        }
    }
})

export const {addcart,addstatecart,addcartdetails,addtshirts,setwebtoken}=cartSlice.actions;
export const getstatedata=(state)=> state.cart.cart
export const getaddcartdetails=(state)=> state.cart.addcartdata
export const getwebtokendeails=(state)=> state.cart.webtoken
export const gettshirts=(state)=> state.cart.tshirts
export const getstatecartdata=(state)=> state.cart.setcartno

export default cartSlice.reducer;

