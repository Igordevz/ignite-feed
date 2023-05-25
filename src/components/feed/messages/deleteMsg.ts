"use client";

import { styled } from "styled-components";

export const Container = styled.div`
  z-index: 99;
  position: fixed;
  height: 100vh;
  width: 100%;
  /* From https://css.glass */
  background: rgba(0, 0, 0, 0.62);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.7px);
  -webkit-backdrop-filter: blur(16.7px);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;

  .content {
    width: 504px;
    height: 306px;
    border-radius: 8px;
    background: #202024;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    flex-direction: column;
  }
  .content h1 {
    color: white;
  }
  .content p {
    text-align: center;
    max-width: 300px;
    color: #c4c4cc;
  }

  .btns button {
    margin-inline: 30px;
    padding: 10px;
    cursor: pointer;
  }
  #cancelar {
    background: none;
    border: none;
    font-weight: 500;
    color: #ffffff;
    font-size: 17px;
  }
  #excluir {
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 8px;
    padding-inline: 40px;
    border: none;
    background: #29292e;
    color: #f75a68;
  }
`;
