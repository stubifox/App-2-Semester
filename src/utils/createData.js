export let id = 0;
const createData = (market, opening, information, offer, location) => {
  id += 1;
  return { id, market, opening, information, offer, location };
};
export default createData;