export default function checkOrganisations(cardNumber, cardsPrefixes) {
    const cards = {}
    for(const [organisation, regexp] of Object.entries(cardsPrefixes)) {
        cards[organisation] = regexp.test(cardNumber)
    }
    return cards
}