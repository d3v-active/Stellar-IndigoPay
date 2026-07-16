// Adds custom jest matchers like toBeInTheDocument, toHaveTextContent, etc.
import "@testing-library/jest-dom";
// jest-axe custom matcher used by accessibility tests (toHaveNoViolations).
import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);
