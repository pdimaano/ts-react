import { render, fireEvent } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", function () {
    render(<NewBoxForm createBox={jest.fn} />);
});

it("matches initial form snapshot", function () {
    const { asFragment } = render(<NewBoxForm createBox={jest.fn} />);
    expect(asFragment()).toMatchSnapshot();
});