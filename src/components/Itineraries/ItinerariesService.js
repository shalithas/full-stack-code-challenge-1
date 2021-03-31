export const getItineraries = (id) => {
  const url = `/itineraries${id?`/${id}`:''}`;
  return fetch(url);
}

export const getLegs = (id) => {
  const url = `/legs${id?`/${id}`:''}`;
  return fetch(url);
}
