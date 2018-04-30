pragma solidity ^0.4.17;

contract Foo {
  event FooEvent();
  event BarEvent();

  constructor() public {
    emit FooEvent();
    emitBar();
  }

  function emitBar() public {
    emit BarEvent();
  }
}
