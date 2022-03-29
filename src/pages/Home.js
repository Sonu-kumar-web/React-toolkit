import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUser } from "../redux/reducers";
import { getUsers } from "../redux/actions";
import User from "../conponents/User";
import Loader from "../conponents/Loader";

const Home = () => {
  //   const { users } = useSelector(({ users }) => users);
  // const users = useSelector((state) => state.users);
  const { users, loader } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const inputRef = useRef("");
  console.log("users", users);

  useEffect(() => {
    console.log("API call", dispatch(getUsers()));
  }, []);

  const saveUser = (e) => {
    e.preventDefault();
    dispatch(addUser(inputRef.current.value));
    inputRef.current.value = "";
  };

  return (
    <>
      {!loader ? (
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return <User data={user} index={index} key={index} />;
              })}
            </tbody>
          </table>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              margin: "50px",
            }}
          >
            <form onSubmit={saveUser}>
              <input type="text" name="" placeholder="Name" ref={inputRef} />
              <br />
              <br />
              <input type="submit" value="Add User" />
            </form>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Home;
