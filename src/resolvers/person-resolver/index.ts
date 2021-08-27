import { handleGetPersonClient } from '../../clients';

interface PersonName {
  name: string;
}
export async function handlePersonResolver(_: any, args: PersonName) {
  return await handleGetPersonClient(args.name);
}
