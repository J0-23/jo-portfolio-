export interface PerfMetric {
  label: string;
  value: string;
  plain?: string;
}

export const perf: PerfMetric[] = [
  {
    label: "LCP",
    value: "—",
    plain: "How fast the main content appears on screen",
  },
  {
    label: "FCP",
    value: "—",
    plain: "When the page starts showing anything at all",
  },
  {
    label: "CLS",
    value: "—",
    plain: "Whether the page jumps around while loading",
  },
  {
    label: "TBT",
    value: "—",
    plain: "How long the page feels frozen before responding",
  },
  { label: "JavaScript", value: "0 KB" },
  { label: "CSS", value: "~37 KB" },
  { label: "HTML", value: "23.6 KB" },
  { label: "Requests", value: "1" },
  { label: "Build time", value: "~0.9s" },
];
