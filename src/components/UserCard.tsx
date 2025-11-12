import styled from "styled-components";
import type { User } from "../hooks/useUsers";

const Card = styled.div`
  background: #ffffff;
  border-radius: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.25s ease-in-out;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }

  img {
    border-radius: 50%;
    width: 90px;
    height: 90px;
    object-fit: cover;
    border: 3px solid #007bff22;
    margin-bottom: 0.8rem;
  }

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
    color: #111827;
  }

  p {
    font-size: 0.9rem;
    color: #555;
  }

  p:last-child {
    font-weight: 500;
    color: #0077ff;
  }
`;

export const UserCard = ({ user }: { user: User }) => (
  <Card>
    <img
      src={user.picture.large}
      alt={`${user.name.first} ${user.name.last}`}
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
