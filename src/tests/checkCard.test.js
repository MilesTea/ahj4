import checkCard from "../checkCard";

test.each([
    ['4916499592484819', true],
    ['4499339840481537', true],
    ['4916499592584819', false],
    ['4499339840381537', false],
])
('Проверка номера карты', (number, status) => {
    expect(checkCard(number)).toEqual(status)
})