export async function getNotionDatabase() {
  console.log("notion 진입");

  const response = await fetch("/api/notion", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  await console.log(response);
  const data = await response.json();
  console.log("notion : " + data);
  return data;
}
