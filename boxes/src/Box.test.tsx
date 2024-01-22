import React from "react";
import { render } from "@testing-library/react";
import Box from "./Box";

const mock = () => { };

it("renders without crashing", function () {
    render(<Box id="1" width={10} height={10} backgroundColor="pink" remove={mock} />);
});