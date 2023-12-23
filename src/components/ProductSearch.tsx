import { CUIAutoComplete, CUIAutoCompleteProps, Item } from "chakra-ui-autocomplete";
import React, { useEffect, useState } from "react";
import useDomainApi from "../hooks/useDomainApi";
import { CollectionModelEntityModelProduct, DomainApi, EntityModelProduct, Product } from "../rest/DomainApi";
import { Input } from "@chakra-ui/react";
import { ProductItem } from "../types/Product";


interface Props{
    onSelectedItemsChanged:(selectedItems:ProductItem[])=>void
    selectedItems:ProductItem[]
}

const ProductSearch=(props:Props)=>{
    const domainApi: DomainApi<any> = useDomainApi();
    const [productNames, setProductNames] = useState<ProductItem[]>([]);
  
  useEffect(()=>{
refreshProductNames();
  },[]);
const refreshProductNames=()=>{
    domainApi.product.getTodaysProductsOfAllStores().then((result)=>{
        const productNameItems:ProductItem[]=[];
        console.log(result.data);
        if(result.data)
        result.data.map((product:Product)=>productNameItems.push({label:'('+product.storeName+','+product.price+' TL)'
      +product.name!,value:product.storeName+product.name!,price:product.price,name:product.name,storeName:product.storeName}))
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
    domainApi.product.searchProducts(inputValue).then(result=>{
      const productNameItems:ProductItem[]=[];
      if(result.data)
      result.data.map((product:Product)=>productNameItems.push({label:'('+product.storeName+','+product.price+' TL)'+product.name!
    ,value:product.storeName+product.name!,price:product.price,name:product.name,storeName:product.storeName}));
      setProductNames(productNameItems);
    })
    let words:string[]=inputValue.split(" ");
    return items.filter(i=>i.value.toLocaleLowerCase("tr-TR").includes(inputValue.toLocaleLowerCase("tr-TR")));
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
    labelStyleProps={{ bg: 'gray.100', pt: '4'}}
          optionFilterFunc={optionFilterFunc}
          hideToggleButton={true}
          disableCreateItem={true}
    
        />


    
  );
};
export default ProductSearch;

