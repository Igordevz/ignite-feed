"use client"

import { styled } from "styled-components";

export const Container = styled.div`

    height: 100vh;
    width: 100%;
    background: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ModalRecovery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 8px;
    height: 90vh;
    width: 450px;
    background: #131516;
    
    .modalclient{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 50px;
        gap: 5px;
    }
    .modalclient h1{
        font-size: 35px;
        color: white;
    }
    .modalclient p{
        font-size: 13px;
        color: gray;
    }
    .container_modal_form{
        width: 100%;
        margin-top: 50px;
        gap: 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .container_modal_form span{
        color: white;
    }
    .container_modal_form input{
        padding: 12px 90px 12px 20px;
        color: white;
        background: none;
        outline: none;
        border-radius: 7px;
        border: 1px solid #00FFB4;
    }
    .container_modal_form a{
        font-size: 14px;
        text-decoration: none;
        text-align: center;
        color: gray;
        transition: .5s;
    }
    .container_modal_form a:hover{
        color: white;
    }
    .container_modal_form button{
        height: 45px;
        margin-top: 50px;
        cursor: pointer;
        color: white;
        background: black;
        border-radius: 4px;
        border: none;
        font-weight: bold;
        transition: 1s;
    }
    .container_modal_form button:hover{
        border-radius: 190px;
    }
    @media (max-width: 497px){
        width: 100%;
        height: 100vh;
        border-radius: 0;
    }
`