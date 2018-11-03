jest.mock("../services/prisma", () => ({
  account: jest.fn(),
  createAccount: jest.fn(),
  updateAccount: jest.fn(),
}));

export function mockCreateAccountOnce (account: any) {
  require("../services/prisma").createAccount
    .mockReturnValueOnce(account);
}

export function mockQueryAccountOnce (account: any) {
  require("../services/prisma").account
    .mockReturnValueOnce(account);
}

export function mockQueryAccountError (error: Error) {
  require("../services/prisma").account
    .mockImplementation(() => {
      throw error;
    });
}

export function mockUpdateAccountOnce (account: any) {
  require("../services/prisma").updateAccount
    .mockReturnValueOnce(account);
}
