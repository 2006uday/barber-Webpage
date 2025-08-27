import { Header, Button } from "./Header";

function HeroSection() {
  return (
<section className="h-[calc(100vh+132px)] flex flex-col justify-center items-end text-white py-14 px-6 bg-[linear-gradient(0deg,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://assets.nicepagecdn.com/d2cc3eaa/6401142/images/client-doing-hair-cut-2-min.jpg')] bg-cover bg-center relative">
      <div className="w-full md:text-right flex-col -mt-8 max-w-3xl flex justify-end items-end gap-10  text-center">
        <h1 className="text-[90px]   font-bold leading-tight">
          MANHATTAN
          <br />
          BARBER SHOP
        </h1>
        <p className="text-lg  leading-relaxed mt-4">
          Unforgettable grooming experience
          <br />
          in a barbershop near me
        </p>
<Button className="tracking-widest uppercase  py-4 px-10"/>
      </div>
    </section>
  );
}

export function Welcome() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}