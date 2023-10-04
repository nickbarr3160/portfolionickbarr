import styled from "styled-components";

export const TagCont = styled.div`
  height: 80%; // If you want the height to be constant, you can specify a fixed value here.
  min-width: 50px; // Minimum width to ensure it doesn't get too small.
  max-width: 150px; // Maximum width to ensure it doesn't get too large.
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  border-radius: 20px;
  font-size: 1em;
  background-color: ${props => props.bgcolor};
  color: ${props => props.color};
  white-space: nowrap; // Prevent text from wrapping into the next line.
  overflow: hidden; // Hide overflowed text.
  text-overflow: ellipsis; // Indicate text is clipped.

  @media only screen and (max-width: 1300px) {
    font-size: 0.7em;
    min-width: 40px;
    max-width: 120px;
  }
`;