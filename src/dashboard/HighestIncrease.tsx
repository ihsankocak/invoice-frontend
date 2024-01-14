import { useTranslation } from "react-i18next";
import { DomainApi, ProductPriceIncreaseStatistic, ProductPriceIncreaseStatisticWithTimeTrail } from "../rest/DomainApi"
import { useState, useEffect } from "react";
import useDomainApi from "../hooks/useDomainApi";
import useInvoiceTranslation from "../hooks/useInvoiceTranslation";
interface Props{
    productPriceIncreaseStatisticArray:ProductPriceIncreaseStatisticWithTimeTrail[]
}
const HighestIncrease=(props:Props)=>{
    const t=useInvoiceTranslation("dashboard");
  return  <>{props.productPriceIncreaseStatisticArray.map((ppis) =>
        <>{t("productName")+": "+ ppis.productPriceIncreaseStatistic?.name} <br/> 
         {t("firstPrice")+": "+ ppis.productPriceIncreaseStatistic?.firstPrice} <br/> 
            {t("lastPrice")+": "+ppis.productPriceIncreaseStatistic?.secondPrice} <br/>
            {t("timeIntervalDays")+": "+ppis.productPriceIncreaseStatistic?.timeIntervalDays} <br/>
            <h1> {t("ratioPerDay")+": "+ppis.productPriceIncreaseStatistic?.ratioPerDay} </h1>
            <h5> {t("ratio")+": "+ppis.productPriceIncreaseStatistic?.ratio} </h5></>
    )
}

</>
}
export default HighestIncrease;