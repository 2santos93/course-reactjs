import { uploadFileToCloud } from "../../Helper/Cloudinary";
import { act } from "@testing-library/react";

jest.spyOn(global, "fetch").mockResolvedValue({
  json: jest.fn().mockResolvedValue({ secure_url: "This is a url fake" }),
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("CLoudinary tests", () => {
  test("should return an url", async () => {
    const url = await uploadFileToCloud("test");
  });
});
