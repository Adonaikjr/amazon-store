import { Container, Logo, Nav, Section, Content } from "./styled";
import logo from '../../assets/myfilmes.png'
import { Link } from "react-router-dom";
import { TbDiscount2, FcFlashOn} from 'react-icons/all'
import { Button } from '../Button'
export function Header(){
    return(
        <Container>
            <Nav>
            <Logo>
                <FcFlashOn 
                size={34} 
                color='black'/>
                Descontos Flesh
            </Logo>
            <Content>
            <p>Aqui você encontra produtos rapidos, práticos e totalmente seguro.</p>
            <span>Com um super <strong>DESCONTO <TbDiscount2 size={40} color='red' /></strong></span>
            </Content>
            <Section>
                <a href='#coffe'>
                <Button title='Delta Q'/>
                </a>
                <a href='#eletrodomestico'>
                <Button title='Eletrodomesticos'/>
                </a>
                <a href='#books'>
                <Button title='Livros'/>
                </a>
                <a href='#books'>
                <Button title='Gamer'/>
                </a>
            </Section>
            </Nav>
        </Container>
    )
}