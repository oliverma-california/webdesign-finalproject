<script>
  import { TrendingUp, Footprints } from "lucide-svelte";
</script>

<div class="h-[50vh] bg-about bg-cover bg-blend-overlay bg-black/50 font-titillium">
  <div class="items-center justify-center w-full py-[12vh]">
    <div class="text-7xl font-bold text-white text-center py-10">About the Goal</div>
    <div class="text-3xl text-white text-center">What it is and Why it's Important</div>
  </div>
</div>

<div class="bg-gradient-to-b from-transparent to-gray-300">
  <div class="h-min w-full px-40 py-10 grid grid-cols-2 justify-center items-center font-titillium gap-20">
  
    <div>
      <div class="text-6xl font-extrabold text-transparent bg-clip-text bg-smoke bg-contain text-justify align-text-top">THE AVERAGE AMERICAN HAS A CARBON FOOTPRINT OF 16 TONS PER YEAR.</div>
      <div class="text-3xl text-start align-text-top py-5">
        <div class="ml-56 h-5">
          <span class="text-[#ff0000] font-bold">4 times</span> the global average.
        </div>
        <div class="flex gap-0 h-5">
          <TrendingUp color={"red"} size={48} class="ml-44"/>
        </div>
        That's almost
      </div>
    </div>
    <img class="rounded-3xl w-max" src="/uscarbonfootprint.jpg" alt="Global carbon emissions began to rise measurably in the mid-nineteenth century. Total U.S. emissions still remained above China's and India's through 2021. Credit: Our World in Data"/>
  
  </div>
  
  <div class="h-min w-full px-40 py-10 grid grid-cols-2 justify-center items-center font-titillium gap-20">

    <div>
      <img class="rounded-3xl" src="/worldbiocapacitydeficit.jpeg" alt="The ecological deficit has been increasing ever since 1970. (Data: Global Footprint Network)"/>
      <div class="py-2 text-gray-500 italic">The ecological deficit has been increasing ever since 1970. (Data: Global Footprint Network)</div>
    </div>
    <div>
      <div class="text-6xl font-extrabold text-justify align-text-top">THE <span class="text-transparent bg-clip-text bg-earth bg-cover drop-shadow-[0_2.4px_2.4px_rgba(0,0,0,0.8)]">WORLD</span> HAS A</div>
      <div class="flex gap-5">
        <div class="text-5xl font-extrabold text-justify align-text-top text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-black">GLOBAL</div>
        <div class="text-5xl font-extrabold text-justify align-text-top pt-5 text-transparent bg-clip-text bg-gradient-to-br from-black to-red-700">BIOCAPACITY</div>
        <div class="text-5xl font-extrabold text-justify align-text-top pt-10 text-transparent bg-clip-text bg-gradient-to-br from-red-950 to-red-600">DEFICIT.</div>
      </div>
      <div class="text-3xl text-start align-text-top py-5">
        This means that as a planet, we are consuming more than the Earth has the capacity to produce.
      </div>
    </div>
  
  </div>

  <div class="h-min w-full px-40 py-10 grid grid-cols-2 justify-center items-center font-titillium gap-20">

    <div>
      <div class="text-4xl font-bold text-justify align-text-top">THE <span class="text-transparent bg-clip-text bg-us-flag bg-cover drop-shadow-[0_2.4px_2.4px_rgba(0,0,0,0.8)]">UNITED STATES</span> CONSUMES <span class="text-6xl">MORE THAN 2 TIMES</span> THE AMOUNT IT HAS THE CAPACITY TO REPRODUCE.
      </div>
    </div>

    <div>
      <img class="rounded-3xl" src="/usbiocapacitydeficit.jpeg" alt="The USA’s total Ecological Footprint has decreased over the past decade, but this trend was reversed in 2017 and 2018 (Data: Global Footprint Network)"/>
      <div class="py-2 text-gray-500 italic">The USA’s total Ecological Footprint has decreased over the past decade, but this trend was reversed in 2017 and 2018 (Data: Global Footprint Network)</div>
    </div>
  
  </div>
</div>

<div class="bg-gradient-to-b from-gray-300 to-gray-400">

  <div class="h-min w-full px-40 py-10 grid grid-cols-2 justify-center items-center font-titillium gap-20">

    <img class="rounded-3xl" src="/co2vspopulation.png" alt="Data source: Global Carbon Budget (2023) and other sources"/>
    <div>
      <div class="text-5xl font-bold text-justify align-text-top">
        <span class="font-extrabold text-green-700">HIGH INCOME</span> COUNTRIES ARE RESPONSIBLE FOR THE MAJORITY OF THE
        <div class="flex gap-5">
          <Footprints size={48} color={"#15803d"}/><span class="font-extrabold text-green-700">ECOLOGICAL FOOTPRINT.</span>
        </div>
      </div>
      <div class="text-3xl text-start align-text-top py-5">
        <ul class="list-disc pl-10">
          <li>The average person in a high-income country has a <span class="font-bold">MORE THAN 30 TIMES LARGER ECOLOGICAL FOOTPRINT</span> than the average person in a low-income country.</li>
          <li>The upper 50% of countries are responsible for <span class="font-bold">MORE THAN 80% OF THE WORLD'S CARBON EMISSIONS.</span></li>
        </ul>
      </div>
    </div>
  
  </div>

</div>

<div class="bg-gradient-to-b from-gray-400 to-black pb-20">

  <div class="h-min w-full px-40 py-10 grid grid-cols-2 justify-center items-center font-titillium gap-20">

    <div>
      <div class="text-3xl text-start align-text-top py-5 text-white">
        This short video explores the concept of ecological footprint and how it relates to the Earth’s biocapacity and global consumption.
      </div>
    </div>

    <iframe class="rounded-3xl" width="560" height="315" src="https://www.youtube.com/embed/g_aguo7V0Q4?si=8KRsTzmSuA3LL1CZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
  </div>
</div>