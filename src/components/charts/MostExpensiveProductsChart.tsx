import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea, Line, LineChart } from 'recharts';
import { EntityModelProduct, InvoiceLine, ProductPriceIncreaseStatisticWithTimeTrail } from '../../rest/DomainApi';
import { color } from '@chakra-ui/react';


interface Props {
  title: string,
  xDataKey: string,
  yDataKey: string,
  data: EntityModelProduct[],
  unmergedData: ProductPriceIncreaseStatisticWithTimeTrail[],
  mergedDates: object[]
}
export const MostExpensiveProductsChart = (props: Props) => {
  let productNameSet: Set<string> = new Set();
  let productNameArray: Array<string> = [];
  const Colors: string[] = ["red", "blue", "yellow", "green", "pink"];
  interface ChartBarValue {
    date: string,
    productName: string,
    price: number
  }
  props.data.forEach((product: EntityModelProduct) => {

    productNameArray.push(product.name!);
    productNameArray = [...new Set(productNameArray)];
  });
  

const COLORS=['red','blue','green','yellow', 'orange'];

  return <ResponsiveContainer height={350} width='50%' key={"price"}><LineChart
    width={500}
    height={300}
    title={props.title}
   data={props.data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey={props.xDataKey} type='category' allowDuplicatedCategory={false}/>
   
    <Tooltip />
    <Legend />
    <Line data={props.mergedDates} />
    {props.unmergedData.map((statsWithTrail: ProductPriceIncreaseStatisticWithTimeTrail, i) => {
       <YAxis  dataKey={props.yDataKey} />
      
      return <Line dataKey={props.yDataKey} stroke={COLORS[i%5]} name={statsWithTrail.productPriceIncreaseStatistic?.name} 
      key={statsWithTrail.productPriceIncreaseStatistic?.name} data={statsWithTrail.invoiceLinesOfASpecificProduct} />
    })}

  </LineChart>

</ResponsiveContainer>
}



