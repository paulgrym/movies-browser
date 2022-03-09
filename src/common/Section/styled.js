import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 1368px;
    margin: 0 auto;
    padding: 0 24px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: 36px;
    margin: 0;
    margin-bottom: 24px;
`;

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 208px);
    grid-gap: 24px;
    margin-bottom: 64px;
`;