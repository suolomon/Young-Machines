import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import {
  Container,
  FormWrap,
  FormBg,
  ImageBg,
  Img,
  Icon,
  IconLogo,
  IconLogldiv,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  ErrorTag,
  RequiredTag,
} from "./ContactElements";
import "../../App.css";
import Image from "../../Images/blackdust.jpg";
import { db } from "../../firebase";

const schema = yup.object().shape({
  fullName: yup.string().required("Please enter your full name"),
  email: yup.string().required("Please enter your email"),
  select: yup
    .string()
    .oneOf(["webdev", "py", "js", "fc"])
    .required("Please choose one of our services"),
  message: yup.string().required("Message can not be left blank"),
  select2: yup
    .string()
    .oneOf(["male", "female"])
    .required("Please choose one of our services"),
  message: yup.string().required("Message can not be left blank"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    db.collection("contacts")
      .add({
        fullName: data.fullName,
        email: data.email,
        select: data.select,
        select2: data.select2,
        message: data.message,
      })
      .then(() => {
        alert("message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Container>
        <FormBg>
          <ImageBg>
            <Img src={Image} />
          </ImageBg>
        </FormBg>
        <FormWrap>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Icon to="/">
                <IconLogldiv>
                  <IconLogo>Y+M</IconLogo>
                </IconLogldiv>
              </Icon>
              <FormH1>Fill in your request details below</FormH1>
              <FormLabel htmlFor="fullName">
                Full Name <RequiredTag>*</RequiredTag>
              </FormLabel>
              <FormInput
                type="text"
                name="fullName"
                {...register("fullName")}
              />
              <ErrorTag>
                <ErrorMessage errors={errors} name="fullName" />
              </ErrorTag>

              <FormLabel htmlFor="email">
                Email <RequiredTag>*</RequiredTag>
              </FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="example@email.com"
                {...register("email")}
              />
              <ErrorTag>
                <ErrorMessage errors={errors} name="email" />
              </ErrorTag>
              <FormLabel htmlFor="gender">
                Gender
                <RequiredTag>*</RequiredTag>
              </FormLabel>
              <select {...register("select2")}>
                <option>Select ...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <ErrorTag>
                <ErrorMessage errors={errors} name="select2" />
              </ErrorTag>
              <FormLabel htmlFor="courses">
                What course are you interested in?
                <RequiredTag>*</RequiredTag>
              </FormLabel>
              <select {...register("select")}>
                <option>Select ...</option>
                <option value="webdev">Web Developement</option>
                <option value="py">Python</option>
                <option value="js">JavaScript</option>
                <option value="fc">FullCourse</option>
                
              </select>
              <ErrorTag>
                <ErrorMessage errors={errors} name="select" />
              </ErrorTag>
              <FormLabel htmlFor="message">
                What do you expect to learn ? (You can be brief 😊)
                <RequiredTag>*</RequiredTag>
              </FormLabel>
              <textarea
                name="message"
                placeholder="Tell us more about your request like bugdets, questions and more"
                {...register("message")}
              />
              <ErrorTag>
                <ErrorMessage errors={errors} name="message" />
              </ErrorTag>
              <FormButton type="submit">Submit Request</FormButton>
              <Text>We respond within 24 hours😉</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;

