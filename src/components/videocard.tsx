import { Component } from "react"

export function VideoCard(){
    return <div> 
        <img className="rounded-xl" src="/image.jpg" alt=""></img>
        <div className="gird grid-cols-12 pt-2">
            <div className="col-span-1">
                <img className={'rounded-full w-12 h-12'} src="/channel.png" alt="" />
            </div>
            
            <div className="col-span-11 pl-2">
                <div>
                    VXLLAIN, VØJ, Narvent - Distant Echoes 
                </div>

                <div className="text-gray-400 text-base">
                    Vaibhav Ghage
                </div>
                
                <div className="text-gray-400 text-base">
                    5 Mn | 12 hours ago
                </div>
                    
            </div>
        </div>
    </div>
} 