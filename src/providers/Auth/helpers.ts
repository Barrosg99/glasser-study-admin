const USER_KEY = "user";

const getUser = () => {
  const token = localStorage.getItem(USER_KEY);
  if (token) return token;
  return null;
};

const setUser = (token: string) => {
  localStorage.setItem(USER_KEY, token);
};

const removeUser = () => {
  localStorage.removeItem(USER_KEY);
};

export { getUser, setUser, removeUser };
