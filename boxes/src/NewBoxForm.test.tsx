import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function () {
    render(<NewBoxForm createBox={jest.fn} />);
});

it("matches initial form snapshot", function () {
    const { asFragment } = render(<NewBoxForm createBox={jest.fn} />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches data-entered snapshot", function () {
    const { container } = render(<NewBoxForm createBox={jest.fn} />);

    const heightInput = container.querySelector("[name=height]");
    const widthInput = container.querySelector("[name=width]");
    const bgColorInput = container.querySelector("[name=backgroundColor]");

    fireEvent.input(heightInput!, { target: { value: "7" } });
    fireEvent.input(widthInput!, { target: { value: "8" } });
    fireEvent.input(bgColorInput!, { target: { value: "firebrick" } });

    expect(container).toMatchSnapshot();
})