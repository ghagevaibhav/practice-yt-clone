import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from '@/components/videocard'
import { VideoGrid } from "@/components/videogrid";
import { AppBar } from "@/components/appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppBar/> 
      <VideoGrid/>
    </div> 
  )
}