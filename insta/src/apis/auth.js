import instance from ".";

const authApis = {
  signUp: async (data) => {
    try {
      const result = await instance.post("/auth/signup", data);
      return result.data;
    } catch (e) {
      return e.response.data;
    }
  },

  LogIn: async (data) => {
    try {
      const result = await instance.post("/auth/login", data);
      return result.data;
    } catch (e) {
      return e.response.data;
    }
  },
};

export default authApis;
