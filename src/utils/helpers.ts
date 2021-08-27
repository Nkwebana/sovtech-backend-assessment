import axios from 'axios';

export async function handleApiCall(url: string) {
  return await axios.get(url);
}
