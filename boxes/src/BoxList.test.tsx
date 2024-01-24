import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

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