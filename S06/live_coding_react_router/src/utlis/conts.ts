export async function usersLoader() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Response("error", { status: 500 });
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
