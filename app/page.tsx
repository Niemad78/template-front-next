import Image from "next/image";

export default function Home() {
  return (
    <section className="w-[100vw] h-[100vh] bg-primary">
      <div className="flex flex-col justify-center items-center h-[100%]">
        <Image
          src="/logoDwM.png"
          alt="Damien Mauger Développement Web"
          className="z-10 bg-transparent"
          width={350}
          height={50}
          priority
        />
        <p className="z-10 text-police">Damien Mauger</p>
        <p className="z-10 text-police">Developpement web</p>
      </div>
    </section>
  );
}
