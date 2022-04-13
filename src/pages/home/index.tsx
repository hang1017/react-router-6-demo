import React, { FC } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Foo from "../../components/Foo";

interface HomeProps {
  location?: any;
}

const HomePage: FC<HomeProps> = (props) => {
  let location = useLocation();
  let navigate = useNavigate();
  let urlParams = new URLSearchParams(location.search);
  const obj = {} as any;
  urlParams.forEach((value, key) => (obj[key] = value));

  console.log(obj);
  return (
    <div>
      this is home
      <Foo>
        <div>this is Foo</div>
      </Foo>
      <button onClick={() => navigate("/home/one")}>前往 homeOne 局部页面</button>
      <button onClick={() => navigate("/home/two")}>前往 homeTwo 局部页面</button>
      <Outlet />
    </div>
  );
};

export default HomePage;
