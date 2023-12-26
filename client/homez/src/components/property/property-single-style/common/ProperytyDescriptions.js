import React from "react";

const ProperytyDescriptions = ({ offer }) => {
  return (
    <>
      <p className="text mb10">{offer?.description}</p>
      <div className="agent-single-accordion">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
              style={{}}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
