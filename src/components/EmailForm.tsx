import { Field, Form, Formik, FormikHelpers } from "formik";
import { useCallback } from "react";

export function EmailForm() {
  const validateForm = useCallback((values: { email: string }) => {
    const errors: Record<string, string> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Direccion de correo invalida";
    }
    return errors;
  }, []);

  const handleSubmit = useCallback(
    (
      values: { email: string },
      { setSubmitting }: FormikHelpers<{ email: string }>
    ) => {
      console.log(values);
      setSubmitting(false);
    },
    []
  );
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className="flex flex-col md:flex-row gap-4 sm:max-w-fit md:max-w-sm lg:max-w-md mt-5">
          <Field
            type="email"
            name="email"
            placeholder="correo@proveedor.com..."
            className={`${
              errors.email
                ? "text-red-700 border-red-700 border"
                : "text-gray-900 placeholder-gray-500 border border-gray-300"
            }
            outline-none block w-full px-5 py-3 text-base rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white bg-slate-700 px-5 py-2 rounded-md max-w-[110px]"
          >
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
}
