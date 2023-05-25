const adjectives = ['Arnold', 'Jackie', 'Steven', 'Sylvester', 'Chuck', 'Jean-Claude', 'Bruce', 'Dolph'];
const nouns = ['Chan', 'Schwarzenegger', 'Segal', 'Stallone', 'Norris', 'Van Damme', 'Willis', 'Lundgren'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
