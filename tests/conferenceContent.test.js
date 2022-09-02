import { render, screen } from "@testing-library/react";
import ConferenceContent from "../components/ConferenceContent";
import "@testing-library/jest-dom";

const mock = [
  {
    name: "George Mandis",
    social: {
      linkedin: null,
    },
    aboutShort:
      "Independent web developer and consultant, frequent traveler, occasional educator, perpetual optimist.",
    company: null,
    image: {
      url: "https://api.react-finland.fi/media/people/george.jpg",
    },
  },
];

describe("Conference is rendered", () => {
  it("Conference is okay", () => {
    render(<ConferenceContent speakers={mock} />);
    expect(screen.getByText(/George Mandis/i)).toBeInTheDocument();
  });
});
