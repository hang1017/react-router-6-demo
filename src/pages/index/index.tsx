import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IndexProps {}

const IndexPage: FC<IndexProps> = () => {
  let navigate = useNavigate();

  const toHomeAddParams = () => {
    let searchParams = new URLSearchParams({ name: "hang" });
    searchParams.append("age", "18");
    navigate(`/home?${searchParams.toString()}`);
  };
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
      <button onClick={toHomeAddParams}>跳转到 home 页面，并添加参数</button>
      <button onClick={() => navigate("/mulRoute")}>替换到 嵌套 route 页面</button>
    </div>
  );
};

export default IndexPage;
