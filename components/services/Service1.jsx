"use client";

const services = [
  {
    id: 1,
    icon: "/images/icon/icon_143.svg",
    title: "Accounting & Bookkeeping Services",
    description: [
      "We want you to focus on meeting your clients' commitments and growing your business with confidence, while we take care of your bookkeeping, tax compliance, and accounting.",
      "Whether you're a growing business or a non-profit, our team can provide the bookkeeping, payroll, tax, and accounting services you require. If you're seeking consistency in financial practices, we offer a stress-free, long-term solution.",
      "Our services are customized and scalable to your changing needs, and you will always receive timely, up-to-date financial information."
    ],
    list: [
      "Bookkeeping (Monthly, Quarterly, Annually)",
      "Compiled Financial Statements",
      "Payroll Services",
      "Bank Reconciliations",
      "HST Recording and Remittance",
      "Year-End Support (includes working papers & preparation support)",
      "Year-End Audit Support (more efficient, less costly audit)"
    ]
  },
  {
    id: 2,
    icon: "/images/icon/icon_144.svg",
    title: "Tax Compliance",
    description: [
      "We ensure your taxes are done right. Our CPAs help you get every advantage at tax time. They guide you through the process in simple terms, helping you reduce obligations and maximize refunds.",
      "We focus not only on maximizing returns or reducing taxes but also on ensuring full CRA compliance — legally and efficiently."
    ],
    list: [
      "Maximization of credits and deductions",
      "Preparation and E-File of T1 returns",
      "Help and advisory with CRA audits",
      "Advice on registered savings plans",
      "Income splitting",
      "Employment and dependent deductions",
      "Investment income",
      "Non-refundable tax credits",
      "Tax deductions",
      "Taxation for students and low-income individuals",
      "Tax for seniors",
      "CRA-compliant tax saving tips"
    ]
  },
  {
    id: 3,
    icon: "/images/icon/icon_145.svg",
    title: "Corporate Tax",
    description: [
      "Our qualified team is experienced in handling all types of corporate tax situations. We specialize in structuring and tax planning and provide expert guidance to help your business succeed.",
      "With effective strategies, we ensure you retain more capital and stay audit-ready while growing your business."
    ],
    list: [
      "T2 Corporate Tax Returns (Federal & Provincial)",
      "Year-End Financial Statements",
      "HST Preparation & Filing",
      "T-slip Preparation & Filing (T4, T5, T5018, etc.)",
      "Maximization of credits and deductions",
      "Tax deferral mechanism development",
      "CRA audit representation",
      "Partnership tax services",
      "Income splitting opportunities",
      "Advice on tax implications of transactions"
    ]
  }
];

const Service1 = () => {
  return (
    <>
      {services.map((service) => (
        <div className="col-lg-6 col-xl-4 col-sm-6" key={service.id} data-aos="fade-up">
          <div className="card-style-twentyThree mt-40 p-4 bg-white rounded-4 shadow-sm h-100">
            <div className="icon d-flex align-items-center justify-content-center mb-3">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="lazy-img tran3s"
              />
            </div>
            <h4 className="title tx-dark mb-3">{service.title}</h4>
            {service.description.map((para, idx) => (
              <p key={idx} className="text-secondary lh-lg mb-2">{para}</p>
            ))}
            <ul className="style-none ps-3 text-start text-secondary mt-3">
              {service.list.map((item, index) => (
                <li key={`${service.id}-${index}`} className="mb-2 ps-3" style={{ listStyleType: "disc" }}>
                {item}
              </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service1;