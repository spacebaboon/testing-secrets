import { render, screen, logRoles, within } from "@testing-library/react";
import React from "react";
import { UserTable } from "./UserTable";

    describe('UserTable', () => {

        beforeEach(() => {
            render(<UserTable />);
        })


        test('check we are on the users page', () => {
            screen.getByRole('heading', { name: 'Users' });
        })

        test('make sure none of the team are missing', () => {
            screen.logTestingPlaygroundURL();
            expect(true).toBe(false);
        })

        test('what is the name of the suspect?', () => {
            const table = screen.getByRole('table');
            logRoles(table);
            const suspectRow = screen.getByRole('cell', { name: 'totally' }).closest('tr');
            if (suspectRow) {
                within(suspectRow).getByText('Mr C');
            } else {
                fail("It's not him!");
            }

        })

})