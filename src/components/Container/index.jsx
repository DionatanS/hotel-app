import { ContainerStyled } from "./styles"

export default function Container({children}){
    return (
        <ContainerStyled>{children}</ContainerStyled>
    )
}