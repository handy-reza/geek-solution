import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
  const variants = {
    "outline-blue": `border-[3px] border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500`,
    blue: "bg-blue-500 hover:bg-blue-700 text-white",
    black: "bg-black hover:bg-opacity-90 text-white",
  };

  const pickedVariant = variants[variant];

  return (
    <a
      href={href}
      className={classnames(
        "transition py-4 px-12 font-semibold text-lg inline-block",
        pill && "rounded-full",
        pickedVariant,
        className
      )}
    >
      {children}
    </a>
  );
}
