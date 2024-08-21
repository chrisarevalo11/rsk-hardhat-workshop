import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const BoxModule = buildModule("BoxModule", (m) => {
  const box = m.contract("Box", []);

  return { box };
});

export default BoxModule;
