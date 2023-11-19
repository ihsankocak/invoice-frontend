import { useTranslation } from "react-i18next";
import { DomainApi, ProductPriceIncreaseStatistic, ProductPriceIncreaseStatisticWithTimeTrail } from "../rest/DomainApi"
import { useState, useEffect } from "react";
import useDomainApi from "../hooks/useDomainApi";
interface Props{
    productPriceIncreaseStatisticArray:ProductPriceIncreaseStatisticWithTimeTrail[]
}
const HighestIncrease=(props:Props)=>{
  return  <>{props.productPriceIncreaseStatisticArray.map((ppis) =>
        <>Product Name{ ppis.productPriceIncreaseStatistic?.name} <br/> 
            First Price { ppis.productPriceIncreaseStatistic?.firstPrice} <br/> 
            Second Price {ppis.productPriceIncreaseStatistic?.secondPrice} <br/>
            Time Interval Days {ppis.productPriceIncreaseStatistic?.timeIntervalDays} <br/>
            <h1>Ratio Per Day {ppis.productPriceIncreaseStatistic?.ratioPerDay} </h1>
            <h5>Ratio {ppis.productPriceIncreaseStatistic?.ratio} </h5></>
    )
}

</>
}
export default HighestIncrease;