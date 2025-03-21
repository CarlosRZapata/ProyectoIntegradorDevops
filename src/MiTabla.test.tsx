import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MiTabla from "./MiTabla";

test("renderiza la tabla correctamente", () => {
  render(<MiTabla />);
  const titleElement = screen.getByText(/Villahermosa Quality/i);
  expect(titleElement).toBeInTheDocument();
});