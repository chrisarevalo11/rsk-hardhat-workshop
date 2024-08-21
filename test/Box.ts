import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Box", function () {
  async function deployBoxFixture() {
    const Box = await hre.ethers.getContractFactory("Box");
    const box = await Box.deploy();
    return { box };
  }

  describe("Deployment", function () {
    it("Should initialize with a value of 0", async function () {
      const { box } = await loadFixture(deployBoxFixture);
      expect(await box.retrieve()).to.equal(0);
    });
  });

  describe("Store and Retrieve", function () {
    it("Should store the value and retrieve it correctly", async function () {
      const { box } = await loadFixture(deployBoxFixture);
      await box.store(42);
      expect(await box.retrieve()).to.equal(42);
    });

    it("Should emit a ValueChanged event on storing a value", async function () {
      const { box } = await loadFixture(deployBoxFixture);
      await expect(box.store(42)).to.emit(box, "ValueChanged").withArgs(42);
    });
  });
});
