import Image from "next/image";
import { ModalLogin } from "../cadastro/style";
import { Container, ModalRecovery } from "./style";
import logo from "../../assets/react-logo.png"
import Link from "next/link";
export default function RecoveryPasswordPage(){

        return(
            <Container>
                <ModalRecovery>
                    <div className="modalclient">
                        <Image src={logo} alt="logo"  />
                            <h1>Ignite Lab</h1>
                            <p>Esqueceu Sua Senha?...</p>
   
                            <form className="container_modal_form">
                                <span>Digite Seu Email</span>
                                <input type="email" placeholder="Digite seu email" required />
                                <button>Enviar Email</button>
                                <Link href="/login">Voltar Para Login</Link>
                            </form>
                 
                    </div>
                </ModalRecovery>
            </Container>
        )

}