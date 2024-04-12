import { buttonTexts } from "../button-string/button-string";

export const buttonStringCreate = (
  buttonString: string
): string | undefined => {
  if (buttonString === buttonTexts.contact) return buttonTexts.contact;
  else if (buttonString === buttonTexts.more) return buttonTexts.more;
};
