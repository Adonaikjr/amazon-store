import { SaleContainer } from "./styled";

export function Sale({product, description}){
    return(
        <SaleContainer>
            <h4>{description}</h4>
            {product}
        </SaleContainer>
    )
}