import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import {
  Container,
  FormWrap,
  FormBg,
  ImageBg,
  Img,
  Icon,
  IconLogo,
  NavContact,
  NavContactContainer,
  TextAreaLabel,
  FormContent,
  Form,
  SelectTag,
  FormH2,
  FormLabel,
  FormInput,
  FormButton,
  ErrorTag,
  RequiredTag,
  FormSection,
  Section,
  FormP,
  IconButton,
} from "./ContactElements";
import "../../App.css";
import Image from "../../Images/women_on_laptops_mv.jpg";
import { db } from "../../firebase";

const Contact = ({ completeFormStep, goToPreviousStep, formStep }) => {
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
  });
  const MAX_STEPS = 3;

  const renderButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep == 2) {
      return (
        <FormButton disabled={!isValid} type="submit">
          Register
        </FormButton>
      );
    } else {
      return (
        <FormButton
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
        >
          Next Step
        </FormButton>
      );
    }
  };

  const onSubmit = (data) => {
    db.collection("contacts")
      .add({
        fullName: data.fullName,
        email: data.email,
        course: data.course,
        gender: data.gender,
        message: data.message,
        yourAge: data.yourAge,
        parentsName: data.parentsName,
        parentsContact: data.parentsContact,
        parentsEmail: data.parentsEmail,
      })
      .then(() => {
        alert("Your message has been submitted");
      })

      .catch((error) => {
        alert(error.message);
      });
    reset();
    // history.push("/");
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
          <Icon to="/">
            <NavContact>
              <NavContactContainer>
                <IconLogo>Young+Machines</IconLogo>
              </NavContactContainer>
            </NavContact>
          </Icon>
          <FormContent>
            <Form onSubmit={handleSubmit(onSubmit)}>
              {formStep < MAX_STEPS && (
                <FormSection>
                  {formStep > 0 && (
                    <IconButton onClick={goToPreviousStep}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </IconButton>
                  )}
                  <FormP>
                    Step {formStep + 1} of {MAX_STEPS}
                  </FormP>
                </FormSection>
              )}
              {formStep === 0 && (
                <Section>
                  <FormH2>Personal Info</FormH2>
                  <FormLabel htmlFor="fullName">
                    Full Name <RequiredTag>*</RequiredTag>
                  </FormLabel>
                  <FormInput
                    type="text"
                    name="fullName"
                    {...register("fullName", {
                      required: "Please fill in your full name",
                    })}
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
                    {...register("email", {
                      required: "Please fill in your email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid email address",
                      },
                    })}
                  />
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="email" />
                  </ErrorTag>

                  <FormLabel htmlFor="gender">
                    Gender
                    <RequiredTag>*</RequiredTag>
                  </FormLabel>
                  <SelectTag
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  >
                    <option>Select ...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </SelectTag>
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="gender" />
                  </ErrorTag>

                  <FormLabel htmlFor="age">
                    Your Age <RequiredTag>*</RequiredTag>
                  </FormLabel>
                  <FormInput
                    type="number"
                    name="yourAge"
                    placeholder="You must be 10+ years"
                    {...register("yourAge", {
                      required: "Please fill in your age",
                      pattern: {
                        value: /\d[0-9]{1}/,
                        message: "You must be 10 years and above",
                      },
                    })}
                  />
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="yourAge" />
                  </ErrorTag>
                </Section>
              )}

              {formStep === 1 && (
                <Section>
                  <FormH2>Parent's info</FormH2>
                  <FormLabel htmlFor="parentsName">
                    Name of Parent <RequiredTag>*</RequiredTag>
                  </FormLabel>
                  <FormInput
                    type="text"
                    name="parentsName"
                    placeholder=""
                    {...register("parentsName", {
                      required: "This is a required field",
                    })}
                  />
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="parentsName" />
                  </ErrorTag>
                  <FormLabel htmlFor="parentsContact">
                    Parent's Contact <RequiredTag>*</RequiredTag>
                  </FormLabel>
                  <FormInput
                    type="number"
                    name="parentsContact"
                    placeholder=""
                    {...register("parentsContact", {
                      required: "This is a required field",
                    })}
                  />
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="parentsContact" />
                  </ErrorTag>
                  <FormLabel htmlFor="parentsEmail">
                    Parent's Email (Optional)
                  </FormLabel>
                  <FormInput
                    type="email"
                    name="parentsEmail"
                    placeholder=""
                    {...register("parentsEmail")}
                  />
                </Section>
              )}

              {formStep === 2 && (
                <Section>
                  <FormH2>Course Details</FormH2>
                  <FormLabel htmlFor="courses">
                    What course are you interested in?
                    <RequiredTag>*</RequiredTag>
                  </FormLabel>
                    <SelectTag
                      {...register("course", {
                        required: "This is a required field",
                      })}
                    >
                      <option>Select ...</option>
                      <option value="webdev">Web Developement</option>
                      <option value="c">C</option>
                      <option value="python">Python</option>
                      <option value="js">JavaScript</option>
                      <option value="fullCourse">FullCourse</option>
                    </SelectTag>
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="course" />
                  </ErrorTag>

                  <FormLabel htmlFor="message">
                    What do you expect to learn ? (You can be brief 😊)
                    <RequiredTag>*</RequiredTag>
                  </FormLabel>
                  <TextAreaLabel
                    name="message"
                    placeholder="What do you expect to learn in your selected option?"
                    {...register("message", {
                      required: "This cannot be left blank",
                    })}
                  />
                  <ErrorTag>
                    <ErrorMessage errors={errors} name="message" />
                  </ErrorTag>
                </Section>
              )}
              {renderButton()}
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
