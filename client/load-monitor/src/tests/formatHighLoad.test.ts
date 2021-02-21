import { formatHighLoad } from "components/graphComponent/HighLoadMonitor";
import { Load } from "models/load";

const highLoad: Load = {
  normalized: [2, 2, 2],
  timestamp: 0,
  cpus: [[]],
};
const normalLoad: Load = {
  normalized: [0.5, 0.5, 0.5],
  timestamp: 0,
  cpus: [[]],
};

const load1: Load[] = [
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
];
const load2: Load[] = [
  normalLoad,
  normalLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
];
const load3: Load[] = [
  normalLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  normalLoad,
];
const load4: Load[] = [
  normalLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  highLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
];

const load5: Load[] = [
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  normalLoad,
  highLoad,
  highLoad,
];

test("load1 is never high and should be normal", () => {
  expect(formatHighLoad(load1, 1, 1)).toBe("normal");
});
test("load2 is high", () => {
  expect(formatHighLoad(load2, 1, 1)).toBe("high");
});
test("load3 is normal, but has not been normal long enough to have recovered", () => {
  expect(formatHighLoad(load3, 1, 1)).toBe("recovering");
});
test("load4 has recovered", () => {
  expect(formatHighLoad(load4, 1, 1)).toBe("recovered");
});
test("load5 has not been high past the treshold", () => {
  expect(formatHighLoad(load5, 1, 1)).toBe("normal");
});
