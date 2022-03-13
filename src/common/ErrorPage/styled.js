import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../images/error.svg";

export const Wrapper = styled.div`
  text-align: center;
  margin-top: 180px;
`;

export const Icon = styled(ErrorIcon)`
  margin-bottom: 38px;
`;

export const Info = styled.h2`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const Message = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 24px 0;
`;

export const Button = styled.button`
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 5px;
`;
