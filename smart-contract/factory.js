import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6F49505C33e106Dc95b32a3e790f23AE10b958C8"
);

export default instance;
