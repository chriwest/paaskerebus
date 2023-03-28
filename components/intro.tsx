import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Påskequiz 2023 🎉🐥
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Årets påskerebus blir en dans imellom flere verdener. Oppgavene i årets rebus kan løses ved å være nøye med detaljer, samt å tenke og handle kreativt. Hvis jeg var deg, så ville jeg vurdert å benytte meg av internett også. Men det er langt fra sikkert at alt du finner her er av relevans for å finne svarene 😊
        Dette er {CMS_NAME}.🐣
      </h4>
    </section>
  )
}

export default Intro
