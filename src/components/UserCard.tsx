import styled from "styled-components";
import type { User } from "../hooks/useUsers";

const Card = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const UserCard = ({ user }: { user: User }) => (
  <Card>
    <img
      src={user.picture.large}
      alt={`${user.name.first} ${user.name.last}`}
      style={{ borderRadius: "50%", width: 80, height: 80 }}
    />
    <h3>
      {user.name.first} {user.name.last}
    </h3>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>
      {user.location.city}, {user.location.country}
    </p>
  </Card>
);
