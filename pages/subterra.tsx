import Container from "../components/container";
import InputField from "../components/input-field";
import Layout from "../components/layout";
import Header from '../components/header'

import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import React, { useState } from "react";

type Props = {
  allPosts: Post[];
};

export default function SubTerra({ allPosts }: Props) {
  const [validationMessage, setValidationMessage] = useState("");
  const [validationMessage2, setValidationMessage2] = useState("");

  const handleValidation = (isValid) => {
    if (isValid) {
      setValidationMessage("Svaret er kult");
    } else {
      setValidationMessage("Svaret er feil 😬");
    }
  };

  const handleValidation2 = (isValid) => {
    if (isValid) {
      setValidationMessage2("Svaret er mega");
    } else {
      setValidationMessage2("Svaret er feil 😬");
    }
  };
  return (
    <>
      <Layout>
        <Head>
          <title>{`${CMS_NAME}`}</title>
        </Head>
        <Container>
        <Header />

          <InputField correctValue="correct" onValidation={handleValidation} />
          <p>{validationMessage}</p>
          <InputField correctValue="peace" onValidation={handleValidation2} />
          <p>{validationMessage2}</p>
        </Container>
      </Layout>
    </>
  );
}
