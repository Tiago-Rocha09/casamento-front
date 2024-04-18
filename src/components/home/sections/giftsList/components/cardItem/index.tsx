"use client";
import { Button } from "@/components/button";
import { Gift } from "@/types/home";
import Image from "next/image";
import { ModalGift } from "../modalGift";
import { useState } from "react";

type CardItemProps = { id: number; thanksMessage: string } & Pick<
  Gift,
  "attributes"
>["attributes"];

export const CardItem = (props: CardItemProps) => {

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <article className="m-auto text-center shadow-sm w-full p-4 hover:bg-gray-100 h-full">
      <Image
        alt={props.image.alt}
        src={props.image.url}
        width={props.image.width}
        height={props.image.height}
        className="m-auto"
      />
      <hgroup className="gap-4 flex flex-col">
        <h3
          className="font-bold"
          dangerouslySetInnerHTML={{ __html: props.name }}
        />
        {props.hasGuest ? (
          <p>Já ganhamos</p>
        ) : (
          <Button text="Presentear" onClick={toggleModal} />
        )}
      </hgroup>

      <ModalGift
        id={props.id}
        show={showModal}
        toggleModal={toggleModal}
        thanksMessage={props.thanksMessage}
      />
    </article>
  );
};
