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
  const [correctAnswers, setCorrectAnswers] = useState<Record<number, boolean>>(
    {}
  );
  const [validationMessages, setValidationMessages] = useState<
    Record<number, string>
  >({});

  const handleValidation = (id: number, isValid: boolean) => {
    setCorrectAnswers((prevState) => ({ ...prevState, [id]: isValid }));
    setValidationMessages((prevState) => ({
      ...prevState,
      [id]: isValid ? "Svaret er riktig 😀🎉" : "Svaret er feil 😬",
      [id]: isValid ? "Svaret er riktig 😀🎉" : "Svaret er feil 😬",
      [id]: isValid ? "Svaret er riktig 😀🎉" : "Svaret er feil 😬",
      [id]: isValid ? "Svaret er riktig 👏😮🔥🎉" : "Svaret er feil 😬",
    }));
  };

  const allAnswersCorrect = () => {
    const numberOfInputFields = 4;
    return (
      Object.keys(correctAnswers).length === numberOfInputFields &&
      Object.values(correctAnswers).every((answer) => answer === true)
    );
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
            Ooooh, det ser ut som du har ramlet inn til svarsiden 😀 Men har du
            svar på alle oppgavene da? 🤔 🎉🐥
          </h2>
          <InputField
            label="Svar for oppgave 1:"
            id="spm1"
            correctValue={["peace", "harmony", "tranquility"]}
            onValidation={(isValid) => handleValidation(1, isValid)}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessages[1]}
          </p>
          <InputField
            label="Svar for oppgave 2:"
            id="spm2"
            correctValue={["midjourney"]}
            onValidation={(isValid) => handleValidation(2, isValid)}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessages[2]}
          </p>
          <InputField
            label="Svar for oppgave 3:"
            id="spm3"
            correctValue={[
              "bak timeglasset finner du neste hint",
              "timeglasset",
              "voss",
              "timeglass",
            ]}
            onValidation={(isValid) => handleValidation(3, isValid)}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessages[3]}
          </p>
          <InputField
            label="Svar for oppgave 4:"
            id="spm4"
            correctValue={[
              "darvaza",
              "darvaza eternal fire",
              "krateret i derveze",
              "door to hell",
              "gates of hell",
              "darvaza gas crater",
            ]}
            onValidation={(isValid) => handleValidation(4, isValid)}
          />
          <p
            className={`text-2xl md:text-2xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            {validationMessages[4]}
          </p>
          {allAnswersCorrect() && (
            <p
              className={`text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
            >
              Whaaahahaha, du klarte alle 😍👏👏🐥 Det var enormt godt jobbet!!!
              Svaret på spørsmål 3 vil lede deg til hands-on premier 😊 Men for
              nå, så kan du nyte følelsen av å være over snittet smart 🤓🐣🔥🤩🥳
            </p>
          )}
        </Container>
      </Layout>
    </>
  );
}
