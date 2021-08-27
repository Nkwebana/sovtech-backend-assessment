import { handleApiCall } from '../../utils/helpers';
import { PEOPLE_URL } from '../constants';

export default async function handleGetPeopleClient(pageNumber: number) {
  const pagination = `?page=${pageNumber}`;

  const {
    data: { results },
  } = await handleApiCall(`${PEOPLE_URL}${pageNumber ? pagination : ''}`);

  return results;
}
