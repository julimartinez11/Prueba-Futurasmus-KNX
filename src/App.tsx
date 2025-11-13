import { useUsers } from "./hooks/useUsers";
import { UserList } from "./components/UserList";
import { SearchBar } from "./components/SearchBar";
import { Loader } from "./components/Loader";
import { GlobalStyles } from "./styles/GlobalStyles";
import ErrorMessage from "./components/ErrorMessage";
import styled from "styled-components";
import logo from "./assets/futuLogo.png";


const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem;
  @media (max-width: 768px){
    padding: 1rem;
  }
`;

const LoadMoreButton = styled.button`
  background: linear-gradient(135deg, #0077ff, #005fcc);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  margin: 2rem auto;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 119, 255, 0.4);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 1.5rem;

  img {
    width: 80px;
    height: 80px;
    margin-bottom: 0.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
  }

  h1 {
    font-size: 2rem;
    color: #1a1a1a;
    margin: 0;
  }
    
  p {
    color: #6b7280;
    font-size: 0.95rem;
  }

`;



function App() {
  const { users, loading, error, loadMore, setQuery, query } = useUsers();

  return (
    <>
      <GlobalStyles />
      <Container>
        <Header>
          <img src={logo} alt="Futurasmus Logo" />
          <h1>App Futurasmus React</h1>
          <p>Prueba técnica - Programador FullStack</p>
        </Header>

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
