import Head from "next/head";
import Image from "next/image";
import { createClient } from "contentful";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
