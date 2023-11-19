

import { useState } from "react"
import { DomainApi, ExternalInvoiceServiceParameters, HttpResponse } from "../rest/DomainApi";

import { Box, Button, FormControl, FormHelperText, FormLabel, Input, NumberInput, NumberInputField, useToast } from "@chakra-ui/react";
import useMessage from "../hooks/Message";
import message from "../hooks/Message";

import { Image } from '@chakra-ui/react'
import { useTranslation } from "react-i18next";




export const InvoiceFormGIMSA = () => {
    const [documentNo, setDocumentNo] = useState("");
    const [date, setDate] = useState("");
    const [totalCost, setTotalCost] = useState(0);
    const [messageComponent, setMessageComponent] = useState(<></>);
    const message=useMessage();
    const i18Prefix:string="invoiceForm";
    const {t}  = useTranslation("translation", {keyPrefix:i18Prefix});
    const send2Servide = () => {
       
        const serviceUrl: string = process.env.REACT_APP_BACKEND_URL!.concat('/invoice');
        console.log(serviceUrl);
        
        let params: ExternalInvoiceServiceParameters = {
            'documentNo': documentNo,
            'date': date, 'totalCost': totalCost
        };

        let domainApi = new DomainApi({ baseApiParams: { format: "json" } });
        domainApi.invoice.getInvoiceInfo(params).then(response=>response.data
            .invoiceLineList?.forEach(iL=>message("Invoice Line saved",iL.product!.concat(' - ').concat(iL.price?.toString()!),"success")))
            .catch(exception=>message("Invoice Line could not be saved",exception,"error"))

        


    }
   
    return  <><Box boxSize='sm'><Image src='gimsa.png' alt='GİMSA' />
  </Box>
    <FormControl>
        <FormLabel>{t("documentNo")}</FormLabel>
            <Input name="documentNo" required onChange={(value) => { setDocumentNo(value.currentTarget.value) }} autoComplete="documentNo" defaultValue="56430020210309990216"/>
        <FormLabel>{t("date")}</FormLabel>
        <Input name="date" required type='date' onChange={(value) => { setDate(value.currentTarget.value) }} />
        <br></br> 
        <FormLabel>{t("totalCost")}</FormLabel>
        <NumberInput>
            <NumberInputField name="totalCost" required onChange={(value) => {  setTotalCost(Number(value.currentTarget.value))}} autoComplete="on" />
        </NumberInput>
        <Button colorScheme='teal' size='md' onClick={() => send2Servide()}>
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

