import { Container, Logo, FeedClient, MostSales, InputPesquisa, BannerContainer, BannerTwo, Content, BannerContent, Nav } from "./styled";
import logo from '../../assets/myfilmes.png'
import { Link } from "react-router-dom";
import { TbDiscount2, FcSearch, FcSalesPerformance, FcConferenceCall , FcFlashOn} from 'react-icons/all'
import { Input } from '../Input'

/*<a href='https://amzn.to/3Q5fmQN' target='_blank'>
                    <BannerTwo/>
                </a>*/
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
            <InputPesquisa>
                <Input 
                placeholder="Buscar" 
                icon={FcSearch} />
            </InputPesquisa>
                <button>Cadastre</button>
            </Nav>
            <Content>
                <a href='https://amzn.to/3RqMVOm' target='_blank'>
                    <BannerContainer/>
                </a>
                
            </Content>
        </Container>
    )
}