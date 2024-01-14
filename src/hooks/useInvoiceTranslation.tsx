import { useTranslation } from "react-i18next";

const useInvoiceTranslation =(i18Prefix:string)=>{
    const {t}=useTranslation("translation", {keyPrefix:i18Prefix});
    return t;
};
export default useInvoiceTranslation;

