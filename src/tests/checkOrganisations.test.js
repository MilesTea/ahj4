import checkOrganisations from "../checkOrganisations";
import cardsPrefixes from "../cardsPrefixes";

const testCards = {
    '4916499592484819': 'visa',
    '4499339840481537': 'visa',
    '4556046643634953681': 'visa',

    '5252113239456408': 'master',
    '5250660588105517': 'master',
    '5563918621552935': 'master',

    '348209999043258': 'amex',
    '379727632017506': 'amex',
    '379024692777124': 'amex',

    '6011166372867765': 'discover',
    '6011666177956093': 'discover',
    '6011667732989670941': 'discover',

    '3541944633533376': 'jcb',
    '3589852313853605': 'jcb',
    '3531343211260652680': 'jcb',

    '36644504593719': 'diners',
    '36145940175814': 'diners',
    '36087175055347': 'diners',

}

test.each(Object.keys(testCards).map((key) => [key, testCards[key]]))
('Проверка номера карты %s банка %s', (number, organisation) => {
    const result = checkOrganisations(number, cardsPrefixes)
    expect(result[organisation]).toEqual(true)
})