import { useUsers } from "./hooks/useUsers";
import { UserList } from "./components/UserList";
import { SearchBar } from "./components/SearchBar";
import { Loader } from "./components/Loader";
import { GlobalStyles } from "./styles/GlobalStyles";
import ErrorMessage from "./components/ErrorMessage";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;
  @media (max-width: 768px){
    padding: 1rem;
  }
`;

const LoadMoreButton = styled.button`
  background: #0077ff;
  color: white;
  border: none;
  padding: 0.9rem 1.8rem;
  border-radius: 8px;
  font-size: 1rem;
  margin: 2rem auto 1rem auto;
  display: block;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: #005fd1;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;


function App() {
  const { users, loading, error, loadMore, setQuery, query } = useUsers();

  return (
    <>
      <GlobalStyles />
      <Container>
        <h1>Random User App</h1>
        <SearchBar value={query} onChange={setQuery} />

        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!loading && !error && users.length === 0 && <p>No hay resultados</p>}

        <UserList users={users} />

        {!loading && !error && (
          <LoadMoreButton onClick={loadMore} disabled={loading}>
            {loading ? "Cargando..." : "Cargar más"}
          </LoadMoreButton>
        )}
      </Container>
    </>
  );
}

export default App;
