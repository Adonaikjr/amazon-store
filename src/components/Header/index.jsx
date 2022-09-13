import { Container, Logo, FeedClient, MostSales, InputPesquisa, BannerContainer, BannerTwo, Content, BannerContent, Nav, Section } from "./styled";
import logo from '../../assets/myfilmes.png'
import { Link } from "react-router-dom";
import { TbDiscount2, FcFlashOn} from 'react-icons/all'
import { Button } from '../Button'
/**/
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
            <p>Aqui você encontra produtos rapidos, práticos e totalmente seguro.</p>
                <span>Com um super <strong>DESCONTO <TbDiscount2 size={40} color='red' /></strong></span>
            </Nav>
            <Content>
                <a href='https://amzn.to/3RqMVOm' target='_blank'>
                    <BannerContainer/>
                </a>    
            </Content>
            
        </Container>
    )
}

/**
 * <button>Cadastre</button>
 * <a href='https://amzn.to/3Q5fmQN' target='_blank'>
                    <BannerTwo/>
                </a>
 * <InputPesquisa>
                <Input 
                placeholder="Buscar" 
                icon={FcSearch} />
            </InputPesquisa>
 */