import "@testing-library/jest-dom";
import "html-validate/jest";

afterEach(() => {
  window.sessionStorage.clear();
  window.localStorage.clear();
  jest.clearAllMocks();
});
