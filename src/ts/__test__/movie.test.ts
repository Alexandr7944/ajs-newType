import Movie from "../movie";

test('test class Movie', () => {
  const test = new Movie(
    2012, 'США', '"Avengers Assemble!"', [
      'фантастика', 'боевик', 'фэнтези', 'приключения', '...'
    ], '137 мин. / 02:17'
  );
  expect(test.year).toBe(2012)
})
