import axios from "axios";

const featuredQuestionsUrl =
  "https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow";

export const fetchFeaturedQuestions = () => {
  return axios.get(featuredQuestionsUrl);
};

export const fetchUserDetails = (id) => {
  const userDetailsUrl = `https://api.stackexchange.com/2.3/users/${id}?order=desc&sort=reputation&site=stackoverflow`;
  return axios.get(userDetailsUrl);
};

export const fecthUserTopQuestions = (id) => {
  const topQuestionsUrl = `https://api.stackexchange.com/2.3/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`;
  return axios.get(topQuestionsUrl);
};

export const fetchUserTopTags = (id) => {
  const topTagsUrl = `https://api.stackexchange.com/2.3/users/${id}?/tags?order=desc&sort=popular&site=stackoverflow`;
  return axios.get(topTagsUrl);
};
