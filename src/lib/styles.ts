export const S = {
  eyebrow: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.28em",
    textTransform: "uppercase" as const,
    color: "var(--color-brass)",
    display: "block",
    marginBottom: "0.4rem",
  },
  sectionTitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    color: "var(--color-walnut)",
    lineHeight: 1.15,
  },
  bodyText: {
    fontFamily: "var(--font-body)",
    color: "var(--color-sepia)",
    lineHeight: 1.8,
  },
  monoLabel: {
    fontFamily: "var(--font-mono)",
    fontSize: "0.62rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
  },
};

export const primarySource = {
  wrapper: {
    margin: "2.5rem 0",
    borderLeft: "4px solid var(--color-brass)",
    paddingLeft: "1.75rem",
  },
  label: {
    fontFamily: "var(--font-mono)" as const,
    fontSize: "0.58rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase" as const,
    color: "var(--color-brass)",
    display: "block" as const,
    marginBottom: "1rem",
  },
  quote: {
    fontFamily: "var(--font-display)" as const,
    fontStyle: "italic" as const,
    fontSize: "1.05rem",
    color: "var(--color-walnut)",
    lineHeight: 1.65,
    marginBottom: "1.25rem",
    display: "block" as const,
  },
  attribution: {
    fontFamily: "var(--font-mono)" as const,
    fontSize: "0.6rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "var(--color-sepia)",
    display: "block" as const,
    marginTop: "0.75rem",
  },
  context: {
    fontFamily: "var(--font-body)" as const,
    fontSize: "0.875rem",
    color: "var(--color-sepia)",
    lineHeight: 1.7,
    fontStyle: "italic" as const,
    marginBottom: "1rem",
    display: "block" as const,
  },
};