import Image from "next/image";
import { ContainerItems, ContainerMessage, ContentFeeds, Line } from "./message.style";
import userPhotoTeste from "../../../assets/teste.photo.png"
import Link from "next/link";
import RemoveMessagem from "./deletMensage";
export default function Message() {

    return (
<>
<RemoveMessagem/>

        <ContainerMessage>
            <ContainerItems>
                <div className="item_top">
                    <Image src={userPhotoTeste} alt="user_photo"></Image>
                    <div className="info_user">
                        <h1>Jane Cooper</h1>
                        <p>Dev Front End</p>
                    </div>
                    <div className="age_deploy">
                        <span>Publicado há 1h</span>
                    </div>
                </div>
                <ContentFeeds>
                    <div className="title">
                        <h1>Fala galeraa 👋</h1>
                    </div>
                    <main>
                        <p>Acabei de subir mais um projeto no meu portifa.
                            É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                        <Link href="#">👉 jane.design/doctorcare</Link>
                        <a href="#">#novoprojeto #nlw #rocketseat</a>
                        <Line />
                        <h1>Deixe seu feedback 📝</h1>
                        <textarea rows={5} cols={33} style={{ resize: "none" }}>
                        </textarea>
                        <button>Publicar</button>
                    </main>
                </ContentFeeds>
            </ContainerItems>
            <br />
        </ContainerMessage>
</>

    );

}