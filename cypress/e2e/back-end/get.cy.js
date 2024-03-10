import Ajv from 'ajv';
const ajv = new Ajv();
const challengeBackUrl = Cypress.env('urls').challengeBackOne;

describe('User API', () => {
  it('should make a successful GET request and validate the JSON schema and HTTP code', () => {
    cy.fixture('schemas/userSchema.json').then((userSchema) => {
      cy.request('GET', challengeBackUrl).then((response) => {
        expect(response.status).to.equal(200);
        const isValid = ajv.validate(userSchema, response.body[0]);
        if (!isValid) {
          console.log('Validation errors:', ajv.errors);
        }
        expect(isValid, 'JSON schema validation failed').to.be.true;
        expect(response.body[0]).to.have.property('name').that.is.a('string');
        expect(response.body[0]).to.have.property('email').that.is.a('string');
      });
    });
  });
});
