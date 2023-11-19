import { DomainApi } from "../rest/DomainApi";

const useDomainApi =()=>{
    let domainApi=new DomainApi({ baseApiParams: { format: "json",secure:false} });
    return domainApi;
};
export default useDomainApi;


