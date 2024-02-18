import { useTranslation } from "react-i18next";
import { DomainApi, ProductPriceIncreaseStatistic, ProductPriceIncreaseStatisticWithTimeTrail } from "../rest/DomainApi"
import { useState, useEffect } from "react";
import useDomainApi from "../hooks/useDomainApi";
import useInvoiceTranslation from "../hooks/useInvoiceTranslation";
import { Card, CardBody, CardFooter, CardHeader, Divider, Heading } from "@chakra-ui/react";
interface Props {
    productPriceIncreaseStatisticArray: ProductPriceIncreaseStatisticWithTimeTrail[]
}
const HighestIncrease = (props: Props) => {
    const t = useInvoiceTranslation("dashboard");
    return <>
        {
                props.productPriceIncreaseStatisticArray.map((ppis) =>
               
                <Card className={"shopping-card shopping-card-"+`${ppis.invoiceLinesOfASpecificProduct![0].storeName}`} size="sm">
                   <CardHeader> 
                        <Heading>{t("productName") + ": " + ppis.productPriceIncreaseStatistic?.name} 
                        </Heading>
                    </CardHeader>
                   <CardBody> 
                    {t("firstPrice") + ": " + ppis.productPriceIncreaseStatistic?.firstPrice} <br></br>
                    {t("lastPrice") + ": " + ppis.productPriceIncreaseStatistic?.secondPrice} <br></br>
                    {t("timeIntervalDays") + ": " + ppis.productPriceIncreaseStatistic?.timeIntervalDays} <br></br>
                    {t("ratioPerDay") + ": " + ppis.productPriceIncreaseStatistic?.ratioPerDay} <br></br>
                    </CardBody>
                    <CardFooter>
                    {t("ratio") + ": " + ppis.productPriceIncreaseStatistic?.ratio} 
                    </CardFooter></Card>
                   
                )
        }
    </>
}

export default HighestIncrease;