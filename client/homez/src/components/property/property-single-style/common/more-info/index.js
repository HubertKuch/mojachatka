"use client";
import SingleAgentInfo from "./SingleAgentInfo";

const InfoWithForm = ({ id }) => {
  return (
    <>
      <SingleAgentInfo id={id?.author} />
    </>
  );
};

export default InfoWithForm;
