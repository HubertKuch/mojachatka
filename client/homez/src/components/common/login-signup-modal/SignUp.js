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
import Stepper from "react-stepper-horizontal";

const SignUp = () => {
  const [accountType, setAccountType] = useState(null);
  const [steps, setSteps] = useState([
    <AccountType
      href={"#"}
      key={Math.random()}
      accountType={accountType}
      setAccountType={setAccountType}
    />,
  ]);
  const [stepsTitles, setStepsTitles] = useState(["Typ konta"]);
  const { register, handleSubmit, formState } = useForm({ mode: "all" });
  const [endDataToDisplay, setEndDataToDisplay] = useState({});
  const formRef = useRef();
  const [error, setError] = useState("");
  const [activeStep, setActiveStep] = useState(0);

  function onSubmit(data) {
    UserController.register(accountType, data).then((res) => {
      if (res.status !== 200) {
        return setError(res.data.message);
      }

      window?.location?.replace("/aktywuj-konto");
    });
  }

  const titleByType = {
    INDIVIDUAL: [
      {
        href: "#",
        title: "Typ konta",
      },
      {
        href: "#",
        title: "Podstawowe dane",
      },
      {
        thref: "#",
        itle: "Haslo",
      },
      {
        thref: "#",
        itle: "Zakonczenie",
      },
    ],
    AGENT: [
      {
        thref: "#",
        itle: "Typ konta",
      },
      {
        thref: "#",
        itle: "Firma",
      },
      {
        thref: "#",
        itle: "Haslo",
      },
      {
        thref: "#",
        itle: "Zakonczenie",
      },
    ],
    DEVELOPER: [
      {
        href: "#",
        title: "Typ konta",
      },
      {
        href: "#",
        title: "Firma",
      },
      {
        thref: "#",
        itle: "Haslo",
      },
      {
        href: "#",
        title: "Zakonczenie",
      },
    ],
  };

  const stepsByType = [
    {
      type: "INDIVIDUAL",
      steps: [
        <AccountType
          href={"#"}
          key={Math.random()}
          accountType={accountType}
          setAccountType={setAccountType}
        />,
        <AccountDataStep
          thref={"#"}
          itle={"Podstawowe dane"}
          register={register}
          key={Math.random()}
        />,
        <PasswordDataStep
          href={"#"}
          key={Math.random()}
          title={"Haslo"}
          register={register}
        />,
        <EndStep
          thref={"#"}
          itle="Zakonczenie"
          key={Math.random()}
          data={endDataToDisplay}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        />,
      ],
    },
    {
      type: "AGENT",
      steps: [
        <AccountType
          href={"#"}
          key={Math.random()}
          accountType={accountType}
          setAccountType={setAccountType}
        />,
        <CompanyDetailsStep
          href={"#"}
          key={Math.random()}
          title={"Firma"}
          register={register}
        />,
        <SalesRepStep
          href={"#"}
          key={Math.random()}
          title={"Przedstawiciel"}
          register={register}
        />,
        <PasswordDataStep
          href={"#"}
          key={Math.random()}
          title={"Haslo"}
          register={register}
        />,
        <EndStep
          title="Zakonczenie"
          href={"#"}
          key={Math.random()}
          data={endDataToDisplay}
          onSubmit={handleSubmit((data) => onSubmit(data))}
        />,
      ],
    },
    {
      type: "DEVELOPER",
      steps: [
        <AccountType
          href={"#"}
          key={Math.random()}
          accountType={accountType}
          setAccountType={setAccountType}
        />,
        <CompanyDetailsStep
          key={Math.random()}
          title={"firma"}
          href={"#"}
          register={register}
        />,
        <SalesRepStep
          key={Math.random()}
          title={"Przedstawiciel"}
          href={"#"}
          register={register}
        />,
        <PasswordDataStep
          href={"#"}
          key={Math.random()}
          title={"Haslo"}
          register={register}
        />,
        <EndStep
          href={"#"}
          key={Math.random()}
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

      setStepsTitles(titleByType[accountType]);

      setActiveStep(1);
    }
  }, [accountType]);

  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
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
        <Stepper steps={stepsTitles} activeStep={activeStep} />

        {steps[activeStep]}

        <div className="row pt-5 gx-5">
          <button
            type="button"
            className="col-6 form-control btn-white2"
            style={{ width: "50%" }}
            disabled={activeStep === 0}
            onClick={() => {
              setActiveStep(activeStep - 1);
            }}
          >
            Cofnij
          </button>
          <button
            type="button"
            disabled={activeStep + 1 === steps.length}
            onClick={() => {
              setActiveStep(activeStep + 1);
            }}
            style={{ width: "50%" }}
            className="col-6 form-control btn-white2"
          >
            Dalej
          </button>
        </div>
      </>
    </form>
  );
};

export default SignUp;
