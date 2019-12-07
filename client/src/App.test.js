import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

import PlayerCard from './Components/PlayerCard';

test('renders without crashing', () => {
  render(<App />);
});


test("Check to see the H1", () => {
    const{ getByText } = render(<App />);
    getByText(/women's World Cup players/i);
  })

  // test("Check to see the H1", () => {
  //   const { getByText } = render(<PlayerCard />);
  //   getByText(/Country/i);
  // })

// test("country Name is rendring ", () => {
//   const{ getByText } = render(<PlayerCard/>);
//   getByText(/country/i);
// })