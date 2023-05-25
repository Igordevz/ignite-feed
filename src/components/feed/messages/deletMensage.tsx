"use client"
import { useEffect } from "react";
import { Container } from "./deleteMsg";
import { Content } from "next/font/google";

export default function RemoveMessagem(){
    
    useEffect(() =>{
        const btnCancell = document.getElementById("cancelar")
        const content = document.getElementById("content")
        btnCancell?.addEventListener("click", () =>{
            content?.setAttribute("style", "display: none")
            console.log("clicou");
        })
    })
    return(
        <Container id="content">
            <div className="content">
                    <h1>Excluir Comentario</h1>
                    <p>Você tem certeza que gostaria de excluir este comentário?</p>
                    <div className="btns">
                        <button id="cancelar" >Cancelar</button>
                        <button id="excluir">Sim, excluir</button>
                    </div>

            </div>
        </Container>
    );

}