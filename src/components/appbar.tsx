import { SearchBar } from "./searchbar"

 
 export const AppBar = () => {
    return <div className="flex justify-between pt-1 p-3">
        <div className="text-md inline-flex items-center">
            Youtube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div className="inline-flex items-center">
            Sign In
        </div>
    </div>
 }