const BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getGoosebump(id) {
  const resp = await fetch(`${BASE_URL}/api/v1/pages/${id}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    credentials: 'include',
  });
  if (resp.ok) {
    const answers = await resp.json();
    return answers;
  }
}
