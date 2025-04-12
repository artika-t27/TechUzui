import type { Scheme } from "./types"

export const mockSchemes: Scheme[] = [
  {
    id: "pm-kisan",
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    description:
      "Direct income support scheme for farmers to supplement their financial needs and support their livelihood.",
    category: "agriculture",
    type: "central",
    benefit: 6000,
    benefitDescription:
      "Financial benefit of ₹6,000 per year in three equal installments of ₹2,000 each, directly transferred to the bank accounts of eligible farmer families.",
    eligibility: {
      income: 100000,
      minAge: 18,
      maxAge: 65,
      occupation: "farmer",
      state: "all",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: ["Aadhaar Card", "Land Records", "Bank Account Details", "Passport Size Photograph"],
    applicationUrl: "https://pmkisan.gov.in/",
  },
  {
    id: "pmjay",
    name: "Ayushman Bharat - PMJAY",
    description:
      "Health insurance scheme providing coverage for secondary and tertiary care hospitalization to poor and vulnerable families.",
    category: "healthcare",
    type: "central",
    benefit: 500000,
    benefitDescription:
      "Health coverage up to ₹5 lakh per family per year for secondary and tertiary care hospitalization across public and private empaneled hospitals in India.",
    eligibility: {
      income: 250000,
      state: "all",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: ["Aadhaar Card", "Ration Card/BPL Certificate", "Income Certificate", "Passport Size Photograph"],
    applicationUrl: "https://pmjay.gov.in/",
  },
  {
    id: "pmay",
    name: "Pradhan Mantri Awas Yojana (PMAY)",
    description: "Housing scheme aimed at providing affordable housing to the urban and rural poor.",
    category: "housing",
    type: "central",
    benefit: 267000,
    benefitDescription:
      "Financial assistance ranging from ₹1.5 lakh to ₹2.67 lakh for construction of houses, along with interest subsidy on housing loans.",
    eligibility: {
      income: 300000,
      state: "all",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Land Documents (if applicable)",
      "Bank Account Details",
      "BPL Certificate (if applicable)",
    ],
    applicationUrl: "https://pmaymis.gov.in/",
  },
  {
    id: "pmmy",
    name: "Pradhan Mantri Mudra Yojana (PMMY)",
    description: "Scheme to provide loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises.",
    category: "employment",
    type: "central",
    benefit: 1000000,
    benefitDescription:
      "Loans under three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5,00,001 to ₹10 lakh) with no collateral required.",
    eligibility: {
      minAge: 18,
      occupation: "self-employed",
      state: "all",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Business Plan/Proposal",
      "Bank Account Details",
      "Proof of Business Existence (if applicable)",
    ],
    applicationUrl: "https://www.mudra.org.in/",
  },
  {
    id: "sukanya-samriddhi",
    name: "Sukanya Samriddhi Yojana",
    description:
      "Small savings scheme for the girl child to encourage parents to build a fund for the future education and marriage expenses of their daughters.",
    category: "education",
    type: "central",
    benefit: 0,
    benefitDescription:
      "High interest rate (currently 7.6% p.a.) with tax benefits under Section 80C of Income Tax Act. Maturity period of 21 years from the date of opening account.",
    eligibility: {
      maxAge: 10,
      gender: "female",
      state: "all",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: [
      "Birth Certificate of Girl Child",
      "Aadhaar Card of Parent/Guardian",
      "Address Proof",
      "Passport Size Photograph of Girl Child",
    ],
    applicationUrl: "https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx",
  },
  {
    id: "tn-chief-minister-comprehensive-health-insurance",
    name: "Tamil Nadu Chief Minister's Comprehensive Health Insurance Scheme",
    description:
      "Health insurance scheme for residents of Tamil Nadu providing coverage for various medical and surgical procedures.",
    category: "healthcare",
    type: "state",
    benefit: 500000,
    benefitDescription:
      "Coverage up to ₹5 lakh per family per year for medical treatments and surgical procedures at empaneled hospitals.",
    eligibility: {
      income: 72000,
      state: "tamil-nadu",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: ["Aadhaar Card", "Ration Card", "Income Certificate", "Passport Size Photograph"],
    applicationUrl: "https://www.cmchistn.com/",
  },
  {
    id: "karnataka-vidyasiri",
    name: "Karnataka Vidyasiri Scholarship",
    description: "Scholarship scheme for students pursuing higher education in Karnataka.",
    category: "education",
    type: "state",
    benefit: 10000,
    benefitDescription: "Annual scholarship ranging from ₹5,000 to ₹10,000 based on the course and family income.",
    eligibility: {
      income: 250000,
      minAge: 17,
      maxAge: 25,
      education: "higher-secondary",
      state: "karnataka",
    },
    dates: {
      application: "July to September",
      deadline: "September 30, 2023",
    },
    documents: [
      "Aadhaar Card",
      "Income Certificate",
      "Caste Certificate (if applicable)",
      "Previous Academic Year Marks Card",
      "Bank Account Details",
    ],
    applicationUrl: "https://sw.kar.nic.in/vidyasiri/",
  },
  {
    id: "ap-ammavodi",
    name: "Andhra Pradesh Ammavodi Scheme",
    description:
      "Financial assistance scheme for mothers or guardians to encourage them to send their children to schools.",
    category: "education",
    type: "state",
    benefit: 15000,
    benefitDescription:
      "Annual financial assistance of ₹15,000 to each mother or guardian who sends their children to school.",
    eligibility: {
      income: 100000,
      state: "andhra-pradesh",
    },
    dates: {
      application: "November to December",
      deadline: "December 31, 2023",
    },
    documents: [
      "Aadhaar Card of Mother/Guardian and Child",
      "Income Certificate",
      "School Enrollment Certificate",
      "Bank Account Details",
      "White Ration Card",
    ],
    applicationUrl: "https://ammavodi.ap.gov.in/",
  },
  {
    id: "mh-mahatma-jyotiba-phule-jan-arogya-yojana",
    name: "Maharashtra Mahatma Jyotiba Phule Jan Arogya Yojana",
    description:
      "Health insurance scheme for residents of Maharashtra providing coverage for various medical and surgical procedures.",
    category: "healthcare",
    type: "state",
    benefit: 150000,
    benefitDescription:
      "Coverage up to ₹1.5 lakh per family per year for medical treatments and surgical procedures at empaneled hospitals.",
    eligibility: {
      income: 100000,
      state: "maharashtra",
    },
    dates: {
      application: "Open throughout the year",
      deadline: "None",
    },
    documents: ["Aadhaar Card", "Ration Card", "Income Certificate", "Passport Size Photograph"],
    applicationUrl: "https://www.jeevandayee.gov.in/",
  },
]
