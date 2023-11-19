import { Select } from "@chakra-ui/react"
import { useTranslation } from "react-i18next";
import { SelectMarket } from "../components/SelectMarket";
import { DomainApi, InvoiceLine, ProductPriceIncreaseStatisticWithTimeTrail } from "../rest/DomainApi";
import { useEffect, useState } from "react";
import { SelectTimeInterval } from "../components/SelectTimeInterval";
import HighestIncrease from "./HighestIncrease";
import useDomainApi from "../hooks/useDomainApi";
import {  MostExpensiveProductsChart } from "../components/charts/MostExpensiveProductsChart";
import _ from "lodash";



 const StatisticsDashboard = () => {

    const domainApi: DomainApi<any> = useDomainApi();
    const [selectedTimeInterval, setSelectedTimeInterval] = useState(1);
    const [highestIncreasePriceStatistic, setHighestIncreasePriceStatistic] = useState([] as ProductPriceIncreaseStatisticWithTimeTrail[]);
    const [mergedInvoiceLine, setMergedInvoiceLine] = useState([] as  InvoiceLine[]);
 const [mergedDates,setMergedDates]=useState([] as  object[]);
    useEffect(() => {
        domainApi.statistics.getProductOfHighestIncreasingRatioByDays({ daysBefore: selectedTimeInterval })
            .then((result) => setHighestIncreasePriceStatistic(result.data));
    }, [selectedTimeInterval]);
    useEffect(() => {
        setMergedInvoiceLine((prev)=>{return []})
        highestIncreasePriceStatistic.forEach(highestIncreasePriceStatistic=> { 
            highestIncreasePriceStatistic.invoiceLinesOfASpecificProduct?.forEach(il=>{
                new Date(2019, 4, 30).getTime()
                let dateSplits:string[] =il.date!.split(".");
              setMergedDates((prev)=>{
               return  [...prev,{'date':il.date}];
              });
             //il.date=new Date(parseInt(dateSplits[0]),parseInt(dateSplits[1])-1,parseInt(dateSplits[2]))
            })
         
            setMergedInvoiceLine((prev)=>{return [...prev,...highestIncreasePriceStatistic.invoiceLinesOfASpecificProduct!]});
           
        });
       
    }, [highestIncreasePriceStatistic]);
    const i18Prefix = "dashboard";
    const { t } = useTranslation("translation", { keyPrefix: i18Prefix });
    const onSelectedMarketChanged = (value: string) => {
        alert("Not Implemented");
    }
    const onSelectedTimeIntervalChanged = (value: string) => {
       
        setSelectedTimeInterval(Number(value));
    }
    
    console.log(_.orderBy(_.uniqBy(mergedDates,'date'),'date'));
    return <>

        <SelectMarket onSelectionChange={onSelectedMarketChanged} />
        <SelectTimeInterval onSelectionChange={onSelectedTimeIntervalChanged} />
        <HighestIncrease productPriceIncreaseStatisticArray={highestIncreasePriceStatistic} />
        <MostExpensiveProductsChart xDataKey="date" yDataKey="price" title="product" data={mergedInvoiceLine} unmergedData={highestIncreasePriceStatistic} 
        mergedDates={_.orderBy(_.uniqBy(mergedDates,'date'),'date')}/>
    </> 
}

export default StatisticsDashboard;