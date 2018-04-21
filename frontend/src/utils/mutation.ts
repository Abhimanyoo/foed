export function parseQueryResultsToForm(data: any, defaults: object): object {
  if (data) {
    const { id, __typename, ...actualData } = data;
    return actualData;
  }
  return defaults;
}
