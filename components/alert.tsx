import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-easterRed border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This page is a preview.{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{" "}
              to exit preview mode.
            </>
          ) : (
            <>
              Farevarsel! Mye vind på på fjelloverganger, spesielt utsatt for
              bris ved Hurumhei.{" "}
              <a
                target="_blank"
                href={`https://dms-cf-03.dimu.org/image/0334ARxpKJPy?dimension=1200x1200`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                Se bildene her
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
