import { render, screen } from "@testing-library/react";
import React from "react";
import { AccessForm } from "./AccessForm";

    describe('UserTable', () => {

        beforeEach(() => {
            render(<AccessForm />);
        })

        test('check we are on the login page', () => {
            screen.getByText('Access to secret list');
        })


})