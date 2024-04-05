import Link from "next/link";
import axios from "axios";
import {useEffect, useState} from "react";
axios.defaults.withCredentials = true;
export default function Header(){
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        axios
            .get(`http://localhost:3002/api/checkToken`)
            .then((response) => {
                if (response.status === 200) {
                    setIsLogin(true);
                }
            })
            .catch((err) => {
            });
    }, []);

    return(
        <>
            <header className="text-gray-400 bg-fixed bg-cover bg-center bg-gray-900 body-font border-4 border-lime-500">
                <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                    <Link href="https://www.linkedin.com/feed/" class="flex title-font font-medium items-center text-lime-500 mb-4 md:mb-0">
                        <img src="/chad1.jpg" height="50" width="70" />
                        <span class="text-white ml-3 text-4xl font-mono  font-extrabold hover:text-lime-500">Dynamic Fitness </span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <a href="/" className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">Home</a>
                        <a href="/social" className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">Social</a>
                        {isLogin ? (
                            <>
                                {/*<a href="/goal"*/}
                                {/*   className="mx-3 text-lg font-bold hover:underline hover:text-green-700">Goal</a>*/}
                                <a href="/nutrition"
                                   className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">Nutrition</a>
                                <a href="/health-metrics"
                                   className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">Health
                                    Metrics</a>
                                <a href="/profile"
                                   className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">Profile</a>
                                <a href="/about"
                                   className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">About</a>
                            </>
                        ) : (
                            <>
                            <a href="/about" className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">About</a>
                            <a href="/login"
                               className="mr-5 text-lime-500 hover:text-white font-mono text-2xl font-extrabold  leading-tight mb-4">Login</a>
                            </>
                        )}
                    </nav>

                </div>
            </header>
        </>
    )
}

