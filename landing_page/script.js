english1 = document.querySelector(".english1");
english2 = document.querySelector(".english2");
spanish1 = document.querySelector(".spanish1");
spanish2 = document.querySelector(".spanish2");

spanish1.style.display = "none";
spanish2.style.display = "none";

function changeLingo() {
  if (spanish1.style.display === "none" && spanish2.style.display === "none") {
    english1.style.display = "none";
    english2.style.display = "none";

    spanish1.style.display = "block";
    spanish2.style.display = "block";
  } else if (
    english1.style.display === "none" &&
    english2.style.display === "none"
  ) {
    english1.style.display = "block";
    english2.style.display = "block";

    spanish1.style.display = "none";
    spanish2.style.display = "none";
  }
}
