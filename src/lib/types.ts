export interface SubmissionPayload {
  consultation_id: string;
  school_faculty: string;
  year_of_study: string;
  supports_current_formula: string;
  preferred_payment_approach: string;
  retakes_vs_supplementary: string;
  recommendation: string;
  additional_comments: string;
}

export interface Submission extends SubmissionPayload {
  id: string;
  submitted_at: string;
}

export interface Filters {
  school?: string;
  year?: string;
  from?: string;
  to?: string;
}