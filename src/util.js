export function getUrl(localUrl) {
  return localUrl.replace("1234", "8080");
}

export function getEducationsUrl(url) {
  return `${url}/educations`;
}

export function getImgElement(data) {
  const img = document.createElement("img");
  img.setAttribute("class", "img");
  img.setAttribute("src", data.avatar);
  return img;
}

export function getAboutMeElement(data) {
  const aboutMe = document.createElement("p");
  aboutMe.innerHTML = data.description;
  return aboutMe;
}

export function getUlElement(data) {
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
  return ul;
}
