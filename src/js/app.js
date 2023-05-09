const web3 = new Web3(window.ethereum);

// CHANGE THIS CONTRACT ACCORDING TO YOUR DEPLOYED ADDRESS
const contractAddress = "0x3dAcA1893F9EE04f4f6A11a68d9A5fD2B448D92b";
const contractAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "CarSold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
    ],
    name: "ExpirationDateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "condition",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "resaleValue",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "createCarResaleValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "deleteCar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "condition",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "resaleValue",
        type: "uint256",
      },
    ],
    name: "editCarDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllCars",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getCarDetails",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exist",
            type: "bool",
          },
          {
            internalType: "string",
            name: "make",
            type: "string",
          },
          {
            internalType: "string",
            name: "model",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "year",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "condition",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "resaleValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct CarResaleValue.CarDetails",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "isCarSold",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "purchaseCarResaleValue",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "make",
        type: "string",
      },
      {
        internalType: "string",
        name: "model",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "condition",
        type: "string",
      },
    ],
    name: "searchCar",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "exist",
            type: "bool",
          },
          {
            internalType: "string",
            name: "make",
            type: "string",
          },
          {
            internalType: "string",
            name: "model",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "year",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "condition",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "resaleValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expirationDate",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "sold",
            type: "bool",
          },
        ],
        internalType: "struct CarResaleValue.CarDetails[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expirationDate",
        type: "uint256",
      },
    ],
    name: "setExpirationDate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function getAddress() {
  const address = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return address[0];
}
async function viewCars() {
  const validcars = await contract.methods.getAllCars().call();
  const carDetailsDiv = document.getElementById("car-details");
  carDetailsDiv.innerHTML = "";

  const carContainerDiv = document.createElement("div");

  validcars.forEach(async (i) => {
    const result = await contract.methods.getCarDetails(i).call();

    const carDiv = document.createElement("div");

    const makeModel = document.createElement("h2");
    makeModel.innerText = `${result[1]} ${result[2]}`;

    const id = document.createElement("p");
    id.innerText = `Id: ${i}`;

    const year = document.createElement("p");
    year.innerText = `Year: ${result[3]}`;

    const condition = document.createElement("p");
    condition.innerText = `Condition: ${result[4]}`;

    const resaleValue = document.createElement("p");
    resaleValue.innerText = `Resale Value: ${result[5]}`;

    const expiration = document.createElement("p");
    expiration.innerText = `Expiration: ${result[6]}`;

    const sold = document.createElement("p");
    sold.innerText = `Sold: ${result[7]}`;

    carDiv.appendChild(makeModel);
    carDiv.appendChild(id);
    carDiv.appendChild(year);
    carDiv.appendChild(condition);
    carDiv.appendChild(resaleValue);
    carDiv.appendChild(expiration);
    carDiv.appendChild(sold);

    carContainerDiv.appendChild(carDiv);
  });

  carDetailsDiv.appendChild(carContainerDiv);
}

async function searchCars(make, model, year, condition) {
  const cars = await contract.methods
    .searchCar(make, model, year, condition)
    .call();
  const carDetailsDiv = document.getElementById("car-search");
  carDetailsDiv.innerHTML = "";
  for (var i = 0; i < cars.length; i++) {
    const car = cars[i];
    if (car[0] !== false && car[1] !== "" && car[2] !== "") {
      const carDiv = document.createElement("div");

      const makeModel = document.createElement("h2");
      makeModel.innerText = `${car[1]} ${car[2]}`;

      const year = document.createElement("p");
      year.innerText = `Year: ${car[3]}`;

      const condition = document.createElement("p");
      condition.innerText = `Condition: ${car[4]}`;

      const resaleValue = document.createElement("p");
      resaleValue.innerText = `Resale Value: ${car[5]}`;

      carDiv.appendChild(makeModel);
      carDiv.appendChild(year);
      carDiv.appendChild(condition);
      carDiv.appendChild(resaleValue);
      carDetailsDiv.appendChild(carDiv);
    } else {
      carDetailsDiv.innerHTML = "<p>No cars found.</p>";
    }
  }
}

async function createCarResaleValue(make, model, year, condition, resaleValue) {
  try {
    const address = await getAddress();
    const weiAmount = web3.utils.toWei(resaleValue.toString(), "ether");
    const result = await contract.methods
      .createCarResaleValue(make, model, year, condition, weiAmount, address)
      .send({ from: address });
    console.log(result);
    alert("Car details submitted successfully");
  } catch (error) {
    console.error(error);
  }
}
async function purchaseCarResaleValue(tokenId, amount) {
  try {
    const address = await getAddress();
    const weiAmount = web3.utils.toWei(amount.toString(), "ether");
    const result = await contract.methods
      .purchaseCarResaleValue(tokenId)
      .send({ from: address, value: weiAmount });
    console.log(result);
    alert("Car successfully purchased");
  } catch (error) {
    console.error(error);
  }
}
async function editCarResaleValue(
  tokenId,
  make,
  model,
  year,
  condition,
  resaleValue
) {
  try {
    const address = await getAddress();
    const weiAmount = web3.utils.toWei(resaleValue.toString(), "ether");
    const result = await contract.methods
      .editCarDetails(tokenId, make, model, year, condition, weiAmount)
      .send({ from: address });
    console.log(result);
    alert("Car details submitted successfully please return to viewcars");
  } catch (error) {
    console.error(error);
  }
}
async function isCarSold(tokenId) {
  try {
    const result = await contract.methods.isCarSold(tokenId).call();
    if (result) {
      alert("Car is sold.");
    } else {
      alert("Car is not sold.");
    }
  } catch (e) {
    alert("Token does not exist");
  }
}
async function setExpirationDate(tokenId, expiration) {
  try {
    const address = await getAddress();
    const result = await contract.methods
      .setExpirationDate(tokenId, expiration)
      .send({ from: address });
    console.log(result);
    alert("ExpirationDate set successfully");
  } catch (error) {
    console.error(error);
  }
}
async function deleteCar(tokenId) {
  try {
    const address = await getAddress();
    const result = await contract.methods
      .deleteCar(tokenId)
      .send({ from: address });
    console.log(result);
    alert("car delete successfully");
  } catch (error) {
    console.error(error);
  }
}
