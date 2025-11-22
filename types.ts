export enum Category {
  Staffing = "Staffing & Capacity",
  Forecasting = "Forecasting & Arrivals",
  Routing = "Routing & Operations",
  Workforce = "Human Factors & Workforce"
}

export interface PaperData {
  id: number;
  title: string;
  category: Category;
  rawText: string; // Content from the PDF slides to send to Gemini
}

export interface PaperSummary {
  author: string;
  journal: string;
  doi: string;
  keywords: string[];
  introduction: string;
  problem_conclusion: string;
  new_findings: string;
  value_implications: string;
}

export interface GeminiResponse {
  summary: PaperSummary;
}