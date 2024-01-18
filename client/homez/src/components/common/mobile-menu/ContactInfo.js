import React from "react";

const ContactInfo = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Kontakt z działem obsługi klienta",
      phone: "+48 789 857 202",
      phoneHref: "tel:+48789857202", // Updated phoneHref to use "tel" URI
    },
    {
      id: 2,
      title: "Potrzebujesz pomocy?",
      email: "pomoc@mojachatka.pl",
      emailHref: "mailto:pomoc@mojachatka.pl", // Updated emailHref to use "mailto" URI
    },
  ];

  return (
    <>
      {contactInfo.map((info) => (
        <div className="col-auto" key={info.id}>
          <div className="contact-info">
            <p className="info-title dark-color">{info.title}</p>
            {info.phone && (
              <h6 className="info-phone dark-color">
                <a href={info.phoneHref}>{info.phone}</a>
              </h6>
            )}
            {info.email && (
              <h6 className="info-mail dark-color">
                <a href={info.emailHref}>{info.email}</a>
              </h6>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
