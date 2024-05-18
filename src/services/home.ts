import {
  APIAboutResponseProps,
  APIAreaPixResponseProps,
  APIBannerResponseProps,
  APIConfirmResponseProps,
  APIExtraInfoResponseProps,
  APILocalResponseProps,
  APIMainInfoResponseProps,
  APIMetaDataResponseProps,
} from "@/types/home";
import { api } from "./api";

export const homePage = {
  getAbout: async () => {
    const response: { data: APIAboutResponseProps } = await api
      .get("/pagina-inicial", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getGiftList: async () => {
    const response: { data: any } = await api
      .get("/lista-de-presente", {
        params: {
          "populate[presentes][populate][0]": "imagem",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getGift: async (id: number) => {
    const response: { data: any } = await api
      .get(`/presentes/${id}`, {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  updateGift: async (id: number, guest: string) => {
    const response: { data: any } = await api
      .put(`/presentes/${id}`, {
        data: {
          convidado: guest,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getConfirmPresence: async () => {
    const response: { data: APIConfirmResponseProps } = await api
      .get("/confirme-sua-presenca", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  createConfirmPresence: async (
    name: string,
    confirm: "Sim" | "Não",
    message: string,
    qtdPerson: number
  ) => {
    console.log({
      name,
      confirm,
      message,
      qtdPerson,
    });

    const response = await api
      .post("/confirmacao-de-presencas", {
        data: {
          nome: name,
          vai_ao_casamento: confirm,
          mensagem: message,
          quantidade_convidados: qtdPerson,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getLocation: async () => {
    const response: { data: APILocalResponseProps } = await api
      .get("/local", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getBanner: async () => {
    const response: { data: APIBannerResponseProps } = await api
      .get("/banner-inicial", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getMainInfo: async () => {
    const response: { data: APIMainInfoResponseProps } = await api
      .get("/main-info", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getExtraInfo: async () => {
    const response: { data: APIExtraInfoResponseProps } = await api
      .get("/sessao-extra", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getMetaData: async () => {
    const response: { data: APIMetaDataResponseProps } = await api
      .get("/compartilhar-no-whats-app", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
  getAreaPix: async () => {
    const response: { data: APIAreaPixResponseProps } = await api
      .get("/area-pix", {
        params: {
          populate: "*",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((response) => {
        return response;
      });

    return response;
  },
};
