import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";
import Box from "./Box";

/** Adding a box for testing */
function addBox(container: HTMLElement, height = 2, width = 3, color = "peachpuff") {
    const heightInput = container.querySelector("[name=height]");
    const widthInput = container.querySelector("[name=width]");
    const backgroundInput = container.querySelector("[name=backgroundColor]");

    fireEvent.change(backgroundInput!, { target: { value: color } });
    fireEvent.change(widthInput!, { target: { value: width } });
    fireEvent.change(heightInput!, { target: { value: height } });

    // test button to make sure it works
    const button = container.querySelector(".NewBoxForm-addBtn");
    fireEvent.click(button!);
}

it("matches snapshot when no boxes", function () {
    const { container } = render(<BoxList />);
    expect(container).toMatchSnapshot();
});


describe("adding boxes", function () {
    it("can add a new box", function () {
        const { container } = render(<BoxList />);

        // no boxes yet
        expect(container.querySelector(".Box")).not.toBeInTheDocument();
        addBox(container);

        // expect to see a box
        const box = container.querySelector(".Box");
        expect(box).toBeInTheDocument();
        expect(box!.querySelector(".Box-box")).toHaveStyle(`
        width: 3em;
        height: 2em;
        background-color: peachpuff;
        `);
    });
})