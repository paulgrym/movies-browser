export const getAPI = async (APIUrl) => {

  try {
    const response = await fetch(APIUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const products = await response.json();
    return products;

  } catch (error) {
    console.error("Something went wrong!", error);
  }
}