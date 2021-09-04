const HandleShow = (posisi, sisi, msg) => {
  if (posisi === "atas") {
    $("#ba").addClass("show");
    $("#ta").addClass("show");
    $("#msg-top").html(msg);
  } else if (posisi === "bawah") {
    $("#bb").addClass("show");
    $("#tb").addClass("show");
    $("#msg-bottom").html(msg);
  }
  if (sisi === "kiri") {
    $("#ta").addClass("tl");
    $("#tb").addClass("tl");
  } else if (sisi === "kanan") {
    $("#ta").addClass("tr");
    $("#tb").addClass("tr");
  }
};

const HandleHide = (posisi, sisi) => {
  if (posisi === "atas") {
    $("#ba").removeClass("show");
    $("#ta").removeClass("show");
  } else if (posisi === "bawah") {
    $("#bb").removeClass("show");
    $("#tb").removeClass("show");
  }
  if (sisi === "kiri") {
    $("#ta").removeClass("tl");
    $("#tb").removeClass("tl");
  } else if (sisi === "kanan") {
    $("#ta").removeClass("tr");
    $("#tb").removeClass("tr");
  }
};

// $("document").ready(function () {
//   $(".box").mouseover(HandleShow).mouseleave(HandleHide);
// });

$("document").ready(() => {
  const Top = "atas";
  const Bot = "bawah";
  const Left = "kiri";
  const Mid = "tengah";
  const Right = "kanan";

  $("#bb").addClass("bb-change-color");

  $("#Q1").mouseover(() => {
    HandleShow(
      Top,
      Left,
      "Pada masa pandemi ini, banyak yang bilang bahwa pembelajaran daring akan menjadi norma di masa depan. Apakah pernyataan tersebut benar?"
    );
  });
  $("#Q1").mouseleave(() => {
    HandleHide(Top, Left);
  });

  $("#Q2").mouseover(() => {
    HandleShow(
      Top,
      Mid,
      "Seberapa efektif metode pembelajaran daring di Indonesia selama pandemi ini?"
    );
  });
  $("#Q2").mouseleave(() => {
    HandleHide(Top, Mid);
  });

  $("#Q3").mouseover(() => {
    HandleShow(
      Top,
      Right,
      "Kalau dari segi mental mahasiswa, dari pengajarannya sendiri, seefektif apa, sih?"
    );
  });
  $("#Q3").mouseleave(() => {
    HandleHide(Top, Right);
  });

  $("#Q4").mouseover(() => {
    HandleShow(
      Bot,
      Left,
      "Kalau di Indonesia sendiri, mungkin enggak, sih, itu pembelajaran daring tetap dilanjutkan?"
    );
  });
  $("#Q4").mouseleave(() => {
    HandleHide(Bot, Left);
  });

  $("#Q5").mouseover(() => {
    HandleShow(
      Bot,
      Mid,
      "Pembelajaran daring yang ideal itu, seharusnya yang seperti apa?"
    );
  });
  $("#Q5").mouseleave(() => {
    HandleHide(Bot, Mid);
  });

  $("#Q6").mouseover(() => {
    HandleShow(
      Bot,
      Right,
      "Apa, sih, yang masih kurang diimplementasikan dalam pembelajaran daring Indonesia? Bagaimana caranya agar pembelajaran daring kita efektif dan nyaman?"
    );
  });
  $("#Q6").mouseleave(() => {
    HandleHide(Bot, Right);
  });
});
