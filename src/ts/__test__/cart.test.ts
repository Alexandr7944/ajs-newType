import Cart from "../cart";

const cart = new Cart();
cart.add({
  id: 1,
  name: "Грокаем алгоритмы",
  price: 800,
  discount: 0.05,
  count: 1,
  singleСopy: false,
})
cart.add({
  id: 2,
  name: "Чистый код",
  price: 600,
  discount: 0.1,
  count: 1000, // количество указано для теста
  singleСopy: true,
})
cart.add({
  id: 3,
  name: 'phone',
  price: 30000 ,
  discount: 0.03,
  count: 2,
  singleСopy: false
})

test('test class Cart', () => {
  expect(cart).toBeInstanceOf(Cart);
})

test('test method add and get items', () => {
  expect(cart.items.length).toBe(3);
})

test('test method calcPrice', () => {
  expect(cart.calcPrice()).toBe(61400);
})

test('test method calcPriceOfDiscount', () => {
  expect(cart.calcPriceOfDiscount()).toBe(59500);
})

test('test method removeItem', () => {
  cart.removeItem(1)
  expect(cart.items).toEqual([
    {
      id: 2,
      name: 'Чистый код',
      price: 600,
      discount: 0.1,
      count: 1000,
      singleСopy: true,
    },
    {
      id: 3,
      name: 'phone',
      price: 30000 ,
      discount: 0.03,
      count: 2,
      singleСopy: false
    }
  ]);
})

test('test method decrement', () => {
  cart.decrement(3);
  expect(cart.items).toEqual([
    {
      id: 2,
      name: 'Чистый код',
      price: 600,
      discount: 0.1,
      count: 1000,
      singleСopy: true,
    },
    {
      id: 3,
      name: 'phone',
      price: 30000 ,
      discount: 0.03,
      count: 1,
      singleСopy: false,
    }
  ]);
})