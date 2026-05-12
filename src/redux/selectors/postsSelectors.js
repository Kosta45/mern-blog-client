export const selectPostsData = (state) => {
  return state.posts.posts;
};

export const selectPosts = (state) => {
  return state.posts.posts.items;
};

export const selectPostsTags = (state) => {
  return state.posts.posts.tags;
};
