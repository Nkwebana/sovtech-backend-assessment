import { handleGetPeopleClient } from '../../clients';
interface PageNumber {
  pageNumber: number;
}

export async function handlePeopleResolver(_: any, args: PageNumber) {
  return await handleGetPeopleClient(args.pageNumber);
}
