import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ListingPage from "../ListDetails";




describe("ListingPage Component", () => {
  it("renders without crashing", () => {
    render(<ListingPage />);
  });



    // Render the component
    const { getByText, queryByText } = render(<ListingDetails />);

    // Wait for the component to load
    // await waitFor(() => {
    //   expect(getByText('University 1')).toBeInTheDocument();
    //   expect(getByText('University 2')).toBeInTheDocument();
    // });

    // Mock the localStorage.setItem function
    const localStorageMock = jest.spyOn(
      window.localStorage.__proto__,
      "setItem"
    );

    // Simulate click on the delete button of University 1
    // fireEvent.click(getByText('Delete'));
    screen.logTestingPlaygroundURL();

    // Check if University 1 is removed from the list
    // expect(queryByText('University 1')).toBeNull();

    // Check if the updated list is saved to localStorage
    // expect(localStorageMock).toHaveBeenCalledWith(
    //   'universities',
    //   JSON.stringify([{ name: 'University 2', country: 'Country 2' }])
    // );
  });

 

it("testing testbox to be in document ", () => {
  render(<ListingPage />);
  const title = screen.getByRole("page-title-details");
  expect(title).toBeInTheDocument();
});

