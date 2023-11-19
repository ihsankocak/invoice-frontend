import { Select } from "@chakra-ui/react"
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next"

interface Props{
    onSelectionChange:(value:string)=>void
}
export const SelectTimeInterval=(props:Props)=>{
    const i18Prefix="dashboard";
    const {t}=useTranslation("translation", {keyPrefix:i18Prefix});
    return <Select placeholder={t("selectTimeInterval")} onChange={(event)=> props.onSelectionChange(event.currentTarget.value)}>

    <option value='1'>{t("yesterday")}</option>
<option value='7'>{t("lastWeek")}</option>
<option value='30'>{t("lastMonth")}</option>
<option value='365'>{t("lastYear")}</option>
        </Select>
}