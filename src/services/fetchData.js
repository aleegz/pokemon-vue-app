export async function fetchData(url) {
    try {
      const response = await fetch(url); //'https://pokeapi.co/api/v2/pokemon/'
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  };