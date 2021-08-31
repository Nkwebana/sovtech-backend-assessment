import { handleApiCall } from '../../utils/helpers';
import { PEOPLE_URL } from '../constants';

export default async function handleSearchPersonClient(
  name: string,
  pageNumber: number
) {
  const {
    data: { results, count },
  } = await handleApiCall(
    `${PEOPLE_URL}?search=${name}${pageNumber ? `&page=${pageNumber}` : null}`
  );

  return { results, count };
}
