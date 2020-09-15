import {
  getUrl,
  getEducationsUrl,
  getImgElement,
  getAboutMeElement,
  getUlElement,
} from "../util";

describe("test function in utils", () => {
  test("add educations at last of url", () => {
    const url = "localhost:8080";
    expect(getEducationsUrl(url)).toBe("localhost:8080/educations");
  });
  test("change port 1234 to 8080", () => {
    const localurl = "localhost:1234";
    const result = "localhost:8080";
    expect(getUrl(localurl)).toEqual(result);
  });
  test("get img element", () => {
    const data = {};
    data.avatar = "https://inews.gtimg.com/newsapp_match/0/3581582328/0";
    expect(getImgElement(data)).toBeInstanceOf(HTMLImageElement);
    expect(getImgElement(data).getAttribute("src")).toEqual(
      "https://inews.gtimg.com/newsapp_match/0/3581582328/0"
    );
  });
  test("get p element", () => {
    const data = {};
    data.description = "哈哈哈";
    expect(getAboutMeElement(data)).toBeInstanceOf(HTMLParagraphElement);
    expect(getAboutMeElement(data).innerHTML).toEqual("哈哈哈");
  });
  test("get ul element", () => {
    const data = [
      {
        userId: 1,
        year: "1990",
        title: "I was born in Katowice",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.",
      },
    ];
    expect(getUlElement(data)).toBeInstanceOf(HTMLUListElement);
    expect(getUlElement(data).getAttribute("class")).toEqual("descriptions");
  });
});
