import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm />);
  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText("Player names, separated by comma");
  const createGameButton = screen.getByRole("button", { name: "Create game" });
  expect(nameOfGameInput).toBeInTheDocument();
  expect(playerNamesInput).toBeInTheDocument();
  expect(createGameButton).toBeInTheDocument();
});


test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm />);
  const formElement = screen.getByRole("form");
  const formHeaderElement = screen.getByText("Create a new game");
  expect(formElement).toHaveAttribute(
    "aria-labelledby",
    formHeaderElement.getAttribute("id")
  );
});

test("submits the correct form data when every field is filled out", async () => {
  const mockCreateGame = jest.fn();
  render(<GameForm onCreateGame={mockCreateGame} />);
  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText("Player names, separated by comma");
  const createGameButton = screen.getByRole("button", { name: "Create game" });
  const submittedDataObject = {
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  };
  await userEvent.type(nameOfGameInput, submittedDataObject.nameOfGame);
  await userEvent.type(playerNamesInput, submittedDataObject.playerNames.join(","));
  userEvent.click(createGameButton);
  await waitFor(() => {
    expect(mockCreateGame).toHaveBeenCalledWith({
      nameOfGame: submittedDataObject.nameOfGame,
      playerNames: submittedDataObject.playerNames,
    });
  });
});

test("submits the correct form data when every field is filled out", async () => {
  const mockOnCreateGame = jest.fn();
  render(<GameForm onCreateGame={mockOnCreateGame} />);

  const nameOfGameInput = screen.getByLabelText("Name of game");
  const playerNamesInput = screen.getByLabelText("Player names, separated by comma");
  const createGameButton = screen.getByRole("button", { name: "Create game" });

  const gameData = {
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  };

  await userEvent.type(nameOfGameInput, gameData.nameOfGame);
  await userEvent.type(playerNamesInput, gameData.playerNames.join(", "));
  await userEvent.click(createGameButton);

  expect(mockOnCreateGame).toHaveBeenCalledWith(gameData);
});

test("does not submit form if one input field is left empty", async () => {
  const mockOnCreateGame = jest.fn();
  render(<GameForm onCreateGame={mockOnCreateGame} />);
  const playerNamesInput = screen.getByLabelText("Player names, separated by comma");
  const createGameButton = screen.getByRole("button", { name: "Create game" });

  await userEvent.type(playerNamesInput, "John Doe,");
  await userEvent.click(createGameButton);

  expect(mockOnCreateGame).not.toHaveBeenCalled();
});
