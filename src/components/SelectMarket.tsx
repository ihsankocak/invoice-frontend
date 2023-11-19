import { Select } from "@chakra-ui/react"
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next"

interface Props{
    onSelectionChange:(value:string)=>void
}
export const SelectMarket=(props:Props)=>{
    const i18Prefix="dashboard";
    const {t}=useTranslation("translation", {keyPrefix:i18Prefix});
    return <Select placeholder={t("selectStore")} onChange={(event)=> props.onSelectionChange(event.currentTarget.value)}>
    <option value="a101">A101</option>
    <option value="bim">BİM</option>
    <option value="gimsa">GİMSA</option>
        </Select>
}