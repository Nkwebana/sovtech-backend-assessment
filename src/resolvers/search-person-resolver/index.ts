import { handleSearchPersonClient } from '../../clients';
interface PersonName {
  name: string;
}
export async function handleSearchPersonResolver(_: any, args: PersonName) {
  return await handleSearchPersonClient(args.name);
}
