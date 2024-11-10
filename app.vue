<template>
  <div>
    <header class="fixed z-20 w-full bg-black px-5 py-3 shadow">
      <nav class="md:container mx-auto text-white font-bold">
        <div class="flex items-center">
          <a href="#" class="flex items-center">
            <img
              src="/adrian-shakespeare-company-logo.png"
              class="h-12"
              alt="Adrian Shakespeare Company logo"
            />
            <span class="ms-3 font-serif">Adrian Shakespeare Co.</span>
          </a>


          <div class="hidden md:flex gap-5 ms-auto">
            <a href="#2025">
              2025
            </a>

            <a href="#2024">
              2024
            </a>

            <a href="#support">
              Support
            </a>

            <a href="#auditions">
              Auditions
            </a>

            <a href="#story">
              Our Story
            </a>
          </div>

        </div>

      </nav>
    </header>

    <div class="bg-black">
      <div class="relative">
        <div class="absolute z-0 bg-cover bg-center h-screen w-full bg-[url('/hero-trestle.jpg')] opacity-50"></div>

        <div class="relative z-10 md:container mx-auto text-white">
          <div class="flex-col justify-center content-center h-screen px-5" style="text-shadow: #000 3px 0 10px;">
            <h1 class="text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase font-serif font-bold tracking-wide">Adrian<br>Shakespeare<br>Company</h1>
            <h2 class="mt-3 text-xl sm:text-2xl md:text-4xl font-bold">Live Theatre For Everyone</h2>
            <a href="#2025" class="inline-block mt-5 rounded-lg px-5 py-3 border-2 border-amber-500 font-bold">
              Up Next
            </a>
          </div>
        </div>
      </div>

      <div id="2025" class="py-10 bg-stone-50 dark:bg-stone-900">
        <div class="md:container mx-auto px-5 text-stone-700 dark:text-stone-200">
          <h1 class="text-xl md:text-2xl text-center font-bold uppercase">2025</h1>
          <h1 class="text-3xl md:text-5xl text-center font-serif font-bold text-stone-700 dark:text-stone-200 uppercase">(To Be Announced)</h1>

          <p class="mt-5">
            Maecenas vitae pellentesque sapien. Donec cursus, orci at molestie eleifend, dui ipsum blandit turpis, vitae
            dictum lectus tortor eu urna. Integer tempor erat ipsum, sit amet luctus dui imperdiet quis. Proin lobortis
            eu lorem vitae vulputate. Donec non viverra felis, sit amet fermentum mauris. Nulla dictum magna magna.
            Integer nec orci sit amet leo molestie commodo tristique quis nulla. Donec ullamcorper, risus quis facilisis
            luctus, tortor turpis bibendum ligula, sed sagittis nibh nisl eu elit. Integer ultrices imperdiet eros,
            laoreet consectetur ante pellentesque nec. Vivamus sit amet felis quis felis dapibus pellentesque. In
            fringilla condimentum ligula non varius. Cras leo erat, imperdiet sit amet sem luctus, vestibulum vehicula
            est. In magna velit, consectetur non aliquet sed, vulputate a enim. Vivamus malesuada venenatis tristique.
            Mauris auctor enim vitae tempus cursus.
          </p>
        </div>
      </div>

      <div id="2024" class="bg-stone-200 dark:bg-stone-800">
        <div class="md:container mx-auto px-5 py-10 text-stone-700 dark:text-stone-200">
          <h1 class="text-xl md:text-2xl text-center font-bold uppercase">2024</h1>
          <h1 class="text-3xl md:text-5xl text-center font-serif font-bold text-stone-700 dark:text-stone-200 uppercase">A Midsummer Night's Dream</h1>
          <div class="sm:flex flex-wrap gap-x-5 gap-y-1 justify-center mt-3 sm:mt-1">
            <div class="whitespace-nowrap">
              <i class="w-5 sm:w-auto text-center fa fa-calendar" /> Aug 2, 3 & 4 &middot; 2024
            </div>
            <div class="whitespace-nowrap">
              <i class="w-5 sm:w-auto text-center fa fa-location-dot" /> Trestle Park, Adrian, Michigan
            </div>
            <div class="whitespace-nowrap">
              <i class="w-5 sm:w-auto text-center fa fa-ticket" /> Free
            </div>
          </div>

          <ul class="mt-5">
            <li><strong>Director</strong> Stephen Kiersey</li>
            <li><strong>Producer</strong> John MacNaughton</li>
            <li><strong>Stage Manager</strong> Elizabeth Olgren</li>
            <li><strong>Set Designer</strong> Douglas Miller</li>
            <li><strong>Costumer</strong> Rosemary Olsaver</li>
          </ul>

          <p class="mt-5">
            A Midsummer Night's Dream is a comedy play written by William Shakespeare in about 1595 or 1596. The play is set in Athens, and consists of several subplots that revolve around the marriage of Theseus and Hippolyta. One subplot involves a conflict among four Athenian lovers. Another follows a group of six amateur actors rehearsing the play which they are to perform before the wedding. Both groups find themselves in a forest inhabited by fairies who manipulate the humans and are engaged in their own domestic intrigue. A Midsummer Night's Dream is one of Shakespeare's most popular and widely performed plays.
          </p>
        </div>
      </div>

      <div id="support" class="bg-stone-50 dark:bg-stone-900">
        <div class="md:container mx-auto px-5 py-10 text-stone-800 dark:text-stone-200">
          <h1 class="text-3xl md:text-5xl text-center font-serif font-bold text-stone-700 dark:text-stone-200 uppercase">Support</h1>

          <div class="text-center py-10">
            <a
              href="https://lenaweecommunityfoundation.com"
              target="_blank"
              class="bg-gradient-to-tr from-violet-700 to-fuchsia-600 text-white rounded py-3 px-10 text-xl font-bold tracking-wide"
            >
              Donate &rsaquo;
            </a>
          </div>

          <p>
            Free theatre ain't free!
          </p>

          <p>
            Maecenas vitae pellentesque sapien. Donec cursus, orci at molestie eleifend, dui ipsum blandit turpis, vitae
            dictum lectus tortor eu urna. Integer tempor erat ipsum, sit amet luctus dui imperdiet quis. Proin lobortis
            eu lorem vitae vulputate. Donec non viverra felis, sit amet fermentum mauris.
          </p>
        </div>
      </div>

      <div id="auditions" class="bg-stone-200 dark:bg-stone-800">
        <div class="md:container mx-auto px-5 py-10 text-stone-800 dark:text-stone-200">
          <h1 class="text-3xl md:text-5xl text-center font-serif font-bold text-stone-700 dark:text-stone-200 uppercase">Auditions</h1>

          <p class="mt-5">
            Auditions for the 2025 production are yet to be announced.
          </p>
        </div>
      </div>

      <div id="story" class="bg-stone-50 dark:bg-stone-900">
        <div class="md:container mx-auto px-5 py-10 text-stone-800 dark:text-stone-200">
          <h1 class="text-3xl md:text-5xl text-center font-serif font-bold text-stone-700 dark:text-stone-200 uppercase">Our Story</h1>

          <p class="mt-5">
            Maecenas vitae pellentesque sapien. Donec cursus, orci at molestie eleifend, dui ipsum blandit turpis, vitae
            dictum lectus tortor eu urna. Integer tempor erat ipsum, sit amet luctus dui imperdiet quis. Proin lobortis
            eu lorem vitae vulputate. Donec non viverra felis, sit amet fermentum mauris.
          </p>

          <div class="flex gap-5 justify-center mt-5 text-sm sm:text-base font-serif font-bold">
            <div class="text-center">
              <div class="rounded-full bg-cover bg-center mx-auto size-28 md:size-40 border-4 border-stone-200 dark:border-stone-800 bg-[url('/adrian-shakespeare-company-stephen.png')]"></div>
              <div class="py-1 px-3 bg-stone-200 dark:bg-stone-800 dark:text-stone-200 rounded -mt-3">Stephen Kiersey</div>
            </div>

            <div class="text-center">
              <div class="rounded-full bg-cover bg-center mx-auto size-28 md:size-40 border-4 border-stone-200 dark:border-stone-800  bg-[url('/adrian-shakespeare-company-john.png')]"></div>
              <div class="py-1 px-3 bg-stone-200 dark:bg-stone-800 dark:text-stone-200 rounded -mt-3">John MacNaughton</div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <footer class="bg-black">
      <div class="md:container mx-auto px-5 py-10 text-white">
        <div class="sm:flex justify-between gap-5">
          <div>
            <ul>
              <li class="font-bold">Adrian Shakespeare Company</li>
              <li>Adrian, Michigan</li>
              <li><a href="mailto:adrianshakespeare@gmail.com" class="hover:underline"><i class="fa fa-envelope me-1" />adrianshakespeare@gmail.com</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <a href="https://facebook.com" target="_blank">
                  <i class="fa-brands fa-square-facebook" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank">
                  <i class="fa-brands fa-square-instagram" /> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://lenaweecommunityfoundation.com"
                  target="_blank"
                  class="inline-block mt-3 bg-gradient-to-tr from-violet-700 to-fuchsia-600 text-white rounded py-1 px-4 font-bold tracking-wide"
                >
                  Donate &rsaquo;
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-5 text-sm text-center opacity-50">
          &copy; Adrian Shakespeare Company
        </div>
      </div>

    </footer>

  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
<script setup lang="ts">
</script>
