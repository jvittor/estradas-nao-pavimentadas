"use client";

import { Hero } from "@/components/Hero";
import { CarScene } from '@/lib/3d/scenes/CarScene';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import '@/styles/home.scss';

export default function Home() {
  return (
    <>
      <main>
        <div className="absolute top-16 bottom-0 left-0 right-0">
          <CarScene />
        </div>
        <div className=" mt-20 max-w-screen-xl justify-between mx-auto p-2 flex flex-col space-y-5 font-black text-white text-4xl sm:text-5xl">
          <div className="z-10 inline-block px-3 bg-primary ">Estradas</div>
          <div className="z-10 inline-block w-full max-w-md px-3 bg-primary">
            Não
          </div>
          <div className="z-10 inline-block w-full max-w-md px-3 bg-primary">
            Pavimentadas
          </div>
          <div className="font-light z-10 inline-block w-full max-w-md px-3 bg-primary text-base sm:text-2xl">
            Implementação e monitoramento das condições estruturais e funcionais em rodovias federais não pavimentadas
          </div>
          <div>
            <a href="/about">
              <button className="z-10 shrink-border">
                Saber Mais
              </button>
            </a>
          </div>
        </div>
      </main>

    </>
  );
}
