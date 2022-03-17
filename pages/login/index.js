import React, { useEffect } from "react";
import Layout from "../../components/layout";
import { UsersAPI } from "../../apis/UsersAPI";
const LoginPage = () => {
  const onClickLogin = async () => {
    try {
      const result = await UsersAPI.login({
        username: "whoyaho",
        password: "123123",
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout>
      <h1>로그인 페이지를 구현해 주세요</h1>
      <button onClick={onClickLogin}>login test</button>
    </Layout>
  );
};

export default LoginPage;
