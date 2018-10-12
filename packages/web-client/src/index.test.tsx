it("renders without crashing", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);
  root.id = "root";
  require(".");
  document.body.removeChild(root);
});
