import React, { FC } from "react";
import { useParams } from "react-router-dom";

interface UserProps {}

const UserPage: FC<UserProps> = () => {
  let { userId } = useParams();
  return <div>this is user, userId is: {userId}</div>;
};

export default UserPage;
