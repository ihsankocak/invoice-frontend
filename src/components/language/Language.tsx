import i18n from "../../i18n";
import '../../Menu.css';
const Language=()=>{
     //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e: { target: { value: any; }; }) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
return (<select className="language"  onChange={changeLanguageHandler}>
  <option value="tr" >Türkçe</option>
<option value="en" >English</option>
</select>);
}

export default Language;