import { APIAboutResponseProps, APIBannerResponseProps, APIConfirmResponseProps, APIGiftListResponseProps, APIGiftResponseProps, APILocalResponseProps, APIMainInfoResponseProps, AboutProps, BannerProps, ConfirmPresenceProps, Gift, GiftListProps, LocalProps, MainInfoProps } from "@/types/home";

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

function formatGitfListResponse(data: APIGiftListResponseProps): GiftListProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;

  const gifts: Gift[] = attributes.presentes.data.map(item => formatGitfResponse(item))
  // const gifts = attributes.presentes.
  return {
    title: attributes.titulo,
    subtitle: attributes.mensagem_do_titulo,
    thanksMessage: attributes.mensagem_de_agradecimento,
    gifts: gifts
  };
}

function formatGitfResponse(gift: APIGiftResponseProps): Gift {
  const itemData = gift?.attributes || null
  const imageItemData = itemData?.imagem?.data?.attributes

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
      }

    }
  }
}

function formatConfirmPresenceResponse(data: APIConfirmResponseProps): ConfirmPresenceProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  return {
    title: attributes.titulo,
    text: attributes.mensagem_do_titulo,
  };
}

function formatLocationResponse(data: APILocalResponseProps): LocalProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  return {
    title: attributes.titulo,
    subtitleCeremony: attributes.subtitulo_local_cerimonia,
    textCeremony: attributes.texto_local_cerimonia,
    subtitleParty: attributes.subtitulo_local_recepcao,
    textParty: attributes.texto_local_recepcao
  };
}

function formatBannerResponse(data: APIBannerResponseProps): BannerProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  const imageData = attributes.imagem.data.attributes
  return {
    image: {
      alt: imageData.alternativeText || '',
      height: imageData.height,
      width: imageData.width,
      url: `${process.env.NEXT_PUBLIC_UPLOADS_URL}${imageData.url}`
    },
  };
}

function formatMainInfoResponse(data: APIMainInfoResponseProps): MainInfoProps | null {
  if (!data?.data?.attributes) {
    return null;
  }

  const attributes = data.data.attributes;
  console.log({ attributesss: attributes });
  const date = new Date(attributes.data);

  // Format the date
  const formattedDate = date.toLocaleDateString('pt-PT', { day: '2-digit', month: 'long', year: 'numeric' });
  return {
    date: attributes.data,
    formattedDate,
    names: attributes.nome_dos_noivos
  };
}

export {
  formatAboutResponse,
  formatGitfListResponse,
  formatGitfResponse,
  formatConfirmPresenceResponse,
  formatLocationResponse,
  formatBannerResponse,
  formatMainInfoResponse
};
