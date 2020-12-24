import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Offers } from "../../components/Offers/index";
import { OFFER_TABLE_HEADERS } from "../../components/Offers/offers-constants";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: MemoryRouter });
};

describe("Offers page", () => {
  test("should render the preloader when the offers are being retrieved", () => {
    // Arrange
    const { container } = renderWithRouter(<Offers />);

    // Assert
    expect(container.firstChild).toHaveClass("preloader__wrapper");
  });

  test("should render the list of offers when offers are retrieved", async () => {
    // Arrange
    renderWithRouter(<Offers />);

    // Act
    const heading = await screen.findByText("All Offers");

    // Assert
    expect(heading).toBeInTheDocument();
  });

  test("should render the offers page header when offers are retrieved", async () => {
    // Arrange
    renderWithRouter(<Offers />);

    // Act
    const heading = await screen.findByText("All Offers");
    const newOfferButton = await screen.findByText("New offer");
    const importOfferButton = await screen.findByText("Import offers");

    // Assert
    expect(heading).toBeInTheDocument();
    expect(newOfferButton).toBeInTheDocument();
    expect(importOfferButton).toBeInTheDocument();
  });

  test("should show the offers table headers when offers are retrieved", async () => {
    // Arrange
    renderWithRouter(<Offers />);

    // Act
    const title = await screen.findByText(OFFER_TABLE_HEADERS[0]);
    const category = await screen.findByText(OFFER_TABLE_HEADERS[1]);

    // Assert
    expect(title).toBeInTheDocument();
    expect(category).toBeInTheDocument();
  });

  test("should render the copy offer modal when Copy button is clicked", async () => {
    // Arrange
    renderWithRouter(<Offers />);

    // Act
    const copyOfferButton = await screen.findAllByText("Copy");
    userEvent.click(copyOfferButton[0]);

    const copyOfferModalConfirmation = await screen.findByText("Do you want to copy this offer?");

    // Assert
    expect(copyOfferModalConfirmation).toBeInTheDocument();
  });

  test("should render the delete offer modal when Copy button is clicked", async () => {
    // Arrange
    renderWithRouter(<Offers />);

    // Act
    const deleteOfferButton = await screen.findAllByText("Delete");
    userEvent.click(deleteOfferButton[0]);

    const deleteOfferModalConfirmation = await screen.findByText("Do you want to delete this offer?");

    // Assert
    expect(deleteOfferModalConfirmation).toBeInTheDocument();
  });
});
