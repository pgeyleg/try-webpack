import markdownPreviewer from "../js/markdownPreviewer"

describe("markdownPreviewer", function() {
  it("should exist", function() {
    expect(markdownPreviewer).toBeDefined();
  });

  it("should allow deep references", () => {
    const o = {
      foo: {
        bar: "blah"
      }
    };

    expect((o?.foo?.bar)).toBe("blah");
  });
});
