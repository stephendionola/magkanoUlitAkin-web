import { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

const Box = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassValue;
}) => {
  return (
    <div
      className={cn(
        "flex text-text items-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-4 py-2 text-sm font-base shadow-light dark:shadow-dark ",

        className,
      )}
    >
      {/* className="w-[250px] overflow-hidden rounded-base border-2 border-border dark:border-darkBorder bg-main font-base shadow-light dark:shadow-dark"> */}
      {children}
    </div>
  );
};

export default Box;
