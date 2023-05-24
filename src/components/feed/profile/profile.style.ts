"use client"

import { styled } from "styled-components"

export const ContainerProfile = styled.div`
    border-radius: 8px;
    height: 294px;
    width: 256px;
    background: #202024;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    .banner{
        position: absolute;
        top: 0;
        height: 10vh;
        width: 100%;
        background: #7D00CA;
        border-radius: 8px 8px 0 0;
    }
    .user{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        justify-content: center;
    }
    .user img{
        z-index: 99;
        border: 8px;
    }
    .user h1{
        color: gray;
        font-weight: 400;
        font-size: 15px;
    }
    hr{
        width: 100%;
    }
    .user button {
        padding:10px;
        gap: 10px;
        display: flex;
        align-items: center;
        justify-items: center;
        color: #00B37E;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
        transition: 0.5s;
        border: 1px solid #202024;

    }
    .user button:hover{
        opacity: 0.70;
        border: 1px solid #00B47E;

    }
`