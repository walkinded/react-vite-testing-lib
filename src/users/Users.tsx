import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setUsers(result.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      {users?.map((user: any) => (
        <div key={user?.id} data-testid="user-item">
          <Link to={`/users/${user?.id}`}>{user?.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
