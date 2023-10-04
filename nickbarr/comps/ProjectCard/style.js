import styled from 'styled-components'

export const ProjCardCont = styled.div`
  width: 100%;
  height: 600px;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  background-color: ${props => props.bgcolor};
  margin: 1em;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  border-radius: 12px;
  overflow: hidden;  // <-- Added this
`;

export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow:hidden;
  width: 100%;
  height: 40%;
  background:#ebf4fe;
`;


export const ProjHeading = styled.h2`
  font-size: 1.5em;
  color: ${props => props.color};
  text-align: center;
  height: 60px;
`;

export const ProjDescrip = styled.p` 
  text-align: center;
  padding:0 1em 0 1em;
  font-size: 0.9em;
  color: ${props => props.color};
  margin:-3.5em 0 3em 0;
`;

export const ToolTagCont = styled.div`
  display: flex;
  width:85%;
  flex-wrap: wrap;
  justify-content: space-between; 
  margin-top: -1.5em;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  padding:1em;
  width: 100%;
  max-width: 150px; 
  margin-bottom:2em;
`;

export const IconCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${props => props.brdrColor};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  cursor: pointer;
  transition: all 0.3s ease; 

  &:hover {
    background-color: ${props => props.hovBgColor};
    color: ${props => props.hovcolor};
  }
`;
