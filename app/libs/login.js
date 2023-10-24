const login = async (value) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(value),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    const error = new Error(errorResponse.message || "Failed to fetch");
    error.response = response;
    throw error;
  }
  return response.json();
};
export default login;
