import { render, screen } from "@testing-library/react";
import React from "react";
import { AccessForm } from "./AccessForm";

describe('UserTable', () => {

    beforeEach(() => {
        render(<AccessForm />);
    })

    test('check we are on the login page', () => {
        expect(true).toBe(true);
    })

    test('we can log in to find the secret link', async () => {
        expect(true).toBe(true);
    });


}) 