import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ScheduleTable from "../components/ScheduleTable"

const headings= ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const times =["7:00", "8:00", "9:00", "10:00"];
const table = [...Array(times.length)].map(() =>
  Array(headings.length).fill(null)
);
table[0][1] = {
  id: "test-conference-1",
  title: "Test Conference 1",
  date: "2022-09-01",
  duration: "7:00-8:30"
}
table[0][3] = {
  id: "test-conference-2",
  title: "Test Conference 2",
  date: "2022-09-03",
  duration: "7:00-8:30",
};

// console.log(table[0][0])


describe("Schedule table rendered", () => {
  it("should render the schedule table", () => {
    render(<ScheduleTable headings={headings} table={table} times={times}/>);
    expect(screen.getByText(table[0][1].title)).toBeInTheDocument();
    expect(screen.getByText(table[0][3].title)).toBeInTheDocument();
  })
})