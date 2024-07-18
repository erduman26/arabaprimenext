import React from 'react'
import Image from 'next/image';

const Hakkimizda = () => {
  return (
    <section className="py-16">
        <div className="gap-16 items-center py-8 px-4 mx-auto 2xl:mx-20 lg:grid lg:grid-cols-2 lg:py-16">
        <div className="grid grid-cols-2 gap-4 mb-8 mt-0 lg:mt-8">
            <Image className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
            <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
          </div>
          <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-950">Hakkımızda!</h2>
            <p className="mb-4 text-gray-900 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, repellat. Nisi, maiores ut? Iste quasi reiciendis tempore dicta quidem dolor blanditiis dolorum similique, totam dolore ad modi, animi praesentium sequi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde, tempore non sunt, laborum eius enim aliquid soluta nulla ipsum delectus facere blanditiis reprehenderit eveniet porro vero, earum ab tenetur.</p>
          </div>
        </div>
      </section>
  )
}

export default Hakkimizda