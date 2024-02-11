"use client";
import SingleAgentInfo from "./SingleAgentInfo";

const InfoWithForm = ({ offer, id }) => {
  return (
    <>
      <SingleAgentInfo offer={offer} id={id?.author} />
    </>
  );
};

export default InfoWithForm;
