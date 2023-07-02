import styled from "styled-components";

const Wrapper = styled.section`
    min-height: 100vh;
    // background-color: ${({theme}) => theme.benifit.background};
    background-color: #3A3A3A;

`;


const CaseStudy = () =>{
    return (
        <Wrapper>
            <h1 style={{color: "#fff"}}>Case Study All our work</h1>
        </Wrapper>
    )
}

export default CaseStudy;