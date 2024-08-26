import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-gray-900">contact us</h1>{" "}
        <br></br>
        <h1 className="text-2xl font-bold text-gray-900">Our office address</h1>
        <br></br>
        <p className="text-gray-700 mb-6">
          HTS Qatar Retaj Building.<br></br> Salwa Road,<br></br> Doha Qatar{" "}
          <br></br>Phone : 00974-66709152 55124924 ,<br></br>Email to
          sales@htsqatar.com www.htsqatar.com <br></br>Visit our online shop
          www.tekstore.qa
        </p>
      </div>
    </>
  );
};

export default Contact;
