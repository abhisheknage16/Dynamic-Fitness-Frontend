import axios from "axios";
import {useEffect, useState} from "react";

export default function Homepage(){
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
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap">
                    <div className="lg:w-full">
                        <div className="flex flex-wrap w-full bg-gray-800 py-32 px-20 relative ">
                            <img alt="gallery"
                                 className="w-full object-cover h-full object-center block opacity-70 absolute inset-0"
                                 src="/8cv76w.gif" width="1000" height="340"/>
                            

                            <div className="text-center relative z-10 w-full">
                            <img
                                className="border-4 border-lime-500 lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded hover:border text-center mx-auto"
                                alt="hero"
                                src="https://wallpaperaccess.com/full/1904834.jpg"
/>
        
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 text-lime-500 font-bold">Dynamic Fitness </h1>
                               
                                {isLogin ? (
                                    <>
                                    </>
                                ) : (
                                    <div className="flex justify-center">
                                        <a href="/register"
                                           className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-gradient-to-r from-lime-500 to-teal-500 hover:from-cyan-500 hover:to-lime-500">Register
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}