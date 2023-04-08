import { Services } from "./data"
import binoculars from '../assets/binoculars.svg';
import pencil from '../assets/pencil.svg';
import columns from '../assets/columns.svg';

const Service = () => {
  const Services = [
    {id: 1, icon: binoculars, title: "Vision", summary: "You need a beautiful and functional website that will inspire and connect with their visitors, aiming to convert website visitors into clients."},
    {id: 2, icon: pencil, title: "Plan", summary: "Actualizing your vision requires a strategic plan. This is where we analyze your target market and tailor the look of your site to your vision and your ideal client's needs using Figma."},
    {id: 3, icon: columns, title: "Build", summary: "This is where I implement the plan to make your vision come alive on the web page. With the language of computers, I build the structure, give it an attractive look, make it interactive and host it on the web."}
  ]

  return (
    <section className="text-center mx-auto px-5 py-10 lg:px-20" id="service">
      <h2>ACTUALIZATION</h2>
      <p className='lg:text-center'>Web design for businesses! From conception to product UI/UX and developing web pages, I've got you covered. <strong>Here's how it works</strong></p>

      {/* grid view of the services in a container */}
      <div className="grid grid-flow-row grid-cols-1 gap-5 mt-5 lg:grid-cols-3">
        {Services?.map(service => {
          return (
            <figure className="card bg-gray-700 w-11/12 mx-auto lg:h-full" key={service.id}>
              <img className='mx-auto mt-5' src={service.icon || ""} alt="icon" />
              <figcaption className="p-3">
                <h3 className='text-xl text-center font-bold'>{service.title || ""}</h3>
                <p>{service.summary || ""}</p>
              </figcaption>
            </figure>
          )
        })}
      </div>
    </section>
  )
}

export default Service