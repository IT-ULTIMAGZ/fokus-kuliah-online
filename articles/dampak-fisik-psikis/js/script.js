   var myFullpage = new fullpage('#fullpage', {
     verticalCentered: false,
     css3: false,
     anchors: ["title", "pandemi-keluh-kesah-mahasiswa-1", "pandemi-keluh-kesah-mahasiswa-2", "menu", "dampak-psikis-1", "dampak-psikis-2", "dampak-psikis-3", "dampak-fisik-1", "dampak-fisik-2", "lulus-daring-1", "lulus-daring-2", "lulus-daring-3", "sisi-positif"],
     
     afterLoad: function (origin, destination, direction) {
      $('.section.active [data-aos]').addClass("aos-animate");
     },

     onLeave: function (origin, destination, direction) {
      $('.section.active [data-aos]').removeClass("aos-animate");

       console.log(origin.index + " ... " + destination.index);
       if (destination.index == 0) {
         $(".box-container").addClass("geser-box-2");

         $(".box-window-title-content").removeClass("biru");
         $(".gambar-biru").removeClass("biru-geser");
         $(".box-window-title-text-content").removeClass("hijau");
         $(".box-window-title-content").removeClass("kuning");
         $(".gambar-kuning").removeClass("kuning-geser");
         $(".gambar-hijau").removeClass("hijau-geser");
         $(".box-container").removeClass("geser-box-hijau");
         $(".box-window-title-content").removeClass("pink");
         $(".box-window-title-text-content").removeClass("putih");
         $(".box-container").removeClass("geser-box-pink");
         $(".gambar-pink").removeClass("pink-geser")


       }
       if (destination.index == 1) {
         $(".box-container").removeClass("geser-box-2");
         $(".box-container").addClass("geser-box");

         $(".box-window-title-content").removeClass("biru");
         $(".box-window-title-content").removeClass("biru");
         $(".gambar-biru").removeClass("biru-geser");
         $(".box-window-title-text-content").removeClass("hijau");
         $(".box-window-title-content").removeClass("kuning");
         $(".gambar-kuning").removeClass("kuning-geser");
         $(".gambar-hijau").removeClass("hijau-geser");
         $(".box-container").removeClass("geser-box-hijau");
         $(".box-window-title-content").removeClass("pink");
         $(".box-window-title-text-content").removeClass("putih");
         $(".box-container").removeClass("geser-box-pink");
         $(".gambar-pink").removeClass("pink-geser")

         $(".box-window-title-text-content").text("New Notification!");

       }

       if (destination.index == 2 || destination.index == 3) {
         $(".box-container").removeClass("geser-box-2");
         $(".box-container").addClass("geser-box");

         $(".box-window-title-content").removeClass("biru");
         $(".gambar-biru").removeClass("biru-geser");
         $(".box-window-title-text-content").removeClass("hijau");
         $(".box-window-title-content").removeClass("kuning");
         $(".gambar-kuning").removeClass("kuning-geser");
         $(".gambar-hijau").removeClass("hijau-geser");
         $(".box-container").removeClass("geser-box-hijau");
         $(".box-window-title-content").removeClass("pink");
         $(".box-window-title-text-content").removeClass("putih");
         $(".box-container").removeClass("geser-box-pink");
         $(".gambar-pink").removeClass("pink-geser")

         $(".box-window-title-text-content").text("New Notification!");

       }
       if (destination.index == 4 || destination.index == 5 || destination.index == 6) {
         $(".box-container").removeClass("geser-box-2");

         $(".box-container").addClass("geser-box");
         $(".box-window-title-content").addClass("biru");
         $(".gambar-biru").addClass("biru-geser");
         $(".box-window-title-text-content").text("Pandemi & Keluh Kesah Mahasiswa");
         $(".box-window-title-content").removeClass("kuning");
         $(".box-window-title-text-content").removeClass("hijau");
         $(".gambar-hijau").removeClass("hijau-geser");
         $(".box-container").removeClass("geser-box-hijau");
         $(".gambar-kuning").removeClass("kuning-geser");
         $(".gambar-pink").removeClass("pink-geser");
         $(".box-window-title-content").removeClass("pink");
         $(".box-window-title-text-content").removeClass("putih");
         $(".box-container").removeClass("geser-box-pink");

       }
       if (destination.index == 7 || destination.index == 8) {

         $(".box-container").addClass("geser-box");
         $(".box-container").removeClass("geser-box-2");

         $(".gambar-kuning").addClass("kuning-geser");
         $(".box-window-title-content").addClass("kuning");
         $(".box-window-title-text-content").addClass("hijau");

         $(".gambar-biru").removeClass("biru-geser");
         $(".box-window-title-content").removeClass("biru");
         $(".gambar-kuning").removeClass("kuning-geser-naik");
         $(".box-container").removeClass("geser-box-hijau");
         $(".gambar-hijau").removeClass("hijau-geser");
         $(".box-window-title-text-content").removeClass("kuning-text");
         $(".box-window-title-content").removeClass("pink");
         $(".box-window-title-text-content").removeClass("putih");
         $(".box-container").removeClass("geser-box-pink");
         $(".gambar-pink").removeClass("pink-geser")

         $(".box-window-title-text-content").text("Pandemi & Keluh Kesah Mahasiswa");

       }
       if (destination.index == 9 || destination.index == 10 || destination.index == 11) {
         $(".box-container").removeClass("geser-box-2");

         $(".gambar-biru").removeClass("biru-geser");
         $(".box-window-title-content").removeClass("kuning");
         $(".box-window-title-content").removeClass("hijau");
         $(".box-window-title-text-content").removeClass("putih");

         $(".gambar-kuning").removeClass("kuning-geser");
         $(".gambar-kuning").removeClass("kuning-geser-naik");
         $(".box-window-title-content").addClass("hijau-bg");
         $(".box-window-title-text-content").addClass("kuning-text");

         $(".box-window-title-content").removeClass("pink");
         $(".gambar-hijau").addClass("hijau-geser");
         $(".box-container").addClass("geser-box-hijau");
         $(".box-container").removeClass("geser-box-pink");
         $(".gambar-pink").removeClass("pink-geser");

         $(".box-window-title-text-content").text("Pandemi & Keluh Kesah Mahasiswa");
       }

       if (destination.index == 12) {
         $(".box-container").removeClass("geser-box-2");

         $(".gambar-biru").removeClass("biru-geser");
         $(".box-window-title-content").removeClass("kuning");
         $(".box-window-title-content").removeClass("hijau");
         $(".box-window-title-text-content").removeClass("hijau");
         $(".box-window-title-text-content").removeClass("kuning-text");

         $(".gambar-kuning").removeClass("kuning-geser");
         $(".gambar-kuning").removeClass("kuning-geser-naik");


         $(".box-window-title-content").addClass("pink");
         $(".box-window-title-text-content").addClass("putih");

         $(".gambar-pink").addClass("pink-geser");
         $(".gambar-hijau").removeClass("hijau-geser");
         $(".box-container").removeClass("geser-box-hijau");
         $(".box-container").addClass("geser-box-pink");

         $(".box-window-title-text-content").text("Pandemi & Keluh Kesah Mahasiswa");
       }
     }

   }, );

   AOS.init();