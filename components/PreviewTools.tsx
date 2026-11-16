/* Preview-only switchers (heading font). Remove before launch. */
export default function PreviewTools() {
  return (
    <>
    <div className="font-sw" role="group" aria-label="Heading font">
      {" "}
      <button data-f="texturina" title="Texturina" aria-label="Texturina font" style={{ fontFamily: "Texturina" }}>Aa</button>
      {" "}
      <button data-f="fraunces" title="Fraunces (current)" aria-label="Fraunces (current) font" style={{ fontFamily: "Fraunces" }}>Aa</button>
      {" "}
    </div>
    </>
  );
}
