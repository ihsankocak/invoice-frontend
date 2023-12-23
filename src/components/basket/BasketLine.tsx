export interface BasketLineProps{
    productName:string,
    productCount:number,
    price:number,
    storeName:string
}
export const BasketLine=(props:BasketLineProps)=>{
return <>
        {props.productName+ ' ----------- *'+props.productCount+' ------------ '+props.price}
        </>
}
