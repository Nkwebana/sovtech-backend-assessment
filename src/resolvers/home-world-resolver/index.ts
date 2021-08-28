import { handleGetPersonHomeWorldClient } from '../../clients';

interface HomeWorldURL {
  homeworld: string;
}

export async function handleHomeWorldResolver(person: HomeWorldURL) {
  return await handleGetPersonHomeWorldClient(person.homeworld);
}
