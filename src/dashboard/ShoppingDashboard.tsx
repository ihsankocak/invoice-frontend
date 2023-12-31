import { Button, SimpleGrid } from "@chakra-ui/react";
import ProductSearch from "../components/ProductSearch"
import { Item } from "chakra-ui-autocomplete";
import { useState } from "react";


import { BasketLineProps } from "../components/basket/BasketLine";
import { ProductItem } from "../types/Product";
import { Basket } from "../components/basket/Basket";
import _ from "lodash";

const ShoppingDashboard=()=>{
    const [selectedItems, setSelectedItems] = useState<ProductItem[]>([]);
    let basketLineProps:BasketLineProps[]=[];
    
    selectedItems.map(si=>basketLineProps.push({price:si.price!,productCount:1,productName:si.name!,storeName:si.storeName!}));
    const groupedByStoreNameItems=_.groupBy(basketLineProps,({storeName})=>storeName);
    const storeNames:string[]=Object.keys(groupedByStoreNameItems);
    
    return <>
    <ProductSearch selectedItems={selectedItems} onSelectedItemsChanged={(items:ProductItem[])=>setSelectedItems(items)}/>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 1fr))'>
    {storeNames.map((sn=><Basket storeName={sn} basketLinePropsArray={basketLineProps.filter(bl=>bl.storeName===sn)}/>))}
    </SimpleGrid>
    </>
}
export default ShoppingDashboard;