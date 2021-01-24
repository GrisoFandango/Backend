const listings = [
  {
    id: 0,
    title: "Silicon Valley",
    price: 100,
    images: [{ fileName: "SiliconValley" }],
    status: "Submitted",
    description:"Bird view of the Silicon Valley Ring"
  },
  {
    id: 2,
    title: "Bill Gates",
    price: 200,
    images: [{ fileName: "billgates" }],
    status: "Archived",
    description:"Picture of Bill Gates"

  },
  {
    id: 3,
    title: "Qualcomm HQ",
    price: 50,
    images: [{ fileName: "qualcomm" }],
    status: "Published",
    description:"Qualcomm HQ during the presentation of the new chipset"

  },
  {
    id: 4,
    title: "Google Party",
    price: 100,
    images: [{ fileName: "googleparty" }],
    status: "Published and Paid",
    description:"Party at google office to welcome the new interns"

  },
  {
    id: 1,
    title: "Facebook quarterly meeting",
    price: 500,
    images: [{ fileName: "facebookmeeting" }],
    status: "Submitted",
    description:"Shareholders meeting for the quarterly financial report"

  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
