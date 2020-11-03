import "./style/index.scss";
import {
  getUrl,
  getEducationsUrl,
  getImgElement,
  getAboutMeElement,
  getUlElement,
} from "./util";

$(window).load(function () {
  const localUrl = "window.location.href";
  const url = getUrl(localUrl);
  const educationsUrl = getEducationsUrl(url);
  $.get(url, function (data) {
    console.log(data);
    const nameAndAge = `${data.name} ${data.age}`;
    const img = getImgElement(data);
    const aboutMe = getAboutMeElement(data);
    $(".name_and_age").text(nameAndAge);
    $(".title").before(img);
    $(".about_me b").after(aboutMe);
  });
  $.get(educationsUrl, function (data) {
    console.log(data);
    const ul = getUlElement(data);
    $(".education").append(ul);
  });
});
