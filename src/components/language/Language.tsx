import i18n from "../../i18n";

const Language=()=>{
     //Creating a method to change the language onChnage from select box
  const changeLanguageHandler = (e: { target: { value: any; }; }) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
return (<select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
  <option value="tr" >Türkçe</option>
<option value="en" >English</option>
</select>);
}

export default Language;