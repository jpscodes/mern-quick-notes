import sendRequest from "./send-request";
const BASE_URL = '/api/notes';

export async function getAll() {
  return sendRequest(BASE_URL);
}

export async function addNoteToDB(data) {
  return sendRequest(BASE_URL, 'POST', data);
}

