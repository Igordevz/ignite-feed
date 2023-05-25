
import { Header, Main } from "@/components/feed/feed";
import NavLogo from "../assets/App name.png"
import Image from "next/image";
import Message from "@/components/feed/messages/message";
import Profile from "@/components/feed/profile/profile";

export default async function Feed() {
  await new Promise((loading) => setTimeout(loading, 2000))
  
  return (
    <>
      <Header>
          <Image src={NavLogo} alt="logo" />
      </Header>
      <Main>
        <Profile/>
         <Message/>
      </Main>
    </>
  )
}
