import { FormikProps } from 'component/Form';

export function sortByOrdering(list: any[]) {
  return list.sort((a, b) => a.ordering - b.ordering);
}

export function handleNewSort(
  form: FormikProps<any>,
  listName: string,
  oldIndex: number,
  newIndex: number
) {
  form.setFieldValue(`${listName}[${oldIndex}].ordering`, newIndex);
  form.setFieldValue(`${listName}[${newIndex}].ordering`, oldIndex);
}
