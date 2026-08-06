export interface PerfMetric {
  label: string;
  value: string;
  plain?: string;
}

export const perf: PerfMetric[] = [
  {
    label: "LCP",
    value: "1.4s",
    plain: "How fast the main content appears on screen",
  },
  {
    label: "FCP",
    value: "1.2s",
    plain: "When the page starts showing anything at all",
  },
  {
    label: "CLS",
    value: "0",
    plain: "Whether the page jumps around while loading",
  },
  {
    label: "TBT",
    value: "0 ms",
    plain: "How long the page feels frozen before responding",
  },
  { label: "JavaScript", value: "0 KB" },
  { label: "CSS", value: "7.8 KB" },
  { label: "HTML", value: "7.5 KB" },
  { label: "Requests", value: "7" },
  { label: "Build time", value: "~1.0s" },
];
