export const getAPI = async (APIUrl) => {

    const response = await fetch(APIUrl);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const products = await response.json();
    return products;

}