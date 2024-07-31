import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from '@/components/videocard'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard></VideoCard>
    </div> 
  )
}