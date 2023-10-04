import styled, {createGlobalStyle} from "styled-components";



    export const HeroMessageCont= styled.div`
    display:flex;
    width:100%;
    height:60vh;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 600px) {
        height:70vh
        }
    
    @media only screen and (min-width: 1500px) {
        width:80%;
    } 
    `;

    export const StyledParticlesCont = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    `;

    export const MainCont = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    width:100%;
    align-items:center;
    ::selection {
        background-color: #21aab5; 
        color: #000; 
    }
    `;
    
    export const ProjCardCont = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
    width:100%;
    `;

    export const DesignProjCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    width:100%;
    `;

    
    export const ToolStackCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:100%;
    flex-wrap:wrap;
    padding:1em;
    @media only screen and (max-width: 400px) {
        flex-direction:column;
        }    
    `;

    export const ScrollTopCont = styled.div`
    dislpay:flex;
    width:100%;
    justify-content:flex-end;
    `;

    export const ButtonCont = styled.div`
    display:flex;
    height:25vh;
    align-items:center;
    justify-content:space-evenly;
    width:40%;
    @media only screen and (max-width: 550px) {
        flex-direction:column;
        height:50vh
        } 
    `;

    export const GlobalStyle = createGlobalStyle`
    ::selection {
        background-color: ${props => props.bg}; 
        color: ${props => props.color};
    }
    
    ::-moz-selection {
        background-color: ${props => props.bg}; 
        color: ${props => props.color};
    }
    `;

   