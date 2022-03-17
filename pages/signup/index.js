import React from "react";
import { UsersAPI } from "../../apis/UsersAPI";
import Layout from "../../components/layout";

const SignUp = () => {
  const onClickSignup = async () => {
    try {
      const result = await UsersAPI.signup({
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
      <h1>회원가입 페이지를 구현해 주세요</h1>
      <button onClick={onClickSignup}>signup test</button>
    </Layout>
  );
};

export default SignUp;
