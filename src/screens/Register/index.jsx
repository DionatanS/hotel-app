import Link from "next/link"
import { Container } from "../../components"
import { Button } from "../../components/patterns/Button"
import { ImageStyled, TitleStyled, InputStyled } from "./styles"
import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

export default function Register(){
    const  {userName, setUserName}  = useContext(UserContext)
    const handleClick = () => {
        console.log(`nome final antes de enviar p banco ${userName}`)
    }
    return(
       <Container>
        <ImageStyled src="/images/logo.svg" width="125px" height="145px"/>
        <TitleStyled>Como podemos lhe chamar?</TitleStyled>
        <InputStyled onChange={(e) => setUserName(e.target.value)}/>
        <Link href="/404">
            <a onClick={handleClick} >
                <Button>COMEÇAR</Button>
            </a>
        </Link>
       </Container>
    )
}