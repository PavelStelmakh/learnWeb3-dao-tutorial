// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FakeNFTMarketplace {
    mapping(uint256 => address) tokens;
    uint256 nftPrice = 0.1 ether;

    function getPrice() external view returns (uint256) {
        return nftPrice;
    }

    function available(uint256 _tokenId) external view returns (bool) {
        return tokens[_tokenId] == address(0);
    }

    function purchase(uint256 _tokenId) external payable {
        require(msg.value >= nftPrice, "This NFT costs 0.1 ether");

        tokens[_tokenId] = msg.sender;
    }
}
