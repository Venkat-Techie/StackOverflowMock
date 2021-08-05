import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import TextError from "./TextError";
import "./Login.scss";

export function Login(props) {
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email Required")
      .email("Enter valid email format"),
    password: Yup.string()
      .required("Password required")
      .min(6, "Password must be at least 6 characters"),
  });

  const onSubmit = (values) => {
    history.push("/question");
  };

  return (
    <div className="loginMain">
      <Formik
        initialValues={formValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form className="loginForm">
              <div className="loginHeader" style={{ padding: 0 }}>
                Login to continue
              </div>
              <div className="">
                <Field
                  placeholder="Email"
                  className="formInput"
                  type="email"
                  id="email"
                  name="email"
                  // validate={validateEmail}
                />
                <ErrorMessage name="email" component={TextError} />
              </div>
              <div className="">
                <Field
                  placeholder="Password"
                  className="formInput"
                  type="text"
                  id="password"
                  name="password"
                />
                <ErrorMessage name="password" component={TextError} />
              </div>
              <div className="">
                <button
                  className="loginBtn"
                  name="loginBtn"
                  type="submit"
                  disabled={
                    formik.isSubmitting || !formik.isValid || !formik.dirty
                      ? true
                      : false
                  }
                >
                  {formik.isSubmitting ? "Logging In..." : "Login"}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
