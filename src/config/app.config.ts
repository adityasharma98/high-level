export const env = process.env.NODE_ENV || "staging";

const appConfig = {
  staging: { port: 3000 },
  production: { port: 3000 },
};

export default appConfig[env];
