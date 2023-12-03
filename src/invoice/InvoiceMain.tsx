import { Select } from "@chakra-ui/react"
import { useTransform } from "framer-motion"
import { useSSR, useTranslation } from "react-i18next";
import { InvoiceForm } from "./InvoiceForm";
import { ChangeEvent, useEffect, useState } from "react";
import { SelectMarket } from "../components/SelectMarket";
import { ExternalInvoiceServiceParameters, DomainApi, InvoiceLine } from "../rest/DomainApi";
import useMessage from "../hooks/Message";
import { log } from "console";

export  const InvoiceMain =()=>{
    const [documentNo, setDocumentNo] = useState("");
    const [date, setDate] = useState("");
    const [totalCost, setTotalCost] = useState(0);
    const [state,setState]=useState<ExternalInvoiceServiceParameters>({date:"",totalCost:-1,documentNo:""})
     const stateChanged= (keyy:string,value:string)=>{
        console.log('önce',state,keyy, value);
        
 
      setState(prev=> ({...prev,[`${keyy}`]:value}));
        
        console.log('sonra',state);
    }
    useEffect(()=>{
        console.log('state değişti ,',state);
    },[JSON.stringify(state)])
    interface FormParams{
        date:string,
        totalCost:number,
        documentNo:string,
    }
   

    const onSelectionChanged=(value:string)=>{
        console.log(value);
        setSelectedMarket(value);
    }
    const [selectedMarket,setSelectedMarket]=useState("")
    const i18Prefix="dashboard";
    const {t}  = useTranslation("translation", {keyPrefix:i18Prefix});
    return <>
    
    <SelectMarket onSelectionChange={onSelectionChanged}/>
    <InvoiceForm store={selectedMarket} params={state}  stateChanged={(key:string,value:string)=>stateChanged(key,value)}/>

    </>
}

