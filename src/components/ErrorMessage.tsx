import styled from "styled-components";

const Message = styled.p`
  color: red;
  text-align: center;
  font-weight: 500;
  margin-top: 2rem;
`;

export default function ErrorMessage({ message }: { message: string }) {
  return <Message>{message}</Message>;
}
