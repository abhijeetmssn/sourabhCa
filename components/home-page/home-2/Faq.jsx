const Faq = () => {
  const faqData = [
    {
      question: "How much do you charge for ITR filing?",
      answer:
        "Our pricing depends on the complexity of your income sources. Basic salaried ITRs start at ₹999, while business or capital gains cases are priced individually after a consultation.",
    },
    {
      question: "What services do Chartered Accountants provide?",
      answer:
        "Chartered Accountants offer a wide range of services including tax planning and filing, auditing, financial statement preparation, GST compliance, business advisory, and investment planning.",
    },
    {
      question: "Do I need a CA to file my income tax return?",
      answer:
        "While individuals can file their own returns, a CA ensures accuracy, helps you claim eligible deductions, and minimizes the risk of notices from the Income Tax Department.",
    },
    
  ];

  return (
    <div className="accordion accordion-style-two" id="accordionOne">
      {faqData.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="false"
              aria-controls={`collapse${index}`}
            >
              {faq.question}
            </button>
          </div>
          <div
            id={`collapse${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
