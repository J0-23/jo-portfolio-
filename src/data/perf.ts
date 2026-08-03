export interface PerfMetric {
  label: string;
  value: string;
  plain?: string;
}

export const perf: PerfMetric[] = [
  {
    label: "LCP",
    value: "1.5s",
    plain: "How fast the main content appears on screen",
  },
  {
    label: "FCP",
    value: "1.4s",
    plain: "When the page starts showing anything at all",
  },
  {
    label: "CLS",
    value: "0.09",
    plain: "Whether the page jumps around while loading",
  },
  {
    label: "TBT",
    value: "0 ms",
    plain: "How long the page feels frozen before responding",
  },
  { label: "JavaScript", value: "0 KB" },
  { label: "CSS", value: "7.6 KB" },
  { label: "HTML", value: "5.9 KB" },
  { label: "Requests", value: "9" },
  { label: "Build time", value: "~0.9s" },
];
