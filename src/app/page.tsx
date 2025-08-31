"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import TheCouple from "@/components/the_couple/the_couple";
import Events from "@/components/events/events";
import Gallery from "@/components/gallery/gallery";
import RSVP from "@/components/rsvp/rsvp";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
     <Navbar />
      <Hero />
      <TheCouple />
      <Events />
      <Gallery />
      <RSVP />
      <Footer />
    </div>
  );
}
