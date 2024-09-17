import React, { useEffect, useState } from 'react';

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setloading]=useState(true);

  async function toggleHandler() {
    try {
        setloading(true)
      const apiResponse = await fetch('https://dummyjson.com/users');
      const result = await apiResponse.json();
      if (result.users) {
        setUsers(result.users);
        setloading(false);
      } else {
        setUsers([]);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    toggleHandler();
  }, []);

  if(loading) return <h1>fetching users please wait...............</h1>
  return (
    <div>
      <h1>User</h1>
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} style={{listStyle: 'none'}}>
              <p>{user.id}  {user.firstName}  {user.lastName}  {user.maidenName}</p>
            </li>
          ))
        ) : (
          <li>No users found</li>
        )}
      </ul>
    </div>
  );
}
