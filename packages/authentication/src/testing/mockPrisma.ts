jest.mock("../services/prisma", () => ({
  mutation: {
    createAccount: jest.fn(),
    updateAccount: jest.fn(),
  },
  query: {
    account: jest.fn(),
  },
}));

export function mockCreateAccountOnce (account: any) {
  require("../services/prisma").mutation.createAccount
    .mockReturnValueOnce(account);
}

export function mockQueryAccountOnce (account: any) {
  require("../services/prisma").query.account
    .mockReturnValueOnce(account);
}

export function mockQueryAccountError (error: Error) {
  require("../services/prisma").query.account
    .mockImplementation(() => {
      throw error;
    });
}

export function mockUpdateAccountOnce (account: any) {
  require("../services/prisma").mutation.updateAccount
    .mockReturnValueOnce(account);
}
