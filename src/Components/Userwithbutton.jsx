import React, { useEffect, useState } from 'react';
import styles from './Usertable.module.css'

export default function User() {
  const [users, setUsers] = useState([]);
  const [loading, setloading]=useState(false);

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

//   useEffect(() => {
//     toggleHandler();
//   }, []);

  if(loading) return <h1>fetching users please wait...............</h1>
  return (
    <div className={styles.div}>
        <button onClick={toggleHandler}>check User</button>
      <h1>User</h1>
      <table>
        <thead >
            <tr className={styles.tableRow}>
                <td>ID</td>
                <td>FIRST NAME</td>
                <td>LAST NAME</td>
                <td>GENDER</td>
                <td>EMAIL</td>
                <td>PHONE</td>
            </tr>
        </thead>
    
      <tbody>
        {users.length > 0 ? (
          users.map((user) => (
            <tr key={user.id}> 
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
            </tr>
          ))
        ) : (
          <li>No users found</li>
        )}
      </tbody>

      </table>
    </div>
  );
}
