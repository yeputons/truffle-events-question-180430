const Foo = artifacts.require("Foo");

contract("Foo", async () => {
  it("emits foo", async () => {
    const foo = await Foo.new();
    const res = web3.eth.getTransactionReceipt(foo.transactionHash);
    assert.equal(res.logs[0].event, 'FooEvent');
  });

  it("emits bar", async () => {
    const foo = await Foo.new();
    const res1 = await foo.emitBar();
    const res2 = web3.eth.getTransactionReceipt(res1.tx);
    assert.equal(res1.logs[0].event, 'BarEvent');
    assert.equal(res2.logs[0].event, 'BarEvent');
  });
});
