import { Link } from "react-router-dom";

const User = ({ data, index }) => {
  const { name, username, email, id } = data;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <Link to="#" className="btn btn-outline-success">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default User;
