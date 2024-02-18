import { useTranslation } from "react-i18next"
import { Link, Outlet } from "react-router-dom"
import useInvoiceTranslation from "./hooks/useInvoiceTranslation";
import './Menu.css';
import { Divider, Spacer } from "@chakra-ui/react";
import Language from "./components/language/Language";

export const Menu=()=>{
  const t=useInvoiceTranslation("menu");
  return  (<div>
<nav className="fill">
  <ul>
    <li>
      <Link to="/">{t("mainPage")+"  "}</Link>
    </li>
  
    <li>
      <Link to="/invoice">{t("inputInvoice")+"  "}</Link>
    </li>
    
    <li>
      <Link to="/dashboard/statistics">{t("statisticsDashboard")+"  "}</Link>
    </li>
  
    <li>
      <Link to="/dashboard/shopping">{t("shoppingDashboard")}</Link>
    </li>
    <li><Language/></li>
  </ul>
</nav>

<hr />

{/* An <Outlet> renders whatever child route is currently active,
    so you can think about this <Outlet> as a placeholder for
    the child routes we defined above. */}
<Outlet />
</div>)
}