import React, { FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Routes } from "#routes";
import { useLogin } from "#hooks/useLogin";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding: 50px;
`;

const Index: FC = () => {
  const navigate = useNavigate();
  const { isLoading, queryResult, isLogin } = useLogin();

  useEffect(() => {
    if (!isLoading && !isLogin) {
      navigate(Routes.Login);
    }
  }, [isLogin, navigate, isLoading]);

  if (isLoading || !queryResult) return <></>;

  return (
    <StyledWrapper>
      <h1>Hello {queryResult.fullName}.</h1>
      <p>Your data: </p>
      <ul>
        {Object.keys(queryResult).map((key) => (
          <li>
            <b>{key}</b>: {queryResult[key]}
          </li>
        ))}
      </ul>
      <Link to={Routes.Logout}>Log out</Link>
    </StyledWrapper>
  );
};

export default Index;
