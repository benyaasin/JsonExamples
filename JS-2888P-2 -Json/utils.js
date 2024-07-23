export async function fetchData(requestUrl) {
  // datayı çekmek için...
  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("API is dead :(", error);
  }
}
