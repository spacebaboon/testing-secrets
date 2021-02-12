import { render, screen, logRoles, within } from "@testing-library/react";
import React from "react";
import { UserTable } from "./UserTable";

describe('UserTable', () => {

    beforeEach(() => {
        render(<UserTable />);
    })


    test('check we are on the users page', () => {
        screen.getByRole('heading', { name: /Space Invaders Members/i });
    })

    test('make sure none of the team are missing', () => {
        // screen.logTestingPlaygroundURL();
        const rowGroups = screen.getAllByRole('rowgroup');
        // screen.debug(rowGroups);
        expect(within(rowGroups[1]).getAllByRole('row').length).toBe(9);

        // const dataRowGroup = screen.getByText('Ben').closest('tbody');
        // expect(within(dataRowGroup).getAllByRole('row').length).toBe(9);

    })

    test('what is the name of the suspect?', () => {
        // const table = screen.getByRole('table');
        // logRoles(table);
        const suspectRow = screen.getByRole('cell', { name: 'totally' }).closest('tr');
        if (suspectRow) {
            within(suspectRow).getByText('Ville');
        }

    })

})