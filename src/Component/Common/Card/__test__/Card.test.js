import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ListingPage from "../Card";





describe("ListingPage Component", () => {
  it("renders without crashing", () => {
    render(<Card />);
  });

  test("should delete a university when delete button is clicked", async () => {
    // Mock data for universities
    const universities = [
      { name: "University 1", country: "Country 1" },
      { name: "University 2", country: "Country 2" },
    ];

   

    // Render the component
    const { getByText, queryByText } = render(<Card />);
    screen.logTestingPlaygroundURL();
  });

  it("testing correct title of university list", () => {
    render(<Card />);
    const title = screen.getByRole("heading", {
      name: /universities/i,
    });
    expect(title).toBeInTheDocument();
  });
});

it("testing testbox to be in document ", () => {
  render(<Card />);
  const title = screen.getByRole("textbox");
  expect(title).toBeInTheDocument();
});

it("testing dropdown  to be in document ", () => {
  render(<Card />);
  const title = screen.getByRole("combobox");
  expect(title).toBeInTheDocument();
});
// });
