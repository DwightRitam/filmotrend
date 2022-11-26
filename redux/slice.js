import { createSlice } from "@reduxjs/toolkit";


const initialState={
    
    cart:0,
    addcartdata:{},
    tshirts:[],
    webtoken:[],
    newallproducttotalcartdata:[],
    cartresponse:false,
    arrayofprodid:[]
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
        addarrayofprodid:(state,{payload})=>{
            state.arrayofprodid=payload
        },
        setwebtoken:(state,{payload})=>{
            state.webtoken=payload
        },
        newallprodtotalcartdetails:(state,{payload})=>{
            state.newallproducttotalcartdata=payload
        },
        addcartresponse:(state,{payload})=>{
            state.cartresponse=payload
        }
    }
})

export const {addcart,addstatecart,addcartdetails,addtshirts,setwebtoken,newallprodtotalcartdetails,addcartresponse,addarrayofprodid}=cartSlice.actions;
export const getstatedata=(state)=> state.cart.cart
export const getcartresponse=(state)=> state.cart.cartresponse
export const newgetallprodtotalcartdetails=(state)=> state.cart.newallproducttotalcartdata           

export const getaddcartdetails=(state)=> state.cart.addcartdata
export const getwebtokendeails=(state)=> state.cart.webtoken
export const gettshirts=(state)=> state.cart.tshirts
export const getaddarrayofprodid=(state)=> state.cart.arrayofprodid

export default cartSlice.reducer;

