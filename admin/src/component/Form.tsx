// This are all adapters to get @volst/ui-components and formik to work together.
// This should be extracted and either thrown into a package, or @volst/ui-components should be adjusted.
import * as React from 'react';
import {
  Formik,
  FormikProps as FFormikProps,
  FormikComputedProps,
  FormikActions,
  FormikState,
  FormikErrors,
} from 'formik';
import { Form as VolstForm } from '@volst/ui-components';

export interface FormProps<Values> {
  initialValues: Values;
  onReset?: (values: Values, formikActions: FormikActions<Values>) => void;
  onSubmit: (values: Values, formikActions: FormikActions<Values>) => void;
  component?: React.ComponentType<FormikProps<Values>> | React.ReactNode;
  render?: ((props: FormikProps<Values>) => React.ReactNode);
  validationSchema?: any | (() => any);
  validate?: ((
    values: Values
  ) => void | object | Promise<FormikErrors<Values>>);
  children?:
    | ((props: FormikProps<Values>) => React.ReactNode)
    | React.ReactNode;
}

export interface FormikProps<Values>
  extends FormikState<Values>,
    FormikActions<Values>,
    FormikComputedProps<Values> {
  handleChange: (name: string, value: any) => void;
  handleBlur: (name: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleReset: () => void;
  realErrors: FormikErrors<Values>;
}

// Transforms Formik's render props to work more easily with @volst/ui-components.
function transformOpts(opts: FFormikProps<any>) {
  const myOpts: FormikProps<any> = Object.assign({}, opts, {
    realErrors: {},
  });
  // We can't use `opts.handleChange` since it doesn't work if `value` is a boolean
  myOpts.handleChange = (name: string, value: any) =>
    opts.setFieldValue(name, value);
  myOpts.handleBlur = (name: string) => opts.setFieldTouched(name);

  Object.keys(myOpts.errors).forEach(name => {
    if (myOpts.touched[name]) {
      myOpts.realErrors[name] = [myOpts.errors[name]];
    }
  });
  return myOpts;
}

export const Form = ({ render, ...props }: FormProps<any>) => {
  return (
    <Formik
      render={opts => (
        <VolstForm onSubmit={opts.handleSubmit}>
          {!!render && render(transformOpts(opts))}
        </VolstForm>
      )}
      {...props}
    />
  );
};
