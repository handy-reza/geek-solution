import classnames from "classnames";
export default function CompetenciesCard({ name, nameClassName, desc, image, descClassName }) {
  const addDescClassName = descClassName ? `${descClassName}` : "";
  const addNameClassName = nameClassName ? `${nameClassName}` : "";
  return (
    <div className="w-3/12 bg-white shadow-lg rounded-lg m-16 h-[500px] grid grid-rows-2">
      <div className="w-[300px] mx-auto">
        <img src={image} className="w-full" />
      </div>
      <div className="text-center">
            <p className={classnames("text-5xl font-sans font-semibold text-blue-800 mt-10 ", addNameClassName)}>
          {name}
        </p>
        <p className={classnames(" text-xl mx-auto font-sans text-blue-800 w-7/12", addDescClassName) }>{desc}</p>
      </div>
    </div>
  );
}