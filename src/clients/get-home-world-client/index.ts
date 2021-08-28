import { handleApiCall } from '../../utils/helpers';

export default async function handleGetPersonHomeWorldClient(
  homeWordURL: string
) {
  const { data } = await handleApiCall(homeWordURL);

  return data;
}
