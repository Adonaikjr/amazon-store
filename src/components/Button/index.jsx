import { ButtonContainer } from "./styled";

export function Button(props){
    return(
        <ButtonContainer>
            {props.title}
        </ButtonContainer>
    )
}