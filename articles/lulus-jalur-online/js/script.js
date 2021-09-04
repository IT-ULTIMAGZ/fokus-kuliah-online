$(document).ready(function () {



    $("#side-hijau-text").hide();
    $("#side-pink-text").hide();
    $("#side-kuning-text").hide();

    $("#toggle").on('click', function () {
        var x = $("#sidebar-1").css("left");

        $("#side-hijau-text").toggle();
        if (x == '-300px') {
            $("#sidebar-1").animate({
                left: '-200px',
                width: '40vw',
            });
            $(this).html('&lang;');

            //$(".side-hijau").append("<p>Ya. Perusahaan melakukan seleksi dan penerimaan karyawan baru berdasarkan kualifikasi dan kompetensi yang dibutuhkan");
        } else {
            $("#sidebar-1").animate({
                left: '-300px',
                width: '100px',
            });
            $(this).html('&rang;');
        }

    });

    $("#toggle-pink").on('click', function () {
        var x = $("#sidebar-2").css("left");
        $("#side-pink-text").toggle();
        if (x == '-300px') {
            $("#sidebar-2").animate({
                left: '-200px',
                width: '40vw',
            });
            $(this).html('&lang;');

            //$(".side-hijau").append("<p>Ya. Perusahaan melakukan seleksi dan penerimaan karyawan baru berdasarkan kualifikasi dan kompetensi yang dibutuhkan");
        } else {
            $("#sidebar-2").animate({
                left: '-300px',
                width: '100px',
            });
            $(this).html('&rang;');
        }

    });

    $("#toggle-kuning").on('click', function () {
        var x = $("#sidebar-3").css("left");
        $("#side-kuning-text").toggle();
        if (x == '-300px') {
            $("#sidebar-3").animate({
                left: '-200px',
                width: '40vw',
            });
            $(this).html('&lang;');

            //$(".side-hijau").append("<p>Ya. Perusahaan melakukan seleksi dan penerimaan karyawan baru berdasarkan kualifikasi dan kompetensi yang dibutuhkan");
        } else {
            $("#sidebar-3").animate({
                left: '-300px',
                width: '100px',
            });
            $(this).html('&rang;');
        }

    });
});

    AOS.init();
    var myFullpage = new fullpage('#fullpage', {
        anchors: ['hal0', 'hal1', 'hal2', 'hal3', 'hal4', 'hal5', 'hal6',
            'hal7', 'hal8', 'hal9', 'hal10', 'hal11', 'hal12', 'hal13'
        ],
        verticalCentered: false,
        css3: false,
        onLeave: function (origin, destination, direction) {
            $('.section.active [data-aos]').removeClass("aos-animate");
        },

        afterLoad: function (origin, destination, direction) {
            $('.section.active [data-aos]').addClass("aos-animate");
       
            if (destination.index == 0) {
                $(".monitor-box").removeClass("monitor-box-muncul");
                $(".monitor-box").addClass("monitor-box-hilang");
                $(".arrow-img").removeClass("arrow-show");
               
            }

            if (destination.index == 2) {
                $(".arrow-img").attr('id', 'btn-shake-it-off');
                // $("#btn-shake-it-off").click(function (e) {
                //     var element = document.getElementById("goyang-dangdut-1");
                //     element.classList.add("shake-it-off-1");
                //     //$("#goyang-dangdut-1").classList.add("shake-it-off-1");
                //     //$(".b2").addClass("shake-it-off-2");
                // });
                $("#btn-shake-it-off").click(function (ev) {
                    $(".b1").addClass('shake-it-off-1');
                    $(".b1").one('animationend', () => {
                        $(".b1").removeClass('shake-it-off-1')
                    });
                    $(".b2").addClass('shake-it-off-2');
                    $(".b2").one('animationend', () => {
                        $(".b2").removeClass('shake-it-off-2')
                    });
                    ev.preventDefault();
                });

            }

            if (destination.index < 2 || destination.index > 2) {
                $(".arrow-img").removeAttr('id', 'btn-shake-it-off');
                $(".b1").removeClass('shake-it-off-1');
                $(".b2").removeClass('shake-it-off-2');
            }

            if (destination.index == 4) {
           
            }

            if (destination.index >= 1 && destination.index < 5 || destination.index == 6) {
                $(".monitor-box").addClass("monitor-box-muncul");
                $(".monitor-box").removeClass("monitor-box-geser-kanan");
                $(".arrow-img").addClass("arrow-show");

            }

            if (destination.index == 5) {
                //$(".monitor-box-wawancara").addClass("monitor-box-muncul");
                $(".monitor-box").removeClass("monitor-box-muncul");
                $(".monitor-box").addClass("monitor-box-hilang");
                $(".arrow-img").removeClass("arrow-show");
            }

            if (destination.index == 6) {
                $(".monitor-box").addClass("monitor-box-muncul");
            }

            if (destination.index == 7) {
                $(".monitor-box").removeClass("monitor-box-muncul");
                $(".monitor-box").addClass("monitor-box-hilang");
                $(".arrow-img").removeClass("arrow-show");
     
                $(".arrow-img").removeClass("arrow-show-kiri");
            }

            if (destination.index == 8) {
                $(".monitor-box").removeClass("monitor-box-muncul");
                $(".monitor-box").addClass("monitor-box-hilang");
                $(".arrow-img").removeClass("arrow-show");
 
                $(".arrow-img").addClass("arrow-show-kiri");
            }
            if (destination.index ==9) {
                $(".monitor-box").removeClass("monitor-box-muncul");
                $(".monitor-box").addClass("monitor-box-hilang");
                $(".arrow-img").removeClass("arrow-show");
                $(".arrow-img").removeClass("arrow-show-kiri");
            }
        },
    });
