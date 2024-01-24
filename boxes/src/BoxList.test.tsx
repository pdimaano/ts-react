import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

/** Adding a box for testing */
function addBox(container: HTMLElement, height = 2, width = 3, color = "peachpuff") {
    const heightInput = container.querySelector("[name=height]");
    const widthInput = container.querySelector("[name=width]");
    const backgroundInput = container.querySelector("[name=backgroundColor]");
}