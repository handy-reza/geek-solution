export default function ServiceItems({name, description, image}){
    return(
        <div className="w-12/12 md:w-6/12 px-4 py-4 text-center">
        <article className="w-full rounded-lg shadow bg-gray-100 h-[900px] p-10">
          <img src={image} />
          <h3 className="text-4xl text-blue-800 font-semibold mb-10 mt-4">
            {name}
          </h3>
          <p className="text-lg text-gray-400 inline-block leading-relaxed">
            {description}
          </p>
          
        </article>
      </div>
    )
}