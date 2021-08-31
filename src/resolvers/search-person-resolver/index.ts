import { handleSearchPersonClient } from '../../clients';
interface PersonName {
  name: string;
  pageNumber: number;
}
export async function handleSearchPersonResolver(_: any, args: PersonName) {
  return await handleSearchPersonClient(args.name, args.pageNumber);
}
