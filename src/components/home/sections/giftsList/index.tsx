import { CardItem } from "./components/cardItem";
import { useGiftList } from "./hooks";

export const GiftsListSection = async () => {
  const { getGiftList } = useGiftList();

  const gitfListData = await getGiftList();

  return (
    <section className="odd:bg-gray-500 even:bg-white odd:text-white even:text-black py-20" id="gift-list-section">
      <section className="container mx-auto flex flex-col gap-6">
        <hgroup>
          {gitfListData?.title && (
            <h2
              dangerouslySetInnerHTML={{ __html: gitfListData.title }}
              className="text-2xl md:text-3xl font-bold"
            />
          )}
          {gitfListData?.subtitle && (
            <p dangerouslySetInnerHTML={{ __html: gitfListData.subtitle }} />
          )}
        </hgroup>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 gap-y-8 md:grid-flow-row">
          {gitfListData?.gifts &&
            gitfListData.gifts.map((item) => {
              return <CardItem key={item.id} id={item.id} {...item.attributes} thanksMessage={gitfListData.thanksMessage} />;
            })}
        </div>
      </section>
    </section>
  );
};
