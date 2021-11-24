import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Users = ({ search, user }) => {
  return (
    <div>
      <table className="table striped bordered hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {user.filter(item => {
              return (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.username.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase())
              )
          })
          .map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
