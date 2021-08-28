import { handleGetPersonHomeWorldClient } from '../../clients';
interface HomeWorldURL {
  homeworld: string;
}

export async function handleGetHomeWorldResolver(person: HomeWorldURL) {
  return await handleGetPersonHomeWorldClient(person.homeworld);
}
