import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
    const variants = {
        "outline-blue": `border-[3px] border-blue-500 text-blue-500 hover:text-black hover:bg-blue-500`,
        "blue": "bg-blue-500 hover:bg-blue-600 text-blue-900",
        "black": "bg-black hover:bg-opacity-90 text-white"
    };

    const pickedVariant = variants[variant];

    return (
        <a 
            href={href} 
            className={classnames(
                "transition py-3 px-10 font-semibold text-lg inline-block",
                pill && "rounded-full",
                pickedVariant,
                className
            )}
        >
            {children}
        </a>
    );
}