import styled from "styled-components";

    export const HeroMessageCont= styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
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
    border:2px solid black;
    `;
    
    export const ToolStackCont = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    width:100%;
    flex-wrap:wrap;
    padding:1em;
    border:2px solid black;
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
    align-items:center;
    justify-content:space-evenly;
    width:40%;
    `;
