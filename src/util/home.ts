import {
  APIAboutResponseProps,
  APIAreaPixResponseProps,
  APIBannerResponseProps,
  APIConfirmResponseProps,
  APIConfirmationResponseProps,
  APIExtraInfoResponseProps,
  APIGiftListResponseProps,
  APIGiftResponseProps,
  APILocalResponseProps,
  APIMainInfoResponseProps,
  APIMetaDataResponseProps,
  AboutProps,
  AreaPixProps,
  BannerProps,
  ConfirmPresenceProps,
  ExtraInfoProps,
  Gift,
  GiftListProps,
  LocalProps,
  MainInfoProps,
  MessageItemProps,
  MetaDataProps,
} from "@/types/home";

function formatAboutResponse(data: APIAboutResponseProps): AboutProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  return {
    title: attributes.titulo,
    text: attributes.texto,
  };
}

function formatGitfListResponse(
  data: APIGiftListResponseProps
): GiftListProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;

  const gifts: Gift[] = attributes.presentes.data.map((item) =>
    formatGitfResponse(item)
  );
  // const gifts = attributes.presentes.
  return {
    title: attributes.titulo,
    subtitle: attributes.mensagem_do_titulo,
    thanksMessage: attributes.mensagem_de_agradecimento,
    gifts: gifts,
  };
}

function formatGitfResponse(gift: APIGiftResponseProps): Gift {
  const itemData = gift?.attributes || null;
  const imageItemData = itemData?.imagem?.data?.attributes;

  return {
    id: gift.id,
    attributes: {
      hasGuest: !!itemData.convidado,
      description: itemData.descricao,
      name: itemData.nome,
      image: {
        alt: imageItemData?.alternativeText || gift.attributes.nome,
        height: imageItemData?.height,
        width: imageItemData?.width,
        url: `${process.env.NEXT_PUBLIC_UPLOADS_URL}${imageItemData?.url}`,
      },
    },
  };
}

function formatConfirmPresenceResponse(
  data: APIConfirmResponseProps
): ConfirmPresenceProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  return {
    title: attributes.titulo,
    text: attributes.mensagem_do_titulo,
  };
}

function formatLocationResponse(
  data: APILocalResponseProps
): LocalProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  return {
    title: attributes.titulo,
    subtitleCeremony: attributes.subtitulo_local_cerimonia,
    textCeremony: attributes.texto_local_cerimonia,
    subtitleParty: attributes.subtitulo_local_recepcao,
    textParty: attributes.texto_local_recepcao,
  };
}

function formatBannerResponse(
  data: APIBannerResponseProps
): BannerProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  const imageData = attributes.imagem.data.attributes;
  return {
    image: {
      alt: imageData.alternativeText || "",
      height: imageData.height,
      width: imageData.width,
      url: `${process.env.NEXT_PUBLIC_UPLOADS_URL}${imageData.url}`,
    },
  };
}

function formatMainInfoResponse(
  data: APIMainInfoResponseProps
): MainInfoProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  const date = new Date(attributes.data);

  // Format the date
  const formattedDate = date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return {
    date: attributes.data,
    formattedDate,
    names: attributes.nome_dos_noivos,
  };
}

function formatExtraInfoResponse(
  data: APIExtraInfoResponseProps
): ExtraInfoProps[] | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;

  const content = attributes.conteudo || [];

  return content.map((item) => ({
    id: item.id,
    title: item.titulo,
    subTitle: item.subtitulo,
    content: item.conteudo,
  }));
}

function formatMetaDataResponse(
  data: APIMetaDataResponseProps
): MetaDataProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  console.log({ attributes });

  const imageData = attributes.imagem.data.attributes;

  return {
    title: attributes.titulo,
    description: attributes.descricao,
    image: `${process.env.NEXT_PUBLIC_UPLOADS_URL}${imageData.url}`,
  };
}

function formatAreaPixResponse(
  data: APIAreaPixResponseProps
): AreaPixProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  return {
    title: attributes.titulo,
    subtitle: attributes.subtitulo,
    text: attributes.texto,
  };
}

function formatConfirmationsResponse(
  data: APIConfirmationResponseProps
): MessageItemProps[] {
  if (!data?.data?.length) {
    return [];
  }

  const attributes = data.data;
  const messages = attributes.map((item) => {
    const itemAttribute = item.attributes;
    const date = new Date(itemAttribute.createdAt);
    const name = itemAttribute.nome.split("\n").join(", ");

    return {
      guest: name,
      message: itemAttribute.mensagem,
      date,
    };
  });
  console.log(messages);

  return messages.filter((item) => item.message);
}

export {
  formatAboutResponse,
  formatGitfListResponse,
  formatGitfResponse,
  formatConfirmPresenceResponse,
  formatLocationResponse,
  formatBannerResponse,
  formatMainInfoResponse,
  formatExtraInfoResponse,
  formatMetaDataResponse,
  formatAreaPixResponse,
  formatConfirmationsResponse,
};
