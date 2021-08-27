import { handleApiCall } from '../../utils/helpers';
import { PEOPLE_URL } from '../constants';

export default async function handleGetPersonClient(name: string) {
  const {
    data: { results },
  } = await handleApiCall(`${PEOPLE_URL}?search=${name}`);

  return results;
}
