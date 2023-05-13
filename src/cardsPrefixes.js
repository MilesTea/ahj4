const cardsPrefixes = {
    visa: /^((4)|($))/,
    master: /^((5[1-5])|($)|(5$))/,
    amex: /^((3[47])|($)|(3$))/,
    discover: /^((65)|(6011)|($)|(6$)|(60$)|(601$))/,
    jcb: /^((35)|($)|(3$))/,
    diners: /^((36)|($)|(3$))/,
}

export default cardsPrefixes