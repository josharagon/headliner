export const getSearchResults = async (filter) => {
  return await fetch(`https://api.nytimes.com/svc/topstories/v2/${filter}.json?api-key=0HU1sCdoagCTXhAhvtF2sQgGlVsrGvDC`)
    .then((response) => response.json())
}