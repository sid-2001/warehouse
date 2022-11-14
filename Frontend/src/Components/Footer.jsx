import React from "react";
import { ReactDOM } from "react";
const data=new Date;
data.getFullYear();
function Footer(){

return(

<footer><p>{data.getFullYear()}</p></footer>


);



}
export default Footer;