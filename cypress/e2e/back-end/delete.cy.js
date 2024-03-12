import Ajv from 'ajv';
import { faker } from '@faker-js/faker';

const ajv = new Ajv();
const challengeBackUrl = Cypress.env('urls').challengeBackOne;

describe('Delete Random User API', () => {
    const userSchema = {
        type: 'object',
        properties: {
            id: { type: 'number' },
        },
        additionalProperties: false,
    };

    it('should make a successful DELETE request for a random user', () => {
        const randomUserId = faker.number.int({ min: 1, max: 10 });

        cy.request({
            method: 'DELETE',
            url: `${challengeBackUrl}/${randomUserId}`,
        }).then((deleteResponse) => {
            expect(deleteResponse.status).to.equal(200);
            const isValid = ajv.validate(userSchema, deleteResponse.body);
            if (!isValid) {
                console.error('Validation errors:', ajv.errorsText());
                console.error('Validation errors:', ajv.errors);
            }
            expect(isValid, 'JSON schema validation failed').to.be.true;
            cy.log(`User with ID ${randomUserId} has been deleted successfully.`);
        });
    });
});
