const BASE_URL = "https://podcast-api.netlify.app";

export const fetchAllShows = async () => {
  const res = await fetch(`${BASE_URL}/shows`);
  if (!res.ok) throw new Error("Failed to fetch shows");
  return res.json();
};

export const fetchShowById = async (id) => {
  const res = await fetch(`${BASE_URL}/id/${id}`);
  if (!res.ok) throw new Error("Failed to fetch show");
  return res.json();
};
