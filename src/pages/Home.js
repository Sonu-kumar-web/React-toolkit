import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUser } from "../redux/reducers";
import { getUsers } from "../redux/actions";

const Home = () => {
  //   const { users } = useSelector(({ users }) => users);
  const users = useSelector((state) => state.users);
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
      <form onSubmit={saveUser}>
        <input type="text" name="" placeholder="Name" ref={inputRef} />
        <br />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  );
};

export default Home;
