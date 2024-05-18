export type APIAboutResponseProps = {
  data: {
    id: number;
    attributes: {
      texto: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      titulo: string;
    };
  };
};

export type AboutProps = {
  title: null | string;
  text: null | string;
};

export type TextSplitImageProps = { alt: string; url: string };

export type UseTextSplitReturnProps = {
  type: string;
  value: string | TextSplitImageProps;
};

export type APIGiftResponseProps = {
  id: number,
  attributes: {
    nome: string
    convidado: string | null
    descricao: string
    imagem: {
      data: {
        id: number
        attributes: {
          alternativeText: string | null
          width: number
          height: number
          url: string
        }
      }
    }
  }
};


export type APIGiftListResponseProps = {
  data: {
    id: number;
    attributes: {
      titulo: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      mensagem_do_titulo: string;
      mensagem_de_agradecimento: string;
      presentes: {
        data: APIGiftResponseProps[]
      }
    };
  };
};

export type Gift = {
  id: number,
  attributes: {
    hasGuest: boolean
    description: string
    name: string
    image: {
      alt: string
      width: number
      height: number
      url: string
    }
  }
}

export type GiftListProps = {
  title: string,
  subtitle: string,
  thanksMessage: string
  gifts: Gift[]
}

export type APIConfirmResponseProps = {
  data: {
    id: number;
    attributes: {
      mensagem_do_titulo: string;
      titulo: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type ConfirmPresenceProps = {
  title: null | string;
  text: null | string;
};

export type APILocalResponseProps = {
  data: {
    id: number;
    attributes: {
      titulo: string;
      texto_local_cerimonia: string;
      subtitulo_local_cerimonia: string;
      texto_local_recepcao: string;
      subtitulo_local_recepcao: string;
    };
  };
};


export type LocalProps = {
  title: string,
  subtitleCeremony: string,
  textCeremony: string,
  subtitleParty: string,
  textParty: string,
}

export type APIBannerResponseProps = {
  data: {
    id: number;
    attributes: {
      imagem: {
        data: {
          id: number
          attributes: {
            alternativeText: string | null
            width: number
            height: number
            url: string
          }
        }
      };
    };
  };
};

export type BannerProps = {
  image: {
    alt: string
    width: number
    height: number
    url: string
  }
};

export type APIMainInfoResponseProps = {
  data: {
    id: number;
    attributes: {
      data: string,
      nome_dos_noivos: string
    };
  };
};

export type MainInfoProps = {
  date: string
  formattedDate: string
  names: string
};

export type APIExtraInfoResponseProps = {
  data: {
    id: number;
    attributes: {
      conteudo: [
        {
          id: number
          titulo: string | null
          subtitulo: string | null
          conteudo: string | null
        }
      ]
    };
  };
};

export type ExtraInfoProps = {
  id: number
  title: string | null
  subTitle: string | null
  content: string | null
};

export type APIMetaDataResponseProps = {
  data: {
    id: number;
    attributes: {
      titulo: string | null
      descricao: string | null
      imagem: {
        data: {
          id: number
          attributes: {
            alternativeText: string | null
            width: number
            height: number
            url: string
          }
        }
      };
    };
  };
};

export type MetaDataProps = {
  title: string | null
  description: string | null
  image: string | null
};

export type APIAreaPixResponseProps = {
  data: {
    id: number;
    attributes: {
      subtitulo: string;
      titulo: string;
      texto: string;
      createdAt: string;
      updatedAt: string;
    };
  };
};

export type AreaPixProps = {
  title: string,
  subtitle: string,
  text: string,
}