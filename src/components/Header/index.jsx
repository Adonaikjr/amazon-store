import { Container, Logo, FeedClient, MostSales, InputPesquisa, BannerContainer, BannerTwo, Content, BannerContent, Nav } from "./styled";
import logo from '../../assets/myfilmes.png'
import { Link } from "react-router-dom";
import { TbDiscount2, FcSearch, FcSalesPerformance, FcConferenceCall , FcFlashOn} from 'react-icons/all'
import { Input } from '../Input'

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
            <p>Aqui você encontra aquele tão sonhado presente pra você.</p>
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