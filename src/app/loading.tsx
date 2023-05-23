import Image from "next/image";
import "./loading.css"
import logo from "../assets/react-logo.png"
export default function Loading(){
    return(
        <div className="container">
            <Image src={logo} alt="logo"/>
        </div>
    );
}