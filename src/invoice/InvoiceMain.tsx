import { Select } from "@chakra-ui/react"
import { useTransform } from "framer-motion"
import { useSSR, useTranslation } from "react-i18next";
import { InvoiceForm } from "./InvoiceForm";
import { InvoiceFormBIM } from "./InvoiceFormBIM";
import { InvoiceFormGIMSA } from "./InvoiceFormGIMSA";
import { ChangeEvent, useState } from "react";
import { SelectMarket } from "../components/SelectMarket";
const marketInvoiceInputPageMap={"a101":<InvoiceForm/>, "bim":<InvoiceFormBIM/>,"gimsa":<InvoiceFormGIMSA/>}
export  const InvoiceMain =()=>{
    const onSelectionChanged=(value:string)=>{
        setSelectedMarket(marketInvoiceInputPageMap[value as keyof typeof marketInvoiceInputPageMap]);
    }
    const [selectedMarket,setSelectedMarket]=useState(<InvoiceForm/>)
    const i18Prefix="dashboard";
    const {t}  = useTranslation("translation", {keyPrefix:i18Prefix});
    return <>
    <SelectMarket onSelectionChange={onSelectionChanged}/>
{selectedMarket}
    </>
}

