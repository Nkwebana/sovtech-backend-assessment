import { handleGetPeopleClient } from '../../clients';

export async function handlePeopleResolver() {
  return await handleGetPeopleClient();
}
