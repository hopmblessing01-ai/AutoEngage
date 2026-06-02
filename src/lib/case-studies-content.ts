export type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Mobile Auto Repair Chatbot & Voice Agent System",
    industry: "Field service · Automotive",
    challenge:
      "The business was missing leads and delaying responses because chat and call inquiries were not handled consistently across channels.",
    solution:
      "We implemented a chatbot + voice agent first-response system integrated with booking and CRM workflows, then connected scheduling, dispatch, and customer notifications so inquiries convert faster.",
    outcome:
      "Faster response times, smoother field operations, and more consistent customer communication.",
  },
  {
    title: "AI Meeting Notes for Microsoft Teams",
    industry: "Internal operations",
    challenge:
      "Meeting follow-through was inconsistent because decisions and action items were not captured in a reliable, repeatable way.",
    solution:
      "We implemented an AI-powered meeting notes workflow that turns conversations into structured summaries, decisions, and action items with consistent delivery after each meeting.",
    outcome:
      "A zero-manual notes process with validation, logging, and error handling to prevent duplicates and missed summaries.",
  },
  {
    title: "Automated Follow-Up for Unanswered Teams Messages",
    industry: "Customer support operations",
    challenge:
      "Important Teams messages were being missed, creating delayed responses and uneven support quality.",
    solution:
      "We built an AI-assisted follow-up automation that detects unanswered messages and prepares context-aware responses using approved communication patterns.",
    outcome:
      "Reliable follow-up coverage, more consistent response quality, and fewer missed support messages.",
  },
  {
    title: "Monday.com Workflow Sync Across Teams",
    industry: "Project management",
    challenge:
      "Project teams were repeating manual updates across multiple Monday boards, creating data mismatch and extra coordination overhead.",
    solution:
      "We designed linked Monday.com boards with cross-board automations and integrated Google apps so status changes update automatically without back-and-forth entry.",
    outcome:
      "Cleaner project visibility, reduced manual updates, and smoother cross-team delivery.",
  },
];
