import classnames from "classnames";

export default function Button({ href, className, variant, children, pill }) {
    const variants = {
        "outline-blue": `border-[3px] border-blue-500 text-blue-500 hover:text-blue-200 hover:bg-blue-700`,
        "blue": "bg-blue-700 hover:bg-blue-800 text-blue-200",
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