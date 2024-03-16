import BodyText from "./body-text";
import Button from "./button";
import SectionHeading from "./section-heading";

export function TextSection({
  heading,
  text,
  buttonText,
  buttonHref,
}: {
  heading: string;
  text: string;
  buttonText: string;
  buttonHref?: string;
}) {
  return (
    <div className="space-y-8 max-w-md self-center">
      <SectionHeading>{heading}</SectionHeading>
      <BodyText>{text}</BodyText>
      <Button >
        <a href={buttonHref ? buttonHref : ""}>{buttonText}</a>
      </Button>
    </div>
  );
}
