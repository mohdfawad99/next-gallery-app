import Image from 'next/image'
import data from "./data.json"

export default function Home() {
  return (
    <div>
      <div className="text-center p-5">
        <h1 className='text-3xl font-serif font-extrabold uppercase'>Image Gallery</h1>
      </div>
      <div className='p-5 md:p-10'>
        
        <div className='columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>*:not(:first-child)]:mt-5 lg:[&>*:not(:first-child)]:mt-8'>
          {
            data?.map((img, key) => <div key={key} className='group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30'>
              <Image
                src={img.url}
                alt=""
                width="0"
                height="0"
                sizes="100vw"
                className='h-auto w-auto object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125'
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif text-3xl font-bold text-white">{img.title}</h1>
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{img.subtitle}</p>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Enlarge</button>
              </div>
            </div>)

          }

        </div>
      </div>
    </div>
  )
}
