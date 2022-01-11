const SERVER_URL = `${
  process.env.NODE_ENV === "production" ? "https" : "http"
}://${process.env.REACT_APP_SERVER_DOMAIN}:${
  process.env.REACT_APP_SERVER_PORT
}`;

export const login = `${SERVER_URL}/auth/login`;
export const logout = `${SERVER_URL}/auth/logout`;
export const profile = `${SERVER_URL}/auth/profile`;
