import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
    // Arrange
    const name = "John Doe";
    const score = 0;
    const onDecreasePlayerScore = jest.fn();
    const onIncreasePlayerScore = jest.fn();

    // Act
    render(
        <Player
            name={name}
            score={score}
            onDecreasePlayerScore={onDecreasePlayerScore}
            onIncreasePlayerScore={onIncreasePlayerScore}
        />
    );

    // Assert
    const playerName = screen.getByText(name);
    const decreaseButton = screen.getByRole("button", { name: /decrease score/i });
    const increaseButton = screen.getByRole("button", { name: /increase score/i });

    expect(playerName).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
});


test("calls callbacks when increasing or decreasing score", async () => {
    // Arrange
    const name = "John Doe";
    const score = 0;
    const onDecreasePlayerScore = jest.fn();
    const onIncreasePlayerScore = jest.fn();

    render(
        <Player
            name={name}
            score={score}
            onDecreasePlayerScore={onDecreasePlayerScore}
            onIncreasePlayerScore={onIncreasePlayerScore}
        />
    );

    // Act
    const decreaseButton = screen.getByRole("button", { name: /decrease score/i });
    const increaseButton = screen.getByRole("button", { name: /increase score/i });

    await userEvent.click(increaseButton);
    await userEvent.click(increaseButton);
    await userEvent.click(decreaseButton);

    // Assert
    expect(onDecreasePlayerScore).toHaveBeenCalledTimes(1);
    expect(onIncreasePlayerScore).toHaveBeenCalledTimes(2);
});

