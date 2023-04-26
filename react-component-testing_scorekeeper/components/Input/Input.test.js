import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
    const labelText = "Full Name";
    const placeholder = "Enter your full name";
    const name = "fullname";
    const value = "John Doe";
    const required = true;
    const onChange = jest.fn();

    render(
        <Input
            labelText={labelText}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
        />
    );

    const input = screen.getByRole("textbox");
    const label = screen.getByLabelText(labelText);

    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveAttribute("name", name);
    expect(input).toHaveAttribute("placeholder", placeholder);
    expect(input).toHaveAttribute("required");
    expect(input).toHaveValue(value);
});

test("calls callback on every user input", async () => {
    const onChange = jest.fn();

    render(<Input onChange={onChange} />);

    const input = screen.getByRole("textbox");
    const typedValue = "John Doe";

    await userEvent.type(input, typedValue);

    expect(onChange).toHaveBeenCalledTimes(typedValue.length);
});
