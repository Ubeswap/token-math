// @ts-check

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
require("@rushstack/eslint-patch/modern-module-resolution");

/** @type import('eslint').Linter.Config */
module.exports = {
  extends: ["@saberhq/eslint-config"],
  parserOptions: {
    project: "tsconfig.json",
  },
};
