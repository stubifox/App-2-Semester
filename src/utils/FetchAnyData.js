const fetchData = async (url, isText) => {
  console.log("urlinFetchDAta :" + url);
  const res = await fetch(url);
  const data = (await isText) ? res.text() : res.json();
  return data;
};

export default fetchData;
