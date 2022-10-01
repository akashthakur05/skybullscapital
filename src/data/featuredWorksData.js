import { convertToSlug } from "./../utils/slug";
var incrementalIndex = 1;
const startupData = [
  "Proprietorship",
  "Partnership",
  "One Person Company",
  "Limited Liability Partnership",
  "Private Limited Company",
  "Startup India Registration",
  "Indian Subsidiary",
  "Nidhi Company",
  "Section 8 Company",
  "USA Company Registration",
  "Digital Signature",
  "Udyam Registration",
  "Import Export Code",
  "FSSAI Registration",
  "Professional Tax",
  "LLP Name Availability",
];
const IPR_DATA = [
  "Trademark Registration",
  "Trademark Objection",
  "Trademark Opposition",
  "Trademark Renewal",
  "Copyright Registration",
  "Design Registration",
  "Provisional Patent",
  "Patent Registration",
];

const GST_DATA = [
  "GST Registration",
  "GST Return Filing",
  "GST LUT Filing",
  "GST Registration Cancellation",
  "GST Annual Return",
  "GST Invoicing",
  "GST eInvoicing",
  "eWay Bill",
  "Input Tax Credit",
  "GST Software for Accountants",
];
const ITR = [
  "Personal Tax Filing",
  "Business Tax Filing",
  "Tax Notice",
  "TDS Filing",
  "ITR-1 Return",
  "ITR-2 Return",
  "ITR-3 Return",
  "ITR-4 Return",
  "ITR-5 Return",
  "ITR-6 Return",
  "ITR-7 Return",
  "Form 16",
];
const ACCOUNTING = [
  "Proprietorship",
  "Partnership",
  "Company",
  "LLP Compliance",
  "Payroll",
  "PF Registration",
  "PF Return Filing",
  "ESI Registration",
  "Add Directors",
  "Remove Directors",
  "Share Transfer",
  "DIR-3 KYC",
  "Registered Office Change",
  "Increase Authorized Capital",
  "Winding Up of Company",
  "Winding Up of LLP",
];
const serviceGenerator = (
  type = "startup",
  img = "/assets/img/case/case-1.jpg",
  title,
  subtitle,
  category = "REGISTRATION"
) => {
  return {
    id: incrementalIndex++,
    img,
    title,
    subtitle,
    category,
    slug: convertToSlug(type + " " + category + " " + title),
  };
};
const categories = [
  "STARTUP",
  "INTELLECTUAL_PROPERTY",
  "INCOME_TAX_RETURN",
  "GST",
  "COMPLIANCE",
  "TAX_NOTICE",
];
const featuredWorksData = [
  ...startupData.map((data) =>
    serviceGenerator(
      "startup",
      "assets/img/case/case-1.jpg",
      data,
      "Aliqua eu est et do veniam consectetur et velit est id amet adipisicing sit.",
      "STARTUP"
    )
  ),
  ...IPR_DATA.map((data) =>
    serviceGenerator(
      "startup",
      "assets/img/case/case-1.jpg",
      data,
      "Aliqua eu est et do veniam consectetur et velit est id amet adipisicing sit.",

      "INTELLECTUAL_PROPERTY"
    )
  ),
  ...ITR.map((data) =>
    serviceGenerator(
      "startup",
      "assets/img/case/case-1.jpg",
      data,
      "Aliqua eu est et do veniam consectetur et velit est id amet adipisicing sit.",

      "INCOME_TAX_RETURN"
    )
  ),
  ...GST_DATA.map((data) =>
    serviceGenerator(
      "startup",
      "assets/img/case/case-1.jpg",
      data,
      "Aliqua eu est et do veniam consectetur et velit est id amet adipisicing sit.",

      "GST"
    )
  ),
  ...ACCOUNTING.map((data) =>
    serviceGenerator(
      "startup",
      "assets/img/case/case-1.jpg",
      data,
      "Aliqua eu est et do veniam consectetur et velit est id amet adipisicing sit.",

      "COMPLIANCE"
    )
  ),

  {
    id: incrementalIndex++,
    img: "assets/img/case/case-1.jpg",
    title: "Income Tax Notice",
    slug: convertToSlug("Income Tax Notice Response"),
    subtitle:
      "Aliqua eu est et do veniam consectetur et velit est id amet adipisicing sit.",
    category: "TAX_NOTICE",
    trending:true
  },
];


export { featuredWorksData, categories };
