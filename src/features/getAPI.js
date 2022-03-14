export const getAPI = async (APIUrl) => {

  const response = await fetch(APIUrl);

  return await response.json();
}