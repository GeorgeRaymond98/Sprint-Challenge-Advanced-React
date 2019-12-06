import React from 'react';
import { render } from "@testing-library/react";
import App from './App';

import PlayerCard from './Components/PlayerCard';

test('renders without crashing', () => {
  render(<App />);
});

test("country Name is rendring ", () => {
  const{ getByText } = render(<PlayerCard/>);
  getByText(/country/i);
})