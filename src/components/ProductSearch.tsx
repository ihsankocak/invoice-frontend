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
    domainApi.product.getAllProductNamesOfAllStores().then((result)=>{
        const productNameItems:Item[]=[];
        if(result.data)
        result.data.map(productName=>productNameItems.push({label:productName,value:productName}))
        setProductNames(productNameItems)});
}
  
  const handleSelectedItemsChange = (selectedItems?: Item[]) => {
    if (selectedItems) {
      props.onSelectedItemsChanged(selectedItems);
    }
  };
  const optionFilterFunc=(items: Item[], inputValue: string) => {
    if(inputValue.length<3){
return [];
    }
    return items.filter(i=>i.value.includes(inputValue));
  }
    return  (
        <CUIAutoComplete
          label="Choose product"
          placeholder="Type a Product"
          
          items={productNames}
          selectedItems={props.selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          optionFilterFunc={optionFilterFunc}
          hideToggleButton={true}
          disableCreateItem={true}
        />
  );
};
export default ProductSearch;