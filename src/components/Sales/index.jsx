import { SaleContainer } from "./styled";

export function Sale({product, rank}){
    return(
        <SaleContainer>
            <h2>{rank}</h2>
            {product}
        </SaleContainer>
    )
}