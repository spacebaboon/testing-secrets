import { render, screen } from "@testing-library/react";
import userEvent, { specialChars } from "@testing-library/user-event";
import React from "react";
import { AccessForm } from "./AccessForm";

describe('UserTable', () => {

    beforeEach(() => {
        render(<AccessForm />);
    })

    test('check we are on the login page', () => {
        screen.getByRole('heading', { name: 'Access to secret list' });
    })

    test('we can log in to find the secret link', async () => {
        const usernameInput = screen.getByLabelText('very secret username');
        userEvent.clear(usernameInput);
        userEvent.type(usernameInput, 'admin');
        const passwordInput = screen.getByLabelText('very secret password');
        userEvent.type(passwordInput, `${specialChars.selectAll}${specialChars.delete}iloveyou`);
        userEvent.click(screen.getByRole('button', { name: 'Submit' }));

        const link = await screen.findByText('Secret Members Page');
        expect(link).toHaveAttribute('href', '/team');
    });


}) 