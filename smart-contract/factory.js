import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x576A41c1b18afB51a387bfa4B4F5fd9EF3DE3b2d"
);

export default instance;
