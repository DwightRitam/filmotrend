import { createSlice } from "@reduxjs/toolkit";


const initialState={
    
    cart:0,
    addcartdata:{},
    tshirts:[],
    shirts:[],
    jeans:[],
    sweatshirts:[],
    watches:[],
    sneakers:[],
    blazers:[],
    sunglasses:[],
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
        addshirts:(state,{payload})=>{
            state.shirts=payload
        },
        addjeans:(state,{payload})=>{
            state.jeans=payload
        },
        addsweatshirts:(state,{payload})=>{
            state.sweatshirts=payload
        },
        addwatches:(state,{payload})=>{
            state.watches=payload
        },
        addsneakers:(state,{payload})=>{
            state.sneakers=payload
        },
        addblazers:(state,{payload})=>{
            state.blazers=payload
        },
        addsunglasses:(state,{payload})=>{
            state.sunglasses=payload
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

export const {addcart,addstatecart,addcartdetails,addtshirts,addjeans,addsneakers,addsweatshirts,addblazers,addsunglasses,addwatches,setwebtoken,newallprodtotalcartdetails,addcartresponse,addarrayofprodid,addshirts}=cartSlice.actions;
export const getstatedata=(state)=> state.cart.cart
export const getcartresponse=(state)=> state.cart.cartresponse
export const newgetallprodtotalcartdetails=(state)=> state.cart.newallproducttotalcartdata           

export const getaddcartdetails=(state)=> state.cart.addcartdata
export const getwebtokendeails=(state)=> state.cart.webtoken
export const gettshirts=(state)=> state.cart.tshirts
export const getshirts=(state)=> state.cart.shirts
export const getjeans=(state)=> state.cart.jeans
export const getswatshirts=(state)=> state.cart.sweatshirts
export const getwatches=(state)=> state.cart.watches
export const getsneakers=(state)=> state.cart.sneakers
export const getsunglasses=(state)=> state.cart.sunglasses
export const getblazers=(state)=> state.cart.blazers
export const getaddarrayofprodid=(state)=> state.cart.arrayofprodid

export default cartSlice.reducer;

