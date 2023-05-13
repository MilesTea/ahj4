import checkCard from "./checkCard";
import checkOrganisations from "./checkOrganisations";
import cardsPrefixes from "./cardsPrefixes";


export default class CardChecker {
    constructor() {
        this.cards = {}
        Object.keys(cardsPrefixes).forEach(element => {
            this.cards[element] = document.querySelector(`li.card.${element}`)
        });

        this.cardStatus = document.querySelector('div.card_status')

        this.cardInput = document.querySelector('#card_number')
        this.cardInput.addEventListener('keyup', (event) => {
            const obj = this.editCards(checkOrganisations(this.cardInput.value, cardsPrefixes))

        })

        this.cardSubmitButton = document.querySelector('a#submit_form')
        this.cardSubmitButton.addEventListener('click', (event) => {
            this.editCardStatus(checkCard(document.forms.card.elements.card_number.value))
        })

        this.cardForm = document.forms.card
        this.cardForm.addEventListener('submit', event => {
            event.preventDefault()
            this.editCardStatus(checkCard(document.forms.card.elements.card_number.value))
        })
    }

    editCards(organisationStatus) {
        for(const [organisation, status] of Object.entries(organisationStatus)) {
            if(status) {this.cards[organisation].classList.remove('card_disabled')}
            else {this.cards[organisation].classList.add('card_disabled')}
        }
    }

    editCardStatus(status) {
        if(status) {
            this.cardStatus.classList.add('card_good')
            this.cardStatus.classList.remove('card_bad')
        } else {
            this.cardStatus.classList.add('card_bad')
            this.cardStatus.classList.remove('card_good')
        }
    }


}