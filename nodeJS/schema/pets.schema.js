const schema = {
    type: "object",
    properties: {
        type: { type: 'string', pattern: '^[A-Za-z]+$'},
        name: { type: 'string', pattern: '^[A-Za-z]+$'},
        adoptionStatus: { type: 'string', pattern: '^[A-Za-z]+$'},
        picture: { type: 'string'},
        height: { type: 'string'},
        weight: { type: 'string'},
        color: { type: 'string'},
        bio: { type: 'string'},
        hypoallergnic: { type: 'boolean'},
        dietery: { type: 'boolean'},
        breed: { type: 'string'},
    },
    required: ["type", "name", "adoptionStatus", "picture", "height", "weight", "color", "bio", "hypoallergnic", "dietery", "breed"],
    additionalProperties: false
}

module.exports = {
    petsSchema: schema
}