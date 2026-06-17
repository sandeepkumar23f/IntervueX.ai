export const createInterview = async (role: string) => {
  const response = await fetch(
    "http://localhost:5000/api/interview/create",
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  return data;
};