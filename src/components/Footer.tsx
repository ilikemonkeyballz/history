export default function Footer() {
  return (
    <footer style={{
      background: "var(--color-walnut)",
      borderTop: "3px solid var(--color-brass)",
      color: "var(--color-parchment-dk)",
    }} className="relative z-10 py-10 px-6 text-center">
      <p style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.5rem",
        fontWeight: 700,
        fontStyle: "italic",
        color: "var(--color-parchment)",
        marginBottom: "0.25rem",
      }}>
        The Freedom Courier
      </p>
      <p style={{
        fontFamily: "var(--font-body)",
        fontSize: "0.875rem",
        fontStyle: "italic",
        color: "rgba(226,208,176,0.6)",
        marginBottom: "1.5rem",
      }}>
        Published in the cause of Liberty, Justice, and Reform.
      </p>
      <div style={{
        borderTop: "1px solid rgba(154,112,32,0.25)",
        paddingTop: "1.25rem",
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: "rgba(226,208,176,0.4)",
      }}>
        Abolitionist Movement &nbsp;·&nbsp; Native American Advocacy &nbsp;·&nbsp; Reform · Freedom · American Identity
      </div>
    </footer>
  );
}