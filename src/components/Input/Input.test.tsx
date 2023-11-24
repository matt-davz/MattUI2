import React from "react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {render, screen, waitFor } from '@testing-library/react'

import Input from "./Input";

describe("Running Test for Marbella Input", () => {

  test("Check placeholder in Input", () => {
    render(<Input placeholder="Hello World" />)
    expect(screen.getByPlaceholderText('Hello World')).toHaveAttribute('placeholder', 'Hello World');
  });

  test("renders the Input component", async () => {
    render(<Input placeholder="placeholder" />);
    const input = screen.getByPlaceholderText("placeholder") as HTMLInputElement;
    userEvent.type(input, "Hello world!");
    await waitFor(() => expect(input.value).toBe("Hello world!"));
  });
});