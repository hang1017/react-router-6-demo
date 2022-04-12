import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IndexProps {}

const IndexPage: FC<IndexProps> = () => {
  let navigate = useNavigate();
  return (
    <div>
      <div>this is index</div>
      <div>
        <Link to="home">to home page</Link>
      </div>
      <div>
        <Link to="user:123">to user page</Link>
      </div>
      <button onClick={() => navigate("/home")}>跳转到 home 页面</button>
      <button onClick={() => navigate("/home", { replace: true })}>替换到 home 页面</button>
    </div>
  );
};

export default IndexPage;
