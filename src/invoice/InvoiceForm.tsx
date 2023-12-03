

import { useState } from "react"
import { DomainApi, ExternalInvoiceServiceParameters, HttpResponse, Invoice, InvoiceLine } from "../rest/DomainApi";

import { Box, Button, FormControl, FormHelperText, FormLabel, Input, NumberInput, NumberInputField, useToast } from "@chakra-ui/react";
import useMessage from "../hooks/Message";
import message from "../hooks/Message";

import { Image } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";
import { SelectMarket } from "../components/SelectMarket";
import useDomainApi from "../hooks/useDomainApi";


interface Props{
    stateChanged:(key:string,value:any)=>void,
    
    params:ExternalInvoiceServiceParameters,
    store:string,
}

export const InvoiceForm = (props:Props) => {
    const message=useMessage();
    let domainApi = useDomainApi();
    const send2Service = () => {
        console.log('serviste')
        const serviceUrl: string = process.env.REACT_APP_BACKEND_URL!.concat('/invoice');
  
            domainApi.invoice.getInvoiceInfo(props.store,props.params).then((response:any)=>{
               
                //409: conflict  Invoice already exists
                if(response.status===409){
                    message("Invoice Line could not be saved",'Invoice already exists',"warning");
                }
                else{
                    if(response.status==200){
                        response.data
                        .invoiceLineList
                        ?.forEach((iL:InvoiceLine)=>message("Invoice Line saved",iL.product!.concat(' - ').concat(iL.price?.toString()!),"success"))
                    }
                    else{
                        message("Invoice Line could not be saved",'Unknown Error',"error")
                    }
                   }
                }
               )
                .catch(exception=>message("Invoice Line could not be saved",exception,"error"));
       
       

        


    }
   
    const [messageComponent, setMessageComponent] = useState(<></>);
    
    const i18Prefix:string="invoiceForm";
    const {t}  = useTranslation("translation", {keyPrefix:i18Prefix});

   
    return  <>
  
    <Box boxSize='sm'><Image src='a101.jpg' alt='A101' />
  </Box>
    <FormControl>
        <FormLabel>{t("documentNo")}</FormLabel>
            <Input name="documentNo" required onChange={(value) =>  props.stateChanged('documentNo',value.currentTarget.value) } autoComplete="documentNo" defaultValue="56430020210309990216"/>
        <FormLabel>{t("date")}</FormLabel>
        <Input name="date" required type='date' onChange={(value) => { props.stateChanged('date',value.currentTarget.value) }} />
        <br></br> 
        <FormLabel>{t("totalCost")}</FormLabel>
        <NumberInput>
            <NumberInputField name="totalCost" required onChange={(value) => {  props.stateChanged('totalCost',Number(value.currentTarget.value))}} autoComplete="on" />
        </NumberInput>
        <Button colorScheme='teal' size='md' onClick={(e) => send2Service()}>
    Kaydet
  </Button>
    </FormControl>
    </>
    /*  <table>
          {messageComponent}
          <tbody>
              <tr><td align="left">Belge No</td><td><input name="documentNo" autoComplete="on" onChange={(value) => { setDocumentNo(value.currentTarget.value) }} /></td></tr>
              <tr><td align="left">Tarih</td><td><input name="date" autoComplete="on" onChange={(value) => { setDate(value.currentTarget.value) }} /></td></tr>
  
              <tr><td align="left">Toplam Fiyat</td><td><input type="number" autoComplete="on" name="totalCost" onChange={(value) => {  setTotalCost(Number(value.currentTarget.value))}} /></td></tr>
              <tr><td></td><td align="right"><button onClick={() => send2Servide()}>Sorgula</button></td></tr>
          </tbody>
      </table>*/
}

