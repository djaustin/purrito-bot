import { ChannelCampaignLink, ChannelCampaignLinkModel } from './model';

export const saveChannelCampaignLink = async (input: {
  channelId: string;
  campaignId: string;
}): Promise<ChannelCampaignLink> => {
  const toSave = new ChannelCampaignLinkModel(input);

  toSave.save();

  return toSave;
};

export const getCampaignIdForChannel = async (
  channelId: string
): Promise<ChannelCampaignLink | null> => {
  const foundLink = await ChannelCampaignLinkModel.findOne({ channelId });

  return foundLink;
};