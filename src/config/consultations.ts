export type QuestionType = "radio" | "textarea" | "select";

export interface QuestionOption {
  value: string;
  label: string;
  description?: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  label: string;
  helper?: string;
  placeholder?: string;
  required?: boolean;
  options?: QuestionOption[];
}

export interface Consultation {
  id: string;                    // slug used in URL
  title: string;
  shortTitle: string;
  description: string;
  status: "active" | "upcoming" | "closed";
  startDate: string;             // ISO
  closingDate: string;           // ISO
  estimatedMinutes: number;
  steps: {
    id: string;
    title: string;
    description?: string;
    questions: Question[];
  }[];
}

export const SCHOOLS = [
  "School of Agricultural Sciences and Agribusiness",
  "School of Business and Economics",
  "School of Education",
  "School of Environmental and Earth Sciences",
  "School of Humanities and Social Sciences",
  "School of Pure and Applied Sciences",
  "School of Health Sciences",
  "School of Engineering and Technology",
  "Other",
];

export const YEARS = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "5th Year",
  "Other",
];

export const consultations: Consultation[] = [
  {
    id: "retake-payment-policy",
    title: "PUSA Retake Payment Policy — Public Participation",
    shortTitle: "Retake Payment Policy",
    description:
      "PUSA is conducting this public participation exercise to collect students' views on the current retake payment framework and formulate a report for consideration by the appropriate University structures.",
    status: "active",
    startDate: "2025-01-01",
    closingDate: "2025-12-31",
    estimatedMinutes: 3,
    steps: [
      {
        id: "student-info",
        title: "Student Information",
        description:
          "This helps PUSA understand views across schools and years of study. No personal identifiers are collected.",
        questions: [
          {
            id: "school_faculty",
            type: "select",
            label: "School / Faculty",
            required: true,
            options: SCHOOLS.map((s) => ({ value: s, label: s })),
          },
          {
            id: "year_of_study",
            type: "select",
            label: "Year of Study",
            required: true,
            options: YEARS.map((y) => ({ value: y, label: y })),
          },
        ],
      },
      {
        id: "current-policy",
        title: "Current Policy",
        questions: [
          {
            id: "supports_current_formula",
            type: "radio",
            label:
              "Do you support the current retake payment formula based on parental obligation divided by the number of units?",
            required: true,
            options: [
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
              { value: "Undecided", label: "Undecided" },
            ],
          },
        ],
      },
      {
        id: "payment-and-exams",
        title: "Retake Payment & Examination Options",
        questions: [
          {
            id: "preferred_payment_approach",
            type: "radio",
            label:
              "Which approach do you prefer regarding the previous KSh 1,000 charge?",
            required: true,
            options: [
              { value: "Current formula", label: "Current formula" },
              {
                value: "Restore the KSh 1,000 fixed charge",
                label: "Restore the KSh 1,000 fixed charge",
              },
              {
                value: "Introduce another affordable formula",
                label: "Introduce another affordable formula",
              },
            ],
          },
          {
            id: "retakes_vs_supplementary",
            type: "radio",
            label:
              "Should the University do away with retakes and adopt supplementary examinations as the sole mechanism for clearing failed units?",
            required: true,
            options: [
              { value: "Yes", label: "Yes" },
              { value: "No", label: "No" },
              { value: "Undecided", label: "Undecided" },
            ],
          },
        ],
      },
      {
        id: "recommendations",
        title: "Student Recommendations",
        questions: [
          {
            id: "recommendation",
            type: "textarea",
            label:
              "What should PUSA propose to University Management regarding retakes, supplementary examinations and related charges?",
            placeholder: "Please provide a brief, constructive recommendation...",
            required: true,
          },
          {
            id: "additional_comments",
            type: "textarea",
            label: "Any other comments or concerns?",
            placeholder:
              "Share any additional views, concerns or suggestions...",
            required: false,
          },
        ],
      },
    ],
  },
];

export function getActiveConsultation(): Consultation {
  return consultations.find((c) => c.status === "active") ?? consultations[0];
}