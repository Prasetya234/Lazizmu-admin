const BASE_PATH = "https://lazimu.herokuapp.com";

const config = {
  api: {
    chanePassword: `${BASE_PATH}/change-password`,
    validCode1: `${BASE_PATH}/change-password/valid-code?code=`,
    requestChange: `${BASE_PATH}/change-password/request`,
    login: `${BASE_PATH}/login`,
    register: `${BASE_PATH}/register`,
    berita: `${BASE_PATH}/berita`,
    kategori: `${BASE_PATH}/reference/kategori`,
    infaq: `${BASE_PATH}/infaq`,
  },
};
export default config;
