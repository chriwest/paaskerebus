import Container from "../components/container";
import InputField from "../components/input-field";
import Layout from "../components/layout";
import Header from "../components/header";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import React, { useState, useEffect, Fragment } from "react";
import styles from "../styles/input.module.css";
import dynamic from "next/dynamic";
import { Dialog, Transition } from "@headlessui/react";

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
  const Confetti = dynamic(() => import("react-confetti"), {
    ssr: false,
  });

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

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

  useEffect(() => {
    if (allAnswersCorrect()) {
      setIsOpen(true);
      setShowConfetti(true);
    }
  }, [correctAnswers]);

  const allAnswersCorrect = () => {
    const numberOfInputFields = 4;
    const areAllCorrect =
      Object.keys(correctAnswers).length === numberOfInputFields &&
      Object.values(correctAnswers).every((answer) => answer === true);

    return areAllCorrect;
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
          {allAnswersCorrect() && (
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen px-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>

                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl md:text-3xl font-bold leading-6 text-gray-500"
                      >
                        Gratulerer 😀
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500 border-t pt-2">
                          {allAnswersCorrect() && (
                            <p
                              className={`text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
                            >
                              Whaaahahaha, du klarte alle 😍👏👏🐥 Det var
                              enormt godt jobbet!!! Svaret på spørsmål 3 vil
                              lede deg til hands-on premier 😊 Men for nå, så
                              kan du nyte følelsen av å være over snittet smart
                              🤓🐣🔥🤩🥳
                            </p>
                          )}
                        </p>
                      </div>

                      <div className="mt-4">
                        <button
                          type="button"
                          className="inline-flex justify-center px-4 py-2 text-sm text-red-900 bg-red-100 border border-transparent rounded-md hover:bg-red-200 duration-300"
                          onClick={closeModal}
                        >
                          Lukk
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          )}

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
        </Container>
      </Layout>
      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </>
  );
}
