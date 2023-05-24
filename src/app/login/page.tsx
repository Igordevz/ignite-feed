import Image from "next/image";
import logo from "../../assets/react-logo.png"
import { Container, ModalLogin } from "./style";

export default async function LoginPage() {

    await new Promise((resolve) => setTimeout(resolve, 2000))

    return (
        <Container>
            <ModalLogin>
                <div className="title">
                    <Image src={logo} alt="" width={70} />
                    <h1>Ignite Lab</h1>
                    <p>Faça login e comece a usar!</p>
                </div>
                <form >
                    <span>Endereço de e-mail</span>
                    <input type="email" placeholder="Digite seu e-mail" />
                    <span>Sua senha</span>
                    <input type="Password" placeholder="********" />
                    <button >Entrar</button>
                    <div className="links">
                        <a href="#">Esqueceu sua senha?</a>
                        <span>
                            Não possui conta? <a href="">Crie uma agora!</a>
                        </span>
                    </div>
                </form>
            </ModalLogin>
        </Container>
    );

}