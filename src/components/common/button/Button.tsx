import { buttonHrefCreate } from "./utils/button-href-create";
import { buttonStringCreate } from "./utils/button-string-create";

export default function Button({ buttonString }: { buttonString: string }) {
  return (
    <button className="bg-btn-yellow font-fira-code p-1 pl-2 pr-2 rounded-lg m-auto hover:scale-105 transition-all active:scale-100 active:bg-btn-yellow-active">
      <a href={buttonHrefCreate(buttonString)} target="_blank">
        {buttonStringCreate(buttonString)}
      </a>
    </button>
  );
}
