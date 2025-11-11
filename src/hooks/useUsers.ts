import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export type User = {
  login: { uuid: string };
  name: { first: string; last: string };
  email: string;
  phone: string;
  picture: { large: string };
  location: { city: string; country: string };
};

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const fetchUsers = useCallback(async (pageNum = 1) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://randomuser.me/api/?page=${pageNum}&results=20&seed=futurasmus`
      );
      const newUsers: User[] = res.data.results;
      setUsers(prev => (pageNum === 1 ? newUsers : [...prev, ...newUsers]));
      setError(null);
    } catch (err: any) {
      setError("Error al cargar usuarios");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(1);
  }, [fetchUsers]);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchUsers(nextPage);
  };

  const filteredUsers = users.filter(u => {
    const text = `${u.name.first} ${u.name.last} ${u.email} ${u.location.country}`.toLowerCase();
    return text.includes(query.toLowerCase());
  });

  return { users: filteredUsers, loading, error, loadMore, setQuery, query };
}
