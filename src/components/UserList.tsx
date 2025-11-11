import styled from "styled-components";
import { UserCard } from "./UserCard";
import type { User } from "../hooks/useUsers";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const UserList = ({ users }: { users: User[] }) => (
  <Grid>
    {users.map(u => (
      <UserCard key={u.login.uuid} user={u} />
    ))}
  </Grid>
);
