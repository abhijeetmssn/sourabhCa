"use client";

const Services = () => {
  return (
    <section className="py-5 px-3 md:px-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-5 text-primary">Our Services</h2>

        {/* Accounting and Bookkeeping */}
        <div className="bg-white shadow-sm rounded-4 p-4 p-md-5 mb-5" data-aos="fade-up">
          <h3 className="fw-semibold text-dark mb-3">Accounting & Bookkeeping Services</h3>
          <p className="text-secondary lh-lg mb-4">
            Focus on growing your business and serving your clients — we’ll handle your bookkeeping, tax compliance, and accounting needs. Whether you're a startup, a growing business, or a non-profit, our solutions scale with you.
          </p>
          <ul className="text-start mx-auto" style={{ maxWidth: "700px" }}>
            <li>✅ Bookkeeping (Monthly, Quarterly, Annually)</li>
            <li>✅ Compiled Financial Statements</li>
            <li>✅ Payroll Services</li>
            <li>✅ Bank Reconciliations</li>
            <li>✅ HST Recording and Remittance</li>
            <li>✅ Year-End Support & Working Papers</li>
            <li>✅ Year-End Audit Support</li>
          </ul>
        </div>

        {/* Tax Compliance */}
        <div className="bg-white shadow-sm rounded-4 p-4 p-md-5 mb-5" data-aos="fade-up">
          <h3 className="fw-semibold text-dark mb-3">Tax Compliance</h3>
          <p className="text-secondary lh-lg mb-4">
            Our CPAs ensure accurate, CRA-compliant tax filing and help you maximize deductions while minimizing obligations. We simplify the process so you understand each step.
          </p>
          <ul className="text-start mx-auto" style={{ maxWidth: "700px" }}>
            <li>✅ Maximization of credits and deductions</li>
            <li>✅ T1 Preparation & E-File</li>
            <li>✅ CRA Audit Help and Advisory</li>
            <li>✅ Registered Savings Plans Guidance</li>
            <li>✅ Income Splitting & Employment Deductions</li>
            <li>✅ Investment Income & Non-refundable Credits</li>
            <li>✅ Student, Senior, and Low-Income Tax Filing</li>
            <li>✅ CRA-Compliant Tax Saving Tips</li>
          </ul>
        </div>

        {/* Corporate Tax */}
        <div className="bg-white shadow-sm rounded-4 p-4 p-md-5" data-aos="fade-up">
          <h3 className="fw-semibold text-dark mb-3">Corporate Tax</h3>
          <p className="text-secondary lh-lg mb-4">
            Our expert tax advisors help you structure your corporation for tax efficiency. From T2 filing to audit representation, we’ve got your back.
          </p>
          <ul className="text-start mx-auto" style={{ maxWidth: "700px" }}>
            <li>✅ T2 Corporate Tax Return Filing (Federal & Provincial)</li>
            <li>✅ Year-End Financial Statements</li>
            <li>✅ HST & T-slip Filing (T4, T5, T5018)</li>
            <li>✅ Credit/Deduction Maximization & Deferrals</li>
            <li>✅ CRA Audit Representation</li>
            <li>✅ Tax Services for Partnerships</li>
            <li>✅ Income Splitting Strategies</li>
            <li>✅ Transaction-Based Tax Advisory</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;