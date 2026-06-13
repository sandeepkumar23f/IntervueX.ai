export type Message = {
  role: "user" | "ai";
  content: string;
};

export type InterviewConfig = {
  role: string;
  difficulty: string;
  totalQuestions: number;
};