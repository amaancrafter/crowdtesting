import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x5Ac3FC7de92B4eEAea58240A11AAF9ed262f3c4a"
);

export default instance;
