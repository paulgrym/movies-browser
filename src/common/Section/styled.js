import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1368px;
    margin: 32px auto;
    padding: 24px;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    font-size: 36px;
    margin: 0;
`;

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 24px 0;
`;