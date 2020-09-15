import "./style/index.scss";

$(window).load(function () {
  const localUrl = window.location.href;
  const url = localUrl.replace("1234", "3000");
  const educationsUrl = `${url}/educations`;
  $.get(url, function (data) {
    console.log(data);
    const nameAndAge = `${data.name} ${data.age}`;
    const img = document.createElement("img");
    const aboutMe = document.createElement("p");
    aboutMe.setAttribute("id", "aboutMe");
    img.setAttribute("class", "img");
    img.setAttribute("src", data.avatar);
    $(".name_and_age").text(nameAndAge);
    $(".title").before(img);
    $(".about_me b").after(aboutMe);
    $("#aboutMe").text(data.description);
  });
  $.get(educationsUrl, function (data) {
    console.log(data);
    const ul = document.createElement("ul");
    ul.setAttribute("class", "descriptions");
    data.forEach((education) => {
      const li = document.createElement("li");
      const year = document.createElement("span");
      year.innerHTML = education.year;
      const p = document.createElement("p");
      const b = document.createElement("b");
      const span = document.createElement("span");
      b.innerHTML = education.title;
      span.innerHTML = education.description;
      p.append(b);
      p.append(span);
      li.append(year);
      li.append(p);
      ul.append(li);
    });
    $(".education").append(ul);
  });
});
