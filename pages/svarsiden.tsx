import Container from "../components/container";
import InputField from "../components/input-field";
import Layout from "../components/layout";
import Header from "../components/header";
// import Confetti from "react-confetti";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import React, { useState, useEffect } from "react";
import styles from "../styles/input.module.css";
import dynamic from 'next/dynamic'

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
  const Confetti = dynamic(() => import('react-confetti'), {
    ssr: false,
  })

  const [showConfetti, setShowConfetti] = useState(false);

  const handleValidation = (
    id: number,
    isValid: boolean,
    validMessage: string,
    invalidMessage: string
  ) => {
    setCorrectAnswers((prevState) => ({ ...prevState, [id]: isValid }));
    setValidationMessages((prevState) => ({
      ...prevState,
      [id]: isValid ? validMessage : invalidMessage,
    }));
  };


  const allAnswersCorrect = () => {
    const numberOfInputFields = 4;
    return (
      Object.keys(correctAnswers).length === numberOfInputFields &&
      Object.values(correctAnswers).every((answer) => answer === true)
    );
  };

  useEffect(() => {
    if (allAnswersCorrect()) {
      setShowConfetti(true);
    }
  }, [correctAnswers]);
  
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
            correctValue={["lillehammer", "ol på lillehammer", "ol 94"]}
            onValidation={(isValid) =>
              handleValidation(
                1,
                isValid,
                "Bravo 👏😀 OL på Lillehammer ble meldt som tidenes OL av daværende IOC-general ⛷️  Som du sikkert har forstått, så var stemmene du hørte. Trump, Obama, Queen Elisabeth og King Charles. Med presidentnavn og regaltittel, så skal talelt bli 94. Elevenlabs hjalp til med stemmene",
                "Svaret er feil 😬"
              )
            }
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
            onValidation={(isValid) =>
              handleValidation(
                2,
                isValid,
                "Yeeees🐥🎉 Bildene i oppgave to er generert ved hjelp av Midjourney, og du brukte nok mest sannsynlig Base64 konvertering. Så du hintene?",
                "Svaret er feil 😬"
              )
            }
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
            onValidation={(isValid) =>
              handleValidation(
                3,
                isValid,
                "Oooouf, utrolig bra jobbet 😀 Denne kan ikke ha vært lett, selv om jeg forsøkte så godt jeg kunne å sitere Cæsar og hinte til at kun første bokstav var vitkig 😅 Chat-GPT hjalp til med å ordne ABBA-teksten",
                "Svaret er feil 😬"
              )
            }
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
            onValidation={(isValid) =>
              handleValidation(
                4,
                isValid,
                "Svaret er riktig 👏😮🔥🎉 Ikke verst! GPT-4 fikk frie tøyler til å lage en oppgave med koordinater basert på en ukjent men fasinerende sted",
                "Svaret er feil 😬"
              )
            }
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
              nå, så kan du nyte følelsen av å være over snittet smart
              🤓🐣🔥🤩🥳
            </p>
          )}
        </Container>
      </Layout>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </>
  );
}
