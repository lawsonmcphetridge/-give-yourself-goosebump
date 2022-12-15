const BASE_URL = process.env.REACT_APP_BASE_URL;
const THIS_URL = process.env.REACT_APP_THIS_URL;

export async function getGoosebump(id) {
  if (!isNaN(id)) {
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
}

export async function postGoosebump(sourceId, targetId) {
  const resp = await fetch(`${BASE_URL}/api/v1/pages/${targetId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({ sourceId }),
    credentials: 'include',
  });
  if (resp.ok) {
    const answers = await resp.json();
    return answers;
  }
}
