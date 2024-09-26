import { Benefits } from "./Benefits"


const Headline = () => {
  return (
    <section className=" flex flex-col w-full bg-light1 items-center justify-center">
        <h1 className="text-4xl font-bold text-center pt-8 md:pt-12 lg:pt-32">Discover Our Powerful Features</h1>
      <div className="pb-8 md:pb-12 lg:pb-32">
        <Benefits/>
      </div>
    </section>
  )
}

export default Headline