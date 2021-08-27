import { handleApiCall } from '../../utils/helpers';
import { PEOPLE_URL } from '../constants';

export default async function handleGetPeopleClient() {
  const {
    data: { results },
  } = await handleApiCall(PEOPLE_URL);

  return results;
}
