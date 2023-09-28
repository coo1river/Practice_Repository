import React from "react";
import { useLocation } from "react-router-dom";

export default function BoardPage() {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.userId}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
