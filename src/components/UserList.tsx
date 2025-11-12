import styled from "styled-components";
import { UserCard } from "./UserCard";
import type { User } from "../hooks/useUsers";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  padding: 0 0.5rem;
  margin-top: 1.5rem;

  @media (max-width: 600px){
    grid-template-columns: 1fr;
  }
`;

export const UserList = ({ users }: { users: User[] }) => (
  <Grid>
    {users.map(u => (
      <UserCard key={u.login.uuid} user={u} />
    ))}
  </Grid>
);
