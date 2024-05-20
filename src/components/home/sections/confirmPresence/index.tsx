"use client";
import { Loading } from "@/components/loading";
import { ChangeEvent, ChangeEventHandler, ReactNode, useEffect, useState } from "react";
import { useConfirmPresence } from "./hooks";

export const ConfirmPresenceSection = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { createConfirmPresence } = useConfirmPresence();
  const [names, setNames] = useState<(string | null)[]>([""]);
  const [qtdPerson, setQtdPerson] = useState<number>(1);
  const [message, setMessage] = useState<string>();
  const [confirm, setConfirm] = useState<number>(1);
  const [errorNames, setErrorNames] = useState<string[]>([""]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleQtdPersonChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = Number(event.target.value)
    setQtdPerson(newValue)
    const namesTemp = [];
    for (let index = 0; index < newValue; index++) {
      if (!names[index]) {
        namesTemp[index] = null
      }
      else {
        namesTemp[index] = names[index]
      }
    }

    setNames(namesTemp)
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const newNames = names.map((itemN, indexN) => {
      if (indexN === index) {
        return event.target.value
      }
      return itemN
    })
    const newErrorNames = errorNames.map((itemN, indexN) => {
      if (indexN === index) return ""
      return itemN
    })

    setNames(newNames);
    setErrorNames(newErrorNames);

  }

  const handleSubmit = async () => {
    try {
      const errorNamesTemp: string[] = []
      let hasError = false
      names.forEach((element, index) => {
        if (!element) {
          errorNamesTemp[index] = "Informe o nome do convidado..."
          hasError = true
        } else {
          errorNamesTemp[index] = ""
        }
      });

      if (hasError && confirm) {
        return setErrorNames(errorNamesTemp)
      }
      const namesTemp = names.join("\n")

      setIsLoading(true);
      await createConfirmPresence(namesTemp, confirm === 1 ? "Sim" : "Não", message || '', confirm === 1 ? qtdPerson : 0);
      setConfirmed(true);
      return setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(true)
    }, 3000);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (imagesLoaded && window.location.hash === '#confirm-presence-section') {
      const section = document.getElementById('confirm-presence-section');
      if (section) {
        section.scrollIntoView();
      }
    }
  }, [imagesLoaded]);

  return (
    <section className="odd:bg-gray-500 even:bg-white odd:text-white py-20 px-4 md:px-0" id="confirm-presence-section">
      {!imagesLoaded && <div className="fixed z-10 bg-black top-0 left-0 w-screen h-screen opacity-90 flex justify-center items-center"><Loading className="w-12 h-12" /></div>}
      <section className="container mx-auto flex flex-col gap-6">
        {children}
        <div className="bg-gray-100 py-3 px-6 rounded-2xl text-black">
          <form className="flex flex-col gap-3">

            <fieldset>
              Você irá ao casamento?
              <div className="flex gap-4">
                <label className="flex gap-1 cursor-pointer">
                  <input
                    type="radio"
                    checked={confirm === 1}
                    disabled={confirmed}
                    onChange={(event) =>
                      setConfirm(event.target.checked ? 1 : 0)
                    }
                  />
                  Sim
                </label>
                <label className="flex gap-1 cursor-pointer">
                  <input
                    type="radio"
                    checked={confirm === 0}
                    disabled={confirmed}
                    onChange={(event) =>
                      setConfirm(event.target.checked ? 0 : 1)
                    }
                  />
                  Não
                </label>
              </div>
            </fieldset>
            <fieldset className={confirm === 1 ? 'block' : 'hidden'}>
              <label className="block">
                <span className="w-full block">Quantidade de pessoas incluindo você</span>
                <select value={qtdPerson.toString()} onChange={handleQtdPersonChange} disabled={confirmed} className={`p-2 rounded ${confirmed ? '' : 'bg-white'}`}>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </label>
            </fieldset>
            {
              confirm === 1 ? Array(qtdPerson).fill(1).map((item, index) => {
                return <fieldset key={index.toString()}>
                  <label className="block">
                    <span className="w-full block">Convidado {index + 1}</span>
                    <input
                      value={names[index]?.toString()}
                      disabled={confirmed}
                      onChange={(event) => handleNameChange(event, index)}
                      placeholder="Insira o nome do convidado..."
                      className={`p-2 rounded border-[1px] w-full md:w-1/2 ${errorNames[index] ? "outline-red-600 border-red-600" : ""
                        }`}
                    />
                  </label>
                  {errorNames[index] && <small className="text-red-600">{errorNames[index]}</small>}
                </fieldset>
              }) : null
            }
            <fieldset>
              <label className="block">
                <span className="w-full block">Deixe uma mensagem para os noivos</span>
                <textarea
                  value={message}
                  disabled={confirmed}
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  placeholder="Digite uma mensagem..."
                  className={`p-2 rounded border-[1px] w-full md:w-1/2`}
                  rows={5}
                />
              </label>
            </fieldset>
            {!confirmed && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="text-white bg-red-700 rounded px-4 py-2 cursor-pointer hover:bg-red-600 flex gap-2 items-center w-fit min-w-36 justify-center m-auto"
              >
                {isLoading && <Loading />}
                Confirmar
              </button>
            )}
          </form>
        </div>
      </section>
    </section>
  );
};
