import { handleApiCall } from '../../utils/helpers';
import { PEOPLE_URL } from '../constants';

export default async function handleSearchPersonClient(name: string) {
  const {
    data: { results, count },
  } = await handleApiCall(`${PEOPLE_URL}?search=${name}`);

  return { results, count };
}
