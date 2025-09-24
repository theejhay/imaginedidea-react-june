import { useEffect, useState } from "react";

function FetchUsers() {
  // https://jsonplaceholder.typicode.com/users

  const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((userData) => {
//         setUsers(userData);
//       });
//   }, []);

useEffect(() => {
    async function fetchUsers () {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const responseData = await res.json();
        setUsers(responseData);
        console.log(responseData);
    };

    fetchUsers();

}, []);

  return (
    <table className="table table-striped mt-5 mb-5">
      <thead>
        <tr>
          <th>#</th>
          <th> Name </th>
          <th> Email</th>
          <th> Phone</th>
          <th> Username</th>
          <th> Company</th>
          <th> City</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td> {user.id}</td>
            <td> {user.name}</td>
            <td> {user.email}</td>
            <td> {user.phone}</td>
            <td> {user.username}</td>
            <td> {user.company.name}</td>
            <td> {user.address.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default FetchUsers;
