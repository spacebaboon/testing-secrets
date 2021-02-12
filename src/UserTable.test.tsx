import { render } from "@testing-library/react";
import React from "react";
import { UserTable } from "./UserTable";

describe('UserTable', () => {

    beforeEach(() => {
        render(<UserTable />);
    })

    test('check we are on the users page', () => {
        expect(true).toBe(true);
    })

    test('make sure none of the team are missing', () => {
        expect(true).toBe(true);
    })

    test('what is the name of the suspect?', () => {
        expect(true).toBe(true);
    })

})