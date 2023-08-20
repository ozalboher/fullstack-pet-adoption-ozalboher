const schema = {
    type: "object",
    properties: {
        firstName: { type: 'string', pattern: '^[A-Za-z]+$'},
        lastName: { type: 'string', pattern: '^[A-Za-z]+$'},
        email: { type: 'string', format: 'email' },
        phoneNumber: { type: 'string', pattern: '^[0-9]{10}$'},
        password: { type: 'string' },
        role: { type: 'string' }
    },
    required: ["email", "password", "phoneNumber", "lastName", "firstName"],
    additionalProperties: false
}

module.exports = {
    usersSchema: schema
}