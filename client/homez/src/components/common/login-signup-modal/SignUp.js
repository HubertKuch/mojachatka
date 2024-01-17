"use client";
import MultiStep from "react-multistep";
import AccountType from "./sign-up-steps/AccountType";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import AccountDataStep from "./sign-up-steps/individual/AccountDataStep";
import PasswordDataStep from "./sign-up-steps/PasswordDataStep";
import CompanyDetailsStep from "./sign-up-steps/CompanyDetailsStep";
import SalesRepStep from "./sign-up-steps/SalesRepStep";
import EndStep from "./EndStep";
import useStore from "@/store/store";
import UserController from "@/controllers/UserController";

const SignUp = () => {
  const [accountType, setAccountType] = useState("INDIVIDUAL");
  const [steps, setSteps] = useState([]);
  const { register, handleSubmit, formState } = useForm({ mode: "all" });
  const [endDataToDisplay, setEndDataToDisplay] = useState({});
  const formRef = useRef();
  const [error, setError] = useState("");

  function onSubmit(data) {
    UserController.register(accountType, data).then((res) => {
      if (res.status !== 200) {
        return setError(res.data.message);
      }
    });
  }

  const stepsByType = [
    {
      type: "INDIVIDUAL",
      steps: [
        <AccountDataStep title={"Podstawowe dane"} register={register} />,
        <PasswordDataStep title={"Haslo"} register={register} />,
        <EndStep
          title="Zakonczenie"
          data={endDataToDisplay}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        />,
      ],
    },
    {
      type: "AGENT",
      steps: [
        <CompanyDetailsStep title={"Firma"} register={register} />,
        <SalesRepStep title={"Przedstawiciel"} register={register} />,
        <PasswordDataStep title={"Haslo"} register={register} />,
        <EndStep
          title="Zakonczenie"
          data={endDataToDisplay}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        />,
      ],
    },
    {
      type: "DEVELOPER",
      steps: [
        <CompanyDetailsStep title={"Firma"} register={register} />,
        <SalesRepStep title={"Przedstawiciel"} register={register} />,
        <PasswordDataStep title={"Haslo"} register={register} />,
        <EndStep
          title="Zakonczenie"
          data={endDataToDisplay}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        />,
      ],
    },
  ];

  useEffect(() => {
    if (accountType) {
      setSteps(
        stepsByType.find((steps) => steps.type === accountType)?.steps || [],
      );
    }
  }, [accountType]);

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      ref={formRef}
      className="form-style1"
      onChange={() => {
        const inputs = formRef.current.querySelectorAll("input");
        const prev = JSON.parse(JSON.stringify(endDataToDisplay));

        for (const input of inputs) {
          if (input.name.includes("password")) {
            continue;
          }

          prev[
            formRef.current.querySelector(`[for=${input.name}]`)?.textContent
          ] = input.value;
        }

        useStore.setState({ registerData: prev }, true);
        setEndDataToDisplay(useStore.getState().registerData);
      }}
    >
      <>
        <div className="error">{error}</div>
        <MultiStep
          activeStep={0}
          showTitles={true}
          showNavigation={false}
          prevButton={{ title: "Cofnij", style: {} }}
          nextButton={{ title: "Nastepny", style: {} }}
        >
          <AccountType
            title={"Typ konta"}
            accountType={accountType}
            setAccountType={setAccountType}
          />
          {steps}
        </MultiStep>
      </>
    </form>
  );
};

export default SignUp;
