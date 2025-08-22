import { totalPages, pageRange, translate } from "@app/_helpers/";
import { describe, expect } from "@jest/globals";
import { homePageTranslations } from "../../_mocks/translations";

describe("totalPages()", () => {
  it("should return the total paginated pages", () => {
    expect(totalPages(30, 5)).toBe(6);
    expect(totalPages(28, 8)).toBe(4);
    expect(totalPages(28, 28)).toBe(1);
    expect(totalPages(28, 26)).toBe(2);
  });
});

describe("pageRange()", () => {
  it("should return the range of rows for the given page", () => {
    expect(pageRange(1, 10)).toBe("1-10");
  });
  it("should return the range of rows for the given page", () => {
    expect(pageRange(2, 10)).toBe("11-20");
  });
  it("should return the range of rows for the given page", () => {
    expect(pageRange(3, 10)).toBe("21-30");
  });
  it("should return the range of rows for the given page", () => {
    expect(pageRange(1, 8)).toBe("1-8");
  });
  it("should return the range of rows for the given page", () => {
    expect(pageRange(2, 8)).toBe("9-16");
  });
});
