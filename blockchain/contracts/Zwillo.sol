// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

//import packages from openzepplein
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Zwillo is ERC721URIStorage{

    uint256 public listedItems;
    uint256 public listingPrice;
    struct Property{

        uint256 id;
        string imageURL;
        string owershipURL;
        uint256 amt;
        bool isVerfied;
        bool isSold;
        address payable seller;
        address payable owner;

    }
    mapping(uint256=>Property) public property;

    constructor(uint256 _price)ERC721("Zwillo","ZW"){
            listingPrice=_price;
    }
    function listAsset(string memory _imageURL, uint256 _amt)public payable returns(uint256){

        require(msg.value>=listingPrice,"Send the listing price");
        listedItems++;
        Property storage myProperty=property[listedItems];
        myProperty.imageURL=_imageURL;
        myProperty.amt=_amt;
        myProperty.owner=payable(msg.sender);
        myProperty.seller=payable(address(this));
        return(listedItems);


    }
    function verfiy(uint256 _id, string memory _owershipURL)public{

        
        Property storage myProperty=property[_id];
        require(!myProperty.isVerfied,"You have already been verified");
        myProperty.isVerfied=true;
        myProperty.owershipURL=_owershipURL;

    }
    function buyAsset(uint256 _id)public payable{

        Property storage myProperty=property[_id];
        require(!myProperty.isSold,"Your property has already been sold");
        myProperty.owner=payable(msg.sender);
        myProperty.isSold=true;
        _transfer(address(this) ,msg.sender, _id);


    }
    //get details 
    function getAssetDetails(uint256 _id) public view returns(Property memory){
        require(_id<=listedItems,"Id not present");
        return(property[_id]);

    }
    function getMyAssets()public view returns(Property[] memory){

        Property[]  memory items ;
        for(uint i=1;i<=listedItems;i++){
            Property memory item=property[i];
            
            if(item.owner==msg.sender){
                items[i-1]=item;
            }
        }
        return(items);


    }

}