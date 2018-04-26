import { cloneDeep, isPlainObject } from 'lodash';

type ActionFn = ((value: any) => any);
interface Scheme {
  [x: string]: ActionFn | Scheme;
}

export function mutationFormat(values: object, scheme: Scheme): object {
  const myValues = cloneDeep(values);

  function applyParentAction(
    _values: object,
    _scheme: Scheme,
    parentKey?: string,
    parentValues?: object
  ) {
    if (!_scheme.__format) {
      return;
    }
    if (!parentKey || !parentValues) {
      throw new Error('Cannot use `__format` at root-level.');
    }
    parentValues[parentKey] = (_scheme.__format as ActionFn)(_values);
  }

  function traverseScheme(
    _values: object,
    _scheme: Scheme,
    parentKey?: string,
    parentValues?: object
  ) {
    Object.keys(_scheme)
      .filter(s => s !== '__format')
      .forEach(key => {
        const action = _scheme[key];
        const currentValue = _values[key];
        if (isPlainObject(action)) {
          if (Array.isArray(currentValue)) {
            applyParentAction(currentValue, action as Scheme, key, _values);
            currentValue.forEach(value =>
              traverseScheme(value, action as Scheme, key, _values)
            );
          } else {
            applyParentAction(currentValue, action as Scheme, key, _values);
            traverseScheme(currentValue, action as Scheme, key, _values);
          }
        } else {
          _values[key] = (action as ActionFn)(currentValue);
        }
      });
  }

  traverseScheme(myValues, scheme);

  return myValues;
}

// TODO: should this also handle arrays?
export function connect(id?: string) {
  if (id) {
    return { connect: { id } };
  }
  return;
}

export function create(values?: object) {
  if (values) {
    return { create: values };
  }
  return undefined;
}
