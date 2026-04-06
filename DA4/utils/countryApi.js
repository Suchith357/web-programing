export const searchCountries = async (name) => {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${name}`
  );

  const data = await res.json();

  return data;
};