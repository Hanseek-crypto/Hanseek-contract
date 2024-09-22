// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract WithdrawContract {
    address public owner;  // Owner of the contract

    // Event emitted when the withdrawal is successful
    event Withdrawn(address indexed user, uint256 amount);

    // Modifier to restrict access to the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    // Constructor sets the owner (wallet from which 100 FLOW will be sent)
    constructor() {
        owner = msg.sender;
    }

    function withdrawCtrt(address payable user) external onlyOwner {
        uint256 withdrawAmount = 100 ether;  // Assuming 100 FLOW = 100 ether in EVM
        require(address(this).balance >= withdrawAmount, "Insufficient contract balance");
        
        // Transfer 100 FLOW to the user
        (bool sent, ) = user.call{value: withdrawAmount}("");
        require(sent, "Failed to send FLOW");

        // Emit event after successful withdrawal
        emit Withdrawn(user, withdrawAmount);
    }

    // Function to receive funds from the owner
    receive() external payable {}
}