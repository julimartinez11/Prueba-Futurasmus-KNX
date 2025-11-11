import { useUsers } from "./hooks/useUsers";
import { UserList } from "./components/UserList";
import { SearchBar } from "./components/SearchBar";
import { Loader } from "./components/Loader";
import { GlobalStyles } from "./styles/GlobalStyles";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;
`;

const Button = styled.button`
  background: #0077ff;
  color: white;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  &:hover {
    background: #005fd1;
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
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && users.length === 0 && <p>No hay resultados</p>}

        <UserList users={users} />

        {!loading && !error && (
          <Button onClick={loadMore}>Cargar más</Button>
        )}
      </Container>
    </>
  );
}

export default App;
