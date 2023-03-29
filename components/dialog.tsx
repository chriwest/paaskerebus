import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
      >
        Fasit ligger tro det eller ei her
      </button>

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
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Heisann 😎
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500 border-t pt-2">
                    Denne lenken tar deg videre til Git-repoet med koden til
                    nettsiden. Det vil være mulig å grave seg frem til fasit
                    der, men det ville i så fall regnes som juks og ikke fullt
                    så givende 😄 Jeg forventer mer av deg 🤓 Om du likevel er
                    nysgjerrig, så sjekk ut repoet 👻
                  </p>
                  <p className="text-sm text-gray-500 border-t pt-2">
                   Men ok, hvis det blir for ille, og du ikke kommer noen vei, så kan du også ty til ekstra hint om oppgavene...
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
                  <a
                    target="_blank"
                    href="https://github.com/chriwest/paaskerebus"
                    className="ml-2 px-4 py-2 text-sm text-white bg-green-500 border border-transparent rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
                  >
                    Til GitHub{" "}
                  </a>
                  <a
                    target="_blank"
                    href="/hintside/"
                    className="ml-2 px-4 py-2 text-sm text-white bg-green-500 border border-transparent rounded-md hover:bg-opacity-50 duration-300 shadow-xl"
                  >
                    Til Hint{" "}
                  </a>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
