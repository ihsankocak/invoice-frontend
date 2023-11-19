import { CUIAutoComplete, Item } from "chakra-ui-autocomplete";
import React, { useEffect, useState } from "react";
import useDomainApi from "../hooks/useDomainApi";
import { DomainApi } from "../rest/DomainApi";
interface Props{
    onSelectedItemsChanged:(selectedItems:Item[])=>void
    selectedItems:Item[]
}
const ProductSearch=(props:Props)=>{
    const domainApi: DomainApi<any> = useDomainApi();
    const [productNames, setProductNames] = useState<Item[]>([]);
  
  useEffect(()=>{
refreshProductNames();
  },[]);
const refreshProductNames=()=>{
    domainApi.invoiceLine.getAllProductNames().then((result)=>{
        const productNameItems:Item[]=[];
        result.data.map(productName=>productNameItems.push({label:productName,value:productName}))
        setProductNames(productNameItems)});
}
  
  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      props.onSelectedItemsChanged(selectedItems);
    }
  };
    return  (
        <CUIAutoComplete
          label="Choose product"
          placeholder="Type a Product"
          
          items={productNames}
          selectedItems={props.selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          hideToggleButton={true}
          disableCreateItem={true}
        />
  );
};
export default ProductSearch;