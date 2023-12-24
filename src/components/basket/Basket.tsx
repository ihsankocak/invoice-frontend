
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { BasketLine, BasketLineProps } from "./BasketLine";
import { Avatar, Divider, Flex, Heading, StackDivider,Text } from "@chakra-ui/react";
import { Item } from "chakra-ui-autocomplete";



interface BasketProps{
    storeName:string,
basketLinePropsArray:BasketLineProps[]
}

export const Basket=(props:BasketProps)=>{
    let totalPrice:number=0;
    props.basketLinePropsArray.forEach(blp=>totalPrice=totalPrice+(blp.price*blp.productCount))

    const customRender = (selected:Item) => {
        return (
          <Flex flexDir="row" alignItems="center">
            <Avatar mr={2} size="sm" name={selected.label} />
            <Text>{selected.label}</Text>
          </Flex>
        )
      }
return <Card id={props.storeName}  backgroundImage={"url(/"+`${props.storeName}`+".png)"} style={{width:600}} size={"sm"}> <CardHeader><Heading size={"sm"}>{props.storeName}</Heading></CardHeader><CardBody>{
    props.basketLinePropsArray.map(
    blp=> <><BasketLine  price={blp.price} productCount={blp.productCount} productName={blp.productName} storeName={blp.storeName}/><br></br></>)
    }</CardBody><Divider /><CardFooter>Toplam: {totalPrice} TL</CardFooter></Card>
 }


