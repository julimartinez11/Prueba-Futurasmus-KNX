import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.2rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 0 3px rgba(0, 119, 255, 0.2);
  }
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
