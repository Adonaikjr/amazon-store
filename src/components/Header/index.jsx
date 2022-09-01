import { Container, Logo, FeedClient, MostSales, InputPesquisa } from "./styled";
import logo from '../../assets/myfilmes.png'
import { Link } from "react-router-dom";
import { TbDiscount2, FcSearch, FcSalesPerformance, FcConferenceCall , FcFlashOn} from 'react-icons/all'
import { Input } from '../Input'
export function Header(){
    return(
        <Container>
            <nav>
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
            <MostSales>
                <FcSalesPerformance 
                size={24} 
                color='black'/>  Mais Vendidos
                <FeedClient>
                    <FcConferenceCall size={24} />  Clientes
                </FeedClient>
            </MostSales>
            </nav>
        </Container>
    )
}