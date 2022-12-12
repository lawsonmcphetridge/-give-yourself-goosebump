const BASE_URL = 'http://localhost:7890';

export async function getGoosebump() {
  const resp = await fetch(`${BASE_URL}/api/v1/pages/1`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });
  if (resp.ok) {
    const answers = await resp.json();
    return answers;
  }
}
