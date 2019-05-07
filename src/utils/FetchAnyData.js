const fetchData = async (url, isText) => {
  if (url.includes("undefined")) {
    return;
  }
  console.log(url);
  let res;
  try {
    res = await fetch(url);
  } catch (error) {
    console.error(error);
  }
  const data = (await isText) ? res.text() : res.json();
  return data;
};

export default fetchData;
