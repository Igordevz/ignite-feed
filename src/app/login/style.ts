"use client"
import  styled  from "styled-components"

export const Container = styled.div`

    height: 100vh;
    width: 100%;
    background: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const ModalLogin = styled.div`
    position: relative;
    height: 90vh;
    width: 450px;
    background: #131516;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    justify-content: center;
    .title{
        /* position: absolute;
        top: 0; */
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: 50px;
        gap:5px;
    }
    .title h1{
        font-size: 28px;
        font-weight: 500;
        color: white;
    }
    .title p{
        font-size: 15px;

        color: gray;
    }

    form{
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
    form span{
        color: #E1E1E6;
    }
    form input{
        color: white;
        background: #202024;
        outline: none;
        border: none;
        padding-left:40px ;
        padding-top: 13px;
        padding-bottom: 13px;
        padding-right: 90px;
        border-radius: 4px;
    }
    form input:focus{
        border: 1px solid #00FFB5;
    }
    form button{
        margin-top: 20px;
        background: #00FFB5;
        font-weight: 900;
        border: none;
        height: 40px;
        border-radius: 4px;
        cursor: pointer;
    }
    form .links{
        gap: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    form .links a, form .links span{
        font-size: 12px;
        color: gray;
    }
`
