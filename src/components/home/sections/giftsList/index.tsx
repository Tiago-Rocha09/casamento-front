"use client";
import { useEffect, useState } from "react";
import { CardItem } from "./components/cardItem";
import { useGiftList } from "./hooks";
import { GiftListProps } from "@/types/home";

export const GiftsListSection = () => {
  const { getGiftList } = useGiftList();
  const [giftList, setGiftList] = useState<GiftListProps | null>(null);

  async function fetchList() {
    const gitfListData = await getGiftList();
    setGiftList(gitfListData);
  }

  useEffect(() => {
    fetchList()
  }, []);
  console.log({giftList});
  
  return (
    <section
      className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black py-20 px-4 md:px-0"
      id="gift-list-section"
    >
      <section className="container mx-auto flex flex-col gap-6">
        <hgroup>
          {giftList?.title && (
            <h2
              dangerouslySetInnerHTML={{ __html: giftList.title }}
              className="text-2xl md:text-3xl font-bold"
            />
          )}
          {giftList?.subtitle && (
            <p dangerouslySetInnerHTML={{ __html: giftList.subtitle }} />
          )}
        </hgroup>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 gap-y-8 md:grid-flow-row">
          {giftList?.gifts &&
            giftList.gifts.map((item) => {
              return (
                <CardItem
                  key={item.id}
                  id={item.id}
                  {...item.attributes}
                  thanksMessage={giftList.thanksMessage}
                  callback={fetchList}
                />
              );
            })}
        </div>
      </section>
    </section>
  );
};
