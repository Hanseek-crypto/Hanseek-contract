// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract ReservationContract {
    address public owner;

    event ReservationMade(address indexed user, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    function makeReservation() external payable {
        uint256 reservationFee = 40 ether;  
        require(msg.value == reservationFee, "You should send exactly 40 FLOW");

        (bool sent, ) = payable(owner).call{value: reservationFee}("");
        require(sent, "Failed to send FLOW to the owner");

        emit ReservationMade(msg.sender, msg.value);
    }
}