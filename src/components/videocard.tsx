import { Component } from "react"

export function VideoCard(props: any){
    return <div className="p-3 cursor-pointer"> 
        <img className="rounded-xl" src={props.image} alt=""></img>
        <div className="gird grid-cols-10 pt-2">
            <div className="col-span-1">
                <img className={'rounded-full w-12 h-12'} src={props.thumbimage} alt="" />
            </div>
            
            <div className="col-span-9 pl-2">
                <div>
                    {props.title} 
                </div>

                <div className="col-span-9 text-gray-400 text-base">
                    {props.author}
                </div>

                <div className="col-span-9 text-gray-400 text-base">
                    {props.views} | {props.timestamp}
                </div>
                    
            </div>
        </div>
    </div>
} 