"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useGiftList } from "../../hooks";
import { Gift } from "@/types/home";
import flowersImg from "@/assets/flowers.png";
import { Loading } from "@/components/loading";

type ModalGiftProps = {
  id: number;
  show: boolean;
  thanksMessage: string;
  toggleModal: () => void;
};

export const ModalGift = (props: ModalGiftProps) => {
  const { id, show, toggleModal } = props;
  const [name, setName] = useState<string>();
  const [errorName, setErrorName] = useState<string>("");
  const [gift, setGift] = useState<Gift | null>(null);
  const [showThanksMessage, setShowThanksMessage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { getGiftItem, setGiftGuest } = useGiftList();

  const getGiftInfo = useCallback(async () => {
    const response = await getGiftItem(id);
    setGift(response);
  }, [show]);

  const handleSubmit = async () => {
    try {
      if (name) {
        setIsLoading(true);
        await setGiftGuest(props.id, name);
        setIsLoading(false);
        return setShowThanksMessage(true);
      }
      setErrorName("Informe seu nome...");
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (show) {
      getGiftInfo();
    }

    return () => {
      setErrorName("");
      setName("");
    };
  }, [getGiftInfo, show]);

  return show ? (
    <section className="fixed left-0 top-0 bg-black bg-opacity-80 w-screen h-screen flex justify-center items-center">
      <div className="absolute w-11/12 md:w-[25%] h-fit bg-slate-300 shadow-sm rounded-2xl z-10 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-8 h-8 absolute right-2 top-2 bg-gray-100 rounded-full cursor-pointer z-10"
          onClick={toggleModal}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        {gift && (
          <div className="p-8 relative text-center">
            <Image
              alt={gift.attributes.image.alt}
              src={gift.attributes.image.url}
              width={gift.attributes.image.width}
              height={gift.attributes.image.height}
              className="max-w-full m-auto rounded"
            />
            <hgroup className="mt-4">
              <h3 dangerouslySetInnerHTML={{ __html: gift.attributes.name }} />
              <p
                dangerouslySetInnerHTML={{
                  __html: gift.attributes.description,
                }}
              />
              {gift.attributes.hasGuest ? <p>Já ganhamos</p> : null}
            </hgroup>
          </div>
        )}
        <footer className="bg-gray-100 py-3 px-6">
          {showThanksMessage ? (
            <>
              <div className="flex justify-center">
                <Image src={flowersImg} alt="Imagem de flores" height={80} />
                <p
                  dangerouslySetInnerHTML={{ __html: props.thanksMessage }}
                  className="pt-5 pb-10"
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  className="bg-white text-black rounded px-4 py-2 cursor-pointer hover:bg-gray-100 border-[1px] border-gray-300 flex mt-5 mb-4"
                  onClick={toggleModal}
                >
                  Fechar
                </button>

                <button
                  className="bg-white text-black rounded px-4 py-2 cursor-pointer hover:bg-gray-100 border-[1px] border-gray-300 flex mt-5 mb-4"
                  onClick={toggleModal}
                >
                  Enviar uma mensagem
                </button>
              </div>
            </>
          ) : (
            <>
              <fieldset className="pt-5 pb-10">
                <label className="block w-full text-left">
                  Digite seu nome
                  <input
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setErrorName("");
                    }}
                    placeholder="Digite seu nome..."
                    className={`w-full p-2 rounded border-[1px] ${
                      errorName ? "outline-red-600 border-red-600" : ""
                    }`}
                  />
                  {errorName && (
                    <small className="text-red-600">{errorName}</small>
                  )}
                </label>
              </fieldset>
              <div className="flex justify-end gap-4">
                <button
                  className="bg-white text-black rounded px-4 py-2 cursor-pointer hover:bg-gray-100 border-[1px] border-gray-300 flex gap-2 items-center"
                  onClick={toggleModal}
                  disabled={isLoading}
                >
                  {isLoading && <Loading />}
                  Voltar para a lista
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="text-white bg-red-700 rounded px-4 py-2 cursor-pointer hover:bg-red-600 flex gap-2 items-center"
                >
                  {isLoading && <Loading />}
                  Confirmar
                </button>
              </div>
            </>
          )}
        </footer>
      </div>
      ;
    </section>
  ) : null;
};
