"use client";
import { Loading } from "@/components/loading";
import { ReactNode, useState } from "react";
import { useConfirmPresence } from "./hooks";

export const ConfirmPresenceSection = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { createConfirmPresence } = useConfirmPresence();
  const [name, setName] = useState<string>();
  const [confirm, setConfirm] = useState<number>(1);
  const [errorName, setErrorName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleSubmit = async () => {
    try {
      if (name) {
        setIsLoading(true);
        await createConfirmPresence(name, confirm === 1 ? "Sim" : "Não");
        setConfirmed(true);
        return setIsLoading(false);
      }
      setErrorName("Informe seu nome...");
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <section className="odd:bg-gray-500 even:bg-white odd:text-white py-20" id="confirm-presence-section">
      <section className="container mx-auto flex flex-col gap-6">
        {children}
        <div className="bg-gray-100 py-3 px-6 rounded-2xl text-black">
          <form className="flex flex-col gap-3">
            <fieldset>
              <label className="block">
                <span className="w-full block">Nome</span>
                <input
                  value={name}
                  disabled={confirmed}
                  onChange={(event) => {
                    setName(event.target.value);
                    setErrorName("");
                  }}
                  placeholder="Insira seu nome..."
                  className={`p-2 rounded border-[1px] w-full md:w-1/2 ${
                    errorName ? "outline-red-600 border-red-600" : ""
                  }`}
                />
              </label>
              {errorName && <small className="text-red-600">{errorName}</small>}
            </fieldset>
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
