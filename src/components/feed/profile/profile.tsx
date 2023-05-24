import Image from "next/image";
import { ContainerProfile } from "./profile.style";
import photoUrl from "../../../assets/teste.photo.png"
import editPerfilImg from "../../../assets/editperfil.png"

export default  function Profile(){
    return(
        <ContainerProfile>
            <div className="banner"></div>
            <div className="user">
                <Image src={photoUrl} alt="perfil_user"/>
                <h1>UI DESIGN</h1>
                <hr />
                <button> <Image src={editPerfilImg} alt="lapis"/> EDITAR PERFIL</button>
            </div>
        </ContainerProfile>
    );
}