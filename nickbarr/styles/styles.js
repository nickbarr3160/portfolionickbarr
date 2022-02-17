import styled from "styled-components";



    export const HeroMessageCont= styled.div`
    display:flex;
    width:100%;
    height:60vh;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width: 600px) {
        height:70vh
        }    
    `;

    export const MainCont = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    width:100%;
    justify-content:space-;
    align-items:center;
    `;
    
    export const ProjCardCont = styled.div`
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
