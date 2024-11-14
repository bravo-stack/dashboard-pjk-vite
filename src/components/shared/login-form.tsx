"use client";
import { useLoginUserMutation } from "@/redux/services/businessApi";
import { Input, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { Field } from "../ui/field";
import { toaster } from "../ui/toaster";
import PasswordInput from "./password-input";

const LoginForm = () => {
  // HOOKS
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(formValues, { resetForm }) => {
        loginUser({
          email: formValues.email,
          password: formValues.password,
        })
          .then((data) => {
            if (data.data?.access_token) {
              toaster.create({
                placement: "top-start",
                title: `Logged in successfully!`,
                type: "success",
              });
              resetForm();
              navigate("/dashboard");
            } else {
              toaster.create({
                placement: "top-start",
                title: `Failed to login`,
                type: "error",
              });
            }
          })
          .catch((error) => {
            toaster.create({
              placement: "top-start",
              title: `Failed to login`,
              type: "error",
            });
            console.log(error);
          });
      }}
    >
      {({ values, errors, handleBlur, handleChange, isValid: isFormValid }) => (
        <Form className="flex w-full flex-col gap-10">
          {/* input fields */}
          <VStack w="100%" alignItems="flex-start" gap={6}>
            {/* Email address */}
            <Field
              label="Email address"
              required
              errorText={errors.email ? errors.email : undefined}
            >
              <Input
                size="lg"
                px="4"
                border="1px solid"
                borderColor="#ced4da"
                _dark={{ borderColor: "gray.700" }}
                rounded="0.25rem"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                placeholder="Enter email address"
              />
            </Field>

            {/* Password */}
            <Field
              label="Email address"
              required
              errorText={errors.password ? errors.password : undefined}
            >
              <PasswordInput
                pl="4"
                w="100%"
                border="1px solid"
                borderColor="#ced4da"
                _dark={{ borderColor: "gray.700" }}
                rounded="0.25rem"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter password"
              />
            </Field>
          </VStack>

          <Button
            disabled={!isFormValid || isLoading}
            loading={isLoading}
            _active={{ opacity: 0.5 }}
            _hover={{ opacity: 0.5 }}
            size="lg"
            bg="blue.400"
            color="white"
            w="100%"
            rounded=".5rem"
            type="submit"
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
