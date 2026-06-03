import { serviceCardImage, serviceInlineImage } from "@/lib/service-images";

export type ServiceSlug = "crm" | "workflow" | "ai";

export const serviceSlugs: ServiceSlug[] = [
  "crm",
  "workflow",
  "ai",
];

export type ServiceHighlight = {
  title: string;
  description: string;
};

type ServicePage = {
  slug: ServiceSlug;
  title: string;
  headline: string;
  summary: string;
  /** Extra paragraph for the detail page body column */
  body: string;
  bullets: string[];
  coverImage: string;
  coverImageAlt: string;
  /** Secondary visual in the content area */
  inlineImage: string;
  inlineImageAlt: string;
  highlights: ServiceHighlight[];
  stats: { label: string; value: string }[];
};

export const services: Record<ServiceSlug, ServicePage> = {
  crm: {
    slug: "crm",
    title: "CRM Systems Setup & Optimization",
    headline: "A CRM your team actually uses - clean data, sharp automation",
    summary:
      "We design lifecycle stages, ownership rules, and automation that match how you sell and deliver - not a generic template.",
    body:
      "Most CRM pain is not the tool - it is unclear stages, noisy fields, and automations that fight reality. We rebuild the model around your motion, then layer reporting and integrations so operators and leadership see the same truth.",
    bullets: [
      "Pipeline architecture aligned to your motion (PLG, sales-led, hybrid)",
      "Lifecycle emails, tasks, and SLAs triggered from real behavior",
      "Reporting leadership trusts: source, velocity, and forecast hygiene",
      "Integrations with billing, support, and product telemetry where needed",
    ],
    coverImage: serviceCardImage("crm"),
    coverImageAlt: "CRM pipeline and sales dashboard on a laptop",
    inlineImage: serviceInlineImage("crm"),
    inlineImageAlt: "Professional reviewing CRM data at a desk",
    highlights: [
      {
        title: "Stage & field design",
        description:
          "Stages, required fields, and handoff rules that match how deals really move - not a textbook funnel.",
      },
      {
        title: "Automation with guardrails",
        description:
          "Sequences and workflows that respect opt-outs, ownership, and edge cases so reps trust the system.",
      },
      {
        title: "Executive-ready reporting",
        description:
          "Dashboards and definitions everyone agrees on: pipeline health, velocity, and forecast drivers.",
      },
    ],
    stats: [
      { label: "Discovery & design", value: "2–4 wks" },
      { label: "Typical phase 1 build", value: "4–8 wks" },
      { label: "Handover format", value: "Playbooks + Looms" },
    ],
  },
  workflow: {
    slug: "workflow",
    title: "Workflow Automation (n8n, Zapier, Make)",
    headline: "Production workflows with monitoring, retries, and docs",
    summary:
      "Whether you need the speed of Zapier or the control of self-hosted n8n, we build automations that survive real-world edge cases.",
    body:
      "We treat workflows like product: versioning, naming, logging, and clear owners. That means fewer silent failures, faster debugging when a vendor changes an API, and a path for your team to extend flows without fear.",
    bullets: [
      "Idempotent patterns, dedupe, and safe replays when vendors glitch",
      "Structured logging and alerting so failures are obvious - not silent",
      "Versioned flows with naming conventions your team can extend",
      "Tool selection guidance: when to use Make vs n8n vs native integrations",
    ],
    coverImage: serviceCardImage("workflow"),
    coverImageAlt: "Workflow automation builder on a monitor",
    inlineImage: serviceInlineImage("workflow"),
    inlineImageAlt: "Node-based automation workflow on screen",
    highlights: [
      {
        title: "Reliability first",
        description:
          "Retries, backoff, and idempotency so duplicate webhooks and flaky APIs do not corrupt your data.",
      },
      {
        title: "Observable by default",
        description:
          "Structured logs and alerts tied to business outcomes - not just “flow failed” with no context.",
      },
      {
        title: "Maintainable structure",
        description:
          "Subflows, env separation, and documentation so the next engineer picks up where we left off.",
      },
    ],
    stats: [
      { label: "Platforms", value: "n8n · Zapier · Make" },
      { label: "Typical first slice", value: "1–3 flows" },
      { label: "Support window", value: "Agreed SLA" },
    ],
  },
  ai: {
    slug: "ai",
    title: "AI Chatbots & Voice Automation",
    headline: "Assistants with guardrails - qualified, routed, measurable",
    summary:
      "From chat widgets to voice agents, we implement AI that escalates gracefully and logs outcomes for continuous improvement.",
    body:
      "Great AI in ops is boring on purpose: tight scopes, explicit handoff, and traces you can audit. We pair UX writing with engineering so customers get fast answers - and your team gets structured outcomes in CRM or ticketing without surprises.",
    bullets: [
      "Intent design, knowledge boundaries, and human handoff rules",
      "CRM and ticketing updates driven by conversation outcomes",
      "Voice flows with natural confirmations and PCI-aware patterns",
      "Evaluation harnesses so prompt changes don’t surprise production",
    ],
    coverImage: serviceCardImage("ai"),
    coverImageAlt: "AI chat and voice assistant workspace",
    inlineImage: serviceInlineImage("ai"),
    inlineImageAlt: "Headset and chat interface for AI customer support",
    highlights: [
      {
        title: "Guardrails & tone",
        description:
          "Policies, refusal patterns, and brand-safe responses with human escalation paths.",
      },
      {
        title: "Systems of record",
        description:
          "Tickets, deals, and tags updated from conversation outcomes - not orphaned chats.",
      },
      {
        title: "Evals before deploy",
        description:
          "Test sets and regression checks so prompt and tool changes ship with confidence.",
      },
    ],
    stats: [
      { label: "Channels", value: "Web · SMS · Voice" },
      { label: "Handoff", value: "Human-in-the-loop" },
      { label: "Measurement", value: "CSAT · deflection · $/ticket" },
    ],
  },
};

export function isServiceSlug(s: string): s is ServiceSlug {
  return serviceSlugs.includes(s as ServiceSlug);
}
