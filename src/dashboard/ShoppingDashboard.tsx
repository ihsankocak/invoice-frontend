import { Button } from "@chakra-ui/react";
import ProductSearch from "../components/ProductSearch"
import { Item } from "chakra-ui-autocomplete";
import { useState } from "react";

const ShoppinDashboard=()=>{
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    
    return <>
    <ProductSearch selectedItems={selectedItems} onSelectedItemsChanged={(items:Item[])=>setSelectedItems(items)}/>
   
    </>
}
export default ShoppinDashboard;