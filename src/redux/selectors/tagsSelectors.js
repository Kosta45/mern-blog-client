export const selectTags = (state) => {
  return state.posts.tags.items;
};

export const selectTagsData = (state) => {
  return state.posts.tags;
};
