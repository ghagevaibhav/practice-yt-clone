import { VideoCard } from "./videocard"

const VIDEOS = [{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
},
{
    title: 'How to learn coding in 30 days | 30 day plan | Code with me',
    image: '/image.jpg',
    author: 'Code with me',
    views: '1.2M views',
    timestamp: '1 day ago', 
    thumbimage: '/image.jpg'
}
]

export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map((video) => <div>
            <VideoCard title={video.title} image={video.image} author={video.author} views={video.views} timestamp={video.timestamp} thumbimage={video.thumbimage}></VideoCard>
        </div>)}
    </div>
}