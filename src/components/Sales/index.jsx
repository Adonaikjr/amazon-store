import { SaleContainer } from "./styled";

export function Sale({product, rank, desc}){
    return(
        <SaleContainer>
            <h4>{rank}</h4>
            {product}
        </SaleContainer>
    )
}