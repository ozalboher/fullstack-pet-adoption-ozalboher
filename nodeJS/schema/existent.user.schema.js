const schema = {
    type: "object",
    properties: {
        firstName: { type: 'string', pattern: '^[A-Za-z]+$'},
        lastName: { type: 'string', pattern: '^[A-Za-z]+$'},
        email: { type: 'string', format: 'email' },
        password: { type: 'string' },
        phoneNumber: { type: 'string', pattern: '^[0-9]{10}$'},
        role: { type: 'string' }
    },
    required: ["email", "phoneNumber", "lastName", "firstName"],
    additionalProperties: true // changed to true to allow the bio property (which is optional)
}

module.exports = {
    existentUserSchema: schema
}