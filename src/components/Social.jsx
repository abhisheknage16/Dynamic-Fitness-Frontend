export default function Social(){
    return(
        <>
            <section className="text-white body-font ">
                
            <div className="container mx-auto flex flex-wrap">
                    <div className="lg:w-full">
                        <div className="flex flex-wrap w-full bg-black py-32 px-20 relative ">
                        <img alt="gallery"
                                 className="w-full object-cover h-full object-center block opacity-30 absolute inset-0"
                                 src="/8cv5df.gif" width="1000" height="340"/>
                        
                        <h1 className="font-mono sm:text-3xl text-2xl font-bold title-font mb-4 text-lime-500 uppercase ">
                            Social
                        </h1>
                        <p className="lg:w-3/4 w-full leading-relaxed text-white text-justify ">Social information related to health and fitness refers to the influence that social interactions, norms,
                            and structures have on individuals health behaviors, beliefs, and practices. This influence can be observed in various ways:</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <a href="/social-comparision" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow-2xl">
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img src="/" height="50" width="70" />
                                </div>
                                <h2 className="text-lg text-lime-500 font-medium title-font mb-2"> Social
                                    Comparison </h2>
                                <p className="leading-relaxed text-base text-justify"> Individuals often compare
                                    themselves with others in terms of their health and fitness levels.
                                </p>
                            </div>
                        </a>
                        <a href="/social-support" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow-2xl">
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round"
                                         strokeLinejoin="round" strokeWidth="2" className="w-6 h-6"
                                         viewBox="0 0 24 24">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-lime-500 font-medium title-font mb-2">Social Support</h2>
                                <p className="leading-relaxed text-base text-justify">Social support plays a crucial
                                    role in maintaining health behaviors.
                                </p>
                            </div>
                        </a>
                        <a href="/cultural-factor" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow-2xl">
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img src="/linkedin.png" height="50" width="70" />
                                </div>
                                <h2 className="text-lg text-lime-500 font-medium title-font mb-2">Cultural Factors</h2>
                                <p className="leading-relaxed text-base text-justify">Cultural beliefs and traditions
                                    can significantly influence health and fitness practices.</p>
                            </div>
                        </a>
                        <a href="/peer-pressure" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow-2xl">
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img src="/social.png" height="50" width="70" />
                                </div>
                                <h2 className="text-lg text-lime-500 font-medium title-font mb-2">Peer Pressure</h2>
                                <p className="leading-relaxed text-base text-justify">Peer pressure can also affect
                                    health and fitness behaviors, especially among younger individuals.
                                </p>
                            </div>
                        </a>
                        <a href="/health-belief" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow-2xl">
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img src="/instagram.png" height="50" width="70" />
                                </div>
                                <h2 className="text-lg text-lime-500 font-medium title-font mb-2">Health Beliefs and
                                    Attitudes</h2>
                                <p className="leading-relaxed text-base text-justify">
                                    Social interactions can shape individuals beliefs, attitudes, and perceptions about
                                    health and fitness.
                                </p>
                            </div>
                        </a>
                        <a href="https://www.facebook.com/dynamicfitnessandcrossfit/" className="xl:w-1/3 md:w-1/2 p-4">
                            <div className="border border-gray-200 p-6 rounded-lg shadow-2xl">
                                <div
                                    className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                    <img src="/facebook.png" height="50" width="70" />
                                </div>
                                <h2 className="text-lg text-lime-500 font-medium title-font mb-2 underline">Facebook</h2>
                                <p className="leading-relaxed text-base text-justify">Connect us explore our features and review our center.
                                </p>
                            </div>
                        </a>
                    </div>

</div>
                </div>
            </section>
        </>
    )
}