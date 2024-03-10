import Ajv from 'ajv';
import { faker } from '@faker-js/faker'

const ajv = new Ajv();
const challengeBackUrl = Cypress.env('urls').challengeBackOne;

describe('User API', () => {
    it('should make a successful POST request and validate the JSON schema and HTTP code', () => {
        cy.fixture('schemas/userSchema.json').then((userSchema) => {
            const postData = {
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
                method: 'POST',
                url: challengeBackUrl,
                body: postData,
            }).then((postResponse) => {
                expect(postResponse.status).to.equal(201);
                const isValid = ajv.validate(userSchema, postResponse.body);
                if (!isValid) {
                    console.log('Validation errors:', ajv.errors);
                }
                expect(isValid, 'JSON schema validation failed').to.be.true;
                expect(postResponse.body.name).to.equal(postData.name);
                expect(postResponse.body.username).to.equal(postData.username);
                expect(postResponse.body.email).to.equal(postData.email);
            });
        });
    });
});
