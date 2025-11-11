import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const SearchBar = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => (
  <Input
    placeholder="Buscar por nombre, email o país..."
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);
