import Container from "../components/container";
import InputField from "../components/input-field";
import Layout from "../components/layout";
import Header from "../components/header";

import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import React, { useState } from "react";
import styles from "../styles/input.module.css";

type Props = {
  allPosts: Post[];
};

export default function SubTerra({ allPosts }: Props) {
  const [validationMessage, setValidationMessage] = useState("");
  const [validationMessage2, setValidationMessage2] = useState("");
  const [validationMessage3, setValidationMessage3] = useState("");
  const [validationMessage4, setValidationMessage4] = useState("");

  const handleValidation = (isValid) => {
    if (isValid) {
      setValidationMessage("Svaret er riktig 😀🎉");
    } else {
      setValidationMessage("Svaret er feil 😬");
    }
  };

  const handleValidation2 = (isValid) => {
    if (isValid) {
      setValidationMessage2("Svaret er riktig 😀🎉");
    } else {
      setValidationMessage2("Svaret er feil 😬");
    }
  };
  const handleValidation3 = (isValid) => {
    if (isValid) {
      setValidationMessage3("Svaret er riktig 😀🎉");
    } else {
      setValidationMessage3("Svaret er feil 😬");
    }
  };
  const handleValidation4 = (isValid) => {
    if (isValid) {
      setValidationMessage4("Svaret er riktig 👏😮🔥🎉");
    } else {
      setValidationMessage4("Svaret er feil 😬");
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
          <h2
            className={`text-4xl md:text-4xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            Ooooh, det ser ut som du har ramlet inn til svarsiden. Men har du
            svar på alle oppgavene da? 🤔 🎉🐥
          </h2>
          <InputField
            label="Svar for spørsmål 1:"
            id="spm1"
            correctValue={["peace", "harmony", "tranquility"]} // Pass an array of correct answers
            onValidation={handleValidation}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessage}
          </p>
          <InputField
            label="Svar for spørsmål 2:"
            id="spm2"
            correctValue={["midjourney"]}
            onValidation={handleValidation2}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessage2}
          </p>
          <InputField
            label="Svar for spørsmål 3:"
            id="spm3"
            correctValue={["bak timeglasset finner du neste hint", "timeglasset", "voss"]}
            onValidation={handleValidation3}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessage3}
          </p>
          <InputField
            label="Svar for spørsmål 4:"
            id="spm4"
            correctValue={["darvaza", "darvaza eternal fire", "krateret i derveze", "door to hell", "gates of hell", "darvaza gas crater"]}
            onValidation={handleValidation4}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessage4}
          </p>
        </Container>
      </Layout>
    </>
  );
}
