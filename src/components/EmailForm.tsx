import { Field, Form, Formik, FormikHelpers } from "formik";
import { useCallback } from "react";

export interface FormValues {
  email: string;
  name: string;
  phone: string;
  subject: string;
}

export function EmailForm() {
  const validateForm = useCallback((values: FormValues) => {
    const errors: Record<string, string> = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Direccion de correo invalida";
    }
    return errors;
  }, []);

  const handleSubmit = useCallback(
    (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      console.log(values);
      setSubmitting(false);
    },
    []
  );
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "", subject: "" }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors }) => (
        <Form className="flex flex-col gap-4 sm:max-w-fit md:max-w-sm lg:max-w-md mt-5">
          <p className="mt-6 text-lg text-gray-500 sm:text-xl">
            Contactenos para poder asesorarlo.
          </p>
          <div>
            <label htmlFor="name">Nombre</label>
            <Field
              type="name"
              name="name"
              id="name"
              placeholder="313 XXX XXXXX"
              className="text-gray-900 placeholder-gray-500 border border-gray-300 outline-none block w-full px-5 py-3 text-base rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field
              type="email"
              name="email"
              id="email"
              placeholder="correo@proveedor.com..."
              className={`${
                errors.email
                  ? "text-red-700 border-red-700 border"
                  : "text-gray-900 placeholder-gray-500 border border-gray-300"
              }
              outline-none block w-full px-5 py-3 text-base rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1`}
            />
          </div>
          <div>
            <label htmlFor="phone">Telefono</label>
            <Field
              type="phone"
              name="phone"
              id="phone"
              placeholder="313 XXX XXXXX"
              className="text-gray-900 placeholder-gray-500 border border-gray-300 outline-none block w-full px-5 py-3 text-base rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
            />
          </div>
          <div>
            <label htmlFor="subject">Hechos más relevantes</label>
            <Field
              as="textarea"
              name="subject"
              id="subject"
              placeholder="Describa su caso"
              className="text-gray-900 placeholder-gray-500 border border-gray-300 outline-none block w-full px-5 py-3 text-base rounded-md shadow-sm focus:border-primary focus:ring-primary focus-visible:ring-primary flex-1"
            />
          </div>
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
