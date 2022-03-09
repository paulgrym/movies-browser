import { Body, Title, Wrapper } from "./styled";

const Section = ({ title, body }) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Body>{body}</Body>
        </Wrapper>
    );
}

export default Section;