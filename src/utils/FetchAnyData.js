/**
 * @url to fetch from
 * @method method to call e.g json() or text()
 * @CORSMETHODS object with cors messages ({mode: 'no-cors'})
 */
export const fetchData = async (url, method, { ...CORSMETHODS }) => {
  const res = await fetch(url, CORSMETHODS );
  console.log(CORSMETHODS, method)
  const data = await res.text();
  return data;
};
