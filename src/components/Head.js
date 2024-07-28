import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {

    const dispatch = useDispatch();

    const [searchQuery, setSearchQuery] = useState("");

    const [suggestions, setSuggestions] = useState([]);

    const [showSuggestions, SetShowSuggestions] = useState(false);

    const searchCache = useSelector((store) => store.search);

    useEffect(() => {
        // Make an API call after every key press
        // but if the difference between 2 API calls is <200ms
        // decline the API call

        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);

        return () => (
            clearTimeout(timer)
        );

    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        console.log("API Call - ", searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);
        // console.log("json", json[1]);

        // update cache
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }))
    }


    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg" >
            <div className="flex col-span-1">
                <img
                    onClick={() => {
                        toggleMenuHandler()
                    }}
                    className="h-8 cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8iICGSkZIkHyEPDA3z8vIyMTEhGx40MDEeHB4jICEeHR4AAAAxMTEgHh4gHB3W1tYtKyyXlpe6uroKBQhzcnJ+fX7CwsKysrJmZWX19fXk5OQYFhc5ODgoJidta2xUVFRfXV7Kysqsq6yjo6MHDa+eAAAB8UlEQVR4nO3c3VLaQBgGYJY/IQtE1Iogrfbn/q+xCaQ2TqtFm222+jwHDC8MMO8EdjnY+QYDAAAAAAAAAAAAAAAAeI/OL4Z5uDhP0m+yXYwzcbX4cJug4d045GN8Pem84GYd+67VUq6/dN7wou9Sjy1u0jQcjUZ9V2skaHhZfUuLbBrGYtN5w8F2HLNpGFOsNIPddlo3XGUgTK9T7BbVFzWbHX+zS1IQAAAAAAAAAABeZJKHVPXO76dHs9msul1OH+JfpOmr0ufuz15Wbhb78uzBvJzPWym2U/XU6Sk+lc6eTnEfv3Zf8PZjeTib2AihnYpwOJl5Qhp1kULY33d/1Pvbp9XTDcO/bhjGl503HD5uUX/Mn1PxTPr964pTUkhygra+hj9U16V10LS6+/pUtFLxTAo/00GCa1j/DhtFDw2Lxw1T/A7rtTRWS+ZhES2rdS3O22lep/qBX1LZSmetFI+pfvzk1HximrW03g9ns4edadboIy2XafbDWt9/Zhqp6gEAAAAAAAAAwAu89Zl7u+00xFXse2ZiLdHcxO24PLx7DpLMvrxcHy9f3+WOUswvHYZVRg2TTNktqnqjTCa0Jmm4WZcZNUwxC3pwd5VPwyLJlN3JdnHV9zD2RqKZ7G9/rj4AAAAAAAAAAAAAAAD8T74DVhZG6MsBqOQAAAAASUVORK5CYII=" alt="" />

                <img className="h-8 mx-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png" alt=""/>
            </div>

            <div className="col-span-10 px-10">
                <div>
                    <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search Something..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => SetShowSuggestions(true)}
                        onBlur={() => SetShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">Search</button>
                </div>

                {
                    showSuggestions && (<div className="fixed z-10 bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg border-green-50">
                        <ul>
                            {
                                suggestions.map((s) => <li key={s} className="px-3 py-2 shadow-sm hover:bg-gray-100 rounded-sm">{s}</li>)
                            }
                        </ul>
                    </div>
                    )
                }
            </div>

            <div>
                <img className="h-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4k-EK9bwaXD1R_HGLkKam2lQJBpUZ6BB-5iWwW0nUXQ&s" alt="" />
            </div>
        </div>
    );
}

export default Head;