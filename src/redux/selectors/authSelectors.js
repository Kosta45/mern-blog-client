export const selectIsAuth = (state) => {
  return Boolean(state.auth.dataUser);
};

export const selectUserData = (state) => {
  return state.auth.dataUser;
};
