<script>
    import { Home } from 'lucide-svelte';
</script>

<nav class="fixed w-screen bg-black/50 border-gray-200 font-titillium">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <Home color="white"/>
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black/50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
        <li>
          <a href="/" class="block py-2 px-3 rounded text-white hover:text-gray-300 md:p-0" aria-current="page">Home</a>
        </li>
        <li>
          <a href="/about" class="block py-2 px-3 rounded text-white hover:text-gray-300 md:p-0">About</a>
        </li>
        <li>
          <a href="/howyoucanhelp" class="block py-2 px-3 rounded text-white hover:text-gray-300 md:p-0">How You Can Help</a>
        </li>
        <li>
          <a href="/resources" class="block py-2 px-3 rounded text-white hover:text-gray-300 md:p-0">Resources</a>
        </li>
        <li>
          <a href="/sources" class="block py-2 px-3 rounded text-white hover:text-gray-300 md:p-0">Sources</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
