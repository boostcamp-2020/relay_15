const BASE_URL = 'http://localhost:5000';

export async function apiFetch({ url, method = 'GET', body }) {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method,
    body,
  });

  return await response.json();
}
