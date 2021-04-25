export default function Profile(){
    return(
        <section>
        <div className="container mx-auto">
          <div className="flex items-center my-30">
            <div className="w-6/12">
              <img src="/Profile.png" className="w-full"/>
            </div>
            <div className="w-6/12 ml-[50px] ">
              <p className="text-[64px] font-mono font-semibold text-blue-800 mb-10 ">Who we are ?</p>
              <p className="text-[30px] leading-relaxed text-blue-800">Geek solution was established in 2021 with the vision of becoming a  Information and Technology company competing with the best.</p>
            </div>
          </div>
        </div>
      </section>
    )
}