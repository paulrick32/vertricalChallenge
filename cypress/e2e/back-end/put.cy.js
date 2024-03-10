import Ajv from 'ajv';
import { faker } from '@faker-js/faker';

const ajv = new Ajv();
const challengeBackUrl = Cypress.env('urls').challengeBackOne;

describe('User API', () => {
    it('should make a successful PUT request and validate the JSON schema, HTTP code, and updated data', () => {
        cy.fixture('schemas/userSchema.json').then((userSchema) => {
            cy.request('GET', challengeBackUrl).then((getResponse) => {
                expect(getResponse.status).to.equal(200);
                const resourceId = getResponse.body[0].id;
                const updatedData = {
                    name: faker.person.firstName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email(),
                    address: {
                        street: faker.location.street(),
                        suite: faker.location.buildingNumber(),
                        city: faker.location.city(),
                        zipcode: faker.location.zipCode(),
                        geo: {
                            lat: faker.string.numeric(5),
                            lng: faker.string.numeric(5),
                        },
                    },
                    phone: faker.phone.number(),
                    website: `www.${faker.company.name()}.com`,
                    company: {
                        name: faker.company.name(),
                        catchPhrase: faker.company.catchPhraseDescriptor(),
                        bs: faker.company.catchPhraseDescriptor(),
                    },
                };

                cy.request({
                    method: 'PUT',
                    url: `${challengeBackUrl}/${resourceId}`,
                    body: updatedData,
                }).then((putResponse) => {
                    expect(putResponse.status).to.equal(200);
                    const isValid = ajv.validate(userSchema, putResponse.body);
                    if (!isValid) {
                        console.log('Validation errors:', ajv.errorsText());
                        console.log('Validation errors:', ajv.errors);
                    }
                    expect(isValid, 'JSON schema validation failed').to.be.true;
                    expect(putResponse.body.name).to.equal(updatedData.name);
                    expect(putResponse.body.username).to.equal(updatedData.username);
                    expect(putResponse.body.email).to.equal(updatedData.email);
                });
            });
        });
    });
});
