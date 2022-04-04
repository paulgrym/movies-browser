export const getAPI = async (APIurl) => {

  const response = await fetch(APIurl);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};