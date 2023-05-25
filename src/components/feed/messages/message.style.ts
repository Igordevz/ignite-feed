"use client";

import { styled } from "styled-components";

export const ContainerItems = styled.div`
  background: #202024;
`;
export const ContainerMessage = styled.div`
  height: 60vh;
  border: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
 position: relative;
  background: #202024;

  .item_top {
    margin-top: 50px;
    margin-left: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .item_top img {
    padding: 2px;
    border-radius: 8px;
    border: 2px solid #00ffb4;
  }
  .item_top .info_user {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-left: 10px;
  }
  .item_top .info_user h1 {
    color: white;
    font-weight: 400;
    font-size: 15px;
  }
  .item_top .info_user p {
    color: #8d8d99;
    font-size: 12px;
  }
  .age_deploy {
    position: absolute;
    right: 60px;
  }
  .age_deploy span {
    font-size: 12px;
    color: #8d8d99;
    font-weight: 400;
  }
`;
export const ContentFeeds = styled.div`
  margin-left: 40px;
  gap: 30px;
  flex-direction: column;
  display: flex;
  .title,
  main {
    color: #b7b7bf;
  }
  .title {
    margin-top: 40px;
  }
  .title h1 {
    font-weight: 400;
    font-size: 18px;
  }
  main {
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  main p {
    line-height: 30px;
  }
  main a {
    text-decoration: none;
    color: #00ffb4;
  }
  main h1 {
    color: white;
    font-size: 14px;
  }
  main textarea {
    font-family: 'Inter', sans-serif;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    color: #C4C4CC;
    width: 95%;
    background: #121214;
    outline: none;
    border: 1px solid #00ffb4;
  }
  main button{
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 600;
    background : #00ffb4;
    border: none;
    width:80px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main button:hover{
    opacity: 0.75;
  }
`


export const Line = styled.div`
  height: 1px;
  background: gray;
  width: 95%;
`;
