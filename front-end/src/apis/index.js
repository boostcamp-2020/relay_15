import { BASE_URL } from '../secret';

export async function apiFetch({ url, method = 'GET', body }) {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method,
    body: body && JSON.stringify(body),
  });

  return await response.json();
}
