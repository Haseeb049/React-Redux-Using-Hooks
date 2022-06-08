import React, { useEffect } from "react";
import { fetchUsers } from "../redux";
import { useSelector, useDispatch } from "react-redux";

function UsersContainer() {
  const userData = useSelector((state) => {
    console.log("state", state);
    return state.user;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return userData.loading ? (
    <h2>loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      {userData &&
        userData.users &&
        userData.users.map((user) => <p>{user.name}</p>)}
    </div>
  );
}

export default UsersContainer;
