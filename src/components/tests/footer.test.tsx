import React from "react";
import Footer from "../Footer";
import renderer from "react-test-renderer";

test("Footer wrapped in <footer> tag", () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer?.type).toBe("footer");
});
