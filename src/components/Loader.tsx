import styled from "styled-components";

const LoaderWrapper = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const Loader = ({ text = "Cargando..." }: { text?: string }) => (
  <LoaderWrapper>{text}</LoaderWrapper>
);
