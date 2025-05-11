const services = [
  {
    id: 1,
    icon: "/images/icon/compliance.png",
    title: "Compliance",
    list: [
      "- CRA taxes- personal salaried, self-employed and incorporated businesses",
      "- GST/ HST filing",
      "- Incorporation registration and annual filings",
    ],
  },
  {
    id: 2,
    icon: "/images/icon/book final.png",
    title: "Accounts Management",
    list: [
      "- Book-keeping- Day to day transactions records",
      "- Payroll- Payroll deductions and remittances to CRA",
      "- Staff Augmentation",
      "- Compilation of Financial records"],
  },
];

const Service2 = () => {
  return (
    <>
      {services.map((service) => (
        <div className="col-lg-6 col-sm-6" key={service.id} data-aos="fade-up">
          <div className="card-style-twentyThree mt-40">
            <div className="icon d-flex align-items-center justify-content-center">
              <img src={service.icon} alt="icon" className="lazy-img tran3s" />
            </div>
            <h4 className="title tx-dark">{service.title}</h4>
            <ul className="style-none">
              {service.list.map((item, index) => (
                <li key={`${service.id}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
          {/* /.card-style-twentyThree */}
        </div>
      ))}
    </>
  );
};

export default Service2;
