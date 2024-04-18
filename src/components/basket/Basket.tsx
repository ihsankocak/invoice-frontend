import {Card, CardBody, CardFooter, CardHeader} from "@chakra-ui/card";
import {BasketLine, BasketLineProps} from "./BasketLine";
import {Avatar, Button, Divider, Flex, Heading, StackDivider, Text} from "@chakra-ui/react";
import {Item} from "chakra-ui-autocomplete";
import useDomainApi from "../../hooks/useDomainApi";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import useInvoiceTranslation from "../../hooks/useInvoiceTranslation";


interface BasketProps {
    storeName: string,
    basketLinePropsArray: BasketLineProps[],
    onClear: (storeName: string) => void,
    onDelete: (storeName: string,productName: string) => void,
}

export const Basket = (props: BasketProps) => {
    const [storeNameKeyValueMap, setStoreNameKeyValueMap] = useState({});
    const domainApi = useDomainApi();
    const t = useInvoiceTranslation("basket");
    let totalPrice: number = 0;
    props.basketLinePropsArray.forEach(blp => totalPrice = totalPrice + (blp.price * blp.productCount))

    const customRender = (selected: Item) => {
        return (
            <Flex flexDir="row" alignItems="center">
                <Avatar mr={2} size="sm" name={selected.label}/>
                <Text>{selected.label}</Text>
            </Flex>
        )
    }
useEffect(()=>{
    domainApi.keyvalue.getStoreNameKeyValuesMap().then(result => {
        setStoreNameKeyValueMap(result.data);
        console.log(storeNameKeyValueMap);
    });
},[])

    return <Card className={"shopping-card shopping-card-" + `${props.storeName}`} id={props.storeName} size={"sm"}>
        <CardHeader>
            <Heading size={"sm"}>{storeNameKeyValueMap[props.storeName as (keyof typeof storeNameKeyValueMap)]}
            </Heading>
        </CardHeader><CardBody>{
        props.basketLinePropsArray.map(
            blp => <><BasketLine price={blp.price} productCount={blp.productCount} productName={blp.productName}
                                 storeName={blp.storeName}/><Button
                onClick={() => props.onDelete(blp.storeName,blp.productName)}>{t("delete")}</Button><br></br></>)
    }</CardBody><Divider/><CardFooter>Toplam: {totalPrice} TL <Button
        onClick={() => props.onClear(props.storeName)}>{t("clear")}</Button></CardFooter></Card>
}


