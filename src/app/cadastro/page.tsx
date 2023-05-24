import Image from "next/image";
import logo from "../../assets/react-logo.png"
import { Container, ModalLogin } from "./style";
import Link from "next/link";

export default async function CadastroPage() {

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return (
        <Container>
            <ModalLogin>
                <div className="title">
                    <Image src={logo} alt="" width={70} />
                    <h1>Ignite Lab</h1>
                    <p>Faça Cadastro e comece a usar!</p>
                </div>
                <form >
                    <span>Endereço de e-mail</span>
                    <input type="email" placeholder="Digite seu e-mail" />
                    <span>Sua senha</span>
                    <input type="Password" placeholder="********" />
                    <button>Cadastre Agora</button>
                    <div className="links">
                        <span>
                            Já possui conta? <Link href="/login">Entre Agora</Link>
                        </span>
                    </div>
                </form>
            </ModalLogin>
        </Container>
    );

}