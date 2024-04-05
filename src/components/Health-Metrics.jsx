import React from 'react';

export default function HealthMetrics() {
  // Replace these with actual dynamic data
  const metricsData = [
    {
      title: 'Body Mass Index',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      learnMoreLink: 'https://docs.google.com/forms/d/e/1FAIpQLScc7GhUklD4A26nd-sZUdgcJMH4zDkF0TVi4KEQ72N3FprgKw/viewform?usp=sf_link',
    },
    {
      title: 'Body Fat Percentage',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      learnMoreLink: 'https://youtu.be/dKoTa5eP76M?feature=shared',
    },
    {
      title: 'Muscle Mass',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      learnMoreLink: '#',
    },
    {
      title: 'Flexibility',
      description: 'Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.',
      learnMoreLink: '#',
    },
  ];

  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-lime-500 tracking-widest font-medium title-font mb-1">Health Metrics</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Fitness Dashboard</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Monitor your fitness metrics and stay on track with your health and wellness goals. Whatever cardigan tote
            bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-wrap">
          {metricsData.map((metric, index) => (
            <div key={index} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800">
              <h2 className="text-lg sm:text-xl text-white font-medium title-font mb-2">{metric.title}</h2>
              <p className="leading-relaxed text-base mb-4">{metric.description}</p>
              <a href={metric.learnMoreLink} className="text-lime-500 inline-flex items-center">
                Click to check
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
        <button onClick="https://docs.google.com/forms/d/e/1FAIpQLScc7GhUklD4A26nd-sZUdgcJMH4zDkF0TVi4KEQ72N3FprgKw/viewform?usp=sf_link" className="flex mx-auto mt-16 text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Check
        </button>
      </div>

  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Following are the Factors for Best Fitness</h1>
        <div class="h-1 w-20 bg-green-500 rounded"></div>
      </div>
      <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Embrace the journey to a healthier and stronger you. Every drop of sweat, every rep, and every healthy choice you make is a step towards a more vibrant and energetic life. Fitness is not just about transforming your body; it's about unlocking your full potential, building resilience, and discovering the incredible strength that resides within you. Believe in yourself, stay consistent, and let each workout be a celebration of your commitment to well-being. Your body is capable of amazing things – nurture it, challenge it.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/g3.jpg" alt="content"/>
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">Sleep Hours</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">7-8 Hours</h2>
          <p class="leading-relaxed text-base">"Unlock Your Potential: The Power of Daily Sleep for a Healthier Tomorrow"</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/g1.jpg" alt="content" />
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">Walking</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Walk atleast 10000 steps</h2>
          <p class="leading-relaxed text-base">"Step Into Wellness: Discover the Transformative Benefits of Walking 10,000 Steps Daily"</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/g2.jpg" alt="content" />
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">Diet</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Balacnced Diet</h2>
          <p class="leading-relaxed text-base">"Nourish to Flourish: The Key to Well-Being Lies in Embracing a Balanced Diet".</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="/g4.jpg" alt="content" />
          <h3 class="tracking-widest text-green-400 text-xs font-medium title-font">Avoid Junk</h3>
          <h2 class="text-lg text-white font-medium title-font mb-4">Eat healthier live better</h2>
          <p class="leading-relaxed text-base">"Elevate Your Health: Break Free from Junk Food and Embrace a Nourishing Lifestyle".</p>
        </div>
      </div>
    </div>
  </div>
</section>
    
  );
}
