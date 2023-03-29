import Container from "../components/container";
import Layout from "../components/layout";
import Header from "../components/header";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import styles from "../styles/input.module.css";

type Props = {
  allPosts: Post[];
};

export default function Hint({ allPosts }: Props) {
  const [isShowing1, setIsShowing1] = useState(false);
  const [isShowing2, setIsShowing2] = useState(false);
  const [isShowing3, setIsShowing3] = useState(false);
  const [isShowing4, setIsShowing4] = useState(false);
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
            🆘🚨🆘🚨🆘🚨 DANGER ZONE 🆘🚨🆘🚨🆘🚨
          </h2>
          <h3
            className={`text-3xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8 ${styles.container}`}
          >
            Her er det mulig å sjekke ganske tydelige hint til oppgavene. Det
            blir langt lettere med disse, så vær helt sikker på at det er det
            ønsker.
          </h3>

          <button
            className="ml-2 px-4 py-2 text-sm text-white bg-green-500 border border-transparent rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
            onClick={() => setIsShowing1((isShowing) => !isShowing)}
          >
            Oppgave 1
          </button>
          <br />

          <Transition show={isShowing1} as="a" className="font-bold">
            Hvem hører vi? Hvilke nummer har de? Og lagt sammen, hvilket årstall
            kommer man frem til som kan være relevant for det sistemann
            nevner?🤔
          </Transition>
          <br />
          <button
            className="ml-2 px-4 py-2 text-sm text-white bg-green-500 border border-transparent rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
            onClick={() => setIsShowing2((isShowing) => !isShowing)}
          >
            Oppgave 2
          </button>
          <br />

          <Transition show={isShowing2} as="b" className="font-bold">
            Du har åpenbart en kode som trengs å oversettes. Hvilket verktøy du
            skal bruke, står nesten svart på hvitt, i oppgaveteksten, i alle
            fall tydelig hintet 😊
          </Transition>
          <br />

          <button
            className="ml-2 px-4 py-2 text-sm text-white bg-green-500 border border-transparent rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
            onClick={() => setIsShowing3((isShowing) => !isShowing)}
          >
            Oppgave 3
          </button>
          <br />

          <Transition show={isShowing3} as="c" className="font-bold">
            Jeg anerkjenner at denne kan være vrien. Foruten bandet, så er det
            mange sitater her, men det er en som står for flere enn andre.
            Vedkommende har også et "verktøy" oppkalt etter seg som du trenger
            for å oversette "de første" 😎
          </Transition>
          <br />

          <button
            className="ml-2 px-4 py-2 text-sm text-white bg-green-500 border border-transparent rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
            onClick={() => setIsShowing4((isShowing) => !isShowing)}
          >
            Oppgave 4
          </button>
          <br />

          <Transition show={isShowing4} as="d" className="font-bold">
            Vi skal frem til et sted, og du har alt du trenger for å komme frem
            i teksten, noen tall er tydeligere enn andre, men det må nok søkes
            opp, for det er ikke et format jeg tar i hodet...🌎
          </Transition>
        </Container>
      </Layout>
    </>
  );
}
