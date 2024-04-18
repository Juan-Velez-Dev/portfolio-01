import { buttonTexts } from "../button-string/button-string";

export const buttonHrefCreate = (buttonString: string): string | undefined => {
  if (buttonString === buttonTexts.contact)
    return "https://calendly.com/juanvelez-dev/interviews?month=2024-04";
  else if (buttonString === buttonTexts.more) return "in construction";
};
