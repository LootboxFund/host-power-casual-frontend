import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AccountNumber: any;
  BigInt: any;
  Byte: any;
  CountryCode: any;
  Cuid: any;
  Currency: any;
  DID: any;
  Date: any;
  DateTime: any;
  Duration: any;
  EmailAddress: any;
  GUID: any;
  HSL: any;
  HSLA: any;
  HexColorCode: any;
  Hexadecimal: any;
  IBAN: any;
  IP: any;
  IPv4: any;
  IPv6: any;
  ISBN: any;
  ISO8601Duration: any;
  JSON: any;
  JSONObject: any;
  JWT: any;
  Latitude: any;
  LocalDate: any;
  LocalEndTime: any;
  LocalTime: any;
  Locale: any;
  Long: any;
  Longitude: any;
  MAC: any;
  NegativeFloat: any;
  NegativeInt: any;
  NonEmptyString: any;
  NonNegativeFloat: any;
  NonNegativeInt: any;
  NonPositiveFloat: any;
  NonPositiveInt: any;
  ObjectID: any;
  PhoneNumber: any;
  Port: any;
  PositiveFloat: any;
  PositiveInt: any;
  PostalCode: any;
  RGB: any;
  RGBA: any;
  RoutingNumber: any;
  SafeInt: any;
  SemVer: any;
  Time: any;
  TimeZone: any;
  Timestamp: any;
  URL: any;
  USCurrency: any;
  UUID: any;
  UnsignedFloat: any;
  UnsignedInt: any;
  UtcOffset: any;
  Void: any;
};

export type Activation = {
  __typename?: 'Activation';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mmp: MeasurementPartnerType;
  mmpAlias: Scalars['String'];
  name: Scalars['String'];
  offerID: Scalars['ID'];
  order: Scalars['Int'];
  pricing: Scalars['Float'];
  status: ActivationStatus;
};

export enum ActivationStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive',
  Planned = 'Planned'
}

export type Ad = {
  __typename?: 'Ad';
  advertiserID: Scalars['ID'];
  clicks: Scalars['Int'];
  creative: Creative;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  impressions: Scalars['Int'];
  name: Scalars['String'];
  placement: Placement;
  publicInfo: Scalars['String'];
  status: AdStatus;
  timestamps: AdTimestamps;
  uniqueClicks: Scalars['Int'];
};

export type AdEvent = {
  __typename?: 'AdEvent';
  action: AdEventAction;
  adId: Scalars['ID'];
  adSetId: Scalars['ID'];
  affiliateAttribution?: Maybe<AdEventAffiliateAttribution>;
  campaignId: Scalars['ID'];
  claimId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  metadata?: Maybe<EventMetadata>;
  nonce: Scalars['ID'];
  sessionId: Scalars['ID'];
  timestamp: Scalars['Timestamp'];
};

export enum AdEventAction {
  Activation = 'Activation',
  Click = 'Click',
  TimerElapsed = 'TimerElapsed',
  VideoTimestamp = 'VideoTimestamp',
  View = 'View'
}

export type AdEventAffiliateAttribution = {
  __typename?: 'AdEventAffiliateAttribution';
  organizerID?: Maybe<Scalars['ID']>;
  promoterID?: Maybe<Scalars['ID']>;
  tournamentID?: Maybe<Scalars['ID']>;
  userID?: Maybe<Scalars['ID']>;
};

export type AdPreviewInDealConfig = {
  __typename?: 'AdPreviewInDealConfig';
  adID: Scalars['ID'];
  aspectRatio: AspectRatio;
  callToAction: Scalars['String'];
  creativeLinks: Array<Scalars['String']>;
  creativeType: CreativeType;
  themeColor: Scalars['String'];
};

export type AdServed = {
  __typename?: 'AdServed';
  adID: Scalars['ID'];
  adSetID: Scalars['ID'];
  advertiserID: Scalars['ID'];
  advertiserName: Scalars['String'];
  clickDestination: Scalars['String'];
  creative: Creative;
  flightID: Scalars['ID'];
  offerID: Scalars['ID'];
  pixelUrl: Scalars['String'];
  placement: Placement;
};

export type AdSet = {
  __typename?: 'AdSet';
  adIDs: Array<Scalars['ID']>;
  ads?: Maybe<Array<Ad>>;
  advertiserID: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  offerIDs: Array<Scalars['ID']>;
  placement: Placement;
  status: AdSetStatus;
  thumbnail?: Maybe<Scalars['String']>;
};

export enum AdSetInTournamentStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type AdSetPreview = {
  __typename?: 'AdSetPreview';
  id: Scalars['ID'];
  name: Scalars['String'];
  placement: Placement;
  status: AdSetStatus;
  thumbnail?: Maybe<Scalars['String']>;
};

export type AdSetPreviewInDealConfig = {
  __typename?: 'AdSetPreviewInDealConfig';
  ad?: Maybe<AdPreviewInDealConfig>;
  id: Scalars['ID'];
  name: Scalars['String'];
  placement: Placement;
  status: AdSetInTournamentStatus;
  thumbnail?: Maybe<Scalars['String']>;
};

export enum AdSetStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive',
  PendingReview = 'PendingReview',
  Planned = 'Planned',
  Rejected = 'Rejected'
}

export enum AdStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive',
  PendingReview = 'PendingReview',
  Planned = 'Planned',
  Rejected = 'Rejected'
}

export type AdTargetTag = {
  __typename?: 'AdTargetTag';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  type: AdTargetTagType;
};

export enum AdTargetTagType {
  Device = 'Device',
  Geography = 'Geography',
  Income = 'Income',
  Interest = 'Interest',
  Os = 'Os'
}

export type AdTimestamps = {
  __typename?: 'AdTimestamps';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export type AddOfferAdSetToTournamentPayload = {
  adSetID: Scalars['ID'];
  offerID: Scalars['ID'];
  organizerID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type AddOfferAdSetToTournamentResponse = AddOfferAdSetToTournamentResponseSuccess | ResponseError;

export type AddOfferAdSetToTournamentResponseSuccess = {
  __typename?: 'AddOfferAdSetToTournamentResponseSuccess';
  tournament: Tournament;
};

export type AddStreamPayload = {
  stream: StreamInput;
  tournamentId: Scalars['ID'];
};

export type AddStreamResponse = AddStreamResponseSuccess | ResponseError;

export type AddStreamResponseSuccess = {
  __typename?: 'AddStreamResponseSuccess';
  stream: Stream;
};

export type AddUpdatePromoterRateQuoteInTournamentResponse = ResponseError | UpdatePromoterRateQuoteInTournamentResponseSuccess;

export type AddUpdatePromoterRateQuoteToTournamentPayload = {
  offerID: Scalars['ID'];
  promoterID: Scalars['ID'];
  rateQuotes: Array<RateQuoteInput>;
  tournamentID: Scalars['ID'];
};

export type Advertiser = {
  __typename?: 'Advertiser';
  avatar?: Maybe<Scalars['String']>;
  conquests: Array<Conquest>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  offers: Array<Scalars['ID']>;
  publicContactEmail?: Maybe<Scalars['String']>;
  userID: Scalars['ID'];
  website?: Maybe<Scalars['String']>;
};

export type AdvertiserAdminViewResponse = AdvertiserAdminViewResponseSuccess | ResponseError;

export type AdvertiserAdminViewResponseSuccess = {
  __typename?: 'AdvertiserAdminViewResponseSuccess';
  avatar: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicContactEmail?: Maybe<Scalars['String']>;
  userID: Scalars['ID'];
  website?: Maybe<Scalars['String']>;
};

export type AdvertiserPublicViewResponse = AdvertiserPublicViewResponseSuccess | ResponseError;

export type AdvertiserPublicViewResponseSuccess = {
  __typename?: 'AdvertiserPublicViewResponseSuccess';
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Affiliate = {
  __typename?: 'Affiliate';
  audienceSize?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicContactEmail?: Maybe<Scalars['String']>;
  rank?: Maybe<OrganizerRank>;
  userID: Scalars['ID'];
  website?: Maybe<Scalars['String']>;
};

export type AffiliateAdminViewResponse = AffiliateAdminViewResponseSuccess | ResponseError;

export type AffiliateAdminViewResponseSuccess = {
  __typename?: 'AffiliateAdminViewResponseSuccess';
  affiliate: Affiliate;
};

export type AffiliatePublicViewResponse = AffiliatePublicViewResponseSuccess | ResponseError;

export type AffiliatePublicViewResponseSuccess = {
  __typename?: 'AffiliatePublicViewResponseSuccess';
  affiliate: Affiliate;
};

export enum AffiliateType {
  Lootbox = 'Lootbox',
  Organizer = 'Organizer',
  Promoter = 'Promoter'
}

export type AirdropMetadataCreateInput = {
  batch: Scalars['Int'];
  claimers: Array<Scalars['ID']>;
  offerID: Scalars['ID'];
  title: Scalars['String'];
  tournamentID?: InputMaybe<Scalars['ID']>;
};

export type AnalyticsAdEvent = {
  __typename?: 'AnalyticsAdEvent';
  action: AdEventAction;
  activationEventMmpAlias?: Maybe<Scalars['String']>;
  activationID?: Maybe<Scalars['ID']>;
  adID?: Maybe<Scalars['ID']>;
  adSetID?: Maybe<Scalars['ID']>;
  advertiserID?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  organizerID?: Maybe<Scalars['ID']>;
  promoterID?: Maybe<Scalars['ID']>;
  timestamp: Scalars['Int'];
  tournamentID?: Maybe<Scalars['ID']>;
};

export type AnalyticsMemo = {
  __typename?: 'AnalyticsMemo';
  activationID: Scalars['ID'];
  adEventID: Scalars['ID'];
  advertiserID: Scalars['ID'];
  affiliateID: Scalars['ID'];
  affiliateType: AffiliateType;
  amount: Scalars['Float'];
  id: Scalars['ID'];
  mmp: MeasurementPartnerType;
  mmpAlias: Scalars['String'];
  offerID: Scalars['ID'];
  timestamp: Scalars['Int'];
  tournamentID?: Maybe<Scalars['ID']>;
};

export type AnswerAirdropQuestionInput = {
  answer: Scalars['String'];
  lootboxID: Scalars['ID'];
  questionID: Scalars['ID'];
};

export type AnswerAirdropQuestionPayload = {
  answers: Array<AnswerAirdropQuestionInput>;
  claimID?: InputMaybe<Scalars['ID']>;
  lootboxID: Scalars['ID'];
};

export type AnswerAirdropQuestionResponse = AnswerAirdropQuestionResponseSuccess | ResponseError;

export type AnswerAirdropQuestionResponseSuccess = {
  __typename?: 'AnswerAirdropQuestionResponseSuccess';
  answerIDs: Array<Scalars['ID']>;
};

export enum AspectRatio {
  Landscape16x9 = 'Landscape16x9',
  Portrait2x3 = 'Portrait2x3',
  Portrait9x16 = 'Portrait9x16',
  Square1x1 = 'Square1x1',
  Tablet4x5 = 'Tablet4x5'
}

export type AuthenticateWalletPayload = {
  message: Scalars['String'];
  signedMessage: Scalars['String'];
};

export type AuthenticateWalletResponse = AuthenticateWalletResponseSuccess | ResponseError;

export type AuthenticateWalletResponseSuccess = {
  __typename?: 'AuthenticateWalletResponseSuccess';
  token: Scalars['String'];
};

export type BaseClaimStatsForLootbox = {
  __typename?: 'BaseClaimStatsForLootbox';
  bonusRewardClaimCount: Scalars['Int'];
  completedClaimCount: Scalars['Int'];
  completionRate: Scalars['Int'];
  maxTickets: Scalars['Int'];
  oneTimeClaimCount: Scalars['Int'];
  totalClaimCount: Scalars['Int'];
  viralClaimCount: Scalars['Int'];
};

export type BaseClaimStatsForLootboxResponse = BaseClaimStatsForLootboxResponseSuccess | ResponseError;

export type BaseClaimStatsForLootboxResponseSuccess = {
  __typename?: 'BaseClaimStatsForLootboxResponseSuccess';
  stats: BaseClaimStatsForLootbox;
};

export type BaseClaimStatsForTournament = {
  __typename?: 'BaseClaimStatsForTournament';
  airdropClaimCount: Scalars['Int'];
  airdropCompletionRate: Scalars['Int'];
  allFans: Scalars['Int'];
  completedClaimCount: Scalars['Int'];
  completionRate: Scalars['Int'];
  impressions: Scalars['Int'];
  originalClaims: Scalars['Int'];
  originalFans: Scalars['Int'];
  participationFans: Scalars['Int'];
  participationRewardCount: Scalars['Int'];
  pendingClaims: Scalars['Int'];
  referralBonusClaimCount: Scalars['Int'];
  totalClaimCount: Scalars['Int'];
  totalMaxTickets: Scalars['Int'];
  viralClaimCount: Scalars['Int'];
  viralFans: Scalars['Int'];
};

export type BaseClaimStatsForTournamentResponse = BaseClaimStatsForTournamentResponseSuccess | ResponseError;

export type BaseClaimStatsForTournamentResponseSuccess = {
  __typename?: 'BaseClaimStatsForTournamentResponseSuccess';
  stats: BaseClaimStatsForTournament;
};

export type BattleFeedEdge = {
  __typename?: 'BattleFeedEdge';
  cursor: Scalars['ID'];
  node: Tournament;
};

export type BattleFeedResponse = BattleFeedResponseSuccess | ResponseError;

export type BattleFeedResponseSuccess = {
  __typename?: 'BattleFeedResponseSuccess';
  edges: Array<BattleFeedEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type BrowseActiveOffersResponse = BrowseActiveOffersResponseSuccess | ResponseError;

export type BrowseActiveOffersResponseSuccess = {
  __typename?: 'BrowseActiveOffersResponseSuccess';
  offers: Array<MarketplacePreviewOffer>;
};

export type BrowseAllAffiliatesResponse = BrowseAllAffiliatesResponseSuccess | ResponseError;

export type BrowseAllAffiliatesResponseSuccess = {
  __typename?: 'BrowseAllAffiliatesResponseSuccess';
  affiliates: Array<MarketplacePreviewAffiliate>;
};

export type BulkCreateReferralPayload = {
  campaignName?: InputMaybe<Scalars['String']>;
  lootboxID?: InputMaybe<Scalars['ID']>;
  numReferrals: Scalars['Int'];
  partyBasketId?: InputMaybe<Scalars['ID']>;
  promoterId?: InputMaybe<Scalars['ID']>;
  referrerId?: InputMaybe<Scalars['ID']>;
  tournamentId: Scalars['ID'];
  type: ReferralType;
};

export type BulkCreateReferralResponse = BulkCreateReferralResponseSuccess | ResponseError;

export type BulkCreateReferralResponseSuccess = {
  __typename?: 'BulkCreateReferralResponseSuccess';
  csv: Scalars['String'];
};

export type BulkEditLootboxTournamentSnapshotsPayload = {
  delete?: InputMaybe<Scalars['Boolean']>;
  impressionPriority?: InputMaybe<Scalars['Int']>;
  lootboxSnapshotIDs: Array<Scalars['ID']>;
  status?: InputMaybe<LootboxTournamentStatus>;
  tournamentID: Scalars['ID'];
};

export type BulkEditLootboxTournamentSnapshotsResponse = BulkEditLootboxTournamentSnapshotsResponseSuccess | ResponseError;

export type BulkEditLootboxTournamentSnapshotsResponseSuccess = {
  __typename?: 'BulkEditLootboxTournamentSnapshotsResponseSuccess';
  lootboxTournamentSnapshotIDs: Array<Scalars['ID']>;
};

export type BulkReferralCsvRow = {
  __typename?: 'BulkReferralCSVRow';
  error: Scalars['String'];
  url: Scalars['String'];
};

export type BulkWhitelistPayload = {
  partyBasketAddress: Scalars['ID'];
  whitelistAddresses: Array<Scalars['ID']>;
};

export type BulkWhitelistResponse = BulkWhitelistResponseSuccess | ResponseError;

export type BulkWhitelistResponseSuccess = {
  __typename?: 'BulkWhitelistResponseSuccess';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  signatures: Array<Maybe<Scalars['String']>>;
};

export type CampaignClaimsForLootboxResponse = CampaignClaimsForLootboxResponseSuccess | ResponseError;

export type CampaignClaimsForLootboxResponseSuccess = {
  __typename?: 'CampaignClaimsForLootboxResponseSuccess';
  data: Array<CampaignClaimsForLootboxRow>;
};

export type CampaignClaimsForLootboxRow = {
  __typename?: 'CampaignClaimsForLootboxRow';
  claimCount: Scalars['Int'];
  referralCampaignName: Scalars['String'];
  referralSlug: Scalars['String'];
  userAvatar: Scalars['String'];
  userID: Scalars['String'];
  username: Scalars['String'];
};

export type CampaignClaimsForTournamentResponse = CampaignClaimsForTournamentResponseSuccess | ResponseError;

export type CampaignClaimsForTournamentResponseSuccess = {
  __typename?: 'CampaignClaimsForTournamentResponseSuccess';
  data: Array<CampaignClaimsForTournamentRow>;
};

export type CampaignClaimsForTournamentRow = {
  __typename?: 'CampaignClaimsForTournamentRow';
  claimCount: Scalars['Int'];
  referralCampaignName: Scalars['String'];
  referralSlug: Scalars['String'];
  userAvatar: Scalars['String'];
  userID: Scalars['String'];
  username: Scalars['String'];
};

export type CheckIfUserAnsweredAirdropQuestionsResponse = CheckIfUserAnsweredAirdropQuestionsResponseSuccess | ResponseError;

export type CheckIfUserAnsweredAirdropQuestionsResponseSuccess = {
  __typename?: 'CheckIfUserAnsweredAirdropQuestionsResponseSuccess';
  status: Scalars['Boolean'];
};

export type CheckPhoneEnabledResponse = CheckPhoneEnabledResponseSuccess | ResponseError;

export type CheckPhoneEnabledResponseSuccess = {
  __typename?: 'CheckPhoneEnabledResponseSuccess';
  isEnabled: Scalars['Boolean'];
};

export type Claim = {
  __typename?: 'Claim';
  chosenLootbox?: Maybe<Lootbox>;
  /** @deprecated Use Lootbox instead */
  chosenPartyBasket?: Maybe<PartyBasket>;
  /** @deprecated Use Lootbox instead */
  chosenPartyBasketAddress?: Maybe<Scalars['ID']>;
  /** @deprecated Use Lootbox instead */
  chosenPartyBasketId?: Maybe<Scalars['ID']>;
  /** @deprecated Use Lootbox instead */
  chosenPartyBasketNFTBountyValue?: Maybe<Scalars['String']>;
  /** @deprecated Use Lootbox instead */
  chosenPartyBasketName?: Maybe<Scalars['String']>;
  claimerUserId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  isPostCosmic?: Maybe<Scalars['Boolean']>;
  lootboxAddress?: Maybe<Scalars['ID']>;
  lootboxID?: Maybe<Scalars['ID']>;
  lootboxMaxTickets?: Maybe<Scalars['Int']>;
  lootboxNFTBountyValue?: Maybe<Scalars['String']>;
  lootboxName?: Maybe<Scalars['String']>;
  originLootboxId?: Maybe<Scalars['ID']>;
  /** @deprecated Use Lootbox instead */
  originPartyBasketId?: Maybe<Scalars['ID']>;
  promoterId?: Maybe<Scalars['ID']>;
  referralCampaignName?: Maybe<Scalars['String']>;
  referralId: Scalars['ID'];
  referralSlug: Scalars['ID'];
  referralType?: Maybe<ReferralType>;
  referrerId?: Maybe<Scalars['ID']>;
  rewardFromClaim?: Maybe<Scalars['ID']>;
  rewardFromFriendReferred?: Maybe<Scalars['ID']>;
  status: ClaimStatus;
  timestamps: ClaimTimestamps;
  tournament?: Maybe<Tournament>;
  tournamentId: Scalars['ID'];
  tournamentName?: Maybe<Scalars['String']>;
  type: ClaimType;
  userLink?: Maybe<PublicUser>;
  whitelist?: Maybe<MintWhitelistSignature>;
  whitelistId?: Maybe<Scalars['ID']>;
};

export type ClaimByIdResponse = ClaimByIdResponseSuccess | ResponseError;

export type ClaimByIdResponseSuccess = {
  __typename?: 'ClaimByIDResponseSuccess';
  claim: Claim;
};

export type ClaimEdge = {
  __typename?: 'ClaimEdge';
  cursor: Scalars['Timestamp'];
  node: Claim;
};

export type ClaimPageInfo = {
  __typename?: 'ClaimPageInfo';
  endCursor?: Maybe<Scalars['Timestamp']>;
  hasNextPage: Scalars['Boolean'];
};

export enum ClaimRedemptionStatus {
  Answered = 'Answered',
  Awaiting = 'Awaiting',
  InProgress = 'InProgress',
  Revoked = 'Revoked',
  Rewarded = 'Rewarded',
  Started = 'Started'
}

export enum ClaimStatus {
  Complete = 'complete',
  Expired = 'expired',
  Pending = 'pending',
  Unverified = 'unverified'
}

export type ClaimTimestamps = {
  __typename?: 'ClaimTimestamps';
  completedAt?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export enum ClaimType {
  Airdrop = 'airdrop',
  OneTime = 'one_time',
  Referral = 'referral',
  Reward = 'reward'
}

export type ClaimerStatsForLootboxTournamentResponse = ClaimerStatsForLootboxTournamentResponseSuccess | ResponseError;

export type ClaimerStatsForLootboxTournamentResponseSuccess = {
  __typename?: 'ClaimerStatsForLootboxTournamentResponseSuccess';
  data: Array<ClaimerStatsForLootboxTournamentRow>;
};

export type ClaimerStatsForLootboxTournamentRow = {
  __typename?: 'ClaimerStatsForLootboxTournamentRow';
  claimCount: Scalars['Int'];
  claimType: Scalars['String'];
  claimerUserID: Scalars['String'];
  lootboxID: Scalars['String'];
  referralType: Scalars['String'];
  totalUserClaimCount: Scalars['Int'];
  userAvatar: Scalars['String'];
  username: Scalars['String'];
};

export type ClaimerStatsForTournamentResponse = ClaimerStatsForTournamentResponseSuccess | ResponseError;

export type ClaimerStatsForTournamentResponseSuccess = {
  __typename?: 'ClaimerStatsForTournamentResponseSuccess';
  data: Array<ClaimerStatsForTournamentRow>;
};

export type ClaimerStatsForTournamentRow = {
  __typename?: 'ClaimerStatsForTournamentRow';
  claimCount: Scalars['Int'];
  claimType: Scalars['String'];
  claimerUserID: Scalars['ID'];
  referralType: Scalars['String'];
  totalUserClaimCount: Scalars['Int'];
  userAvatar: Scalars['String'];
  username: Scalars['String'];
};

export type CompleteClaimPayload = {
  chosenLootboxID?: InputMaybe<Scalars['ID']>;
  chosenPartyBasketId?: InputMaybe<Scalars['ID']>;
  claimId: Scalars['ID'];
};

export type CompleteClaimResponse = CompleteClaimResponseSuccess | ResponseError;

export type CompleteClaimResponseSuccess = {
  __typename?: 'CompleteClaimResponseSuccess';
  claim: Claim;
};

export type ConnectWalletPayload = {
  message: Scalars['String'];
  signedMessage: Scalars['String'];
};

export type ConnectWalletResponse = ConnectWalletResponseSuccess | ResponseError;

export type ConnectWalletResponseSuccess = {
  __typename?: 'ConnectWalletResponseSuccess';
  wallet: Wallet;
};

export type Conquest = {
  __typename?: 'Conquest';
  advertiserID: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  maxBudget?: Maybe<Scalars['Float']>;
  spentBudget?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Timestamp']>;
  status: ConquestStatus;
  title: Scalars['String'];
  tournaments: Array<Scalars['ID']>;
};

export type ConquestPreview = {
  __typename?: 'ConquestPreview';
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export enum ConquestStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive',
  Planned = 'Planned'
}

export type CreateActivationInput = {
  description?: InputMaybe<Scalars['String']>;
  mmp: MeasurementPartnerType;
  mmpAlias: Scalars['String'];
  name: Scalars['String'];
  offerID: Scalars['ID'];
  order?: InputMaybe<Scalars['Int']>;
  pricing: Scalars['Float'];
  status: ActivationStatus;
};

export type CreateActivationPayload = {
  activation: CreateActivationInput;
  offerID: Scalars['ID'];
};

export type CreateActivationResponse = CreateActivationResponseSuccess | ResponseError;

export type CreateActivationResponseSuccess = {
  __typename?: 'CreateActivationResponseSuccess';
  activation: Activation;
};

export type CreateAdPayload = {
  advertiserID: Scalars['ID'];
  creative: CreativeInputCreate;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  placement: Placement;
  publicInfo?: InputMaybe<Scalars['String']>;
  status: AdStatus;
};

export type CreateAdResponse = CreateAdResponseSuccess | ResponseError;

export type CreateAdResponseSuccess = {
  __typename?: 'CreateAdResponseSuccess';
  ad: Ad;
};

export type CreateAdSetPayload = {
  adIDs: Array<Scalars['ID']>;
  advertiserID: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  offerIDs: Array<Scalars['ID']>;
  placement: Placement;
  status: AdSetStatus;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type CreateAdSetResponse = CreateAdSetResponseSuccess | ResponseError;

export type CreateAdSetResponseSuccess = {
  __typename?: 'CreateAdSetResponseSuccess';
  adSet: AdSet;
};

export type CreateClaimPayload = {
  referralSlug: Scalars['ID'];
};

export type CreateClaimResponse = CreateClaimResponseSuccess | ResponseError;

export type CreateClaimResponseSuccess = {
  __typename?: 'CreateClaimResponseSuccess';
  claim: Claim;
};

export type CreateConquestPayload = {
  title: Scalars['String'];
};

export type CreateConquestResponse = CreateConquestResponseSuccess | ResponseError;

export type CreateConquestResponseSuccess = {
  __typename?: 'CreateConquestResponseSuccess';
  conquest?: Maybe<Conquest>;
};

export type CreateLootboxPayload = {
  airdropMetadata?: InputMaybe<AirdropMetadataCreateInput>;
  backgroundImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  joinCommunityUrl?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  maxTickets?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nftBountyValue?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<Scalars['String']>;
  tournamentID: Scalars['String'];
  type?: InputMaybe<LootboxType>;
};

export type CreateLootboxResponse = CreateLootboxResponseSuccess | ResponseError;

export type CreateLootboxResponseSuccess = {
  __typename?: 'CreateLootboxResponseSuccess';
  lootbox: Lootbox;
};

export type CreateOfferPayload = {
  advertiserID: Scalars['ID'];
  affiliateBaseLink?: InputMaybe<Scalars['String']>;
  airdropMetadata?: InputMaybe<OfferAirdropMetadataCreateInput>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Timestamp']>;
  image?: InputMaybe<Scalars['String']>;
  maxBudget?: InputMaybe<Scalars['Float']>;
  mmp?: InputMaybe<MeasurementPartnerType>;
  startDate?: InputMaybe<Scalars['Timestamp']>;
  status: OfferStatus;
  strategy?: InputMaybe<OfferStrategyType>;
  title: Scalars['String'];
};

export type CreateOfferResponse = CreateOfferResponseSuccess | ResponseError;

export type CreateOfferResponseSuccess = {
  __typename?: 'CreateOfferResponseSuccess';
  offer: Offer;
};

export type CreatePartyBasketPayload = {
  address: Scalars['ID'];
  chainIdHex: Scalars['String'];
  creatorAddress: Scalars['ID'];
  factory: Scalars['ID'];
  joinCommunityUrl?: InputMaybe<Scalars['String']>;
  lootboxAddress: Scalars['ID'];
  maxClaimsAllowed?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  nftBountyValue?: InputMaybe<Scalars['String']>;
};

export type CreatePartyBasketResponse = CreatePartyBasketResponseSuccess | ResponseError;

export type CreatePartyBasketResponseSuccess = {
  __typename?: 'CreatePartyBasketResponseSuccess';
  partyBasket: PartyBasket;
};

export type CreateReferralPayload = {
  campaignName?: InputMaybe<Scalars['String']>;
  lootboxID?: InputMaybe<Scalars['ID']>;
  partyBasketId?: InputMaybe<Scalars['ID']>;
  promoterId?: InputMaybe<Scalars['ID']>;
  referrerId?: InputMaybe<Scalars['ID']>;
  tournamentId: Scalars['ID'];
  type?: InputMaybe<ReferralType>;
};

export type CreateReferralResponse = CreateReferralResponseSuccess | ResponseError;

export type CreateReferralResponseSuccess = {
  __typename?: 'CreateReferralResponseSuccess';
  referral: Referral;
};

export type CreateTournamentPayload = {
  communityURL?: InputMaybe<Scalars['String']>;
  coverPhoto?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  organizer?: InputMaybe<Scalars['ID']>;
  prize?: InputMaybe<Scalars['String']>;
  streams?: InputMaybe<Array<StreamInput>>;
  title: Scalars['String'];
  tournamentDate?: InputMaybe<Scalars['Timestamp']>;
  tournamentLink?: InputMaybe<Scalars['String']>;
};

export type CreateTournamentResponse = CreateTournamentResponseSuccess | ResponseError;

export type CreateTournamentResponseSuccess = {
  __typename?: 'CreateTournamentResponseSuccess';
  tournament: Tournament;
};

export type CreateUserRecordPayload = {
  email?: InputMaybe<Scalars['String']>;
};

export type CreateUserResponse = CreateUserResponseSuccess | ResponseError;

export type CreateUserResponseSuccess = {
  __typename?: 'CreateUserResponseSuccess';
  user: User;
};

export type CreateUserWithPasswordPayload = {
  email: Scalars['EmailAddress'];
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['PhoneNumber']>;
};

export type CreateUserWithWalletPayload = {
  email: Scalars['EmailAddress'];
  message: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['PhoneNumber']>;
  signedMessage: Scalars['String'];
};

export type Creative = {
  __typename?: 'Creative';
  adID: Scalars['ID'];
  advertiserID: Scalars['ID'];
  aspectRatio: AspectRatio;
  callToAction: Scalars['String'];
  creativeLinks: Array<Scalars['String']>;
  creativeType: CreativeType;
  infographicLink?: Maybe<Scalars['String']>;
  themeColor: Scalars['String'];
  thumbnail: Scalars['String'];
};

export type CreativeInputCreate = {
  aspectRatio: AspectRatio;
  callToAction: Scalars['String'];
  creativeLinks: Array<Scalars['String']>;
  creativeType: CreativeType;
  infographicLink?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<Scalars['String']>;
  thumbnail: Scalars['String'];
};

export type CreativeInputEdit = {
  aspectRatio?: InputMaybe<AspectRatio>;
  callToAction?: InputMaybe<Scalars['String']>;
  creativeLinks?: InputMaybe<Array<Scalars['String']>>;
  creativeType?: InputMaybe<CreativeType>;
  infographicLink?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export enum CreativeType {
  Image = 'image',
  Video = 'video'
}

export type DailyClaimStatisticsForTournamentInput = {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
  tournamentID: Scalars['ID'];
};

export type DailyClaimStatisticsForTournamentResponse = DailyClaimStatisticsForTournamentResponseSuccess | ResponseError;

export type DailyClaimStatisticsForTournamentResponseSuccess = {
  __typename?: 'DailyClaimStatisticsForTournamentResponseSuccess';
  data: Array<DailyClaimStatisticsForTournamentRow>;
};

export type DailyClaimStatisticsForTournamentRow = {
  __typename?: 'DailyClaimStatisticsForTournamentRow';
  claimCount: Scalars['Int'];
  date: Scalars['String'];
  day: Scalars['Int'];
  weekNormalized: Scalars['Int'];
};

export type DealConfigTournament = {
  __typename?: 'DealConfigTournament';
  adSets: Array<AdSetPreviewInDealConfig>;
  advertiserAvatar?: Maybe<Scalars['String']>;
  advertiserID: Scalars['ID'];
  advertiserName: Scalars['String'];
  offerID: Scalars['ID'];
  offerName: Scalars['String'];
  rateQuoteConfigs: Array<RateQuoteDealConfig>;
  strategy: OfferStrategyType;
  tournamentID: Scalars['ID'];
};

export type DecisionAdApiBetaV2Payload = {
  claimID?: InputMaybe<Scalars['ID']>;
  placement: Placement;
  promoterID?: InputMaybe<Scalars['ID']>;
  sessionID: Scalars['ID'];
  tournamentID: Scalars['ID'];
  userID: Scalars['ID'];
};

export type DecisionAdApiBetaV2Response = DecisionAdApiBetaV2ResponseSuccess | ResponseError;

export type DecisionAdApiBetaV2ResponseSuccess = {
  __typename?: 'DecisionAdApiBetaV2ResponseSuccess';
  ad?: Maybe<AdServed>;
};

export type DeleteStreamResponse = DeleteStreamResponseSuccess | ResponseError;

export type DeleteStreamResponseSuccess = {
  __typename?: 'DeleteStreamResponseSuccess';
  stream: Stream;
};

export type DeleteTournamentResponse = DeleteTournamentResponseSuccess | ResponseError;

export type DeleteTournamentResponseSuccess = {
  __typename?: 'DeleteTournamentResponseSuccess';
  tournament: Tournament;
};

export type EditActivationInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
  pricing?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<ActivationStatus>;
};

export type EditActivationPayload = {
  activation: EditActivationInput;
  activationID: Scalars['ID'];
};

export type EditActivationResponse = EditActivationResponseSuccess | ResponseError;

export type EditActivationResponseSuccess = {
  __typename?: 'EditActivationResponseSuccess';
  activation: Activation;
};

export type EditAdPayload = {
  creative?: InputMaybe<CreativeInputEdit>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  placement?: InputMaybe<Placement>;
  publicInfo?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<AdStatus>;
};

export type EditAdResponse = EditAdResponseSuccess | ResponseError;

export type EditAdResponseSuccess = {
  __typename?: 'EditAdResponseSuccess';
  ad: Ad;
};

export type EditAdSetPayload = {
  adIDs?: InputMaybe<Array<Scalars['ID']>>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  offerIDs?: InputMaybe<Array<Scalars['ID']>>;
  placement?: InputMaybe<Placement>;
  status?: InputMaybe<AdSetStatus>;
  thumbnail?: InputMaybe<Scalars['String']>;
};

export type EditAdSetResponse = EditAdSetResponseSuccess | ResponseError;

export type EditAdSetResponseSuccess = {
  __typename?: 'EditAdSetResponseSuccess';
  adSet: AdSet;
};

export type EditLootboxPayload = {
  backgroundImage?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  joinCommunityUrl?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  lootboxID: Scalars['ID'];
  maxTickets?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nftBountyValue?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<LootboxStatus>;
  symbol?: InputMaybe<Scalars['String']>;
  themeColor?: InputMaybe<Scalars['String']>;
};

export type EditLootboxResponse = EditLootboxResponseSuccess | ResponseError;

export type EditLootboxResponseSuccess = {
  __typename?: 'EditLootboxResponseSuccess';
  lootbox: Lootbox;
};

export type EditOfferPayload = {
  advertiserID: Scalars['ID'];
  airdropMetadata?: InputMaybe<OfferAirdropMetadataEditInput>;
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  lootboxTemplateID?: InputMaybe<Scalars['ID']>;
  maxBudget?: InputMaybe<Scalars['Float']>;
  startDate?: InputMaybe<Scalars['Timestamp']>;
  status: OfferStatus;
  title?: InputMaybe<Scalars['String']>;
};

export type EditOfferResponse = EditOfferResponseSuccess | ResponseError;

export type EditOfferResponseSuccess = {
  __typename?: 'EditOfferResponseSuccess';
  offer: Offer;
};

export type EditPartyBasketPayload = {
  id: Scalars['String'];
  joinCommunityUrl?: InputMaybe<Scalars['String']>;
  maxClaimsAllowed?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  nftBountyValue?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<PartyBasketStatus>;
};

export type EditPartyBasketResponse = EditPartyBasketResponseSuccess | ResponseError;

export type EditPartyBasketResponseSuccess = {
  __typename?: 'EditPartyBasketResponseSuccess';
  partyBasket: PartyBasket;
};

export type EditStreamPayload = {
  id: Scalars['ID'];
  name: Scalars['String'];
  type: StreamType;
  url: Scalars['String'];
};

export type EditStreamResponse = EditStreamResponseSuccess | ResponseError;

export type EditStreamResponseSuccess = {
  __typename?: 'EditStreamResponseSuccess';
  stream: Stream;
};

export type EditTournamentPayload = {
  communityURL?: InputMaybe<Scalars['String']>;
  coverPhoto?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  magicLink?: InputMaybe<Scalars['String']>;
  prize?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  tournamentDate?: InputMaybe<Scalars['Timestamp']>;
  tournamentLink?: InputMaybe<Scalars['String']>;
};

export type EditTournamentResponse = EditTournamentResponseSuccess | ResponseError;

export type EditTournamentResponseSuccess = {
  __typename?: 'EditTournamentResponseSuccess';
  tournament: Tournament;
};

export type EditWhitelistAffiliateToOfferPayload = {
  advertiserID: Scalars['ID'];
  affiliateID: Scalars['ID'];
  id: Scalars['ID'];
  offerID: Scalars['ID'];
  status: OrganizerOfferWhitelistStatus;
};

export type EditWhitelistAffiliateToOfferResponse = EditWhitelistAffiliateToOfferResponseSuccess | ResponseError;

export type EditWhitelistAffiliateToOfferResponseSuccess = {
  __typename?: 'EditWhitelistAffiliateToOfferResponseSuccess';
  whitelist: OrganizerOfferWhitelist;
};

export type EventMetadata = {
  __typename?: 'EventMetadata';
  clickUrl?: Maybe<Scalars['String']>;
  timeElapsed?: Maybe<Scalars['Int']>;
  verificationUrl?: Maybe<Scalars['String']>;
};

export type FanListRowForTournament = {
  __typename?: 'FanListRowForTournament';
  avatar: Scalars['String'];
  claimsCount: Scalars['Int'];
  favoriteLootbox?: Maybe<FansListFavoriteLootbox>;
  joinedDate: Scalars['Timestamp'];
  participationRewardsCount: Scalars['Int'];
  referralsCount: Scalars['Int'];
  userID: Scalars['ID'];
  username: Scalars['String'];
};

export type FansListFavoriteLootbox = {
  __typename?: 'FansListFavoriteLootbox';
  count: Scalars['Int'];
  lootboxID: Scalars['ID'];
  name: Scalars['String'];
  stampImage: Scalars['String'];
};

export type FansListForTournamentResponse = FansListForTournamentResponseSuccess | ResponseError;

export type FansListForTournamentResponseSuccess = {
  __typename?: 'FansListForTournamentResponseSuccess';
  fans: Array<FanListRowForTournament>;
  tournamentID: Scalars['ID'];
};

export type GenerateClaimsCsvPayload = {
  tournamentId: Scalars['ID'];
};

export type GenerateClaimsCsvResponse = GenerateClaimsCsvResponseSuccess | ResponseError;

export type GenerateClaimsCsvResponseSuccess = {
  __typename?: 'GenerateClaimsCsvResponseSuccess';
  csv: Scalars['String'];
};

export type GetAnonTokenResponse = GetAnonTokenResponseSuccess | ResponseError;

export type GetAnonTokenResponseSuccess = {
  __typename?: 'GetAnonTokenResponseSuccess';
  email: Scalars['String'];
  token: Scalars['String'];
};

export type GetConquestResponse = GetConquestResponseSuccess | ResponseError;

export type GetConquestResponseSuccess = {
  __typename?: 'GetConquestResponseSuccess';
  conquest: Conquest;
  tournaments: Array<TournamentPreview>;
};

export type GetLootboxByAddressResponse = LootboxResponseSuccess | ResponseError;

export type GetLootboxByIdResponse = LootboxResponseSuccess | ResponseError;

export type GetMyProfileResponse = GetMyProfileSuccess | ResponseError;

export type GetMyProfileSuccess = {
  __typename?: 'GetMyProfileSuccess';
  user: User;
};

export type GetPartyBasketResponse = GetPartyBasketResponseSuccess | ResponseError;

export type GetPartyBasketResponseSuccess = {
  __typename?: 'GetPartyBasketResponseSuccess';
  partyBasket: PartyBasket;
};

export type GetWhitelistSignaturesPayload = {
  message: Scalars['String'];
  signedMessage: Scalars['String'];
};

export type GetWhitelistSignaturesResponse = GetWhitelistSignaturesResponseSuccess | ResponseError;

export type GetWhitelistSignaturesResponseSuccess = {
  __typename?: 'GetWhitelistSignaturesResponseSuccess';
  signatures: Array<Maybe<PartyBasketWhitelistSignature>>;
};

export type InputCursor = {
  createdAt: Scalars['Timestamp'];
  impression: Scalars['Int'];
};

export type ListAdSetsOfAdvertiserResponse = ListAdSetsOfAdvertiserResponseSuccess | ResponseError;

export type ListAdSetsOfAdvertiserResponseSuccess = {
  __typename?: 'ListAdSetsOfAdvertiserResponseSuccess';
  adSets: Array<AdSet>;
};

export type ListAdsOfAdvertiserResponse = ListAdsOfAdvertiserResponseSuccess | ResponseError;

export type ListAdsOfAdvertiserResponseSuccess = {
  __typename?: 'ListAdsOfAdvertiserResponseSuccess';
  ads: Array<Ad>;
};

export type ListAvailableLootboxesForClaimResponse = ListAvailableLootboxesForClaimResponseSuccess | ResponseError;

export type ListAvailableLootboxesForClaimResponseSuccess = {
  __typename?: 'ListAvailableLootboxesForClaimResponseSuccess';
  lootboxOptions?: Maybe<Array<LootboxTournamentSnapshot>>;
};

export type ListConquestPreviewsResponse = ListConquestPreviewsResponseSuccess | ResponseError;

export type ListConquestPreviewsResponseSuccess = {
  __typename?: 'ListConquestPreviewsResponseSuccess';
  conquests: Array<ConquestPreview>;
};

export type ListCreatedOffersResponse = ListCreatedOffersResponseSuccess | ResponseError;

export type ListCreatedOffersResponseSuccess = {
  __typename?: 'ListCreatedOffersResponseSuccess';
  offers: Array<OfferPreview>;
};

export type ListEventsOfAdvertiserResponse = ListEventsOfAdvertiserResponseSuccess | ResponseError;

export type ListEventsOfAdvertiserResponseSuccess = {
  __typename?: 'ListEventsOfAdvertiserResponseSuccess';
  tournaments: Array<TournamentPreview>;
};

export type ListOffersAvailableForOrganizerResponse = ListOffersAvailableForOrganizerResponseSuccess | ResponseError;

export type ListOffersAvailableForOrganizerResponseSuccess = {
  __typename?: 'ListOffersAvailableForOrganizerResponseSuccess';
  offers: Array<OfferAffiliateView>;
};

export type ListPartnersOfAdvertiserResponse = ListPartnersOfAdvertiserResponseSuccess | ResponseError;

export type ListPartnersOfAdvertiserResponseSuccess = {
  __typename?: 'ListPartnersOfAdvertiserResponseSuccess';
  partners: Array<Affiliate>;
};

export type ListPotentialAirdropClaimersPayload = {
  offerID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type ListPotentialAirdropClaimersResponse = ListPotentialAirdropClaimersResponseSuccess | ResponseError;

export type ListPotentialAirdropClaimersResponseSuccess = {
  __typename?: 'ListPotentialAirdropClaimersResponseSuccess';
  offer: OfferAirdropPromoterView;
  potentialClaimers: Array<PotentialAirdropClaimer>;
};

export type ListWhitelistedAffiliatesToOfferPayload = {
  offerID: Scalars['ID'];
};

export type ListWhitelistedAffiliatesToOfferResponse = ListWhitelistedAffiliatesToOfferResponseSuccess | ResponseError;

export type ListWhitelistedAffiliatesToOfferResponseSuccess = {
  __typename?: 'ListWhitelistedAffiliatesToOfferResponseSuccess';
  whitelists: Array<OrganizerOfferWhitelistWithProfile>;
};

export type Lootbox = {
  __typename?: 'Lootbox';
  address?: Maybe<Scalars['ID']>;
  airdropMetadata?: Maybe<LootboxAirdropMetadata>;
  airdropQuestions?: Maybe<Array<LootboxAirdropMetadataQuestion>>;
  backgroundImage: Scalars['String'];
  baseTokenURI?: Maybe<Scalars['String']>;
  blockNumber?: Maybe<Scalars['String']>;
  chainIdDecimal?: Maybe<Scalars['String']>;
  chainIdHex?: Maybe<Scalars['String']>;
  chainName?: Maybe<Scalars['String']>;
  creationNonce?: Maybe<Scalars['String']>;
  creatorAddress?: Maybe<Scalars['ID']>;
  creatorID?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  factory?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
  joinCommunityUrl?: Maybe<Scalars['String']>;
  logo: Scalars['String'];
  maxTickets: Scalars['Int'];
  /** @deprecated Use metadataV2 */
  metadata?: Maybe<LootboxMetadata>;
  name: Scalars['String'];
  nftBountyValue?: Maybe<Scalars['String']>;
  /** @deprecated Use Cosmic Lootbox Instead */
  partyBaskets?: Maybe<Array<PartyBasket>>;
  runningCompletedClaims: Scalars['Int'];
  stampImage: Scalars['String'];
  status: LootboxStatus;
  symbol: Scalars['String'];
  themeColor: Scalars['String'];
  timestamps?: Maybe<LootboxTimestamps>;
  /** @deprecated Use LootboxTournamentSnapshot subcollection instead - will be removed after Cosmic */
  tournamentId?: Maybe<Scalars['ID']>;
  tournamentSnapshot?: Maybe<LootboxTournamentSnapshot>;
  transactionHash?: Maybe<Scalars['String']>;
  type?: Maybe<LootboxType>;
  userClaims?: Maybe<LootboxUserClaimPageInfoResponse>;
  variant?: Maybe<LootboxVariant>;
};


export type LootboxTournamentSnapshotArgs = {
  tournamentID?: InputMaybe<Scalars['ID']>;
};


export type LootboxUserClaimsArgs = {
  cursor?: InputMaybe<UserClaimsCursor>;
  first: Scalars['Int'];
};

export type LootboxAirdropMetadata = {
  __typename?: 'LootboxAirdropMetadata';
  advertiserID: Scalars['ID'];
  advertiserName?: Maybe<Scalars['String']>;
  batch: Scalars['ID'];
  callToActionLink?: Maybe<Scalars['String']>;
  instructionsCallToAction?: Maybe<Scalars['String']>;
  instructionsLink?: Maybe<Scalars['String']>;
  lootboxID: Scalars['ID'];
  offerID: Scalars['ID'];
  oneLiner?: Maybe<Scalars['String']>;
  organizerID?: Maybe<Scalars['ID']>;
  questions: Array<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  tournamentID?: Maybe<Scalars['ID']>;
  value?: Maybe<Scalars['String']>;
};

export type LootboxAirdropMetadataQuestion = {
  __typename?: 'LootboxAirdropMetadataQuestion';
  batch: Scalars['ID'];
  id: Scalars['ID'];
  order?: Maybe<Scalars['Int']>;
  question: Scalars['String'];
  type: QuestionFieldType;
};

export type LootboxChain = {
  __typename?: 'LootboxChain';
  address: Scalars['ID'];
  chainIdDecimal: Scalars['String'];
  chainIdHex: Scalars['String'];
  chainName: Scalars['String'];
  title: Scalars['String'];
};

export type LootboxCompletedClaimsForTournamentResponse = LootboxCompletedClaimsForTournamentResponseSuccess | ResponseError;

export type LootboxCompletedClaimsForTournamentResponseSuccess = {
  __typename?: 'LootboxCompletedClaimsForTournamentResponseSuccess';
  data: Array<LootboxCompletedClaimsForTournamentRow>;
};

export type LootboxCompletedClaimsForTournamentRow = {
  __typename?: 'LootboxCompletedClaimsForTournamentRow';
  claimCount: Scalars['Int'];
  lootboxID: Scalars['ID'];
  lootboxImg: Scalars['String'];
  lootboxName: Scalars['String'];
  maxTickets: Scalars['Int'];
};

export type LootboxCustomSchema = {
  __typename?: 'LootboxCustomSchema';
  chain: LootboxChain;
  lootbox: LootboxCustomSchemaData;
  socials: LootboxSocials;
  version: Scalars['String'];
};

export type LootboxCustomSchemaData = {
  __typename?: 'LootboxCustomSchemaData';
  backgroundColor: Scalars['String'];
  backgroundImage: Scalars['String'];
  badgeImage: Scalars['String'];
  basisPointsReturnTarget: Scalars['String'];
  blockNumber: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  factory: Scalars['ID'];
  fundraisingTarget: Scalars['String'];
  fundraisingTargetMax: Scalars['String'];
  image: Scalars['String'];
  lootboxThemeColor: Scalars['String'];
  name: Scalars['String'];
  pricePerShare: Scalars['String'];
  returnAmountTarget: Scalars['String'];
  targetPaybackDate?: Maybe<Scalars['Timestamp']>;
  tournamentId?: Maybe<Scalars['ID']>;
  transactionHash: Scalars['String'];
};

export type LootboxFeedEdge = {
  __typename?: 'LootboxFeedEdge';
  cursor: Scalars['ID'];
  node: LootboxSnapshot;
};

export type LootboxFeedResponse = LootboxFeedResponseSuccess | ResponseError;

export type LootboxFeedResponseSuccess = {
  __typename?: 'LootboxFeedResponseSuccess';
  edges: Array<LootboxFeedEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type LootboxMetadata = {
  __typename?: 'LootboxMetadata';
  /** @deprecated removing after Cosmic Lootbox Refactor */
  animation_url?: Maybe<Scalars['String']>;
  /** @deprecated removing after Cosmic Lootbox Refactor */
  background_color: Scalars['String'];
  /** @deprecated removing after Cosmic Lootbox Refactor */
  description: Scalars['String'];
  /** @deprecated removing after Cosmic Lootbox Refactor */
  external_url: Scalars['String'];
  /** @deprecated removing after Cosmic Lootbox Refactor */
  image: Scalars['String'];
  /** @deprecated removing after Cosmic Lootbox Refactor */
  lootboxCustomSchema?: Maybe<LootboxCustomSchema>;
  /** @deprecated removing after Cosmic Lootbox Refactor */
  name: Scalars['String'];
  /** @deprecated removing after Cosmic Lootbox Refactor */
  youtube_url?: Maybe<Scalars['String']>;
};

export type LootboxResponseSuccess = {
  __typename?: 'LootboxResponseSuccess';
  lootbox: Lootbox;
};

export type LootboxSnapshot = {
  __typename?: 'LootboxSnapshot';
  address?: Maybe<Scalars['ID']>;
  backgroundColor: Scalars['String'];
  backgroundImage: Scalars['String'];
  description: Scalars['String'];
  image: Scalars['String'];
  issuer?: Maybe<Scalars['ID']>;
  metadataDownloadUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  stampImage: Scalars['String'];
  timestamps: LootboxSnapshotTimestamps;
  type?: Maybe<LootboxType>;
};

export type LootboxSnapshotTimestamps = {
  __typename?: 'LootboxSnapshotTimestamps';
  createdAt: Scalars['Timestamp'];
  depositEmailSentAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export type LootboxSocials = {
  __typename?: 'LootboxSocials';
  discord?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  snapchat?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type LootboxSocialsWithoutEmail = {
  __typename?: 'LootboxSocialsWithoutEmail';
  discord?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  snapchat?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export enum LootboxStatus {
  Active = 'active',
  Disabled = 'disabled',
  SoldOut = 'soldOut'
}

export type LootboxTicket = {
  __typename?: 'LootboxTicket';
  createdAt: Scalars['Timestamp'];
  digest: Scalars['ID'];
  id: Scalars['ID'];
  lootboxAddress: Scalars['ID'];
  lootboxID: Scalars['ID'];
  metadataURL: Scalars['String'];
  mintWhitelistID: Scalars['ID'];
  minterAddress: Scalars['ID'];
  minterUserID: Scalars['ID'];
  nonce: Scalars['ID'];
  stampImage: Scalars['String'];
  ticketID: Scalars['ID'];
};

export type LootboxTimestamps = {
  __typename?: 'LootboxTimestamps';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export type LootboxTournamentSnapshot = {
  __typename?: 'LootboxTournamentSnapshot';
  address?: Maybe<Scalars['ID']>;
  creatorID: Scalars['ID'];
  description: Scalars['String'];
  id: Scalars['ID'];
  impressionPriority: Scalars['Int'];
  lootbox?: Maybe<Lootbox>;
  lootboxCreatorID: Scalars['ID'];
  lootboxID: Scalars['ID'];
  name: Scalars['String'];
  /** @deprecated Will be removed after Cosmic Lootbox refactor */
  partyBaskets?: Maybe<Array<PartyBasket>>;
  stampImage: Scalars['String'];
  status: LootboxTournamentStatus;
  timestamps: LootboxSnapshotTimestamps;
  type?: Maybe<Scalars['String']>;
};

export type LootboxTournamentSnapshotCursor = {
  __typename?: 'LootboxTournamentSnapshotCursor';
  createdAt: Scalars['Timestamp'];
  impression: Scalars['Int'];
};

export enum LootboxTournamentStatus {
  Active = 'active',
  Disabled = 'disabled'
}

export enum LootboxType {
  Airdrop = 'Airdrop',
  Compete = 'Compete'
}

export type LootboxUserClaimPageInfo = {
  __typename?: 'LootboxUserClaimPageInfo';
  endCursor?: Maybe<Scalars['Timestamp']>;
  hasNextPage: Scalars['Boolean'];
};

export type LootboxUserClaimPageInfoResponse = {
  __typename?: 'LootboxUserClaimPageInfoResponse';
  _lootboxID: Scalars['ID'];
  edges: Array<ClaimEdge>;
  pageInfo: ClaimPageInfo;
  totalCount?: Maybe<Scalars['Int']>;
};

export enum LootboxVariant {
  Cosmic = 'cosmic',
  Escrow = 'escrow',
  Instant = 'instant'
}

export type MarketplacePreviewAffiliate = {
  __typename?: 'MarketplacePreviewAffiliate';
  audienceSize?: Maybe<Scalars['Int']>;
  avatar?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicContactEmail?: Maybe<Scalars['String']>;
  rank?: Maybe<OrganizerRank>;
  website?: Maybe<Scalars['String']>;
};

export type MarketplacePreviewOffer = {
  __typename?: 'MarketplacePreviewOffer';
  advertiserAvatar: Scalars['String'];
  advertiserID: Scalars['ID'];
  advertiserName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  lowerEarn: Scalars['Float'];
  title: Scalars['String'];
  upperEarn: Scalars['Float'];
};

export enum MeasurementPartnerType {
  Appsflyer = 'Appsflyer',
  GoogleTagManager = 'GoogleTagManager',
  LootboxAppWebsiteVisit = 'LootboxAppWebsiteVisit',
  Manual = 'Manual',
  ServerToServer = 'ServerToServer'
}

export type Memo = {
  __typename?: 'Memo';
  id: Scalars['ID'];
};

export type MintWhitelistSignature = {
  __typename?: 'MintWhitelistSignature';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  digest: Scalars['ID'];
  id: Scalars['ID'];
  isRedeemed: Scalars['Boolean'];
  lootboxAddress: Scalars['ID'];
  lootboxID: Scalars['ID'];
  lootboxTicket?: Maybe<LootboxTicket>;
  lootboxTicketID?: Maybe<Scalars['ID']>;
  nonce: Scalars['String'];
  signature: Scalars['String'];
  signer: Scalars['ID'];
  updatedAt: Scalars['Timestamp'];
  whitelistedAddress: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addOfferAdSetToTournament: AddOfferAdSetToTournamentResponse;
  addStream: AddStreamResponse;
  addUpdatePromoterRateQuoteInTournament: AddUpdatePromoterRateQuoteInTournamentResponse;
  answerAirdropQuestion: AnswerAirdropQuestionResponse;
  authenticateWallet: AuthenticateWalletResponse;
  bulkCreateReferral: BulkCreateReferralResponse;
  bulkEditLootboxTournamentSnapshots: BulkEditLootboxTournamentSnapshotsResponse;
  bulkWhitelist: BulkWhitelistResponse;
  completeClaim: CompleteClaimResponse;
  connectWallet: ConnectWalletResponse;
  createActivation: CreateActivationResponse;
  createAd: CreateAdResponse;
  createAdSet: CreateAdSetResponse;
  createClaim: CreateClaimResponse;
  createConquest: CreateConquestResponse;
  createLootbox: CreateLootboxResponse;
  createOffer: CreateOfferResponse;
  createPartyBasket: CreatePartyBasketResponse;
  createReferral: CreateReferralResponse;
  createTournament: CreateTournamentResponse;
  createUserRecord: CreateUserResponse;
  createUserWithPassword: CreateUserResponse;
  createUserWithWallet: CreateUserResponse;
  deleteStream: DeleteStreamResponse;
  deleteTournament: DeleteTournamentResponse;
  editActivation: EditActivationResponse;
  editAd: EditAdResponse;
  editAdSet: EditAdSetResponse;
  editLootbox: EditLootboxResponse;
  editOffer: EditOfferResponse;
  editPartyBasket: EditPartyBasketResponse;
  editStream: EditStreamResponse;
  editTournament: EditTournamentResponse;
  editWhitelistAffiliateToOffer: EditWhitelistAffiliateToOfferResponse;
  generateClaimsCsv: GenerateClaimsCsvResponse;
  getWhitelistSignatures: GetWhitelistSignaturesResponse;
  redeemSignature: RedeemSignatureResponse;
  removeOfferAdSetFromTournament: RemoveOfferAdSetFromTournamentResponse;
  removePromoterFromTournament: RemovePromoterFromTournamentResponse;
  removeWallet: RemoveWalletResponse;
  syncProviderUser: SyncProviderUserResponse;
  updateAdvertiserDetails: UpdateAdvertiserDetailsResponse;
  updateAffiliateDetails: UpdateAffiliateDetailsResponse;
  updateClaimRedemptionStatus: UpdateClaimRedemptionStatusResponse;
  updateConquest: UpdateConquestResponse;
  updateUser: UpdateUserResponse;
  updateUserAuth: UpdateUserResponse;
  upgradeToAdvertiser: UpgradeToAdvertiserResponse;
  upgradeToAffiliate: UpgradeToAffiliateResponse;
  version: Scalars['ID'];
  whitelistAffiliateToOffer: WhitelistAffiliateToOfferResponse;
  whitelistAllUnassignedClaims: WhitelistAllUnassignedClaimsResponse;
  whitelistMyLootboxClaims: WhitelistMyLootboxClaimsResponse;
};


export type MutationAddOfferAdSetToTournamentArgs = {
  payload: AddOfferAdSetToTournamentPayload;
};


export type MutationAddStreamArgs = {
  payload: AddStreamPayload;
};


export type MutationAddUpdatePromoterRateQuoteInTournamentArgs = {
  payload: AddUpdatePromoterRateQuoteToTournamentPayload;
};


export type MutationAnswerAirdropQuestionArgs = {
  payload: AnswerAirdropQuestionPayload;
};


export type MutationAuthenticateWalletArgs = {
  payload: AuthenticateWalletPayload;
};


export type MutationBulkCreateReferralArgs = {
  payload: BulkCreateReferralPayload;
};


export type MutationBulkEditLootboxTournamentSnapshotsArgs = {
  payload: BulkEditLootboxTournamentSnapshotsPayload;
};


export type MutationBulkWhitelistArgs = {
  payload: BulkWhitelistPayload;
};


export type MutationCompleteClaimArgs = {
  payload: CompleteClaimPayload;
};


export type MutationConnectWalletArgs = {
  payload: ConnectWalletPayload;
};


export type MutationCreateActivationArgs = {
  payload: CreateActivationPayload;
};


export type MutationCreateAdArgs = {
  payload: CreateAdPayload;
};


export type MutationCreateAdSetArgs = {
  payload: CreateAdSetPayload;
};


export type MutationCreateClaimArgs = {
  payload: CreateClaimPayload;
};


export type MutationCreateConquestArgs = {
  advertiserID: Scalars['ID'];
  payload: CreateConquestPayload;
};


export type MutationCreateLootboxArgs = {
  payload: CreateLootboxPayload;
};


export type MutationCreateOfferArgs = {
  advertiserID: Scalars['ID'];
  payload: CreateOfferPayload;
};


export type MutationCreatePartyBasketArgs = {
  payload: CreatePartyBasketPayload;
};


export type MutationCreateReferralArgs = {
  payload: CreateReferralPayload;
};


export type MutationCreateTournamentArgs = {
  payload: CreateTournamentPayload;
};


export type MutationCreateUserRecordArgs = {
  payload?: InputMaybe<CreateUserRecordPayload>;
};


export type MutationCreateUserWithPasswordArgs = {
  payload: CreateUserWithPasswordPayload;
};


export type MutationCreateUserWithWalletArgs = {
  payload: CreateUserWithWalletPayload;
};


export type MutationDeleteStreamArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTournamentArgs = {
  id: Scalars['ID'];
};


export type MutationEditActivationArgs = {
  payload: EditActivationPayload;
};


export type MutationEditAdArgs = {
  payload: EditAdPayload;
};


export type MutationEditAdSetArgs = {
  payload: EditAdSetPayload;
};


export type MutationEditLootboxArgs = {
  payload: EditLootboxPayload;
};


export type MutationEditOfferArgs = {
  payload: EditOfferPayload;
};


export type MutationEditPartyBasketArgs = {
  payload: EditPartyBasketPayload;
};


export type MutationEditStreamArgs = {
  payload: EditStreamPayload;
};


export type MutationEditTournamentArgs = {
  payload: EditTournamentPayload;
};


export type MutationEditWhitelistAffiliateToOfferArgs = {
  payload: EditWhitelistAffiliateToOfferPayload;
};


export type MutationGenerateClaimsCsvArgs = {
  payload: GenerateClaimsCsvPayload;
};


export type MutationGetWhitelistSignaturesArgs = {
  payload: GetWhitelistSignaturesPayload;
};


export type MutationRedeemSignatureArgs = {
  payload: RedeemSignaturePayload;
};


export type MutationRemoveOfferAdSetFromTournamentArgs = {
  payload: RemoveOfferAdSetFromTournamentPayload;
};


export type MutationRemovePromoterFromTournamentArgs = {
  payload: RemovePromoterFromTournamentPayload;
};


export type MutationRemoveWalletArgs = {
  payload: RemoveWalletPayload;
};


export type MutationUpdateAdvertiserDetailsArgs = {
  advertiserID: Scalars['ID'];
  payload: UpdateAdvertiserDetailsPayload;
};


export type MutationUpdateAffiliateDetailsArgs = {
  affiliateID: Scalars['ID'];
  payload: UpdateAffiliateDetailsPayload;
};


export type MutationUpdateClaimRedemptionStatusArgs = {
  payload: UpdateClaimRedemptionStatusPayload;
};


export type MutationUpdateConquestArgs = {
  advertiserID: Scalars['ID'];
  payload: UpdateConquestPayload;
};


export type MutationUpdateUserArgs = {
  payload: UpdateUserPayload;
};


export type MutationUpdateUserAuthArgs = {
  payload: UpdateUserAuthPayload;
};


export type MutationWhitelistAffiliateToOfferArgs = {
  payload: WhitelistAffiliateToOfferPayload;
};


export type MutationWhitelistAllUnassignedClaimsArgs = {
  payload: WhitelistAllUnassignedClaimsPayload;
};


export type MutationWhitelistMyLootboxClaimsArgs = {
  payload: WhitelistMyLootboxClaimsPayload;
};

export type MyLootboxByNonceResponse = MyLootboxByNonceResponseSuccess | ResponseError;

export type MyLootboxByNonceResponseSuccess = {
  __typename?: 'MyLootboxByNonceResponseSuccess';
  lootbox: Lootbox;
};

export type MyTournamentResponse = MyTournamentResponseSuccess | ResponseError;

export type MyTournamentResponseSuccess = {
  __typename?: 'MyTournamentResponseSuccess';
  tournament: Tournament;
};

export type Offer = {
  __typename?: 'Offer';
  activations: Array<Activation>;
  adSetPreviews: Array<AdSetPreview>;
  adSets: Array<Scalars['ID']>;
  advertiserID: Scalars['ID'];
  affiliateBaseLink?: Maybe<Scalars['String']>;
  airdropMetadata?: Maybe<OfferAirdropMetadata>;
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  maxBudget?: Maybe<Scalars['Float']>;
  mmp: MeasurementPartnerType;
  spentBudget?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Timestamp']>;
  status: OfferStatus;
  strategy: OfferStrategyType;
  title: Scalars['String'];
};

export type OfferAffiliateView = {
  __typename?: 'OfferAffiliateView';
  activationsForAffiliate: Array<RateQuoteEstimate>;
  adSetPreviews: Array<AdSetPreview>;
  advertiserAvatar?: Maybe<Scalars['String']>;
  advertiserID: Scalars['ID'];
  advertiserName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  maxBudget?: Maybe<Scalars['Float']>;
  spentBudget?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Timestamp']>;
  status: OfferStatus;
  title: Scalars['String'];
};


export type OfferAffiliateViewActivationsForAffiliateArgs = {
  affiliateID: Scalars['ID'];
};

export type OfferAirdropMetadata = {
  __typename?: 'OfferAirdropMetadata';
  batchCount?: Maybe<Scalars['Int']>;
  callToActionLink?: Maybe<Scalars['String']>;
  excludedOffers: Array<Scalars['ID']>;
  instructionsCallToAction?: Maybe<Scalars['String']>;
  instructionsLink?: Maybe<Scalars['String']>;
  lootboxTemplateID: Scalars['ID'];
  lootboxTemplateStamp: Scalars['String'];
  oneLiner?: Maybe<Scalars['String']>;
  questions: Array<QuestionAnswerPreview>;
  value: Scalars['String'];
};

export type OfferAirdropMetadataCreateInput = {
  callToActionLink?: InputMaybe<Scalars['String']>;
  excludedOffers: Array<Scalars['ID']>;
  instructionsCallToAction?: InputMaybe<Scalars['String']>;
  instructionsLink?: InputMaybe<Scalars['String']>;
  lootboxTemplateID: Scalars['ID'];
  oneLiner?: InputMaybe<Scalars['String']>;
  questions: Array<OfferAirdropQuestionCreateInput>;
  value?: InputMaybe<Scalars['String']>;
};

export type OfferAirdropMetadataEditInput = {
  activeQuestions?: InputMaybe<Array<Scalars['ID']>>;
  callToActionLink?: InputMaybe<Scalars['String']>;
  excludedOffers?: InputMaybe<Array<Scalars['ID']>>;
  inactiveQuestions?: InputMaybe<Array<Scalars['ID']>>;
  instructionsCallToAction?: InputMaybe<Scalars['String']>;
  instructionsLink?: InputMaybe<Scalars['String']>;
  oneLiner?: InputMaybe<Scalars['String']>;
  questions?: InputMaybe<Array<OfferAirdropQuestionCreateInput>>;
  value?: InputMaybe<Scalars['String']>;
};

export type OfferAirdropPromoterView = {
  __typename?: 'OfferAirdropPromoterView';
  advertiserID: Scalars['ID'];
  airdropMetadata?: Maybe<OfferAirdropMetadata>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type OfferAirdropQuestionCreateInput = {
  question: Scalars['String'];
  type: QuestionFieldType;
};

export enum OfferInTournamentStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export type OfferPreview = {
  __typename?: 'OfferPreview';
  advertiserID: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  maxBudget?: Maybe<Scalars['Float']>;
  spentBudget?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['Timestamp']>;
  status: OfferStatus;
  strategy: OfferStrategyType;
  title: Scalars['String'];
};

export enum OfferStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive',
  Planned = 'Planned'
}

export enum OfferStrategyType {
  Airdrop = 'Airdrop',
  None = 'None'
}

export type OrganizerOfferPreview = {
  __typename?: 'OrganizerOfferPreview';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type OrganizerOfferWhitelist = {
  __typename?: 'OrganizerOfferWhitelist';
  advertiserID: Scalars['ID'];
  id: Scalars['ID'];
  offerID: Scalars['ID'];
  organizerID: Scalars['ID'];
  status: OrganizerOfferWhitelistStatus;
  timestamp: Scalars['Timestamp'];
};

export enum OrganizerOfferWhitelistStatus {
  Active = 'Active',
  Archived = 'Archived',
  Inactive = 'Inactive',
  Planned = 'Planned'
}

export type OrganizerOfferWhitelistWithProfile = {
  __typename?: 'OrganizerOfferWhitelistWithProfile';
  organizer: OrganizerOfferPreview;
  whitelist: OrganizerOfferWhitelist;
};

export type OrganizerProfile = {
  __typename?: 'OrganizerProfile';
  avatar?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum OrganizerRank {
  BronzeRank3 = 'BronzeRank3',
  ClayRank1 = 'ClayRank1',
  DiamondRank7 = 'DiamondRank7',
  GhostRank0 = 'GhostRank0',
  GoldRank5 = 'GoldRank5',
  IronRank2 = 'IronRank2',
  PlatinumRank6 = 'PlatinumRank6',
  SilverRank4 = 'SilverRank4'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
};

export type PaginateLootboxTournamentSnapshotEdge = {
  __typename?: 'PaginateLootboxTournamentSnapshotEdge';
  cursor: Scalars['ID'];
  node: LootboxTournamentSnapshot;
};

export type PaginateLootboxTournamentSnapshots = {
  __typename?: 'PaginateLootboxTournamentSnapshots';
  edges: Array<PaginateLootboxTournamentSnapshotEdge>;
  pageInfo: PaginatedLootboxTournamentSnapshotPageInfo;
  totalCount: Scalars['Int'];
};

export type PaginatedLootboxTournamentSnapshotPageInfo = {
  __typename?: 'PaginatedLootboxTournamentSnapshotPageInfo';
  endCursor?: Maybe<LootboxTournamentSnapshotCursor>;
  hasNextPage: Scalars['Boolean'];
};

export type PartyBasket = {
  __typename?: 'PartyBasket';
  address: Scalars['ID'];
  chainIdHex: Scalars['String'];
  creatorAddress: Scalars['ID'];
  creatorId: Scalars['ID'];
  factory: Scalars['ID'];
  id: Scalars['ID'];
  joinCommunityUrl?: Maybe<Scalars['String']>;
  lootboxAddress: Scalars['ID'];
  lootboxSnapshot?: Maybe<LootboxSnapshot>;
  maxClaimsAllowed?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  nftBountyValue?: Maybe<Scalars['String']>;
  runningCompletedClaims?: Maybe<Scalars['Int']>;
  status?: Maybe<PartyBasketStatus>;
  timestamps: PartyBasketTimestamps;
};

export enum PartyBasketStatus {
  Active = 'active',
  Disabled = 'disabled',
  SoldOut = 'soldOut'
}

export type PartyBasketTimestamps = {
  __typename?: 'PartyBasketTimestamps';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export type PartyBasketWhitelistSignature = {
  __typename?: 'PartyBasketWhitelistSignature';
  id: Scalars['ID'];
  isRedeemed: Scalars['Boolean'];
  nonce: Scalars['String'];
  partyBasketAddress: Scalars['ID'];
  signature: Scalars['String'];
  signer: Scalars['ID'];
  timestamps: PartyBasketTimestamps;
  whitelistedAddress: Scalars['ID'];
};

export type PendingClaimToUntrustedPayload = {
  chosenLootboxID: Scalars['ID'];
  claimId: Scalars['ID'];
  targetUserEmail: Scalars['String'];
};

export enum Placement {
  AfterPayout = 'AfterPayout',
  AfterTicketClaim = 'AfterTicketClaim',
  Airdrop = 'Airdrop',
  BeforePayout = 'BeforePayout',
  DailySpin = 'DailySpin',
  TicketCarousel = 'TicketCarousel'
}

export type PotentialAirdropClaimer = {
  __typename?: 'PotentialAirdropClaimer';
  advertiserID?: Maybe<Scalars['ID']>;
  avatar?: Maybe<Scalars['String']>;
  batchAlias?: Maybe<Scalars['String']>;
  lootboxAddress?: Maybe<Scalars['String']>;
  lootboxID?: Maybe<Scalars['ID']>;
  offerID?: Maybe<Scalars['ID']>;
  status?: Maybe<ClaimRedemptionStatus>;
  tournamentID?: Maybe<Scalars['ID']>;
  userID: Scalars['ID'];
  username: Scalars['String'];
};

export type PublicUser = {
  __typename?: 'PublicUser';
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  claims?: Maybe<UserClaimsResponseSuccess>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  headshot?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  socials?: Maybe<UserSocials>;
  updatedAt: Scalars['Timestamp'];
  username?: Maybe<Scalars['String']>;
};


export type PublicUserClaimsArgs = {
  after?: InputMaybe<Scalars['Timestamp']>;
  first: Scalars['Int'];
};

export type PublicUserResponse = PublicUserResponseSuccess | ResponseError;

export type PublicUserResponseSuccess = {
  __typename?: 'PublicUserResponseSuccess';
  user: PublicUser;
};

export type Query = {
  __typename?: 'Query';
  advertiserAdminView: AdvertiserAdminViewResponse;
  advertiserPublicView: AdvertiserPublicViewResponse;
  affiliateAdminView: AffiliateAdminViewResponse;
  affiliatePublicView: AffiliatePublicViewResponse;
  baseClaimStatsForLootbox: BaseClaimStatsForLootboxResponse;
  baseClaimStatsForTournament: BaseClaimStatsForTournamentResponse;
  battleFeed: BattleFeedResponse;
  browseActiveOffers: BrowseActiveOffersResponse;
  browseAllAffiliates: BrowseAllAffiliatesResponse;
  campaignClaimsForLootbox: CampaignClaimsForLootboxResponse;
  campaignClaimsForTournament: CampaignClaimsForTournamentResponse;
  checkIfUserAnsweredAirdropQuestions: CheckIfUserAnsweredAirdropQuestionsResponse;
  checkPhoneEnabled: CheckPhoneEnabledResponse;
  claimByID: ClaimByIdResponse;
  claimerStatisticsForLootboxTournament: ClaimerStatsForLootboxTournamentResponse;
  claimerStatsForTournament: ClaimerStatsForTournamentResponse;
  dailyClaimStatisticsForTournament: DailyClaimStatisticsForTournamentResponse;
  decisionAdApiBetaV2: DecisionAdApiBetaV2Response;
  fansListForTournament: FansListForTournamentResponse;
  getAnonToken: GetAnonTokenResponse;
  getAnonTokenV2: GetAnonTokenResponse;
  getConquest: GetConquestResponse;
  getLootboxByAddress: GetLootboxByAddressResponse;
  getLootboxByID: GetLootboxByIdResponse;
  getMyProfile: GetMyProfileResponse;
  getPartyBasket: GetPartyBasketResponse;
  listAdSetsOfAdvertiser: ListAdSetsOfAdvertiserResponse;
  listAdsOfAdvertiser: ListAdsOfAdvertiserResponse;
  listAvailableLootboxesForClaim: ListAvailableLootboxesForClaimResponse;
  listConquestPreviews: ListConquestPreviewsResponse;
  listCreatedOffers: ListCreatedOffersResponse;
  listEventsOfAdvertiser: ListEventsOfAdvertiserResponse;
  listOffersAvailableForOrganizer: ListOffersAvailableForOrganizerResponse;
  listPartnersOfAdvertiser: ListPartnersOfAdvertiserResponse;
  listPotentialAirdropClaimers: ListPotentialAirdropClaimersResponse;
  listWhitelistedAffiliatesToOffer: ListWhitelistedAffiliatesToOfferResponse;
  lootboxCompletedClaimsForTournament: LootboxCompletedClaimsForTournamentResponse;
  lootboxFeed: LootboxFeedResponse;
  myLootboxByNonce: MyLootboxByNonceResponse;
  myTournament: MyTournamentResponse;
  publicUser: PublicUserResponse;
  referral: ReferralResponse;
  referrerClaimsForLootbox: ReferrerClaimsForLootboxResponse;
  referrerClaimsForTournament: ReferrerClaimsForTournamentResponse;
  reportAdvertiserAffiliatePerf: ReportAdvertiserAffiliatePerfResponse;
  reportAdvertiserOfferPerformance: ReportAdvertiserOfferPerformanceResponse;
  reportAdvertiserTournamentPerf: ReportAdvertiserTournamentPerfResponse;
  reportOrganizerOfferPerf: ReportOrganizerOfferPerfResponse;
  reportOrganizerTournamentPerf: ReportOrganizerTournamentResponse;
  reportPromoterTournamentPerf: ReportPromoterTournamentPerfResponse;
  reportTotalEarningsForAffiliate: ReportTotalEarningsForAffiliateResponse;
  tournament: TournamentResponse;
  truncatedEmailByPhone: TruncatedEmailByPhoneResponse;
  /** @deprecated Use public user resolver */
  userClaims: UserClaimsResponse;
  version: Scalars['ID'];
  viewAd: ViewAdResponse;
  viewAdSet: ViewAdSetResponse;
  viewCreatedOffer: ViewCreatedOfferResponse;
  viewMyTournamentsAsOrganizer: ViewMyTournamentsAsOrganizerResponse;
  viewOfferDetailsAsAffiliate: ViewOfferDetailsAsEventAffiliateResponse;
  viewTournamentAsOrganizer: ViewTournamentAsOrganizerResponse;
};


export type QueryAdvertiserPublicViewArgs = {
  advertiserId: Scalars['ID'];
};


export type QueryAffiliatePublicViewArgs = {
  affiliateID: Scalars['ID'];
};


export type QueryBaseClaimStatsForLootboxArgs = {
  lootboxID: Scalars['ID'];
  tournamentID?: InputMaybe<Scalars['ID']>;
};


export type QueryBaseClaimStatsForTournamentArgs = {
  tournamentID: Scalars['ID'];
};


export type QueryBattleFeedArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first: Scalars['Int'];
};


export type QueryCampaignClaimsForLootboxArgs = {
  lootboxID: Scalars['ID'];
  tournamentID?: InputMaybe<Scalars['ID']>;
};


export type QueryCampaignClaimsForTournamentArgs = {
  tournamentID: Scalars['ID'];
};


export type QueryCheckIfUserAnsweredAirdropQuestionsArgs = {
  lootboxID: Scalars['ID'];
};


export type QueryCheckPhoneEnabledArgs = {
  email: Scalars['String'];
};


export type QueryClaimByIdArgs = {
  claimID: Scalars['ID'];
};


export type QueryClaimerStatisticsForLootboxTournamentArgs = {
  lootboxID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};


export type QueryClaimerStatsForTournamentArgs = {
  eventID: Scalars['ID'];
};


export type QueryDailyClaimStatisticsForTournamentArgs = {
  payload: DailyClaimStatisticsForTournamentInput;
};


export type QueryDecisionAdApiBetaV2Args = {
  payload: DecisionAdApiBetaV2Payload;
};


export type QueryFansListForTournamentArgs = {
  tournamentID: Scalars['ID'];
};


export type QueryGetAnonTokenArgs = {
  idToken: Scalars['ID'];
};


export type QueryGetAnonTokenV2Args = {
  userID: Scalars['ID'];
};


export type QueryGetConquestArgs = {
  advertiserID: Scalars['ID'];
  conquestID: Scalars['ID'];
};


export type QueryGetLootboxByAddressArgs = {
  address: Scalars['ID'];
};


export type QueryGetLootboxByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetPartyBasketArgs = {
  address: Scalars['ID'];
};


export type QueryListAdSetsOfAdvertiserArgs = {
  advertiserID: Scalars['ID'];
};


export type QueryListAdsOfAdvertiserArgs = {
  advertiserID: Scalars['ID'];
};


export type QueryListAvailableLootboxesForClaimArgs = {
  tournamentID: Scalars['ID'];
};


export type QueryListConquestPreviewsArgs = {
  advertiserID: Scalars['ID'];
};


export type QueryListCreatedOffersArgs = {
  advertiserID: Scalars['ID'];
};


export type QueryListEventsOfAdvertiserArgs = {
  advertiserID: Scalars['ID'];
};


export type QueryListOffersAvailableForOrganizerArgs = {
  affiliateID: Scalars['ID'];
};


export type QueryListPartnersOfAdvertiserArgs = {
  advertiserID: Scalars['ID'];
};


export type QueryListPotentialAirdropClaimersArgs = {
  payload: ListPotentialAirdropClaimersPayload;
};


export type QueryListWhitelistedAffiliatesToOfferArgs = {
  payload: ListWhitelistedAffiliatesToOfferPayload;
};


export type QueryLootboxCompletedClaimsForTournamentArgs = {
  tournamentID: Scalars['ID'];
};


export type QueryLootboxFeedArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first: Scalars['Int'];
};


export type QueryMyLootboxByNonceArgs = {
  nonce: Scalars['ID'];
};


export type QueryMyTournamentArgs = {
  id: Scalars['ID'];
};


export type QueryPublicUserArgs = {
  id: Scalars['ID'];
};


export type QueryReferralArgs = {
  slug: Scalars['ID'];
};


export type QueryReferrerClaimsForLootboxArgs = {
  lootboxID: Scalars['ID'];
  tournamentID?: InputMaybe<Scalars['ID']>;
};


export type QueryReferrerClaimsForTournamentArgs = {
  tournamentID: Scalars['ID'];
};


export type QueryReportAdvertiserAffiliatePerfArgs = {
  payload: ReportAdvertiserAffiliatePerfInput;
};


export type QueryReportAdvertiserOfferPerformanceArgs = {
  offerID: Scalars['ID'];
};


export type QueryReportAdvertiserTournamentPerfArgs = {
  payload: ReportAdvertiserTournamentPerfInput;
};


export type QueryReportOrganizerOfferPerfArgs = {
  payload: ReportOrganizerOfferPerfInput;
};


export type QueryReportOrganizerTournamentPerfArgs = {
  payload: ReportOrganizerTournamentPerfInput;
};


export type QueryReportPromoterTournamentPerfArgs = {
  payload: ReportPromoterTournamentPerfInput;
};


export type QueryTournamentArgs = {
  id: Scalars['ID'];
};


export type QueryTruncatedEmailByPhoneArgs = {
  phoneNumber: Scalars['String'];
};


export type QueryUserClaimsArgs = {
  after?: InputMaybe<Scalars['Timestamp']>;
  first: Scalars['Int'];
  userId: Scalars['ID'];
};


export type QueryViewAdArgs = {
  adID: Scalars['ID'];
};


export type QueryViewAdSetArgs = {
  adSetID: Scalars['ID'];
};


export type QueryViewCreatedOfferArgs = {
  offerID: Scalars['ID'];
};


export type QueryViewMyTournamentsAsOrganizerArgs = {
  affiliateID: Scalars['ID'];
};


export type QueryViewOfferDetailsAsAffiliateArgs = {
  payload: ViewOfferDetailsAsEventAffiliatePayload;
};


export type QueryViewTournamentAsOrganizerArgs = {
  tournamentID: Scalars['ID'];
};

export type QuestionAnswerPreview = {
  __typename?: 'QuestionAnswerPreview';
  batch: Scalars['ID'];
  id: Scalars['ID'];
  question: Scalars['String'];
  type: QuestionFieldType;
};

export enum QuestionAnswerStatus {
  Active = 'Active',
  Inactive = 'Inactive'
}

export enum QuestionFieldType {
  Address = 'Address',
  Date = 'Date',
  DateTime = 'DateTime',
  Email = 'Email',
  File = 'File',
  Link = 'Link',
  MultiSelect = 'MultiSelect',
  Number = 'Number',
  Phone = 'Phone',
  Range = 'Range',
  Screenshot = 'Screenshot',
  SingleSelect = 'SingleSelect',
  Text = 'Text',
  Time = 'Time'
}

export type RateQuoteDealConfig = {
  __typename?: 'RateQuoteDealConfig';
  activationID: Scalars['ID'];
  activationName: Scalars['String'];
  activationOrder: Scalars['Int'];
  affiliateAvatar?: Maybe<Scalars['String']>;
  affiliateID: Scalars['ID'];
  affiliateName: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  pricing: Scalars['Float'];
  rateQuoteID: Scalars['ID'];
};

export type RateQuoteEstimate = {
  __typename?: 'RateQuoteEstimate';
  activationID: Scalars['ID'];
  activationName: Scalars['String'];
  affiliateID: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  pricing: Scalars['Float'];
  rank?: Maybe<Scalars['String']>;
};

export type RateQuoteInput = {
  activationID: Scalars['ID'];
  affiliateID: Scalars['ID'];
  affiliateType: AffiliateType;
  id?: InputMaybe<Scalars['ID']>;
  offerID: Scalars['ID'];
  pricing: Scalars['Float'];
  tournamentID: Scalars['ID'];
};

export type RedeemSignaturePayload = {
  message: Scalars['String'];
  partyBasketId: Scalars['ID'];
  signatureId: Scalars['ID'];
  signedMessage: Scalars['String'];
};

export type RedeemSignatureResponse = RedeemSignatureResponseSuccess | ResponseError;

export type RedeemSignatureResponseSuccess = {
  __typename?: 'RedeemSignatureResponseSuccess';
  signature: PartyBasketWhitelistSignature;
};

export type Referral = {
  __typename?: 'Referral';
  campaignName: Scalars['String'];
  claims?: Maybe<Array<Claim>>;
  creatorId: Scalars['ID'];
  id: Scalars['ID'];
  isPostCosmic?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use ReferralType instead */
  isRewardDisabled?: Maybe<Scalars['Boolean']>;
  nConversions: Scalars['Int'];
  promoterId?: Maybe<Scalars['ID']>;
  referrerId: Scalars['ID'];
  seedLootbox?: Maybe<Lootbox>;
  seedLootboxID?: Maybe<Scalars['ID']>;
  /** @deprecated removing after Cosmic Lootbox Refactor */
  seedPartyBasket?: Maybe<PartyBasket>;
  /** @deprecated removing after Cosmic Lootbox Refactor */
  seedPartyBasketId?: Maybe<Scalars['ID']>;
  slug: Scalars['ID'];
  timestamps: ReferralTimestamps;
  tournament?: Maybe<Tournament>;
  tournamentId: Scalars['ID'];
  type?: Maybe<ReferralType>;
};

export type ReferralResponse = ReferralResponseSuccess | ResponseError;

export type ReferralResponseSuccess = {
  __typename?: 'ReferralResponseSuccess';
  referral: Referral;
};

export type ReferralTimestamps = {
  __typename?: 'ReferralTimestamps';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export enum ReferralType {
  Genesis = 'genesis',
  OneTime = 'one_time',
  Viral = 'viral'
}

export type ReferrerClaimsForLootboxResponse = ReferrerClaimsForLootboxResponseSuccess | ResponseError;

export type ReferrerClaimsForLootboxResponseSuccess = {
  __typename?: 'ReferrerClaimsForLootboxResponseSuccess';
  data: Array<ReferrerClaimsForLootboxRow>;
};

export type ReferrerClaimsForLootboxRow = {
  __typename?: 'ReferrerClaimsForLootboxRow';
  claimCount: Scalars['Int'];
  userAvatar: Scalars['String'];
  userID: Scalars['String'];
  userName: Scalars['String'];
};

export type ReferrerClaimsForTournamentResponse = ReferrerClaimsForTournamentResponseSuccess | ResponseError;

export type ReferrerClaimsForTournamentResponseSuccess = {
  __typename?: 'ReferrerClaimsForTournamentResponseSuccess';
  data: Array<ReferrerClaimsForTournamentRow>;
};

export type ReferrerClaimsForTournamentRow = {
  __typename?: 'ReferrerClaimsForTournamentRow';
  claimCount: Scalars['Int'];
  userAvatar: Scalars['String'];
  userID: Scalars['String'];
  userName: Scalars['String'];
};

export type RemoveOfferAdSetFromTournamentPayload = {
  adSetID: Scalars['ID'];
  offerID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type RemoveOfferAdSetFromTournamentResponse = RemoveOfferAdSetFromTournamentResponseSuccess | ResponseError;

export type RemoveOfferAdSetFromTournamentResponseSuccess = {
  __typename?: 'RemoveOfferAdSetFromTournamentResponseSuccess';
  tournament: Tournament;
};

export type RemovePromoterFromTournamentPayload = {
  promoterID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type RemovePromoterFromTournamentResponse = RemovePromoterFromTournamentResponseSuccess | ResponseError;

export type RemovePromoterFromTournamentResponseSuccess = {
  __typename?: 'RemovePromoterFromTournamentResponseSuccess';
  tournament: Tournament;
};

export type RemoveWalletPayload = {
  id: Scalars['ID'];
};

export type RemoveWalletResponse = RemoveWalletResponseSuccess | ResponseError;

export type RemoveWalletResponseSuccess = {
  __typename?: 'RemoveWalletResponseSuccess';
  id: Scalars['ID'];
};

export type ReportAdvertiserAffiliatePerfInput = {
  advertiserID: Scalars['ID'];
  affiliateID: Scalars['ID'];
  affiliateType: AffiliateType;
};

export type ReportAdvertiserAffiliatePerfResponse = ReportAdvertiserAffiliatePerfResponseSuccess | ResponseError;

export type ReportAdvertiserAffiliatePerfResponseSuccess = {
  __typename?: 'ReportAdvertiserAffiliatePerfResponseSuccess';
  events: Array<AnalyticsAdEvent>;
  memos: Array<AnalyticsMemo>;
};

export type ReportAdvertiserOfferPerformanceResponse = ReportAdvertiserOfferPerformanceResponseSuccess | ResponseError;

export type ReportAdvertiserOfferPerformanceResponseSuccess = {
  __typename?: 'ReportAdvertiserOfferPerformanceResponseSuccess';
  events: Array<AnalyticsAdEvent>;
  memos: Array<AnalyticsMemo>;
};

export type ReportAdvertiserTournamentPerfInput = {
  advertiserID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type ReportAdvertiserTournamentPerfResponse = ReportAdvertiserTournamentPerfResponseSuccess | ResponseError;

export type ReportAdvertiserTournamentPerfResponseSuccess = {
  __typename?: 'ReportAdvertiserTournamentPerfResponseSuccess';
  events: Array<AnalyticsAdEvent>;
  memos: Array<AnalyticsMemo>;
};

export type ReportOrganizerOfferPerfInput = {
  offerID: Scalars['ID'];
  organizerID: Scalars['ID'];
};

export type ReportOrganizerOfferPerfResponse = ReportOrganizerOfferPerfResponseSuccess | ResponseError;

export type ReportOrganizerOfferPerfResponseSuccess = {
  __typename?: 'ReportOrganizerOfferPerfResponseSuccess';
  events: Array<AnalyticsAdEvent>;
  memos: Array<AnalyticsMemo>;
};

export type ReportOrganizerTournamentPerfInput = {
  organizerID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type ReportOrganizerTournamentResponse = ReportOrganizerTournamentResponseSuccess | ResponseError;

export type ReportOrganizerTournamentResponseSuccess = {
  __typename?: 'ReportOrganizerTournamentResponseSuccess';
  events: Array<AnalyticsAdEvent>;
  memos: Array<AnalyticsMemo>;
};

export type ReportPromoterTournamentPerfInput = {
  promoterID: Scalars['ID'];
  tournamentID: Scalars['ID'];
};

export type ReportPromoterTournamentPerfResponse = ReportPromoterTournamentPerfResponseSuccess | ResponseError;

export type ReportPromoterTournamentPerfResponseSuccess = {
  __typename?: 'ReportPromoterTournamentPerfResponseSuccess';
  events: Array<AnalyticsAdEvent>;
  memos: Array<AnalyticsMemo>;
};

export type ReportTotalEarningsForAffiliateResponse = ReportTotalEarningsForAffiliateResponseSuccess | ResponseError;

export type ReportTotalEarningsForAffiliateResponseSuccess = {
  __typename?: 'ReportTotalEarningsForAffiliateResponseSuccess';
  sum: Scalars['Float'];
};

export type ResponseError = {
  __typename?: 'ResponseError';
  error: Status;
};

export type Status = {
  __typename?: 'Status';
  code: StatusCode;
  message: Scalars['String'];
};

export enum StatusCode {
  BadRequest = 'BadRequest',
  Forbidden = 'Forbidden',
  InvalidOperation = 'InvalidOperation',
  NotFound = 'NotFound',
  NotImplemented = 'NotImplemented',
  ServerError = 'ServerError',
  Success = 'Success',
  Unauthorized = 'Unauthorized'
}

export type Stream = {
  __typename?: 'Stream';
  creatorId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  timestamps: StreamTimestamps;
  tournamentId: Scalars['ID'];
  type: StreamType;
  url: Scalars['String'];
};

export type StreamInput = {
  name: Scalars['String'];
  type: StreamType;
  url: Scalars['String'];
};

export type StreamTimestamps = {
  __typename?: 'StreamTimestamps';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export enum StreamType {
  Discord = 'discord',
  Facebook = 'facebook',
  Twitch = 'twitch',
  Youtube = 'youtube'
}

export type SyncProviderUserResponse = ResponseError | SyncProviderUserResponseSuccess;

export type SyncProviderUserResponseSuccess = {
  __typename?: 'SyncProviderUserResponseSuccess';
  user: User;
};

export type Tournament = {
  __typename?: 'Tournament';
  communityURL?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Scalars['String']>;
  creatorId: Scalars['ID'];
  dealConfigs: Array<DealConfigTournament>;
  description: Scalars['String'];
  id: Scalars['ID'];
  /** @deprecated Will be removed after Cosmic Lootbox refactor */
  isPostCosmic?: Maybe<Scalars['Boolean']>;
  lootboxSnapshots?: Maybe<Array<LootboxTournamentSnapshot>>;
  magicLink?: Maybe<Scalars['String']>;
  organizer?: Maybe<Scalars['ID']>;
  organizerProfile?: Maybe<OrganizerProfile>;
  paginateLootboxSnapshots?: Maybe<PaginateLootboxTournamentSnapshots>;
  prize?: Maybe<Scalars['String']>;
  promoters?: Maybe<Array<Scalars['ID']>>;
  runningCompletedClaims: Scalars['Int'];
  streams?: Maybe<Array<Stream>>;
  timestamps: TournamentTimestamps;
  title: Scalars['String'];
  tournamentDate?: Maybe<Scalars['Timestamp']>;
  tournamentLink?: Maybe<Scalars['String']>;
};


export type TournamentLootboxSnapshotsArgs = {
  status?: InputMaybe<LootboxTournamentStatus>;
};


export type TournamentPaginateLootboxSnapshotsArgs = {
  after?: InputMaybe<Scalars['ID']>;
  first: Scalars['Int'];
};

export type TournamentPreview = {
  __typename?: 'TournamentPreview';
  coverPhoto?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type TournamentResponse = ResponseError | TournamentResponseSuccess;

export type TournamentResponseSuccess = {
  __typename?: 'TournamentResponseSuccess';
  tournament: Tournament;
};

export type TournamentTimestamps = {
  __typename?: 'TournamentTimestamps';
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt: Scalars['Timestamp'];
};

export type TruncatedEmailByPhoneResponse = ResponseError | TruncatedEmailByPhoneResponseSuccess;

export type TruncatedEmailByPhoneResponseSuccess = {
  __typename?: 'TruncatedEmailByPhoneResponseSuccess';
  email?: Maybe<Scalars['String']>;
};

export type UpdateAdvertiserDetailsPayload = {
  avatar?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  publicContactEmail?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateAdvertiserDetailsResponse = ResponseError | UpdateAdvertiserDetailsResponseSuccess;

export type UpdateAdvertiserDetailsResponseSuccess = {
  __typename?: 'UpdateAdvertiserDetailsResponseSuccess';
  advertiser: Advertiser;
};

export type UpdateAffiliateDetailsPayload = {
  audienceSize?: InputMaybe<Scalars['Int']>;
  avatar?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  publicContactEmail?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type UpdateAffiliateDetailsResponse = ResponseError | UpdateAffiliateDetailsResponseSuccess;

export type UpdateAffiliateDetailsResponseSuccess = {
  __typename?: 'UpdateAffiliateDetailsResponseSuccess';
  affiliate: Affiliate;
};

export type UpdateClaimRedemptionStatusPayload = {
  claimID: Scalars['ID'];
  status: ClaimRedemptionStatus;
};

export type UpdateClaimRedemptionStatusResponse = ResponseError | UpdateClaimRedemptionStatusResponseSuccess;

export type UpdateClaimRedemptionStatusResponseSuccess = {
  __typename?: 'UpdateClaimRedemptionStatusResponseSuccess';
  claimID: Scalars['ID'];
};

export type UpdateConquestPayload = {
  description?: InputMaybe<Scalars['String']>;
  endDate?: InputMaybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['Timestamp']>;
  status?: InputMaybe<ConquestStatus>;
  title?: InputMaybe<Scalars['String']>;
  tournaments?: InputMaybe<Array<Scalars['ID']>>;
};

export type UpdateConquestResponse = ResponseError | UpdateConquestResponseSuccess;

export type UpdateConquestResponseSuccess = {
  __typename?: 'UpdateConquestResponseSuccess';
  conquest?: Maybe<Conquest>;
};

export type UpdatePromoterRateQuoteInTournamentResponseSuccess = {
  __typename?: 'UpdatePromoterRateQuoteInTournamentResponseSuccess';
  tournament: Tournament;
};

export type UpdateUserAuthPayload = {
  email: Scalars['String'];
};

export type UpdateUserPayload = {
  avatar?: InputMaybe<Scalars['String']>;
  biography?: InputMaybe<Scalars['String']>;
  headshot?: InputMaybe<Scalars['String']>;
  socials?: InputMaybe<UserSocialsInput>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateUserResponse = ResponseError | UpdateUserResponseSuccess;

export type UpdateUserResponseSuccess = {
  __typename?: 'UpdateUserResponseSuccess';
  user: User;
};

export type UpgradeToAdvertiserResponse = ResponseError | UpgradeToAdvertiserResponseSuccess;

export type UpgradeToAdvertiserResponseSuccess = {
  __typename?: 'UpgradeToAdvertiserResponseSuccess';
  advertiser: Advertiser;
};

export type UpgradeToAffiliateResponse = ResponseError | UpgradeToAffiliateResponseSuccess;

export type UpgradeToAffiliateResponseSuccess = {
  __typename?: 'UpgradeToAffiliateResponseSuccess';
  affiliate: Affiliate;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  headshot?: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  lootboxes?: Maybe<Array<Lootbox>>;
  /** @deprecated Use Cosmic Lootbox Instead */
  partyBaskets?: Maybe<Array<PartyBasket>>;
  phoneNumber?: Maybe<Scalars['String']>;
  socials?: Maybe<UserSocials>;
  tournaments?: Maybe<Array<Tournament>>;
  updatedAt: Scalars['Timestamp'];
  username?: Maybe<Scalars['String']>;
  wallets?: Maybe<Array<Wallet>>;
};

export type UserClaimsCursor = {
  endBefore?: InputMaybe<Scalars['Timestamp']>;
  startAfter?: InputMaybe<Scalars['Timestamp']>;
};

export type UserClaimsResponse = ResponseError | UserClaimsResponseSuccess;

export type UserClaimsResponseSuccess = {
  __typename?: 'UserClaimsResponseSuccess';
  edges: Array<ClaimEdge>;
  pageInfo: ClaimPageInfo;
  totalCount: Scalars['Int'];
};

export type UserSocials = {
  __typename?: 'UserSocials';
  discord?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  snapchat?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitch?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  web?: Maybe<Scalars['String']>;
};

export type UserSocialsInput = {
  discord?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  instagram?: InputMaybe<Scalars['String']>;
  snapchat?: InputMaybe<Scalars['String']>;
  tiktok?: InputMaybe<Scalars['String']>;
  twitch?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  web?: InputMaybe<Scalars['String']>;
};

export type ViewAdResponse = ResponseError | ViewAdResponseSuccess;

export type ViewAdResponseSuccess = {
  __typename?: 'ViewAdResponseSuccess';
  ad: Ad;
};

export type ViewAdSetResponse = ResponseError | ViewAdSetResponseSuccess;

export type ViewAdSetResponseSuccess = {
  __typename?: 'ViewAdSetResponseSuccess';
  adSet: AdSet;
};

export type ViewCreatedOfferResponse = ResponseError | ViewCreatedOfferResponseSuccess;

export type ViewCreatedOfferResponseSuccess = {
  __typename?: 'ViewCreatedOfferResponseSuccess';
  offer: Offer;
};

export type ViewMyTournamentsAsOrganizerResponse = ResponseError | ViewMyTournamentsAsOrganizerResponseSuccess;

export type ViewMyTournamentsAsOrganizerResponseSuccess = {
  __typename?: 'ViewMyTournamentsAsOrganizerResponseSuccess';
  tournaments: Array<Tournament>;
};

export type ViewOfferDetailsAsEventAffiliatePayload = {
  affiliateID: Scalars['ID'];
  offerID: Scalars['ID'];
};

export type ViewOfferDetailsAsEventAffiliateResponse = ResponseError | ViewOfferDetailsAsEventAffiliateResponseSuccess;

export type ViewOfferDetailsAsEventAffiliateResponseSuccess = {
  __typename?: 'ViewOfferDetailsAsEventAffiliateResponseSuccess';
  offer: OfferAffiliateView;
};

export type ViewTournamentAsOrganizerResponse = ResponseError | ViewTournamentAsOrganizerResponseSuccess;

export type ViewTournamentAsOrganizerResponseSuccess = {
  __typename?: 'ViewTournamentAsOrganizerResponseSuccess';
  tournament: Tournament;
};

export type Wallet = {
  __typename?: 'Wallet';
  address: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  lootboxSnapshots?: Maybe<Array<LootboxSnapshot>>;
  userId: Scalars['ID'];
};

export type WhitelistAffiliateToOfferPayload = {
  advertiserID: Scalars['ID'];
  affiliateID: Scalars['ID'];
  offerID: Scalars['ID'];
  status: OrganizerOfferWhitelistStatus;
};

export type WhitelistAffiliateToOfferResponse = ResponseError | WhitelistAffiliateToOfferResponseSuccess;

export type WhitelistAffiliateToOfferResponseSuccess = {
  __typename?: 'WhitelistAffiliateToOfferResponseSuccess';
  whitelist: OrganizerOfferWhitelist;
};

export type WhitelistAllUnassignedClaimsPayload = {
  partyBasketId: Scalars['ID'];
};

export type WhitelistAllUnassignedClaimsResponse = ResponseError | WhitelistAllUnassignedClaimsResponseSuccess;

export type WhitelistAllUnassignedClaimsResponseSuccess = {
  __typename?: 'WhitelistAllUnassignedClaimsResponseSuccess';
  errors?: Maybe<Array<Maybe<Scalars['String']>>>;
  signatures: Array<Maybe<Scalars['String']>>;
};

export type WhitelistMyLootboxClaimsPayload = {
  lootboxID: Scalars['ID'];
  walletAddress: Scalars['ID'];
};

export type WhitelistMyLootboxClaimsResponse = ResponseError | WhitelistMyLootboxClaimsResponseSuccess;

export type WhitelistMyLootboxClaimsResponseSuccess = {
  __typename?: 'WhitelistMyLootboxClaimsResponseSuccess';
  signatures: Array<MintWhitelistSignature>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AccountNumber: ResolverTypeWrapper<Scalars['AccountNumber']>;
  Activation: ResolverTypeWrapper<Activation>;
  ActivationStatus: ActivationStatus;
  Ad: ResolverTypeWrapper<Ad>;
  AdEvent: ResolverTypeWrapper<AdEvent>;
  AdEventAction: AdEventAction;
  AdEventAffiliateAttribution: ResolverTypeWrapper<AdEventAffiliateAttribution>;
  AdPreviewInDealConfig: ResolverTypeWrapper<AdPreviewInDealConfig>;
  AdServed: ResolverTypeWrapper<AdServed>;
  AdSet: ResolverTypeWrapper<AdSet>;
  AdSetInTournamentStatus: AdSetInTournamentStatus;
  AdSetPreview: ResolverTypeWrapper<AdSetPreview>;
  AdSetPreviewInDealConfig: ResolverTypeWrapper<AdSetPreviewInDealConfig>;
  AdSetStatus: AdSetStatus;
  AdStatus: AdStatus;
  AdTargetTag: ResolverTypeWrapper<AdTargetTag>;
  AdTargetTagType: AdTargetTagType;
  AdTimestamps: ResolverTypeWrapper<AdTimestamps>;
  AddOfferAdSetToTournamentPayload: AddOfferAdSetToTournamentPayload;
  AddOfferAdSetToTournamentResponse: ResolversTypes['AddOfferAdSetToTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  AddOfferAdSetToTournamentResponseSuccess: ResolverTypeWrapper<AddOfferAdSetToTournamentResponseSuccess>;
  AddStreamPayload: AddStreamPayload;
  AddStreamResponse: ResolversTypes['AddStreamResponseSuccess'] | ResolversTypes['ResponseError'];
  AddStreamResponseSuccess: ResolverTypeWrapper<AddStreamResponseSuccess>;
  AddUpdatePromoterRateQuoteInTournamentResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpdatePromoterRateQuoteInTournamentResponseSuccess'];
  AddUpdatePromoterRateQuoteToTournamentPayload: AddUpdatePromoterRateQuoteToTournamentPayload;
  Advertiser: ResolverTypeWrapper<Advertiser>;
  AdvertiserAdminViewResponse: ResolversTypes['AdvertiserAdminViewResponseSuccess'] | ResolversTypes['ResponseError'];
  AdvertiserAdminViewResponseSuccess: ResolverTypeWrapper<AdvertiserAdminViewResponseSuccess>;
  AdvertiserPublicViewResponse: ResolversTypes['AdvertiserPublicViewResponseSuccess'] | ResolversTypes['ResponseError'];
  AdvertiserPublicViewResponseSuccess: ResolverTypeWrapper<AdvertiserPublicViewResponseSuccess>;
  Affiliate: ResolverTypeWrapper<Affiliate>;
  AffiliateAdminViewResponse: ResolversTypes['AffiliateAdminViewResponseSuccess'] | ResolversTypes['ResponseError'];
  AffiliateAdminViewResponseSuccess: ResolverTypeWrapper<AffiliateAdminViewResponseSuccess>;
  AffiliatePublicViewResponse: ResolversTypes['AffiliatePublicViewResponseSuccess'] | ResolversTypes['ResponseError'];
  AffiliatePublicViewResponseSuccess: ResolverTypeWrapper<AffiliatePublicViewResponseSuccess>;
  AffiliateType: AffiliateType;
  AirdropMetadataCreateInput: AirdropMetadataCreateInput;
  AnalyticsAdEvent: ResolverTypeWrapper<AnalyticsAdEvent>;
  AnalyticsMemo: ResolverTypeWrapper<AnalyticsMemo>;
  AnswerAirdropQuestionInput: AnswerAirdropQuestionInput;
  AnswerAirdropQuestionPayload: AnswerAirdropQuestionPayload;
  AnswerAirdropQuestionResponse: ResolversTypes['AnswerAirdropQuestionResponseSuccess'] | ResolversTypes['ResponseError'];
  AnswerAirdropQuestionResponseSuccess: ResolverTypeWrapper<AnswerAirdropQuestionResponseSuccess>;
  AspectRatio: AspectRatio;
  AuthenticateWalletPayload: AuthenticateWalletPayload;
  AuthenticateWalletResponse: ResolversTypes['AuthenticateWalletResponseSuccess'] | ResolversTypes['ResponseError'];
  AuthenticateWalletResponseSuccess: ResolverTypeWrapper<AuthenticateWalletResponseSuccess>;
  BaseClaimStatsForLootbox: ResolverTypeWrapper<BaseClaimStatsForLootbox>;
  BaseClaimStatsForLootboxResponse: ResolversTypes['BaseClaimStatsForLootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  BaseClaimStatsForLootboxResponseSuccess: ResolverTypeWrapper<BaseClaimStatsForLootboxResponseSuccess>;
  BaseClaimStatsForTournament: ResolverTypeWrapper<BaseClaimStatsForTournament>;
  BaseClaimStatsForTournamentResponse: ResolversTypes['BaseClaimStatsForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  BaseClaimStatsForTournamentResponseSuccess: ResolverTypeWrapper<BaseClaimStatsForTournamentResponseSuccess>;
  BattleFeedEdge: ResolverTypeWrapper<BattleFeedEdge>;
  BattleFeedResponse: ResolversTypes['BattleFeedResponseSuccess'] | ResolversTypes['ResponseError'];
  BattleFeedResponseSuccess: ResolverTypeWrapper<BattleFeedResponseSuccess>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  BrowseActiveOffersResponse: ResolversTypes['BrowseActiveOffersResponseSuccess'] | ResolversTypes['ResponseError'];
  BrowseActiveOffersResponseSuccess: ResolverTypeWrapper<BrowseActiveOffersResponseSuccess>;
  BrowseAllAffiliatesResponse: ResolversTypes['BrowseAllAffiliatesResponseSuccess'] | ResolversTypes['ResponseError'];
  BrowseAllAffiliatesResponseSuccess: ResolverTypeWrapper<BrowseAllAffiliatesResponseSuccess>;
  BulkCreateReferralPayload: BulkCreateReferralPayload;
  BulkCreateReferralResponse: ResolversTypes['BulkCreateReferralResponseSuccess'] | ResolversTypes['ResponseError'];
  BulkCreateReferralResponseSuccess: ResolverTypeWrapper<BulkCreateReferralResponseSuccess>;
  BulkEditLootboxTournamentSnapshotsPayload: BulkEditLootboxTournamentSnapshotsPayload;
  BulkEditLootboxTournamentSnapshotsResponse: ResolversTypes['BulkEditLootboxTournamentSnapshotsResponseSuccess'] | ResolversTypes['ResponseError'];
  BulkEditLootboxTournamentSnapshotsResponseSuccess: ResolverTypeWrapper<BulkEditLootboxTournamentSnapshotsResponseSuccess>;
  BulkReferralCSVRow: ResolverTypeWrapper<BulkReferralCsvRow>;
  BulkWhitelistPayload: BulkWhitelistPayload;
  BulkWhitelistResponse: ResolversTypes['BulkWhitelistResponseSuccess'] | ResolversTypes['ResponseError'];
  BulkWhitelistResponseSuccess: ResolverTypeWrapper<BulkWhitelistResponseSuccess>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  CampaignClaimsForLootboxResponse: ResolversTypes['CampaignClaimsForLootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  CampaignClaimsForLootboxResponseSuccess: ResolverTypeWrapper<CampaignClaimsForLootboxResponseSuccess>;
  CampaignClaimsForLootboxRow: ResolverTypeWrapper<CampaignClaimsForLootboxRow>;
  CampaignClaimsForTournamentResponse: ResolversTypes['CampaignClaimsForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  CampaignClaimsForTournamentResponseSuccess: ResolverTypeWrapper<CampaignClaimsForTournamentResponseSuccess>;
  CampaignClaimsForTournamentRow: ResolverTypeWrapper<CampaignClaimsForTournamentRow>;
  CheckIfUserAnsweredAirdropQuestionsResponse: ResolversTypes['CheckIfUserAnsweredAirdropQuestionsResponseSuccess'] | ResolversTypes['ResponseError'];
  CheckIfUserAnsweredAirdropQuestionsResponseSuccess: ResolverTypeWrapper<CheckIfUserAnsweredAirdropQuestionsResponseSuccess>;
  CheckPhoneEnabledResponse: ResolversTypes['CheckPhoneEnabledResponseSuccess'] | ResolversTypes['ResponseError'];
  CheckPhoneEnabledResponseSuccess: ResolverTypeWrapper<CheckPhoneEnabledResponseSuccess>;
  Claim: ResolverTypeWrapper<Claim>;
  ClaimByIDResponse: ResolversTypes['ClaimByIDResponseSuccess'] | ResolversTypes['ResponseError'];
  ClaimByIDResponseSuccess: ResolverTypeWrapper<ClaimByIdResponseSuccess>;
  ClaimEdge: ResolverTypeWrapper<ClaimEdge>;
  ClaimPageInfo: ResolverTypeWrapper<ClaimPageInfo>;
  ClaimRedemptionStatus: ClaimRedemptionStatus;
  ClaimStatus: ClaimStatus;
  ClaimTimestamps: ResolverTypeWrapper<ClaimTimestamps>;
  ClaimType: ClaimType;
  ClaimerStatsForLootboxTournamentResponse: ResolversTypes['ClaimerStatsForLootboxTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  ClaimerStatsForLootboxTournamentResponseSuccess: ResolverTypeWrapper<ClaimerStatsForLootboxTournamentResponseSuccess>;
  ClaimerStatsForLootboxTournamentRow: ResolverTypeWrapper<ClaimerStatsForLootboxTournamentRow>;
  ClaimerStatsForTournamentResponse: ResolversTypes['ClaimerStatsForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  ClaimerStatsForTournamentResponseSuccess: ResolverTypeWrapper<ClaimerStatsForTournamentResponseSuccess>;
  ClaimerStatsForTournamentRow: ResolverTypeWrapper<ClaimerStatsForTournamentRow>;
  CompleteClaimPayload: CompleteClaimPayload;
  CompleteClaimResponse: ResolversTypes['CompleteClaimResponseSuccess'] | ResolversTypes['ResponseError'];
  CompleteClaimResponseSuccess: ResolverTypeWrapper<CompleteClaimResponseSuccess>;
  ConnectWalletPayload: ConnectWalletPayload;
  ConnectWalletResponse: ResolversTypes['ConnectWalletResponseSuccess'] | ResolversTypes['ResponseError'];
  ConnectWalletResponseSuccess: ResolverTypeWrapper<ConnectWalletResponseSuccess>;
  Conquest: ResolverTypeWrapper<Conquest>;
  ConquestPreview: ResolverTypeWrapper<ConquestPreview>;
  ConquestStatus: ConquestStatus;
  CountryCode: ResolverTypeWrapper<Scalars['CountryCode']>;
  CreateActivationInput: CreateActivationInput;
  CreateActivationPayload: CreateActivationPayload;
  CreateActivationResponse: ResolversTypes['CreateActivationResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateActivationResponseSuccess: ResolverTypeWrapper<CreateActivationResponseSuccess>;
  CreateAdPayload: CreateAdPayload;
  CreateAdResponse: ResolversTypes['CreateAdResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateAdResponseSuccess: ResolverTypeWrapper<CreateAdResponseSuccess>;
  CreateAdSetPayload: CreateAdSetPayload;
  CreateAdSetResponse: ResolversTypes['CreateAdSetResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateAdSetResponseSuccess: ResolverTypeWrapper<CreateAdSetResponseSuccess>;
  CreateClaimPayload: CreateClaimPayload;
  CreateClaimResponse: ResolversTypes['CreateClaimResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateClaimResponseSuccess: ResolverTypeWrapper<CreateClaimResponseSuccess>;
  CreateConquestPayload: CreateConquestPayload;
  CreateConquestResponse: ResolversTypes['CreateConquestResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateConquestResponseSuccess: ResolverTypeWrapper<CreateConquestResponseSuccess>;
  CreateLootboxPayload: CreateLootboxPayload;
  CreateLootboxResponse: ResolversTypes['CreateLootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateLootboxResponseSuccess: ResolverTypeWrapper<CreateLootboxResponseSuccess>;
  CreateOfferPayload: CreateOfferPayload;
  CreateOfferResponse: ResolversTypes['CreateOfferResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateOfferResponseSuccess: ResolverTypeWrapper<CreateOfferResponseSuccess>;
  CreatePartyBasketPayload: CreatePartyBasketPayload;
  CreatePartyBasketResponse: ResolversTypes['CreatePartyBasketResponseSuccess'] | ResolversTypes['ResponseError'];
  CreatePartyBasketResponseSuccess: ResolverTypeWrapper<CreatePartyBasketResponseSuccess>;
  CreateReferralPayload: CreateReferralPayload;
  CreateReferralResponse: ResolversTypes['CreateReferralResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateReferralResponseSuccess: ResolverTypeWrapper<CreateReferralResponseSuccess>;
  CreateTournamentPayload: CreateTournamentPayload;
  CreateTournamentResponse: ResolversTypes['CreateTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateTournamentResponseSuccess: ResolverTypeWrapper<CreateTournamentResponseSuccess>;
  CreateUserRecordPayload: CreateUserRecordPayload;
  CreateUserResponse: ResolversTypes['CreateUserResponseSuccess'] | ResolversTypes['ResponseError'];
  CreateUserResponseSuccess: ResolverTypeWrapper<CreateUserResponseSuccess>;
  CreateUserWithPasswordPayload: CreateUserWithPasswordPayload;
  CreateUserWithWalletPayload: CreateUserWithWalletPayload;
  Creative: ResolverTypeWrapper<Creative>;
  CreativeInputCreate: CreativeInputCreate;
  CreativeInputEdit: CreativeInputEdit;
  CreativeType: CreativeType;
  Cuid: ResolverTypeWrapper<Scalars['Cuid']>;
  Currency: ResolverTypeWrapper<Scalars['Currency']>;
  DID: ResolverTypeWrapper<Scalars['DID']>;
  DailyClaimStatisticsForTournamentInput: DailyClaimStatisticsForTournamentInput;
  DailyClaimStatisticsForTournamentResponse: ResolversTypes['DailyClaimStatisticsForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  DailyClaimStatisticsForTournamentResponseSuccess: ResolverTypeWrapper<DailyClaimStatisticsForTournamentResponseSuccess>;
  DailyClaimStatisticsForTournamentRow: ResolverTypeWrapper<DailyClaimStatisticsForTournamentRow>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DealConfigTournament: ResolverTypeWrapper<DealConfigTournament>;
  DecisionAdApiBetaV2Payload: DecisionAdApiBetaV2Payload;
  DecisionAdApiBetaV2Response: ResolversTypes['DecisionAdApiBetaV2ResponseSuccess'] | ResolversTypes['ResponseError'];
  DecisionAdApiBetaV2ResponseSuccess: ResolverTypeWrapper<DecisionAdApiBetaV2ResponseSuccess>;
  DeleteStreamResponse: ResolversTypes['DeleteStreamResponseSuccess'] | ResolversTypes['ResponseError'];
  DeleteStreamResponseSuccess: ResolverTypeWrapper<DeleteStreamResponseSuccess>;
  DeleteTournamentResponse: ResolversTypes['DeleteTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  DeleteTournamentResponseSuccess: ResolverTypeWrapper<DeleteTournamentResponseSuccess>;
  Duration: ResolverTypeWrapper<Scalars['Duration']>;
  EditActivationInput: EditActivationInput;
  EditActivationPayload: EditActivationPayload;
  EditActivationResponse: ResolversTypes['EditActivationResponseSuccess'] | ResolversTypes['ResponseError'];
  EditActivationResponseSuccess: ResolverTypeWrapper<EditActivationResponseSuccess>;
  EditAdPayload: EditAdPayload;
  EditAdResponse: ResolversTypes['EditAdResponseSuccess'] | ResolversTypes['ResponseError'];
  EditAdResponseSuccess: ResolverTypeWrapper<EditAdResponseSuccess>;
  EditAdSetPayload: EditAdSetPayload;
  EditAdSetResponse: ResolversTypes['EditAdSetResponseSuccess'] | ResolversTypes['ResponseError'];
  EditAdSetResponseSuccess: ResolverTypeWrapper<EditAdSetResponseSuccess>;
  EditLootboxPayload: EditLootboxPayload;
  EditLootboxResponse: ResolversTypes['EditLootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  EditLootboxResponseSuccess: ResolverTypeWrapper<EditLootboxResponseSuccess>;
  EditOfferPayload: EditOfferPayload;
  EditOfferResponse: ResolversTypes['EditOfferResponseSuccess'] | ResolversTypes['ResponseError'];
  EditOfferResponseSuccess: ResolverTypeWrapper<EditOfferResponseSuccess>;
  EditPartyBasketPayload: EditPartyBasketPayload;
  EditPartyBasketResponse: ResolversTypes['EditPartyBasketResponseSuccess'] | ResolversTypes['ResponseError'];
  EditPartyBasketResponseSuccess: ResolverTypeWrapper<EditPartyBasketResponseSuccess>;
  EditStreamPayload: EditStreamPayload;
  EditStreamResponse: ResolversTypes['EditStreamResponseSuccess'] | ResolversTypes['ResponseError'];
  EditStreamResponseSuccess: ResolverTypeWrapper<EditStreamResponseSuccess>;
  EditTournamentPayload: EditTournamentPayload;
  EditTournamentResponse: ResolversTypes['EditTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  EditTournamentResponseSuccess: ResolverTypeWrapper<EditTournamentResponseSuccess>;
  EditWhitelistAffiliateToOfferPayload: EditWhitelistAffiliateToOfferPayload;
  EditWhitelistAffiliateToOfferResponse: ResolversTypes['EditWhitelistAffiliateToOfferResponseSuccess'] | ResolversTypes['ResponseError'];
  EditWhitelistAffiliateToOfferResponseSuccess: ResolverTypeWrapper<EditWhitelistAffiliateToOfferResponseSuccess>;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  EventMetadata: ResolverTypeWrapper<EventMetadata>;
  FanListRowForTournament: ResolverTypeWrapper<FanListRowForTournament>;
  FansListFavoriteLootbox: ResolverTypeWrapper<FansListFavoriteLootbox>;
  FansListForTournamentResponse: ResolversTypes['FansListForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  FansListForTournamentResponseSuccess: ResolverTypeWrapper<FansListForTournamentResponseSuccess>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GUID: ResolverTypeWrapper<Scalars['GUID']>;
  GenerateClaimsCsvPayload: GenerateClaimsCsvPayload;
  GenerateClaimsCsvResponse: ResolversTypes['GenerateClaimsCsvResponseSuccess'] | ResolversTypes['ResponseError'];
  GenerateClaimsCsvResponseSuccess: ResolverTypeWrapper<GenerateClaimsCsvResponseSuccess>;
  GetAnonTokenResponse: ResolversTypes['GetAnonTokenResponseSuccess'] | ResolversTypes['ResponseError'];
  GetAnonTokenResponseSuccess: ResolverTypeWrapper<GetAnonTokenResponseSuccess>;
  GetConquestResponse: ResolversTypes['GetConquestResponseSuccess'] | ResolversTypes['ResponseError'];
  GetConquestResponseSuccess: ResolverTypeWrapper<GetConquestResponseSuccess>;
  GetLootboxByAddressResponse: ResolversTypes['LootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  GetLootboxByIDResponse: ResolversTypes['LootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  GetMyProfileResponse: ResolversTypes['GetMyProfileSuccess'] | ResolversTypes['ResponseError'];
  GetMyProfileSuccess: ResolverTypeWrapper<GetMyProfileSuccess>;
  GetPartyBasketResponse: ResolversTypes['GetPartyBasketResponseSuccess'] | ResolversTypes['ResponseError'];
  GetPartyBasketResponseSuccess: ResolverTypeWrapper<GetPartyBasketResponseSuccess>;
  GetWhitelistSignaturesPayload: GetWhitelistSignaturesPayload;
  GetWhitelistSignaturesResponse: ResolversTypes['GetWhitelistSignaturesResponseSuccess'] | ResolversTypes['ResponseError'];
  GetWhitelistSignaturesResponseSuccess: ResolverTypeWrapper<GetWhitelistSignaturesResponseSuccess>;
  HSL: ResolverTypeWrapper<Scalars['HSL']>;
  HSLA: ResolverTypeWrapper<Scalars['HSLA']>;
  HexColorCode: ResolverTypeWrapper<Scalars['HexColorCode']>;
  Hexadecimal: ResolverTypeWrapper<Scalars['Hexadecimal']>;
  IBAN: ResolverTypeWrapper<Scalars['IBAN']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  IP: ResolverTypeWrapper<Scalars['IP']>;
  IPv4: ResolverTypeWrapper<Scalars['IPv4']>;
  IPv6: ResolverTypeWrapper<Scalars['IPv6']>;
  ISBN: ResolverTypeWrapper<Scalars['ISBN']>;
  ISO8601Duration: ResolverTypeWrapper<Scalars['ISO8601Duration']>;
  InputCursor: InputCursor;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  JWT: ResolverTypeWrapper<Scalars['JWT']>;
  Latitude: ResolverTypeWrapper<Scalars['Latitude']>;
  ListAdSetsOfAdvertiserResponse: ResolversTypes['ListAdSetsOfAdvertiserResponseSuccess'] | ResolversTypes['ResponseError'];
  ListAdSetsOfAdvertiserResponseSuccess: ResolverTypeWrapper<ListAdSetsOfAdvertiserResponseSuccess>;
  ListAdsOfAdvertiserResponse: ResolversTypes['ListAdsOfAdvertiserResponseSuccess'] | ResolversTypes['ResponseError'];
  ListAdsOfAdvertiserResponseSuccess: ResolverTypeWrapper<ListAdsOfAdvertiserResponseSuccess>;
  ListAvailableLootboxesForClaimResponse: ResolversTypes['ListAvailableLootboxesForClaimResponseSuccess'] | ResolversTypes['ResponseError'];
  ListAvailableLootboxesForClaimResponseSuccess: ResolverTypeWrapper<ListAvailableLootboxesForClaimResponseSuccess>;
  ListConquestPreviewsResponse: ResolversTypes['ListConquestPreviewsResponseSuccess'] | ResolversTypes['ResponseError'];
  ListConquestPreviewsResponseSuccess: ResolverTypeWrapper<ListConquestPreviewsResponseSuccess>;
  ListCreatedOffersResponse: ResolversTypes['ListCreatedOffersResponseSuccess'] | ResolversTypes['ResponseError'];
  ListCreatedOffersResponseSuccess: ResolverTypeWrapper<ListCreatedOffersResponseSuccess>;
  ListEventsOfAdvertiserResponse: ResolversTypes['ListEventsOfAdvertiserResponseSuccess'] | ResolversTypes['ResponseError'];
  ListEventsOfAdvertiserResponseSuccess: ResolverTypeWrapper<ListEventsOfAdvertiserResponseSuccess>;
  ListOffersAvailableForOrganizerResponse: ResolversTypes['ListOffersAvailableForOrganizerResponseSuccess'] | ResolversTypes['ResponseError'];
  ListOffersAvailableForOrganizerResponseSuccess: ResolverTypeWrapper<ListOffersAvailableForOrganizerResponseSuccess>;
  ListPartnersOfAdvertiserResponse: ResolversTypes['ListPartnersOfAdvertiserResponseSuccess'] | ResolversTypes['ResponseError'];
  ListPartnersOfAdvertiserResponseSuccess: ResolverTypeWrapper<ListPartnersOfAdvertiserResponseSuccess>;
  ListPotentialAirdropClaimersPayload: ListPotentialAirdropClaimersPayload;
  ListPotentialAirdropClaimersResponse: ResolversTypes['ListPotentialAirdropClaimersResponseSuccess'] | ResolversTypes['ResponseError'];
  ListPotentialAirdropClaimersResponseSuccess: ResolverTypeWrapper<ListPotentialAirdropClaimersResponseSuccess>;
  ListWhitelistedAffiliatesToOfferPayload: ListWhitelistedAffiliatesToOfferPayload;
  ListWhitelistedAffiliatesToOfferResponse: ResolversTypes['ListWhitelistedAffiliatesToOfferResponseSuccess'] | ResolversTypes['ResponseError'];
  ListWhitelistedAffiliatesToOfferResponseSuccess: ResolverTypeWrapper<ListWhitelistedAffiliatesToOfferResponseSuccess>;
  LocalDate: ResolverTypeWrapper<Scalars['LocalDate']>;
  LocalEndTime: ResolverTypeWrapper<Scalars['LocalEndTime']>;
  LocalTime: ResolverTypeWrapper<Scalars['LocalTime']>;
  Locale: ResolverTypeWrapper<Scalars['Locale']>;
  Long: ResolverTypeWrapper<Scalars['Long']>;
  Longitude: ResolverTypeWrapper<Scalars['Longitude']>;
  Lootbox: ResolverTypeWrapper<Lootbox>;
  LootboxAirdropMetadata: ResolverTypeWrapper<LootboxAirdropMetadata>;
  LootboxAirdropMetadataQuestion: ResolverTypeWrapper<LootboxAirdropMetadataQuestion>;
  LootboxChain: ResolverTypeWrapper<LootboxChain>;
  LootboxCompletedClaimsForTournamentResponse: ResolversTypes['LootboxCompletedClaimsForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  LootboxCompletedClaimsForTournamentResponseSuccess: ResolverTypeWrapper<LootboxCompletedClaimsForTournamentResponseSuccess>;
  LootboxCompletedClaimsForTournamentRow: ResolverTypeWrapper<LootboxCompletedClaimsForTournamentRow>;
  LootboxCustomSchema: ResolverTypeWrapper<LootboxCustomSchema>;
  LootboxCustomSchemaData: ResolverTypeWrapper<LootboxCustomSchemaData>;
  LootboxFeedEdge: ResolverTypeWrapper<LootboxFeedEdge>;
  LootboxFeedResponse: ResolversTypes['LootboxFeedResponseSuccess'] | ResolversTypes['ResponseError'];
  LootboxFeedResponseSuccess: ResolverTypeWrapper<LootboxFeedResponseSuccess>;
  LootboxMetadata: ResolverTypeWrapper<LootboxMetadata>;
  LootboxResponseSuccess: ResolverTypeWrapper<LootboxResponseSuccess>;
  LootboxSnapshot: ResolverTypeWrapper<LootboxSnapshot>;
  LootboxSnapshotTimestamps: ResolverTypeWrapper<LootboxSnapshotTimestamps>;
  LootboxSocials: ResolverTypeWrapper<LootboxSocials>;
  LootboxSocialsWithoutEmail: ResolverTypeWrapper<LootboxSocialsWithoutEmail>;
  LootboxStatus: LootboxStatus;
  LootboxTicket: ResolverTypeWrapper<LootboxTicket>;
  LootboxTimestamps: ResolverTypeWrapper<LootboxTimestamps>;
  LootboxTournamentSnapshot: ResolverTypeWrapper<LootboxTournamentSnapshot>;
  LootboxTournamentSnapshotCursor: ResolverTypeWrapper<LootboxTournamentSnapshotCursor>;
  LootboxTournamentStatus: LootboxTournamentStatus;
  LootboxType: LootboxType;
  LootboxUserClaimPageInfo: ResolverTypeWrapper<LootboxUserClaimPageInfo>;
  LootboxUserClaimPageInfoResponse: ResolverTypeWrapper<LootboxUserClaimPageInfoResponse>;
  LootboxVariant: LootboxVariant;
  MAC: ResolverTypeWrapper<Scalars['MAC']>;
  MarketplacePreviewAffiliate: ResolverTypeWrapper<MarketplacePreviewAffiliate>;
  MarketplacePreviewOffer: ResolverTypeWrapper<MarketplacePreviewOffer>;
  MeasurementPartnerType: MeasurementPartnerType;
  Memo: ResolverTypeWrapper<Memo>;
  MintWhitelistSignature: ResolverTypeWrapper<MintWhitelistSignature>;
  Mutation: ResolverTypeWrapper<{}>;
  MyLootboxByNonceResponse: ResolversTypes['MyLootboxByNonceResponseSuccess'] | ResolversTypes['ResponseError'];
  MyLootboxByNonceResponseSuccess: ResolverTypeWrapper<MyLootboxByNonceResponseSuccess>;
  MyTournamentResponse: ResolversTypes['MyTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  MyTournamentResponseSuccess: ResolverTypeWrapper<MyTournamentResponseSuccess>;
  NegativeFloat: ResolverTypeWrapper<Scalars['NegativeFloat']>;
  NegativeInt: ResolverTypeWrapper<Scalars['NegativeInt']>;
  NonEmptyString: ResolverTypeWrapper<Scalars['NonEmptyString']>;
  NonNegativeFloat: ResolverTypeWrapper<Scalars['NonNegativeFloat']>;
  NonNegativeInt: ResolverTypeWrapper<Scalars['NonNegativeInt']>;
  NonPositiveFloat: ResolverTypeWrapper<Scalars['NonPositiveFloat']>;
  NonPositiveInt: ResolverTypeWrapper<Scalars['NonPositiveInt']>;
  ObjectID: ResolverTypeWrapper<Scalars['ObjectID']>;
  Offer: ResolverTypeWrapper<Offer>;
  OfferAffiliateView: ResolverTypeWrapper<OfferAffiliateView>;
  OfferAirdropMetadata: ResolverTypeWrapper<OfferAirdropMetadata>;
  OfferAirdropMetadataCreateInput: OfferAirdropMetadataCreateInput;
  OfferAirdropMetadataEditInput: OfferAirdropMetadataEditInput;
  OfferAirdropPromoterView: ResolverTypeWrapper<OfferAirdropPromoterView>;
  OfferAirdropQuestionCreateInput: OfferAirdropQuestionCreateInput;
  OfferInTournamentStatus: OfferInTournamentStatus;
  OfferPreview: ResolverTypeWrapper<OfferPreview>;
  OfferStatus: OfferStatus;
  OfferStrategyType: OfferStrategyType;
  OrganizerOfferPreview: ResolverTypeWrapper<OrganizerOfferPreview>;
  OrganizerOfferWhitelist: ResolverTypeWrapper<OrganizerOfferWhitelist>;
  OrganizerOfferWhitelistStatus: OrganizerOfferWhitelistStatus;
  OrganizerOfferWhitelistWithProfile: ResolverTypeWrapper<OrganizerOfferWhitelistWithProfile>;
  OrganizerProfile: ResolverTypeWrapper<OrganizerProfile>;
  OrganizerRank: OrganizerRank;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  PaginateLootboxTournamentSnapshotEdge: ResolverTypeWrapper<PaginateLootboxTournamentSnapshotEdge>;
  PaginateLootboxTournamentSnapshots: ResolverTypeWrapper<PaginateLootboxTournamentSnapshots>;
  PaginatedLootboxTournamentSnapshotPageInfo: ResolverTypeWrapper<PaginatedLootboxTournamentSnapshotPageInfo>;
  PartyBasket: ResolverTypeWrapper<PartyBasket>;
  PartyBasketStatus: PartyBasketStatus;
  PartyBasketTimestamps: ResolverTypeWrapper<PartyBasketTimestamps>;
  PartyBasketWhitelistSignature: ResolverTypeWrapper<PartyBasketWhitelistSignature>;
  PendingClaimToUntrustedPayload: PendingClaimToUntrustedPayload;
  PhoneNumber: ResolverTypeWrapper<Scalars['PhoneNumber']>;
  Placement: Placement;
  Port: ResolverTypeWrapper<Scalars['Port']>;
  PositiveFloat: ResolverTypeWrapper<Scalars['PositiveFloat']>;
  PositiveInt: ResolverTypeWrapper<Scalars['PositiveInt']>;
  PostalCode: ResolverTypeWrapper<Scalars['PostalCode']>;
  PotentialAirdropClaimer: ResolverTypeWrapper<PotentialAirdropClaimer>;
  PublicUser: ResolverTypeWrapper<PublicUser>;
  PublicUserResponse: ResolversTypes['PublicUserResponseSuccess'] | ResolversTypes['ResponseError'];
  PublicUserResponseSuccess: ResolverTypeWrapper<PublicUserResponseSuccess>;
  Query: ResolverTypeWrapper<{}>;
  QuestionAnswerPreview: ResolverTypeWrapper<QuestionAnswerPreview>;
  QuestionAnswerStatus: QuestionAnswerStatus;
  QuestionFieldType: QuestionFieldType;
  RGB: ResolverTypeWrapper<Scalars['RGB']>;
  RGBA: ResolverTypeWrapper<Scalars['RGBA']>;
  RateQuoteDealConfig: ResolverTypeWrapper<RateQuoteDealConfig>;
  RateQuoteEstimate: ResolverTypeWrapper<RateQuoteEstimate>;
  RateQuoteInput: RateQuoteInput;
  RedeemSignaturePayload: RedeemSignaturePayload;
  RedeemSignatureResponse: ResolversTypes['RedeemSignatureResponseSuccess'] | ResolversTypes['ResponseError'];
  RedeemSignatureResponseSuccess: ResolverTypeWrapper<RedeemSignatureResponseSuccess>;
  Referral: ResolverTypeWrapper<Referral>;
  ReferralResponse: ResolversTypes['ReferralResponseSuccess'] | ResolversTypes['ResponseError'];
  ReferralResponseSuccess: ResolverTypeWrapper<ReferralResponseSuccess>;
  ReferralTimestamps: ResolverTypeWrapper<ReferralTimestamps>;
  ReferralType: ReferralType;
  ReferrerClaimsForLootboxResponse: ResolversTypes['ReferrerClaimsForLootboxResponseSuccess'] | ResolversTypes['ResponseError'];
  ReferrerClaimsForLootboxResponseSuccess: ResolverTypeWrapper<ReferrerClaimsForLootboxResponseSuccess>;
  ReferrerClaimsForLootboxRow: ResolverTypeWrapper<ReferrerClaimsForLootboxRow>;
  ReferrerClaimsForTournamentResponse: ResolversTypes['ReferrerClaimsForTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  ReferrerClaimsForTournamentResponseSuccess: ResolverTypeWrapper<ReferrerClaimsForTournamentResponseSuccess>;
  ReferrerClaimsForTournamentRow: ResolverTypeWrapper<ReferrerClaimsForTournamentRow>;
  RemoveOfferAdSetFromTournamentPayload: RemoveOfferAdSetFromTournamentPayload;
  RemoveOfferAdSetFromTournamentResponse: ResolversTypes['RemoveOfferAdSetFromTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  RemoveOfferAdSetFromTournamentResponseSuccess: ResolverTypeWrapper<RemoveOfferAdSetFromTournamentResponseSuccess>;
  RemovePromoterFromTournamentPayload: RemovePromoterFromTournamentPayload;
  RemovePromoterFromTournamentResponse: ResolversTypes['RemovePromoterFromTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  RemovePromoterFromTournamentResponseSuccess: ResolverTypeWrapper<RemovePromoterFromTournamentResponseSuccess>;
  RemoveWalletPayload: RemoveWalletPayload;
  RemoveWalletResponse: ResolversTypes['RemoveWalletResponseSuccess'] | ResolversTypes['ResponseError'];
  RemoveWalletResponseSuccess: ResolverTypeWrapper<RemoveWalletResponseSuccess>;
  ReportAdvertiserAffiliatePerfInput: ReportAdvertiserAffiliatePerfInput;
  ReportAdvertiserAffiliatePerfResponse: ResolversTypes['ReportAdvertiserAffiliatePerfResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportAdvertiserAffiliatePerfResponseSuccess: ResolverTypeWrapper<ReportAdvertiserAffiliatePerfResponseSuccess>;
  ReportAdvertiserOfferPerformanceResponse: ResolversTypes['ReportAdvertiserOfferPerformanceResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportAdvertiserOfferPerformanceResponseSuccess: ResolverTypeWrapper<ReportAdvertiserOfferPerformanceResponseSuccess>;
  ReportAdvertiserTournamentPerfInput: ReportAdvertiserTournamentPerfInput;
  ReportAdvertiserTournamentPerfResponse: ResolversTypes['ReportAdvertiserTournamentPerfResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportAdvertiserTournamentPerfResponseSuccess: ResolverTypeWrapper<ReportAdvertiserTournamentPerfResponseSuccess>;
  ReportOrganizerOfferPerfInput: ReportOrganizerOfferPerfInput;
  ReportOrganizerOfferPerfResponse: ResolversTypes['ReportOrganizerOfferPerfResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportOrganizerOfferPerfResponseSuccess: ResolverTypeWrapper<ReportOrganizerOfferPerfResponseSuccess>;
  ReportOrganizerTournamentPerfInput: ReportOrganizerTournamentPerfInput;
  ReportOrganizerTournamentResponse: ResolversTypes['ReportOrganizerTournamentResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportOrganizerTournamentResponseSuccess: ResolverTypeWrapper<ReportOrganizerTournamentResponseSuccess>;
  ReportPromoterTournamentPerfInput: ReportPromoterTournamentPerfInput;
  ReportPromoterTournamentPerfResponse: ResolversTypes['ReportPromoterTournamentPerfResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportPromoterTournamentPerfResponseSuccess: ResolverTypeWrapper<ReportPromoterTournamentPerfResponseSuccess>;
  ReportTotalEarningsForAffiliateResponse: ResolversTypes['ReportTotalEarningsForAffiliateResponseSuccess'] | ResolversTypes['ResponseError'];
  ReportTotalEarningsForAffiliateResponseSuccess: ResolverTypeWrapper<ReportTotalEarningsForAffiliateResponseSuccess>;
  ResponseError: ResolverTypeWrapper<ResponseError>;
  RoutingNumber: ResolverTypeWrapper<Scalars['RoutingNumber']>;
  SafeInt: ResolverTypeWrapper<Scalars['SafeInt']>;
  SemVer: ResolverTypeWrapper<Scalars['SemVer']>;
  Status: ResolverTypeWrapper<Status>;
  StatusCode: StatusCode;
  Stream: ResolverTypeWrapper<Stream>;
  StreamInput: StreamInput;
  StreamTimestamps: ResolverTypeWrapper<StreamTimestamps>;
  StreamType: StreamType;
  String: ResolverTypeWrapper<Scalars['String']>;
  SyncProviderUserResponse: ResolversTypes['ResponseError'] | ResolversTypes['SyncProviderUserResponseSuccess'];
  SyncProviderUserResponseSuccess: ResolverTypeWrapper<SyncProviderUserResponseSuccess>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  TimeZone: ResolverTypeWrapper<Scalars['TimeZone']>;
  Timestamp: ResolverTypeWrapper<Scalars['Timestamp']>;
  Tournament: ResolverTypeWrapper<Tournament>;
  TournamentPreview: ResolverTypeWrapper<TournamentPreview>;
  TournamentResponse: ResolversTypes['ResponseError'] | ResolversTypes['TournamentResponseSuccess'];
  TournamentResponseSuccess: ResolverTypeWrapper<TournamentResponseSuccess>;
  TournamentTimestamps: ResolverTypeWrapper<TournamentTimestamps>;
  TruncatedEmailByPhoneResponse: ResolversTypes['ResponseError'] | ResolversTypes['TruncatedEmailByPhoneResponseSuccess'];
  TruncatedEmailByPhoneResponseSuccess: ResolverTypeWrapper<TruncatedEmailByPhoneResponseSuccess>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  USCurrency: ResolverTypeWrapper<Scalars['USCurrency']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UnsignedFloat: ResolverTypeWrapper<Scalars['UnsignedFloat']>;
  UnsignedInt: ResolverTypeWrapper<Scalars['UnsignedInt']>;
  UpdateAdvertiserDetailsPayload: UpdateAdvertiserDetailsPayload;
  UpdateAdvertiserDetailsResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpdateAdvertiserDetailsResponseSuccess'];
  UpdateAdvertiserDetailsResponseSuccess: ResolverTypeWrapper<UpdateAdvertiserDetailsResponseSuccess>;
  UpdateAffiliateDetailsPayload: UpdateAffiliateDetailsPayload;
  UpdateAffiliateDetailsResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpdateAffiliateDetailsResponseSuccess'];
  UpdateAffiliateDetailsResponseSuccess: ResolverTypeWrapper<UpdateAffiliateDetailsResponseSuccess>;
  UpdateClaimRedemptionStatusPayload: UpdateClaimRedemptionStatusPayload;
  UpdateClaimRedemptionStatusResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpdateClaimRedemptionStatusResponseSuccess'];
  UpdateClaimRedemptionStatusResponseSuccess: ResolverTypeWrapper<UpdateClaimRedemptionStatusResponseSuccess>;
  UpdateConquestPayload: UpdateConquestPayload;
  UpdateConquestResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpdateConquestResponseSuccess'];
  UpdateConquestResponseSuccess: ResolverTypeWrapper<UpdateConquestResponseSuccess>;
  UpdatePromoterRateQuoteInTournamentResponseSuccess: ResolverTypeWrapper<UpdatePromoterRateQuoteInTournamentResponseSuccess>;
  UpdateUserAuthPayload: UpdateUserAuthPayload;
  UpdateUserPayload: UpdateUserPayload;
  UpdateUserResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpdateUserResponseSuccess'];
  UpdateUserResponseSuccess: ResolverTypeWrapper<UpdateUserResponseSuccess>;
  UpgradeToAdvertiserResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpgradeToAdvertiserResponseSuccess'];
  UpgradeToAdvertiserResponseSuccess: ResolverTypeWrapper<UpgradeToAdvertiserResponseSuccess>;
  UpgradeToAffiliateResponse: ResolversTypes['ResponseError'] | ResolversTypes['UpgradeToAffiliateResponseSuccess'];
  UpgradeToAffiliateResponseSuccess: ResolverTypeWrapper<UpgradeToAffiliateResponseSuccess>;
  User: ResolverTypeWrapper<User>;
  UserClaimsCursor: UserClaimsCursor;
  UserClaimsResponse: ResolversTypes['ResponseError'] | ResolversTypes['UserClaimsResponseSuccess'];
  UserClaimsResponseSuccess: ResolverTypeWrapper<UserClaimsResponseSuccess>;
  UserSocials: ResolverTypeWrapper<UserSocials>;
  UserSocialsInput: UserSocialsInput;
  UtcOffset: ResolverTypeWrapper<Scalars['UtcOffset']>;
  ViewAdResponse: ResolversTypes['ResponseError'] | ResolversTypes['ViewAdResponseSuccess'];
  ViewAdResponseSuccess: ResolverTypeWrapper<ViewAdResponseSuccess>;
  ViewAdSetResponse: ResolversTypes['ResponseError'] | ResolversTypes['ViewAdSetResponseSuccess'];
  ViewAdSetResponseSuccess: ResolverTypeWrapper<ViewAdSetResponseSuccess>;
  ViewCreatedOfferResponse: ResolversTypes['ResponseError'] | ResolversTypes['ViewCreatedOfferResponseSuccess'];
  ViewCreatedOfferResponseSuccess: ResolverTypeWrapper<ViewCreatedOfferResponseSuccess>;
  ViewMyTournamentsAsOrganizerResponse: ResolversTypes['ResponseError'] | ResolversTypes['ViewMyTournamentsAsOrganizerResponseSuccess'];
  ViewMyTournamentsAsOrganizerResponseSuccess: ResolverTypeWrapper<ViewMyTournamentsAsOrganizerResponseSuccess>;
  ViewOfferDetailsAsEventAffiliatePayload: ViewOfferDetailsAsEventAffiliatePayload;
  ViewOfferDetailsAsEventAffiliateResponse: ResolversTypes['ResponseError'] | ResolversTypes['ViewOfferDetailsAsEventAffiliateResponseSuccess'];
  ViewOfferDetailsAsEventAffiliateResponseSuccess: ResolverTypeWrapper<ViewOfferDetailsAsEventAffiliateResponseSuccess>;
  ViewTournamentAsOrganizerResponse: ResolversTypes['ResponseError'] | ResolversTypes['ViewTournamentAsOrganizerResponseSuccess'];
  ViewTournamentAsOrganizerResponseSuccess: ResolverTypeWrapper<ViewTournamentAsOrganizerResponseSuccess>;
  Void: ResolverTypeWrapper<Scalars['Void']>;
  Wallet: ResolverTypeWrapper<Wallet>;
  WhitelistAffiliateToOfferPayload: WhitelistAffiliateToOfferPayload;
  WhitelistAffiliateToOfferResponse: ResolversTypes['ResponseError'] | ResolversTypes['WhitelistAffiliateToOfferResponseSuccess'];
  WhitelistAffiliateToOfferResponseSuccess: ResolverTypeWrapper<WhitelistAffiliateToOfferResponseSuccess>;
  WhitelistAllUnassignedClaimsPayload: WhitelistAllUnassignedClaimsPayload;
  WhitelistAllUnassignedClaimsResponse: ResolversTypes['ResponseError'] | ResolversTypes['WhitelistAllUnassignedClaimsResponseSuccess'];
  WhitelistAllUnassignedClaimsResponseSuccess: ResolverTypeWrapper<WhitelistAllUnassignedClaimsResponseSuccess>;
  WhitelistMyLootboxClaimsPayload: WhitelistMyLootboxClaimsPayload;
  WhitelistMyLootboxClaimsResponse: ResolversTypes['ResponseError'] | ResolversTypes['WhitelistMyLootboxClaimsResponseSuccess'];
  WhitelistMyLootboxClaimsResponseSuccess: ResolverTypeWrapper<WhitelistMyLootboxClaimsResponseSuccess>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AccountNumber: Scalars['AccountNumber'];
  Activation: Activation;
  Ad: Ad;
  AdEvent: AdEvent;
  AdEventAffiliateAttribution: AdEventAffiliateAttribution;
  AdPreviewInDealConfig: AdPreviewInDealConfig;
  AdServed: AdServed;
  AdSet: AdSet;
  AdSetPreview: AdSetPreview;
  AdSetPreviewInDealConfig: AdSetPreviewInDealConfig;
  AdTargetTag: AdTargetTag;
  AdTimestamps: AdTimestamps;
  AddOfferAdSetToTournamentPayload: AddOfferAdSetToTournamentPayload;
  AddOfferAdSetToTournamentResponse: ResolversParentTypes['AddOfferAdSetToTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AddOfferAdSetToTournamentResponseSuccess: AddOfferAdSetToTournamentResponseSuccess;
  AddStreamPayload: AddStreamPayload;
  AddStreamResponse: ResolversParentTypes['AddStreamResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AddStreamResponseSuccess: AddStreamResponseSuccess;
  AddUpdatePromoterRateQuoteInTournamentResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpdatePromoterRateQuoteInTournamentResponseSuccess'];
  AddUpdatePromoterRateQuoteToTournamentPayload: AddUpdatePromoterRateQuoteToTournamentPayload;
  Advertiser: Advertiser;
  AdvertiserAdminViewResponse: ResolversParentTypes['AdvertiserAdminViewResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AdvertiserAdminViewResponseSuccess: AdvertiserAdminViewResponseSuccess;
  AdvertiserPublicViewResponse: ResolversParentTypes['AdvertiserPublicViewResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AdvertiserPublicViewResponseSuccess: AdvertiserPublicViewResponseSuccess;
  Affiliate: Affiliate;
  AffiliateAdminViewResponse: ResolversParentTypes['AffiliateAdminViewResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AffiliateAdminViewResponseSuccess: AffiliateAdminViewResponseSuccess;
  AffiliatePublicViewResponse: ResolversParentTypes['AffiliatePublicViewResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AffiliatePublicViewResponseSuccess: AffiliatePublicViewResponseSuccess;
  AirdropMetadataCreateInput: AirdropMetadataCreateInput;
  AnalyticsAdEvent: AnalyticsAdEvent;
  AnalyticsMemo: AnalyticsMemo;
  AnswerAirdropQuestionInput: AnswerAirdropQuestionInput;
  AnswerAirdropQuestionPayload: AnswerAirdropQuestionPayload;
  AnswerAirdropQuestionResponse: ResolversParentTypes['AnswerAirdropQuestionResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AnswerAirdropQuestionResponseSuccess: AnswerAirdropQuestionResponseSuccess;
  AuthenticateWalletPayload: AuthenticateWalletPayload;
  AuthenticateWalletResponse: ResolversParentTypes['AuthenticateWalletResponseSuccess'] | ResolversParentTypes['ResponseError'];
  AuthenticateWalletResponseSuccess: AuthenticateWalletResponseSuccess;
  BaseClaimStatsForLootbox: BaseClaimStatsForLootbox;
  BaseClaimStatsForLootboxResponse: ResolversParentTypes['BaseClaimStatsForLootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BaseClaimStatsForLootboxResponseSuccess: BaseClaimStatsForLootboxResponseSuccess;
  BaseClaimStatsForTournament: BaseClaimStatsForTournament;
  BaseClaimStatsForTournamentResponse: ResolversParentTypes['BaseClaimStatsForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BaseClaimStatsForTournamentResponseSuccess: BaseClaimStatsForTournamentResponseSuccess;
  BattleFeedEdge: BattleFeedEdge;
  BattleFeedResponse: ResolversParentTypes['BattleFeedResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BattleFeedResponseSuccess: BattleFeedResponseSuccess;
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  BrowseActiveOffersResponse: ResolversParentTypes['BrowseActiveOffersResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BrowseActiveOffersResponseSuccess: BrowseActiveOffersResponseSuccess;
  BrowseAllAffiliatesResponse: ResolversParentTypes['BrowseAllAffiliatesResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BrowseAllAffiliatesResponseSuccess: BrowseAllAffiliatesResponseSuccess;
  BulkCreateReferralPayload: BulkCreateReferralPayload;
  BulkCreateReferralResponse: ResolversParentTypes['BulkCreateReferralResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BulkCreateReferralResponseSuccess: BulkCreateReferralResponseSuccess;
  BulkEditLootboxTournamentSnapshotsPayload: BulkEditLootboxTournamentSnapshotsPayload;
  BulkEditLootboxTournamentSnapshotsResponse: ResolversParentTypes['BulkEditLootboxTournamentSnapshotsResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BulkEditLootboxTournamentSnapshotsResponseSuccess: BulkEditLootboxTournamentSnapshotsResponseSuccess;
  BulkReferralCSVRow: BulkReferralCsvRow;
  BulkWhitelistPayload: BulkWhitelistPayload;
  BulkWhitelistResponse: ResolversParentTypes['BulkWhitelistResponseSuccess'] | ResolversParentTypes['ResponseError'];
  BulkWhitelistResponseSuccess: BulkWhitelistResponseSuccess;
  Byte: Scalars['Byte'];
  CampaignClaimsForLootboxResponse: ResolversParentTypes['CampaignClaimsForLootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CampaignClaimsForLootboxResponseSuccess: CampaignClaimsForLootboxResponseSuccess;
  CampaignClaimsForLootboxRow: CampaignClaimsForLootboxRow;
  CampaignClaimsForTournamentResponse: ResolversParentTypes['CampaignClaimsForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CampaignClaimsForTournamentResponseSuccess: CampaignClaimsForTournamentResponseSuccess;
  CampaignClaimsForTournamentRow: CampaignClaimsForTournamentRow;
  CheckIfUserAnsweredAirdropQuestionsResponse: ResolversParentTypes['CheckIfUserAnsweredAirdropQuestionsResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CheckIfUserAnsweredAirdropQuestionsResponseSuccess: CheckIfUserAnsweredAirdropQuestionsResponseSuccess;
  CheckPhoneEnabledResponse: ResolversParentTypes['CheckPhoneEnabledResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CheckPhoneEnabledResponseSuccess: CheckPhoneEnabledResponseSuccess;
  Claim: Claim;
  ClaimByIDResponse: ResolversParentTypes['ClaimByIDResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ClaimByIDResponseSuccess: ClaimByIdResponseSuccess;
  ClaimEdge: ClaimEdge;
  ClaimPageInfo: ClaimPageInfo;
  ClaimTimestamps: ClaimTimestamps;
  ClaimerStatsForLootboxTournamentResponse: ResolversParentTypes['ClaimerStatsForLootboxTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ClaimerStatsForLootboxTournamentResponseSuccess: ClaimerStatsForLootboxTournamentResponseSuccess;
  ClaimerStatsForLootboxTournamentRow: ClaimerStatsForLootboxTournamentRow;
  ClaimerStatsForTournamentResponse: ResolversParentTypes['ClaimerStatsForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ClaimerStatsForTournamentResponseSuccess: ClaimerStatsForTournamentResponseSuccess;
  ClaimerStatsForTournamentRow: ClaimerStatsForTournamentRow;
  CompleteClaimPayload: CompleteClaimPayload;
  CompleteClaimResponse: ResolversParentTypes['CompleteClaimResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CompleteClaimResponseSuccess: CompleteClaimResponseSuccess;
  ConnectWalletPayload: ConnectWalletPayload;
  ConnectWalletResponse: ResolversParentTypes['ConnectWalletResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ConnectWalletResponseSuccess: ConnectWalletResponseSuccess;
  Conquest: Conquest;
  ConquestPreview: ConquestPreview;
  CountryCode: Scalars['CountryCode'];
  CreateActivationInput: CreateActivationInput;
  CreateActivationPayload: CreateActivationPayload;
  CreateActivationResponse: ResolversParentTypes['CreateActivationResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateActivationResponseSuccess: CreateActivationResponseSuccess;
  CreateAdPayload: CreateAdPayload;
  CreateAdResponse: ResolversParentTypes['CreateAdResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateAdResponseSuccess: CreateAdResponseSuccess;
  CreateAdSetPayload: CreateAdSetPayload;
  CreateAdSetResponse: ResolversParentTypes['CreateAdSetResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateAdSetResponseSuccess: CreateAdSetResponseSuccess;
  CreateClaimPayload: CreateClaimPayload;
  CreateClaimResponse: ResolversParentTypes['CreateClaimResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateClaimResponseSuccess: CreateClaimResponseSuccess;
  CreateConquestPayload: CreateConquestPayload;
  CreateConquestResponse: ResolversParentTypes['CreateConquestResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateConquestResponseSuccess: CreateConquestResponseSuccess;
  CreateLootboxPayload: CreateLootboxPayload;
  CreateLootboxResponse: ResolversParentTypes['CreateLootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateLootboxResponseSuccess: CreateLootboxResponseSuccess;
  CreateOfferPayload: CreateOfferPayload;
  CreateOfferResponse: ResolversParentTypes['CreateOfferResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateOfferResponseSuccess: CreateOfferResponseSuccess;
  CreatePartyBasketPayload: CreatePartyBasketPayload;
  CreatePartyBasketResponse: ResolversParentTypes['CreatePartyBasketResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreatePartyBasketResponseSuccess: CreatePartyBasketResponseSuccess;
  CreateReferralPayload: CreateReferralPayload;
  CreateReferralResponse: ResolversParentTypes['CreateReferralResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateReferralResponseSuccess: CreateReferralResponseSuccess;
  CreateTournamentPayload: CreateTournamentPayload;
  CreateTournamentResponse: ResolversParentTypes['CreateTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateTournamentResponseSuccess: CreateTournamentResponseSuccess;
  CreateUserRecordPayload: CreateUserRecordPayload;
  CreateUserResponse: ResolversParentTypes['CreateUserResponseSuccess'] | ResolversParentTypes['ResponseError'];
  CreateUserResponseSuccess: CreateUserResponseSuccess;
  CreateUserWithPasswordPayload: CreateUserWithPasswordPayload;
  CreateUserWithWalletPayload: CreateUserWithWalletPayload;
  Creative: Creative;
  CreativeInputCreate: CreativeInputCreate;
  CreativeInputEdit: CreativeInputEdit;
  Cuid: Scalars['Cuid'];
  Currency: Scalars['Currency'];
  DID: Scalars['DID'];
  DailyClaimStatisticsForTournamentInput: DailyClaimStatisticsForTournamentInput;
  DailyClaimStatisticsForTournamentResponse: ResolversParentTypes['DailyClaimStatisticsForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  DailyClaimStatisticsForTournamentResponseSuccess: DailyClaimStatisticsForTournamentResponseSuccess;
  DailyClaimStatisticsForTournamentRow: DailyClaimStatisticsForTournamentRow;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  DealConfigTournament: DealConfigTournament;
  DecisionAdApiBetaV2Payload: DecisionAdApiBetaV2Payload;
  DecisionAdApiBetaV2Response: ResolversParentTypes['DecisionAdApiBetaV2ResponseSuccess'] | ResolversParentTypes['ResponseError'];
  DecisionAdApiBetaV2ResponseSuccess: DecisionAdApiBetaV2ResponseSuccess;
  DeleteStreamResponse: ResolversParentTypes['DeleteStreamResponseSuccess'] | ResolversParentTypes['ResponseError'];
  DeleteStreamResponseSuccess: DeleteStreamResponseSuccess;
  DeleteTournamentResponse: ResolversParentTypes['DeleteTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  DeleteTournamentResponseSuccess: DeleteTournamentResponseSuccess;
  Duration: Scalars['Duration'];
  EditActivationInput: EditActivationInput;
  EditActivationPayload: EditActivationPayload;
  EditActivationResponse: ResolversParentTypes['EditActivationResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditActivationResponseSuccess: EditActivationResponseSuccess;
  EditAdPayload: EditAdPayload;
  EditAdResponse: ResolversParentTypes['EditAdResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditAdResponseSuccess: EditAdResponseSuccess;
  EditAdSetPayload: EditAdSetPayload;
  EditAdSetResponse: ResolversParentTypes['EditAdSetResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditAdSetResponseSuccess: EditAdSetResponseSuccess;
  EditLootboxPayload: EditLootboxPayload;
  EditLootboxResponse: ResolversParentTypes['EditLootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditLootboxResponseSuccess: EditLootboxResponseSuccess;
  EditOfferPayload: EditOfferPayload;
  EditOfferResponse: ResolversParentTypes['EditOfferResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditOfferResponseSuccess: EditOfferResponseSuccess;
  EditPartyBasketPayload: EditPartyBasketPayload;
  EditPartyBasketResponse: ResolversParentTypes['EditPartyBasketResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditPartyBasketResponseSuccess: EditPartyBasketResponseSuccess;
  EditStreamPayload: EditStreamPayload;
  EditStreamResponse: ResolversParentTypes['EditStreamResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditStreamResponseSuccess: EditStreamResponseSuccess;
  EditTournamentPayload: EditTournamentPayload;
  EditTournamentResponse: ResolversParentTypes['EditTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditTournamentResponseSuccess: EditTournamentResponseSuccess;
  EditWhitelistAffiliateToOfferPayload: EditWhitelistAffiliateToOfferPayload;
  EditWhitelistAffiliateToOfferResponse: ResolversParentTypes['EditWhitelistAffiliateToOfferResponseSuccess'] | ResolversParentTypes['ResponseError'];
  EditWhitelistAffiliateToOfferResponseSuccess: EditWhitelistAffiliateToOfferResponseSuccess;
  EmailAddress: Scalars['EmailAddress'];
  EventMetadata: EventMetadata;
  FanListRowForTournament: FanListRowForTournament;
  FansListFavoriteLootbox: FansListFavoriteLootbox;
  FansListForTournamentResponse: ResolversParentTypes['FansListForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  FansListForTournamentResponseSuccess: FansListForTournamentResponseSuccess;
  Float: Scalars['Float'];
  GUID: Scalars['GUID'];
  GenerateClaimsCsvPayload: GenerateClaimsCsvPayload;
  GenerateClaimsCsvResponse: ResolversParentTypes['GenerateClaimsCsvResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GenerateClaimsCsvResponseSuccess: GenerateClaimsCsvResponseSuccess;
  GetAnonTokenResponse: ResolversParentTypes['GetAnonTokenResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GetAnonTokenResponseSuccess: GetAnonTokenResponseSuccess;
  GetConquestResponse: ResolversParentTypes['GetConquestResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GetConquestResponseSuccess: GetConquestResponseSuccess;
  GetLootboxByAddressResponse: ResolversParentTypes['LootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GetLootboxByIDResponse: ResolversParentTypes['LootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GetMyProfileResponse: ResolversParentTypes['GetMyProfileSuccess'] | ResolversParentTypes['ResponseError'];
  GetMyProfileSuccess: GetMyProfileSuccess;
  GetPartyBasketResponse: ResolversParentTypes['GetPartyBasketResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GetPartyBasketResponseSuccess: GetPartyBasketResponseSuccess;
  GetWhitelistSignaturesPayload: GetWhitelistSignaturesPayload;
  GetWhitelistSignaturesResponse: ResolversParentTypes['GetWhitelistSignaturesResponseSuccess'] | ResolversParentTypes['ResponseError'];
  GetWhitelistSignaturesResponseSuccess: GetWhitelistSignaturesResponseSuccess;
  HSL: Scalars['HSL'];
  HSLA: Scalars['HSLA'];
  HexColorCode: Scalars['HexColorCode'];
  Hexadecimal: Scalars['Hexadecimal'];
  IBAN: Scalars['IBAN'];
  ID: Scalars['ID'];
  IP: Scalars['IP'];
  IPv4: Scalars['IPv4'];
  IPv6: Scalars['IPv6'];
  ISBN: Scalars['ISBN'];
  ISO8601Duration: Scalars['ISO8601Duration'];
  InputCursor: InputCursor;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  JWT: Scalars['JWT'];
  Latitude: Scalars['Latitude'];
  ListAdSetsOfAdvertiserResponse: ResolversParentTypes['ListAdSetsOfAdvertiserResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListAdSetsOfAdvertiserResponseSuccess: ListAdSetsOfAdvertiserResponseSuccess;
  ListAdsOfAdvertiserResponse: ResolversParentTypes['ListAdsOfAdvertiserResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListAdsOfAdvertiserResponseSuccess: ListAdsOfAdvertiserResponseSuccess;
  ListAvailableLootboxesForClaimResponse: ResolversParentTypes['ListAvailableLootboxesForClaimResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListAvailableLootboxesForClaimResponseSuccess: ListAvailableLootboxesForClaimResponseSuccess;
  ListConquestPreviewsResponse: ResolversParentTypes['ListConquestPreviewsResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListConquestPreviewsResponseSuccess: ListConquestPreviewsResponseSuccess;
  ListCreatedOffersResponse: ResolversParentTypes['ListCreatedOffersResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListCreatedOffersResponseSuccess: ListCreatedOffersResponseSuccess;
  ListEventsOfAdvertiserResponse: ResolversParentTypes['ListEventsOfAdvertiserResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListEventsOfAdvertiserResponseSuccess: ListEventsOfAdvertiserResponseSuccess;
  ListOffersAvailableForOrganizerResponse: ResolversParentTypes['ListOffersAvailableForOrganizerResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListOffersAvailableForOrganizerResponseSuccess: ListOffersAvailableForOrganizerResponseSuccess;
  ListPartnersOfAdvertiserResponse: ResolversParentTypes['ListPartnersOfAdvertiserResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListPartnersOfAdvertiserResponseSuccess: ListPartnersOfAdvertiserResponseSuccess;
  ListPotentialAirdropClaimersPayload: ListPotentialAirdropClaimersPayload;
  ListPotentialAirdropClaimersResponse: ResolversParentTypes['ListPotentialAirdropClaimersResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListPotentialAirdropClaimersResponseSuccess: ListPotentialAirdropClaimersResponseSuccess;
  ListWhitelistedAffiliatesToOfferPayload: ListWhitelistedAffiliatesToOfferPayload;
  ListWhitelistedAffiliatesToOfferResponse: ResolversParentTypes['ListWhitelistedAffiliatesToOfferResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ListWhitelistedAffiliatesToOfferResponseSuccess: ListWhitelistedAffiliatesToOfferResponseSuccess;
  LocalDate: Scalars['LocalDate'];
  LocalEndTime: Scalars['LocalEndTime'];
  LocalTime: Scalars['LocalTime'];
  Locale: Scalars['Locale'];
  Long: Scalars['Long'];
  Longitude: Scalars['Longitude'];
  Lootbox: Lootbox;
  LootboxAirdropMetadata: LootboxAirdropMetadata;
  LootboxAirdropMetadataQuestion: LootboxAirdropMetadataQuestion;
  LootboxChain: LootboxChain;
  LootboxCompletedClaimsForTournamentResponse: ResolversParentTypes['LootboxCompletedClaimsForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  LootboxCompletedClaimsForTournamentResponseSuccess: LootboxCompletedClaimsForTournamentResponseSuccess;
  LootboxCompletedClaimsForTournamentRow: LootboxCompletedClaimsForTournamentRow;
  LootboxCustomSchema: LootboxCustomSchema;
  LootboxCustomSchemaData: LootboxCustomSchemaData;
  LootboxFeedEdge: LootboxFeedEdge;
  LootboxFeedResponse: ResolversParentTypes['LootboxFeedResponseSuccess'] | ResolversParentTypes['ResponseError'];
  LootboxFeedResponseSuccess: LootboxFeedResponseSuccess;
  LootboxMetadata: LootboxMetadata;
  LootboxResponseSuccess: LootboxResponseSuccess;
  LootboxSnapshot: LootboxSnapshot;
  LootboxSnapshotTimestamps: LootboxSnapshotTimestamps;
  LootboxSocials: LootboxSocials;
  LootboxSocialsWithoutEmail: LootboxSocialsWithoutEmail;
  LootboxTicket: LootboxTicket;
  LootboxTimestamps: LootboxTimestamps;
  LootboxTournamentSnapshot: LootboxTournamentSnapshot;
  LootboxTournamentSnapshotCursor: LootboxTournamentSnapshotCursor;
  LootboxUserClaimPageInfo: LootboxUserClaimPageInfo;
  LootboxUserClaimPageInfoResponse: LootboxUserClaimPageInfoResponse;
  MAC: Scalars['MAC'];
  MarketplacePreviewAffiliate: MarketplacePreviewAffiliate;
  MarketplacePreviewOffer: MarketplacePreviewOffer;
  Memo: Memo;
  MintWhitelistSignature: MintWhitelistSignature;
  Mutation: {};
  MyLootboxByNonceResponse: ResolversParentTypes['MyLootboxByNonceResponseSuccess'] | ResolversParentTypes['ResponseError'];
  MyLootboxByNonceResponseSuccess: MyLootboxByNonceResponseSuccess;
  MyTournamentResponse: ResolversParentTypes['MyTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  MyTournamentResponseSuccess: MyTournamentResponseSuccess;
  NegativeFloat: Scalars['NegativeFloat'];
  NegativeInt: Scalars['NegativeInt'];
  NonEmptyString: Scalars['NonEmptyString'];
  NonNegativeFloat: Scalars['NonNegativeFloat'];
  NonNegativeInt: Scalars['NonNegativeInt'];
  NonPositiveFloat: Scalars['NonPositiveFloat'];
  NonPositiveInt: Scalars['NonPositiveInt'];
  ObjectID: Scalars['ObjectID'];
  Offer: Offer;
  OfferAffiliateView: OfferAffiliateView;
  OfferAirdropMetadata: OfferAirdropMetadata;
  OfferAirdropMetadataCreateInput: OfferAirdropMetadataCreateInput;
  OfferAirdropMetadataEditInput: OfferAirdropMetadataEditInput;
  OfferAirdropPromoterView: OfferAirdropPromoterView;
  OfferAirdropQuestionCreateInput: OfferAirdropQuestionCreateInput;
  OfferPreview: OfferPreview;
  OrganizerOfferPreview: OrganizerOfferPreview;
  OrganizerOfferWhitelist: OrganizerOfferWhitelist;
  OrganizerOfferWhitelistWithProfile: OrganizerOfferWhitelistWithProfile;
  OrganizerProfile: OrganizerProfile;
  PageInfo: PageInfo;
  PaginateLootboxTournamentSnapshotEdge: PaginateLootboxTournamentSnapshotEdge;
  PaginateLootboxTournamentSnapshots: PaginateLootboxTournamentSnapshots;
  PaginatedLootboxTournamentSnapshotPageInfo: PaginatedLootboxTournamentSnapshotPageInfo;
  PartyBasket: PartyBasket;
  PartyBasketTimestamps: PartyBasketTimestamps;
  PartyBasketWhitelistSignature: PartyBasketWhitelistSignature;
  PendingClaimToUntrustedPayload: PendingClaimToUntrustedPayload;
  PhoneNumber: Scalars['PhoneNumber'];
  Port: Scalars['Port'];
  PositiveFloat: Scalars['PositiveFloat'];
  PositiveInt: Scalars['PositiveInt'];
  PostalCode: Scalars['PostalCode'];
  PotentialAirdropClaimer: PotentialAirdropClaimer;
  PublicUser: PublicUser;
  PublicUserResponse: ResolversParentTypes['PublicUserResponseSuccess'] | ResolversParentTypes['ResponseError'];
  PublicUserResponseSuccess: PublicUserResponseSuccess;
  Query: {};
  QuestionAnswerPreview: QuestionAnswerPreview;
  RGB: Scalars['RGB'];
  RGBA: Scalars['RGBA'];
  RateQuoteDealConfig: RateQuoteDealConfig;
  RateQuoteEstimate: RateQuoteEstimate;
  RateQuoteInput: RateQuoteInput;
  RedeemSignaturePayload: RedeemSignaturePayload;
  RedeemSignatureResponse: ResolversParentTypes['RedeemSignatureResponseSuccess'] | ResolversParentTypes['ResponseError'];
  RedeemSignatureResponseSuccess: RedeemSignatureResponseSuccess;
  Referral: Referral;
  ReferralResponse: ResolversParentTypes['ReferralResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReferralResponseSuccess: ReferralResponseSuccess;
  ReferralTimestamps: ReferralTimestamps;
  ReferrerClaimsForLootboxResponse: ResolversParentTypes['ReferrerClaimsForLootboxResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReferrerClaimsForLootboxResponseSuccess: ReferrerClaimsForLootboxResponseSuccess;
  ReferrerClaimsForLootboxRow: ReferrerClaimsForLootboxRow;
  ReferrerClaimsForTournamentResponse: ResolversParentTypes['ReferrerClaimsForTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReferrerClaimsForTournamentResponseSuccess: ReferrerClaimsForTournamentResponseSuccess;
  ReferrerClaimsForTournamentRow: ReferrerClaimsForTournamentRow;
  RemoveOfferAdSetFromTournamentPayload: RemoveOfferAdSetFromTournamentPayload;
  RemoveOfferAdSetFromTournamentResponse: ResolversParentTypes['RemoveOfferAdSetFromTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  RemoveOfferAdSetFromTournamentResponseSuccess: RemoveOfferAdSetFromTournamentResponseSuccess;
  RemovePromoterFromTournamentPayload: RemovePromoterFromTournamentPayload;
  RemovePromoterFromTournamentResponse: ResolversParentTypes['RemovePromoterFromTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  RemovePromoterFromTournamentResponseSuccess: RemovePromoterFromTournamentResponseSuccess;
  RemoveWalletPayload: RemoveWalletPayload;
  RemoveWalletResponse: ResolversParentTypes['RemoveWalletResponseSuccess'] | ResolversParentTypes['ResponseError'];
  RemoveWalletResponseSuccess: RemoveWalletResponseSuccess;
  ReportAdvertiserAffiliatePerfInput: ReportAdvertiserAffiliatePerfInput;
  ReportAdvertiserAffiliatePerfResponse: ResolversParentTypes['ReportAdvertiserAffiliatePerfResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportAdvertiserAffiliatePerfResponseSuccess: ReportAdvertiserAffiliatePerfResponseSuccess;
  ReportAdvertiserOfferPerformanceResponse: ResolversParentTypes['ReportAdvertiserOfferPerformanceResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportAdvertiserOfferPerformanceResponseSuccess: ReportAdvertiserOfferPerformanceResponseSuccess;
  ReportAdvertiserTournamentPerfInput: ReportAdvertiserTournamentPerfInput;
  ReportAdvertiserTournamentPerfResponse: ResolversParentTypes['ReportAdvertiserTournamentPerfResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportAdvertiserTournamentPerfResponseSuccess: ReportAdvertiserTournamentPerfResponseSuccess;
  ReportOrganizerOfferPerfInput: ReportOrganizerOfferPerfInput;
  ReportOrganizerOfferPerfResponse: ResolversParentTypes['ReportOrganizerOfferPerfResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportOrganizerOfferPerfResponseSuccess: ReportOrganizerOfferPerfResponseSuccess;
  ReportOrganizerTournamentPerfInput: ReportOrganizerTournamentPerfInput;
  ReportOrganizerTournamentResponse: ResolversParentTypes['ReportOrganizerTournamentResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportOrganizerTournamentResponseSuccess: ReportOrganizerTournamentResponseSuccess;
  ReportPromoterTournamentPerfInput: ReportPromoterTournamentPerfInput;
  ReportPromoterTournamentPerfResponse: ResolversParentTypes['ReportPromoterTournamentPerfResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportPromoterTournamentPerfResponseSuccess: ReportPromoterTournamentPerfResponseSuccess;
  ReportTotalEarningsForAffiliateResponse: ResolversParentTypes['ReportTotalEarningsForAffiliateResponseSuccess'] | ResolversParentTypes['ResponseError'];
  ReportTotalEarningsForAffiliateResponseSuccess: ReportTotalEarningsForAffiliateResponseSuccess;
  ResponseError: ResponseError;
  RoutingNumber: Scalars['RoutingNumber'];
  SafeInt: Scalars['SafeInt'];
  SemVer: Scalars['SemVer'];
  Status: Status;
  Stream: Stream;
  StreamInput: StreamInput;
  StreamTimestamps: StreamTimestamps;
  String: Scalars['String'];
  SyncProviderUserResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['SyncProviderUserResponseSuccess'];
  SyncProviderUserResponseSuccess: SyncProviderUserResponseSuccess;
  Time: Scalars['Time'];
  TimeZone: Scalars['TimeZone'];
  Timestamp: Scalars['Timestamp'];
  Tournament: Tournament;
  TournamentPreview: TournamentPreview;
  TournamentResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['TournamentResponseSuccess'];
  TournamentResponseSuccess: TournamentResponseSuccess;
  TournamentTimestamps: TournamentTimestamps;
  TruncatedEmailByPhoneResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['TruncatedEmailByPhoneResponseSuccess'];
  TruncatedEmailByPhoneResponseSuccess: TruncatedEmailByPhoneResponseSuccess;
  URL: Scalars['URL'];
  USCurrency: Scalars['USCurrency'];
  UUID: Scalars['UUID'];
  UnsignedFloat: Scalars['UnsignedFloat'];
  UnsignedInt: Scalars['UnsignedInt'];
  UpdateAdvertiserDetailsPayload: UpdateAdvertiserDetailsPayload;
  UpdateAdvertiserDetailsResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpdateAdvertiserDetailsResponseSuccess'];
  UpdateAdvertiserDetailsResponseSuccess: UpdateAdvertiserDetailsResponseSuccess;
  UpdateAffiliateDetailsPayload: UpdateAffiliateDetailsPayload;
  UpdateAffiliateDetailsResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpdateAffiliateDetailsResponseSuccess'];
  UpdateAffiliateDetailsResponseSuccess: UpdateAffiliateDetailsResponseSuccess;
  UpdateClaimRedemptionStatusPayload: UpdateClaimRedemptionStatusPayload;
  UpdateClaimRedemptionStatusResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpdateClaimRedemptionStatusResponseSuccess'];
  UpdateClaimRedemptionStatusResponseSuccess: UpdateClaimRedemptionStatusResponseSuccess;
  UpdateConquestPayload: UpdateConquestPayload;
  UpdateConquestResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpdateConquestResponseSuccess'];
  UpdateConquestResponseSuccess: UpdateConquestResponseSuccess;
  UpdatePromoterRateQuoteInTournamentResponseSuccess: UpdatePromoterRateQuoteInTournamentResponseSuccess;
  UpdateUserAuthPayload: UpdateUserAuthPayload;
  UpdateUserPayload: UpdateUserPayload;
  UpdateUserResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpdateUserResponseSuccess'];
  UpdateUserResponseSuccess: UpdateUserResponseSuccess;
  UpgradeToAdvertiserResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpgradeToAdvertiserResponseSuccess'];
  UpgradeToAdvertiserResponseSuccess: UpgradeToAdvertiserResponseSuccess;
  UpgradeToAffiliateResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UpgradeToAffiliateResponseSuccess'];
  UpgradeToAffiliateResponseSuccess: UpgradeToAffiliateResponseSuccess;
  User: User;
  UserClaimsCursor: UserClaimsCursor;
  UserClaimsResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['UserClaimsResponseSuccess'];
  UserClaimsResponseSuccess: UserClaimsResponseSuccess;
  UserSocials: UserSocials;
  UserSocialsInput: UserSocialsInput;
  UtcOffset: Scalars['UtcOffset'];
  ViewAdResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['ViewAdResponseSuccess'];
  ViewAdResponseSuccess: ViewAdResponseSuccess;
  ViewAdSetResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['ViewAdSetResponseSuccess'];
  ViewAdSetResponseSuccess: ViewAdSetResponseSuccess;
  ViewCreatedOfferResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['ViewCreatedOfferResponseSuccess'];
  ViewCreatedOfferResponseSuccess: ViewCreatedOfferResponseSuccess;
  ViewMyTournamentsAsOrganizerResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['ViewMyTournamentsAsOrganizerResponseSuccess'];
  ViewMyTournamentsAsOrganizerResponseSuccess: ViewMyTournamentsAsOrganizerResponseSuccess;
  ViewOfferDetailsAsEventAffiliatePayload: ViewOfferDetailsAsEventAffiliatePayload;
  ViewOfferDetailsAsEventAffiliateResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['ViewOfferDetailsAsEventAffiliateResponseSuccess'];
  ViewOfferDetailsAsEventAffiliateResponseSuccess: ViewOfferDetailsAsEventAffiliateResponseSuccess;
  ViewTournamentAsOrganizerResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['ViewTournamentAsOrganizerResponseSuccess'];
  ViewTournamentAsOrganizerResponseSuccess: ViewTournamentAsOrganizerResponseSuccess;
  Void: Scalars['Void'];
  Wallet: Wallet;
  WhitelistAffiliateToOfferPayload: WhitelistAffiliateToOfferPayload;
  WhitelistAffiliateToOfferResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['WhitelistAffiliateToOfferResponseSuccess'];
  WhitelistAffiliateToOfferResponseSuccess: WhitelistAffiliateToOfferResponseSuccess;
  WhitelistAllUnassignedClaimsPayload: WhitelistAllUnassignedClaimsPayload;
  WhitelistAllUnassignedClaimsResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['WhitelistAllUnassignedClaimsResponseSuccess'];
  WhitelistAllUnassignedClaimsResponseSuccess: WhitelistAllUnassignedClaimsResponseSuccess;
  WhitelistMyLootboxClaimsPayload: WhitelistMyLootboxClaimsPayload;
  WhitelistMyLootboxClaimsResponse: ResolversParentTypes['ResponseError'] | ResolversParentTypes['WhitelistMyLootboxClaimsResponseSuccess'];
  WhitelistMyLootboxClaimsResponseSuccess: WhitelistMyLootboxClaimsResponseSuccess;
};

export interface AccountNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AccountNumber'], any> {
  name: 'AccountNumber';
}

export type ActivationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Activation'] = ResolversParentTypes['Activation']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mmp?: Resolver<ResolversTypes['MeasurementPartnerType'], ParentType, ContextType>;
  mmpAlias?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pricing?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ActivationStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ad'] = ResolversParentTypes['Ad']> = {
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  clicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  creative?: Resolver<ResolversTypes['Creative'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Placement'], ParentType, ContextType>;
  publicInfo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AdStatus'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['AdTimestamps'], ParentType, ContextType>;
  uniqueClicks?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdEvent'] = ResolversParentTypes['AdEvent']> = {
  action?: Resolver<ResolversTypes['AdEventAction'], ParentType, ContextType>;
  adId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  adSetId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  affiliateAttribution?: Resolver<Maybe<ResolversTypes['AdEventAffiliateAttribution']>, ParentType, ContextType>;
  campaignId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  claimId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['EventMetadata']>, ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sessionId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdEventAffiliateAttributionResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdEventAffiliateAttribution'] = ResolversParentTypes['AdEventAffiliateAttribution']> = {
  organizerID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  promoterID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tournamentID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  userID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdPreviewInDealConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdPreviewInDealConfig'] = ResolversParentTypes['AdPreviewInDealConfig']> = {
  adID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['AspectRatio'], ParentType, ContextType>;
  callToAction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creativeLinks?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  creativeType?: Resolver<ResolversTypes['CreativeType'], ParentType, ContextType>;
  themeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdServedResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdServed'] = ResolversParentTypes['AdServed']> = {
  adID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  adSetID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  clickDestination?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creative?: Resolver<ResolversTypes['Creative'], ParentType, ContextType>;
  flightID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  pixelUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Placement'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdSetResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdSet'] = ResolversParentTypes['AdSet']> = {
  adIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  ads?: Resolver<Maybe<Array<ResolversTypes['Ad']>>, ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offerIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Placement'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AdSetStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdSetPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdSetPreview'] = ResolversParentTypes['AdSetPreview']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Placement'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AdSetStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdSetPreviewInDealConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdSetPreviewInDealConfig'] = ResolversParentTypes['AdSetPreviewInDealConfig']> = {
  ad?: Resolver<Maybe<ResolversTypes['AdPreviewInDealConfig']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  placement?: Resolver<ResolversTypes['Placement'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['AdSetInTournamentStatus'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdTargetTagResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdTargetTag'] = ResolversParentTypes['AdTargetTag']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['AdTargetTagType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdTimestamps'] = ResolversParentTypes['AdTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddOfferAdSetToTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddOfferAdSetToTournamentResponse'] = ResolversParentTypes['AddOfferAdSetToTournamentResponse']> = {
  __resolveType: TypeResolveFn<'AddOfferAdSetToTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AddOfferAdSetToTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddOfferAdSetToTournamentResponseSuccess'] = ResolversParentTypes['AddOfferAdSetToTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddStreamResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddStreamResponse'] = ResolversParentTypes['AddStreamResponse']> = {
  __resolveType: TypeResolveFn<'AddStreamResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AddStreamResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddStreamResponseSuccess'] = ResolversParentTypes['AddStreamResponseSuccess']> = {
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddUpdatePromoterRateQuoteInTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AddUpdatePromoterRateQuoteInTournamentResponse'] = ResolversParentTypes['AddUpdatePromoterRateQuoteInTournamentResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpdatePromoterRateQuoteInTournamentResponseSuccess', ParentType, ContextType>;
};

export type AdvertiserResolvers<ContextType = any, ParentType extends ResolversParentTypes['Advertiser'] = ResolversParentTypes['Advertiser']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  conquests?: Resolver<Array<ResolversTypes['Conquest']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offers?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  publicContactEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdvertiserAdminViewResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertiserAdminViewResponse'] = ResolversParentTypes['AdvertiserAdminViewResponse']> = {
  __resolveType: TypeResolveFn<'AdvertiserAdminViewResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AdvertiserAdminViewResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertiserAdminViewResponseSuccess'] = ResolversParentTypes['AdvertiserAdminViewResponseSuccess']> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicContactEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AdvertiserPublicViewResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertiserPublicViewResponse'] = ResolversParentTypes['AdvertiserPublicViewResponse']> = {
  __resolveType: TypeResolveFn<'AdvertiserPublicViewResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AdvertiserPublicViewResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdvertiserPublicViewResponseSuccess'] = ResolversParentTypes['AdvertiserPublicViewResponseSuccess']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Affiliate'] = ResolversParentTypes['Affiliate']> = {
  audienceSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicContactEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['OrganizerRank']>, ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliateAdminViewResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliateAdminViewResponse'] = ResolversParentTypes['AffiliateAdminViewResponse']> = {
  __resolveType: TypeResolveFn<'AffiliateAdminViewResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AffiliateAdminViewResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliateAdminViewResponseSuccess'] = ResolversParentTypes['AffiliateAdminViewResponseSuccess']> = {
  affiliate?: Resolver<ResolversTypes['Affiliate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AffiliatePublicViewResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliatePublicViewResponse'] = ResolversParentTypes['AffiliatePublicViewResponse']> = {
  __resolveType: TypeResolveFn<'AffiliatePublicViewResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AffiliatePublicViewResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AffiliatePublicViewResponseSuccess'] = ResolversParentTypes['AffiliatePublicViewResponseSuccess']> = {
  affiliate?: Resolver<ResolversTypes['Affiliate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsAdEventResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsAdEvent'] = ResolversParentTypes['AnalyticsAdEvent']> = {
  action?: Resolver<ResolversTypes['AdEventAction'], ParentType, ContextType>;
  activationEventMmpAlias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  activationID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  adID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  adSetID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  advertiserID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organizerID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  promoterID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tournamentID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnalyticsMemoResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnalyticsMemo'] = ResolversParentTypes['AnalyticsMemo']> = {
  activationID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  adEventID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  affiliateID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  affiliateType?: Resolver<ResolversTypes['AffiliateType'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mmp?: Resolver<ResolversTypes['MeasurementPartnerType'], ParentType, ContextType>;
  mmpAlias?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  tournamentID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnswerAirdropQuestionResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnswerAirdropQuestionResponse'] = ResolversParentTypes['AnswerAirdropQuestionResponse']> = {
  __resolveType: TypeResolveFn<'AnswerAirdropQuestionResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AnswerAirdropQuestionResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AnswerAirdropQuestionResponseSuccess'] = ResolversParentTypes['AnswerAirdropQuestionResponseSuccess']> = {
  answerIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticateWalletResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticateWalletResponse'] = ResolversParentTypes['AuthenticateWalletResponse']> = {
  __resolveType: TypeResolveFn<'AuthenticateWalletResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type AuthenticateWalletResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthenticateWalletResponseSuccess'] = ResolversParentTypes['AuthenticateWalletResponseSuccess']> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseClaimStatsForLootboxResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseClaimStatsForLootbox'] = ResolversParentTypes['BaseClaimStatsForLootbox']> = {
  bonusRewardClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  completedClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  completionRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  oneTimeClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  viralClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseClaimStatsForLootboxResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseClaimStatsForLootboxResponse'] = ResolversParentTypes['BaseClaimStatsForLootboxResponse']> = {
  __resolveType: TypeResolveFn<'BaseClaimStatsForLootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BaseClaimStatsForLootboxResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseClaimStatsForLootboxResponseSuccess'] = ResolversParentTypes['BaseClaimStatsForLootboxResponseSuccess']> = {
  stats?: Resolver<ResolversTypes['BaseClaimStatsForLootbox'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseClaimStatsForTournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseClaimStatsForTournament'] = ResolversParentTypes['BaseClaimStatsForTournament']> = {
  airdropClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  airdropCompletionRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  allFans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  completedClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  completionRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  impressions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalClaims?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  originalFans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participationFans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  participationRewardCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pendingClaims?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referralBonusClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalMaxTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  viralClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  viralFans?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BaseClaimStatsForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseClaimStatsForTournamentResponse'] = ResolversParentTypes['BaseClaimStatsForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'BaseClaimStatsForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BaseClaimStatsForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BaseClaimStatsForTournamentResponseSuccess'] = ResolversParentTypes['BaseClaimStatsForTournamentResponseSuccess']> = {
  stats?: Resolver<ResolversTypes['BaseClaimStatsForTournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattleFeedEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattleFeedEdge'] = ResolversParentTypes['BattleFeedEdge']> = {
  cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BattleFeedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattleFeedResponse'] = ResolversParentTypes['BattleFeedResponse']> = {
  __resolveType: TypeResolveFn<'BattleFeedResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BattleFeedResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BattleFeedResponseSuccess'] = ResolversParentTypes['BattleFeedResponseSuccess']> = {
  edges?: Resolver<Array<ResolversTypes['BattleFeedEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type BrowseActiveOffersResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrowseActiveOffersResponse'] = ResolversParentTypes['BrowseActiveOffersResponse']> = {
  __resolveType: TypeResolveFn<'BrowseActiveOffersResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BrowseActiveOffersResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrowseActiveOffersResponseSuccess'] = ResolversParentTypes['BrowseActiveOffersResponseSuccess']> = {
  offers?: Resolver<Array<ResolversTypes['MarketplacePreviewOffer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BrowseAllAffiliatesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrowseAllAffiliatesResponse'] = ResolversParentTypes['BrowseAllAffiliatesResponse']> = {
  __resolveType: TypeResolveFn<'BrowseAllAffiliatesResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BrowseAllAffiliatesResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BrowseAllAffiliatesResponseSuccess'] = ResolversParentTypes['BrowseAllAffiliatesResponseSuccess']> = {
  affiliates?: Resolver<Array<ResolversTypes['MarketplacePreviewAffiliate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BulkCreateReferralResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkCreateReferralResponse'] = ResolversParentTypes['BulkCreateReferralResponse']> = {
  __resolveType: TypeResolveFn<'BulkCreateReferralResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BulkCreateReferralResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkCreateReferralResponseSuccess'] = ResolversParentTypes['BulkCreateReferralResponseSuccess']> = {
  csv?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BulkEditLootboxTournamentSnapshotsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkEditLootboxTournamentSnapshotsResponse'] = ResolversParentTypes['BulkEditLootboxTournamentSnapshotsResponse']> = {
  __resolveType: TypeResolveFn<'BulkEditLootboxTournamentSnapshotsResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BulkEditLootboxTournamentSnapshotsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkEditLootboxTournamentSnapshotsResponseSuccess'] = ResolversParentTypes['BulkEditLootboxTournamentSnapshotsResponseSuccess']> = {
  lootboxTournamentSnapshotIDs?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BulkReferralCsvRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkReferralCSVRow'] = ResolversParentTypes['BulkReferralCSVRow']> = {
  error?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BulkWhitelistResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkWhitelistResponse'] = ResolversParentTypes['BulkWhitelistResponse']> = {
  __resolveType: TypeResolveFn<'BulkWhitelistResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type BulkWhitelistResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['BulkWhitelistResponseSuccess'] = ResolversParentTypes['BulkWhitelistResponseSuccess']> = {
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  signatures?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CampaignClaimsForLootboxResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignClaimsForLootboxResponse'] = ResolversParentTypes['CampaignClaimsForLootboxResponse']> = {
  __resolveType: TypeResolveFn<'CampaignClaimsForLootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CampaignClaimsForLootboxResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignClaimsForLootboxResponseSuccess'] = ResolversParentTypes['CampaignClaimsForLootboxResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['CampaignClaimsForLootboxRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignClaimsForLootboxRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignClaimsForLootboxRow'] = ResolversParentTypes['CampaignClaimsForLootboxRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referralCampaignName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referralSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignClaimsForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignClaimsForTournamentResponse'] = ResolversParentTypes['CampaignClaimsForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'CampaignClaimsForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CampaignClaimsForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignClaimsForTournamentResponseSuccess'] = ResolversParentTypes['CampaignClaimsForTournamentResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['CampaignClaimsForTournamentRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CampaignClaimsForTournamentRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['CampaignClaimsForTournamentRow'] = ResolversParentTypes['CampaignClaimsForTournamentRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referralCampaignName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referralSlug?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckIfUserAnsweredAirdropQuestionsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckIfUserAnsweredAirdropQuestionsResponse'] = ResolversParentTypes['CheckIfUserAnsweredAirdropQuestionsResponse']> = {
  __resolveType: TypeResolveFn<'CheckIfUserAnsweredAirdropQuestionsResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CheckIfUserAnsweredAirdropQuestionsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckIfUserAnsweredAirdropQuestionsResponseSuccess'] = ResolversParentTypes['CheckIfUserAnsweredAirdropQuestionsResponseSuccess']> = {
  status?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CheckPhoneEnabledResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckPhoneEnabledResponse'] = ResolversParentTypes['CheckPhoneEnabledResponse']> = {
  __resolveType: TypeResolveFn<'CheckPhoneEnabledResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CheckPhoneEnabledResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CheckPhoneEnabledResponseSuccess'] = ResolversParentTypes['CheckPhoneEnabledResponseSuccess']> = {
  isEnabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimResolvers<ContextType = any, ParentType extends ResolversParentTypes['Claim'] = ResolversParentTypes['Claim']> = {
  chosenLootbox?: Resolver<Maybe<ResolversTypes['Lootbox']>, ParentType, ContextType>;
  chosenPartyBasket?: Resolver<Maybe<ResolversTypes['PartyBasket']>, ParentType, ContextType>;
  chosenPartyBasketAddress?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  chosenPartyBasketId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  chosenPartyBasketNFTBountyValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chosenPartyBasketName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  claimerUserId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostCosmic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lootboxAddress?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lootboxID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  lootboxMaxTickets?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  lootboxNFTBountyValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lootboxName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  originLootboxId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  originPartyBasketId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  promoterId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  referralCampaignName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referralId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referralSlug?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referralType?: Resolver<Maybe<ResolversTypes['ReferralType']>, ParentType, ContextType>;
  referrerId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardFromClaim?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  rewardFromFriendReferred?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ClaimStatus'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['ClaimTimestamps'], ParentType, ContextType>;
  tournament?: Resolver<Maybe<ResolversTypes['Tournament']>, ParentType, ContextType>;
  tournamentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  tournamentName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ClaimType'], ParentType, ContextType>;
  userLink?: Resolver<Maybe<ResolversTypes['PublicUser']>, ParentType, ContextType>;
  whitelist?: Resolver<Maybe<ResolversTypes['MintWhitelistSignature']>, ParentType, ContextType>;
  whitelistId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimByIdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimByIDResponse'] = ResolversParentTypes['ClaimByIDResponse']> = {
  __resolveType: TypeResolveFn<'ClaimByIDResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ClaimByIdResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimByIDResponseSuccess'] = ResolversParentTypes['ClaimByIDResponseSuccess']> = {
  claim?: Resolver<ResolversTypes['Claim'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimEdge'] = ResolversParentTypes['ClaimEdge']> = {
  cursor?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Claim'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimPageInfo'] = ResolversParentTypes['ClaimPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimTimestamps'] = ResolversParentTypes['ClaimTimestamps']> = {
  completedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimerStatsForLootboxTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimerStatsForLootboxTournamentResponse'] = ResolversParentTypes['ClaimerStatsForLootboxTournamentResponse']> = {
  __resolveType: TypeResolveFn<'ClaimerStatsForLootboxTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ClaimerStatsForLootboxTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimerStatsForLootboxTournamentResponseSuccess'] = ResolversParentTypes['ClaimerStatsForLootboxTournamentResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['ClaimerStatsForLootboxTournamentRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimerStatsForLootboxTournamentRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimerStatsForLootboxTournamentRow'] = ResolversParentTypes['ClaimerStatsForLootboxTournamentRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  claimType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  claimerUserID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referralType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalUserClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimerStatsForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimerStatsForTournamentResponse'] = ResolversParentTypes['ClaimerStatsForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'ClaimerStatsForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ClaimerStatsForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimerStatsForTournamentResponseSuccess'] = ResolversParentTypes['ClaimerStatsForTournamentResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['ClaimerStatsForTournamentRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ClaimerStatsForTournamentRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ClaimerStatsForTournamentRow'] = ResolversParentTypes['ClaimerStatsForTournamentRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  claimType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  claimerUserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  referralType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalUserClaimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompleteClaimResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteClaimResponse'] = ResolversParentTypes['CompleteClaimResponse']> = {
  __resolveType: TypeResolveFn<'CompleteClaimResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CompleteClaimResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompleteClaimResponseSuccess'] = ResolversParentTypes['CompleteClaimResponseSuccess']> = {
  claim?: Resolver<ResolversTypes['Claim'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConnectWalletResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConnectWalletResponse'] = ResolversParentTypes['ConnectWalletResponse']> = {
  __resolveType: TypeResolveFn<'ConnectWalletResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ConnectWalletResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConnectWalletResponseSuccess'] = ResolversParentTypes['ConnectWalletResponseSuccess']> = {
  wallet?: Resolver<ResolversTypes['Wallet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConquestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Conquest'] = ResolversParentTypes['Conquest']> = {
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  spentBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ConquestStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tournaments?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConquestPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['ConquestPreview'] = ResolversParentTypes['ConquestPreview']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CountryCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['CountryCode'], any> {
  name: 'CountryCode';
}

export type CreateActivationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateActivationResponse'] = ResolversParentTypes['CreateActivationResponse']> = {
  __resolveType: TypeResolveFn<'CreateActivationResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateActivationResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateActivationResponseSuccess'] = ResolversParentTypes['CreateActivationResponseSuccess']> = {
  activation?: Resolver<ResolversTypes['Activation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAdResponse'] = ResolversParentTypes['CreateAdResponse']> = {
  __resolveType: TypeResolveFn<'CreateAdResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateAdResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAdResponseSuccess'] = ResolversParentTypes['CreateAdResponseSuccess']> = {
  ad?: Resolver<ResolversTypes['Ad'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateAdSetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAdSetResponse'] = ResolversParentTypes['CreateAdSetResponse']> = {
  __resolveType: TypeResolveFn<'CreateAdSetResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateAdSetResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateAdSetResponseSuccess'] = ResolversParentTypes['CreateAdSetResponseSuccess']> = {
  adSet?: Resolver<ResolversTypes['AdSet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateClaimResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateClaimResponse'] = ResolversParentTypes['CreateClaimResponse']> = {
  __resolveType: TypeResolveFn<'CreateClaimResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateClaimResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateClaimResponseSuccess'] = ResolversParentTypes['CreateClaimResponseSuccess']> = {
  claim?: Resolver<ResolversTypes['Claim'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateConquestResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateConquestResponse'] = ResolversParentTypes['CreateConquestResponse']> = {
  __resolveType: TypeResolveFn<'CreateConquestResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateConquestResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateConquestResponseSuccess'] = ResolversParentTypes['CreateConquestResponseSuccess']> = {
  conquest?: Resolver<Maybe<ResolversTypes['Conquest']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateLootboxResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateLootboxResponse'] = ResolversParentTypes['CreateLootboxResponse']> = {
  __resolveType: TypeResolveFn<'CreateLootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateLootboxResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateLootboxResponseSuccess'] = ResolversParentTypes['CreateLootboxResponseSuccess']> = {
  lootbox?: Resolver<ResolversTypes['Lootbox'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateOfferResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOfferResponse'] = ResolversParentTypes['CreateOfferResponse']> = {
  __resolveType: TypeResolveFn<'CreateOfferResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateOfferResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateOfferResponseSuccess'] = ResolversParentTypes['CreateOfferResponseSuccess']> = {
  offer?: Resolver<ResolversTypes['Offer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatePartyBasketResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePartyBasketResponse'] = ResolversParentTypes['CreatePartyBasketResponse']> = {
  __resolveType: TypeResolveFn<'CreatePartyBasketResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreatePartyBasketResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreatePartyBasketResponseSuccess'] = ResolversParentTypes['CreatePartyBasketResponseSuccess']> = {
  partyBasket?: Resolver<ResolversTypes['PartyBasket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateReferralResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateReferralResponse'] = ResolversParentTypes['CreateReferralResponse']> = {
  __resolveType: TypeResolveFn<'CreateReferralResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateReferralResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateReferralResponseSuccess'] = ResolversParentTypes['CreateReferralResponseSuccess']> = {
  referral?: Resolver<ResolversTypes['Referral'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTournamentResponse'] = ResolversParentTypes['CreateTournamentResponse']> = {
  __resolveType: TypeResolveFn<'CreateTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateTournamentResponseSuccess'] = ResolversParentTypes['CreateTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponse'] = ResolversParentTypes['CreateUserResponse']> = {
  __resolveType: TypeResolveFn<'CreateUserResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type CreateUserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateUserResponseSuccess'] = ResolversParentTypes['CreateUserResponseSuccess']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreativeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Creative'] = ResolversParentTypes['Creative']> = {
  adID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  aspectRatio?: Resolver<ResolversTypes['AspectRatio'], ParentType, ContextType>;
  callToAction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creativeLinks?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  creativeType?: Resolver<ResolversTypes['CreativeType'], ParentType, ContextType>;
  infographicLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  themeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface CuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cuid'], any> {
  name: 'Cuid';
}

export interface CurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Currency'], any> {
  name: 'Currency';
}

export interface DidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DID'], any> {
  name: 'DID';
}

export type DailyClaimStatisticsForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyClaimStatisticsForTournamentResponse'] = ResolversParentTypes['DailyClaimStatisticsForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'DailyClaimStatisticsForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type DailyClaimStatisticsForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyClaimStatisticsForTournamentResponseSuccess'] = ResolversParentTypes['DailyClaimStatisticsForTournamentResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['DailyClaimStatisticsForTournamentRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyClaimStatisticsForTournamentRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyClaimStatisticsForTournamentRow'] = ResolversParentTypes['DailyClaimStatisticsForTournamentRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  day?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  weekNormalized?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DealConfigTournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['DealConfigTournament'] = ResolversParentTypes['DealConfigTournament']> = {
  adSets?: Resolver<Array<ResolversTypes['AdSetPreviewInDealConfig']>, ParentType, ContextType>;
  advertiserAvatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  offerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rateQuoteConfigs?: Resolver<Array<ResolversTypes['RateQuoteDealConfig']>, ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['OfferStrategyType'], ParentType, ContextType>;
  tournamentID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DecisionAdApiBetaV2ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecisionAdApiBetaV2Response'] = ResolversParentTypes['DecisionAdApiBetaV2Response']> = {
  __resolveType: TypeResolveFn<'DecisionAdApiBetaV2ResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type DecisionAdApiBetaV2ResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecisionAdApiBetaV2ResponseSuccess'] = ResolversParentTypes['DecisionAdApiBetaV2ResponseSuccess']> = {
  ad?: Resolver<Maybe<ResolversTypes['AdServed']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteStreamResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteStreamResponse'] = ResolversParentTypes['DeleteStreamResponse']> = {
  __resolveType: TypeResolveFn<'DeleteStreamResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type DeleteStreamResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteStreamResponseSuccess'] = ResolversParentTypes['DeleteStreamResponseSuccess']> = {
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTournamentResponse'] = ResolversParentTypes['DeleteTournamentResponse']> = {
  __resolveType: TypeResolveFn<'DeleteTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type DeleteTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['DeleteTournamentResponseSuccess'] = ResolversParentTypes['DeleteTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Duration'], any> {
  name: 'Duration';
}

export type EditActivationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditActivationResponse'] = ResolversParentTypes['EditActivationResponse']> = {
  __resolveType: TypeResolveFn<'EditActivationResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditActivationResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditActivationResponseSuccess'] = ResolversParentTypes['EditActivationResponseSuccess']> = {
  activation?: Resolver<ResolversTypes['Activation'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditAdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAdResponse'] = ResolversParentTypes['EditAdResponse']> = {
  __resolveType: TypeResolveFn<'EditAdResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditAdResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAdResponseSuccess'] = ResolversParentTypes['EditAdResponseSuccess']> = {
  ad?: Resolver<ResolversTypes['Ad'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditAdSetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAdSetResponse'] = ResolversParentTypes['EditAdSetResponse']> = {
  __resolveType: TypeResolveFn<'EditAdSetResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditAdSetResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditAdSetResponseSuccess'] = ResolversParentTypes['EditAdSetResponseSuccess']> = {
  adSet?: Resolver<ResolversTypes['AdSet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditLootboxResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditLootboxResponse'] = ResolversParentTypes['EditLootboxResponse']> = {
  __resolveType: TypeResolveFn<'EditLootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditLootboxResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditLootboxResponseSuccess'] = ResolversParentTypes['EditLootboxResponseSuccess']> = {
  lootbox?: Resolver<ResolversTypes['Lootbox'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditOfferResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditOfferResponse'] = ResolversParentTypes['EditOfferResponse']> = {
  __resolveType: TypeResolveFn<'EditOfferResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditOfferResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditOfferResponseSuccess'] = ResolversParentTypes['EditOfferResponseSuccess']> = {
  offer?: Resolver<ResolversTypes['Offer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditPartyBasketResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditPartyBasketResponse'] = ResolversParentTypes['EditPartyBasketResponse']> = {
  __resolveType: TypeResolveFn<'EditPartyBasketResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditPartyBasketResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditPartyBasketResponseSuccess'] = ResolversParentTypes['EditPartyBasketResponseSuccess']> = {
  partyBasket?: Resolver<ResolversTypes['PartyBasket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditStreamResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditStreamResponse'] = ResolversParentTypes['EditStreamResponse']> = {
  __resolveType: TypeResolveFn<'EditStreamResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditStreamResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditStreamResponseSuccess'] = ResolversParentTypes['EditStreamResponseSuccess']> = {
  stream?: Resolver<ResolversTypes['Stream'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTournamentResponse'] = ResolversParentTypes['EditTournamentResponse']> = {
  __resolveType: TypeResolveFn<'EditTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditTournamentResponseSuccess'] = ResolversParentTypes['EditTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditWhitelistAffiliateToOfferResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditWhitelistAffiliateToOfferResponse'] = ResolversParentTypes['EditWhitelistAffiliateToOfferResponse']> = {
  __resolveType: TypeResolveFn<'EditWhitelistAffiliateToOfferResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type EditWhitelistAffiliateToOfferResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['EditWhitelistAffiliateToOfferResponseSuccess'] = ResolversParentTypes['EditWhitelistAffiliateToOfferResponseSuccess']> = {
  whitelist?: Resolver<ResolversTypes['OrganizerOfferWhitelist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type EventMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMetadata'] = ResolversParentTypes['EventMetadata']> = {
  clickUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timeElapsed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  verificationUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FanListRowForTournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['FanListRowForTournament'] = ResolversParentTypes['FanListRowForTournament']> = {
  avatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  claimsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  favoriteLootbox?: Resolver<Maybe<ResolversTypes['FansListFavoriteLootbox']>, ParentType, ContextType>;
  joinedDate?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  participationRewardsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  referralsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FansListFavoriteLootboxResolvers<ContextType = any, ParentType extends ResolversParentTypes['FansListFavoriteLootbox'] = ResolversParentTypes['FansListFavoriteLootbox']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stampImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FansListForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['FansListForTournamentResponse'] = ResolversParentTypes['FansListForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'FansListForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type FansListForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['FansListForTournamentResponseSuccess'] = ResolversParentTypes['FansListForTournamentResponseSuccess']> = {
  fans?: Resolver<Array<ResolversTypes['FanListRowForTournament']>, ParentType, ContextType>;
  tournamentID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface GuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['GUID'], any> {
  name: 'GUID';
}

export type GenerateClaimsCsvResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenerateClaimsCsvResponse'] = ResolversParentTypes['GenerateClaimsCsvResponse']> = {
  __resolveType: TypeResolveFn<'GenerateClaimsCsvResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GenerateClaimsCsvResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['GenerateClaimsCsvResponseSuccess'] = ResolversParentTypes['GenerateClaimsCsvResponseSuccess']> = {
  csv?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetAnonTokenResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAnonTokenResponse'] = ResolversParentTypes['GetAnonTokenResponse']> = {
  __resolveType: TypeResolveFn<'GetAnonTokenResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetAnonTokenResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetAnonTokenResponseSuccess'] = ResolversParentTypes['GetAnonTokenResponseSuccess']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetConquestResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetConquestResponse'] = ResolversParentTypes['GetConquestResponse']> = {
  __resolveType: TypeResolveFn<'GetConquestResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetConquestResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetConquestResponseSuccess'] = ResolversParentTypes['GetConquestResponseSuccess']> = {
  conquest?: Resolver<ResolversTypes['Conquest'], ParentType, ContextType>;
  tournaments?: Resolver<Array<ResolversTypes['TournamentPreview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetLootboxByAddressResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetLootboxByAddressResponse'] = ResolversParentTypes['GetLootboxByAddressResponse']> = {
  __resolveType: TypeResolveFn<'LootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetLootboxByIdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetLootboxByIDResponse'] = ResolversParentTypes['GetLootboxByIDResponse']> = {
  __resolveType: TypeResolveFn<'LootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetMyProfileResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetMyProfileResponse'] = ResolversParentTypes['GetMyProfileResponse']> = {
  __resolveType: TypeResolveFn<'GetMyProfileSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetMyProfileSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetMyProfileSuccess'] = ResolversParentTypes['GetMyProfileSuccess']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetPartyBasketResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPartyBasketResponse'] = ResolversParentTypes['GetPartyBasketResponse']> = {
  __resolveType: TypeResolveFn<'GetPartyBasketResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetPartyBasketResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetPartyBasketResponseSuccess'] = ResolversParentTypes['GetPartyBasketResponseSuccess']> = {
  partyBasket?: Resolver<ResolversTypes['PartyBasket'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetWhitelistSignaturesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetWhitelistSignaturesResponse'] = ResolversParentTypes['GetWhitelistSignaturesResponse']> = {
  __resolveType: TypeResolveFn<'GetWhitelistSignaturesResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type GetWhitelistSignaturesResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['GetWhitelistSignaturesResponseSuccess'] = ResolversParentTypes['GetWhitelistSignaturesResponseSuccess']> = {
  signatures?: Resolver<Array<Maybe<ResolversTypes['PartyBasketWhitelistSignature']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HslScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSL'], any> {
  name: 'HSL';
}

export interface HslaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HSLA'], any> {
  name: 'HSLA';
}

export interface HexColorCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HexColorCode'], any> {
  name: 'HexColorCode';
}

export interface HexadecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Hexadecimal'], any> {
  name: 'Hexadecimal';
}

export interface IbanScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IBAN'], any> {
  name: 'IBAN';
}

export interface IpScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IP'], any> {
  name: 'IP';
}

export interface IPv4ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv4'], any> {
  name: 'IPv4';
}

export interface IPv6ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['IPv6'], any> {
  name: 'IPv6';
}

export interface IsbnScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISBN'], any> {
  name: 'ISBN';
}

export interface Iso8601DurationScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ISO8601Duration'], any> {
  name: 'ISO8601Duration';
}

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JsonObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export interface JwtScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JWT'], any> {
  name: 'JWT';
}

export interface LatitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Latitude'], any> {
  name: 'Latitude';
}

export type ListAdSetsOfAdvertiserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListAdSetsOfAdvertiserResponse'] = ResolversParentTypes['ListAdSetsOfAdvertiserResponse']> = {
  __resolveType: TypeResolveFn<'ListAdSetsOfAdvertiserResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListAdSetsOfAdvertiserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListAdSetsOfAdvertiserResponseSuccess'] = ResolversParentTypes['ListAdSetsOfAdvertiserResponseSuccess']> = {
  adSets?: Resolver<Array<ResolversTypes['AdSet']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListAdsOfAdvertiserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListAdsOfAdvertiserResponse'] = ResolversParentTypes['ListAdsOfAdvertiserResponse']> = {
  __resolveType: TypeResolveFn<'ListAdsOfAdvertiserResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListAdsOfAdvertiserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListAdsOfAdvertiserResponseSuccess'] = ResolversParentTypes['ListAdsOfAdvertiserResponseSuccess']> = {
  ads?: Resolver<Array<ResolversTypes['Ad']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListAvailableLootboxesForClaimResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListAvailableLootboxesForClaimResponse'] = ResolversParentTypes['ListAvailableLootboxesForClaimResponse']> = {
  __resolveType: TypeResolveFn<'ListAvailableLootboxesForClaimResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListAvailableLootboxesForClaimResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListAvailableLootboxesForClaimResponseSuccess'] = ResolversParentTypes['ListAvailableLootboxesForClaimResponseSuccess']> = {
  lootboxOptions?: Resolver<Maybe<Array<ResolversTypes['LootboxTournamentSnapshot']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListConquestPreviewsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListConquestPreviewsResponse'] = ResolversParentTypes['ListConquestPreviewsResponse']> = {
  __resolveType: TypeResolveFn<'ListConquestPreviewsResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListConquestPreviewsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListConquestPreviewsResponseSuccess'] = ResolversParentTypes['ListConquestPreviewsResponseSuccess']> = {
  conquests?: Resolver<Array<ResolversTypes['ConquestPreview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListCreatedOffersResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListCreatedOffersResponse'] = ResolversParentTypes['ListCreatedOffersResponse']> = {
  __resolveType: TypeResolveFn<'ListCreatedOffersResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListCreatedOffersResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListCreatedOffersResponseSuccess'] = ResolversParentTypes['ListCreatedOffersResponseSuccess']> = {
  offers?: Resolver<Array<ResolversTypes['OfferPreview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListEventsOfAdvertiserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListEventsOfAdvertiserResponse'] = ResolversParentTypes['ListEventsOfAdvertiserResponse']> = {
  __resolveType: TypeResolveFn<'ListEventsOfAdvertiserResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListEventsOfAdvertiserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListEventsOfAdvertiserResponseSuccess'] = ResolversParentTypes['ListEventsOfAdvertiserResponseSuccess']> = {
  tournaments?: Resolver<Array<ResolversTypes['TournamentPreview']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListOffersAvailableForOrganizerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListOffersAvailableForOrganizerResponse'] = ResolversParentTypes['ListOffersAvailableForOrganizerResponse']> = {
  __resolveType: TypeResolveFn<'ListOffersAvailableForOrganizerResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListOffersAvailableForOrganizerResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListOffersAvailableForOrganizerResponseSuccess'] = ResolversParentTypes['ListOffersAvailableForOrganizerResponseSuccess']> = {
  offers?: Resolver<Array<ResolversTypes['OfferAffiliateView']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListPartnersOfAdvertiserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListPartnersOfAdvertiserResponse'] = ResolversParentTypes['ListPartnersOfAdvertiserResponse']> = {
  __resolveType: TypeResolveFn<'ListPartnersOfAdvertiserResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListPartnersOfAdvertiserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListPartnersOfAdvertiserResponseSuccess'] = ResolversParentTypes['ListPartnersOfAdvertiserResponseSuccess']> = {
  partners?: Resolver<Array<ResolversTypes['Affiliate']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListPotentialAirdropClaimersResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListPotentialAirdropClaimersResponse'] = ResolversParentTypes['ListPotentialAirdropClaimersResponse']> = {
  __resolveType: TypeResolveFn<'ListPotentialAirdropClaimersResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListPotentialAirdropClaimersResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListPotentialAirdropClaimersResponseSuccess'] = ResolversParentTypes['ListPotentialAirdropClaimersResponseSuccess']> = {
  offer?: Resolver<ResolversTypes['OfferAirdropPromoterView'], ParentType, ContextType>;
  potentialClaimers?: Resolver<Array<ResolversTypes['PotentialAirdropClaimer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListWhitelistedAffiliatesToOfferResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListWhitelistedAffiliatesToOfferResponse'] = ResolversParentTypes['ListWhitelistedAffiliatesToOfferResponse']> = {
  __resolveType: TypeResolveFn<'ListWhitelistedAffiliatesToOfferResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ListWhitelistedAffiliatesToOfferResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ListWhitelistedAffiliatesToOfferResponseSuccess'] = ResolversParentTypes['ListWhitelistedAffiliatesToOfferResponseSuccess']> = {
  whitelists?: Resolver<Array<ResolversTypes['OrganizerOfferWhitelistWithProfile']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LocalDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalDate'], any> {
  name: 'LocalDate';
}

export interface LocalEndTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalEndTime'], any> {
  name: 'LocalEndTime';
}

export interface LocalTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['LocalTime'], any> {
  name: 'LocalTime';
}

export interface LocaleScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Locale'], any> {
  name: 'Locale';
}

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export interface LongitudeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Longitude'], any> {
  name: 'Longitude';
}

export type LootboxResolvers<ContextType = any, ParentType extends ResolversParentTypes['Lootbox'] = ResolversParentTypes['Lootbox']> = {
  address?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  airdropMetadata?: Resolver<Maybe<ResolversTypes['LootboxAirdropMetadata']>, ParentType, ContextType>;
  airdropQuestions?: Resolver<Maybe<Array<ResolversTypes['LootboxAirdropMetadataQuestion']>>, ParentType, ContextType>;
  backgroundImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  baseTokenURI?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chainIdDecimal?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chainIdHex?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  chainName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationNonce?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorAddress?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  creatorID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  factory?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  joinCommunityUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  logo?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['LootboxMetadata']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nftBountyValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  partyBaskets?: Resolver<Maybe<Array<ResolversTypes['PartyBasket']>>, ParentType, ContextType>;
  runningCompletedClaims?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stampImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['LootboxStatus'], ParentType, ContextType>;
  symbol?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  themeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamps?: Resolver<Maybe<ResolversTypes['LootboxTimestamps']>, ParentType, ContextType>;
  tournamentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  tournamentSnapshot?: Resolver<Maybe<ResolversTypes['LootboxTournamentSnapshot']>, ParentType, ContextType, Partial<LootboxTournamentSnapshotArgs>>;
  transactionHash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['LootboxType']>, ParentType, ContextType>;
  userClaims?: Resolver<Maybe<ResolversTypes['LootboxUserClaimPageInfoResponse']>, ParentType, ContextType, RequireFields<LootboxUserClaimsArgs, 'first'>>;
  variant?: Resolver<Maybe<ResolversTypes['LootboxVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxAirdropMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxAirdropMetadata'] = ResolversParentTypes['LootboxAirdropMetadata']> = {
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batch?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  callToActionLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instructionsCallToAction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instructionsLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  oneLiner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizerID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tournamentID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxAirdropMetadataQuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxAirdropMetadataQuestion'] = ResolversParentTypes['LootboxAirdropMetadataQuestion']> = {
  batch?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['QuestionFieldType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxChainResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxChain'] = ResolversParentTypes['LootboxChain']> = {
  address?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainIdDecimal?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainIdHex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  chainName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxCompletedClaimsForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxCompletedClaimsForTournamentResponse'] = ResolversParentTypes['LootboxCompletedClaimsForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'LootboxCompletedClaimsForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type LootboxCompletedClaimsForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxCompletedClaimsForTournamentResponseSuccess'] = ResolversParentTypes['LootboxCompletedClaimsForTournamentResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['LootboxCompletedClaimsForTournamentRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxCompletedClaimsForTournamentRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxCompletedClaimsForTournamentRow'] = ResolversParentTypes['LootboxCompletedClaimsForTournamentRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxImg?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lootboxName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  maxTickets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxCustomSchemaResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxCustomSchema'] = ResolversParentTypes['LootboxCustomSchema']> = {
  chain?: Resolver<ResolversTypes['LootboxChain'], ParentType, ContextType>;
  lootbox?: Resolver<ResolversTypes['LootboxCustomSchemaData'], ParentType, ContextType>;
  socials?: Resolver<ResolversTypes['LootboxSocials'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxCustomSchemaDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxCustomSchemaData'] = ResolversParentTypes['LootboxCustomSchemaData']> = {
  backgroundColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backgroundImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  badgeImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  basisPointsReturnTarget?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  fundraisingTarget?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fundraisingTargetMax?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lootboxThemeColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  pricePerShare?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  returnAmountTarget?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  targetPaybackDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  tournamentId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  transactionHash?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxFeedEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxFeedEdge'] = ResolversParentTypes['LootboxFeedEdge']> = {
  cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LootboxSnapshot'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxFeedResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxFeedResponse'] = ResolversParentTypes['LootboxFeedResponse']> = {
  __resolveType: TypeResolveFn<'LootboxFeedResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type LootboxFeedResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxFeedResponseSuccess'] = ResolversParentTypes['LootboxFeedResponseSuccess']> = {
  edges?: Resolver<Array<ResolversTypes['LootboxFeedEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxMetadata'] = ResolversParentTypes['LootboxMetadata']> = {
  animation_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  background_color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  external_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lootboxCustomSchema?: Resolver<Maybe<ResolversTypes['LootboxCustomSchema']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  youtube_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxResponseSuccess'] = ResolversParentTypes['LootboxResponseSuccess']> = {
  lootbox?: Resolver<ResolversTypes['Lootbox'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxSnapshot'] = ResolversParentTypes['LootboxSnapshot']> = {
  address?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  backgroundColor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  backgroundImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  issuer?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  metadataDownloadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stampImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['LootboxSnapshotTimestamps'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['LootboxType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxSnapshotTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxSnapshotTimestamps'] = ResolversParentTypes['LootboxSnapshotTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  depositEmailSentAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxSocialsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxSocials'] = ResolversParentTypes['LootboxSocials']> = {
  discord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapchat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktok?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxSocialsWithoutEmailResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxSocialsWithoutEmail'] = ResolversParentTypes['LootboxSocialsWithoutEmail']> = {
  discord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapchat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktok?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  youtube?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxTicketResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxTicket'] = ResolversParentTypes['LootboxTicket']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  digest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadataURL?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mintWhitelistID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minterAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  minterUserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  stampImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticketID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxTimestamps'] = ResolversParentTypes['LootboxTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxTournamentSnapshotResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxTournamentSnapshot'] = ResolversParentTypes['LootboxTournamentSnapshot']> = {
  address?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  creatorID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  impressionPriority?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lootbox?: Resolver<Maybe<ResolversTypes['Lootbox']>, ParentType, ContextType>;
  lootboxCreatorID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  partyBaskets?: Resolver<Maybe<Array<ResolversTypes['PartyBasket']>>, ParentType, ContextType>;
  stampImage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['LootboxTournamentStatus'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['LootboxSnapshotTimestamps'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxTournamentSnapshotCursorResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxTournamentSnapshotCursor'] = ResolversParentTypes['LootboxTournamentSnapshotCursor']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  impression?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxUserClaimPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxUserClaimPageInfo'] = ResolversParentTypes['LootboxUserClaimPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LootboxUserClaimPageInfoResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LootboxUserClaimPageInfoResponse'] = ResolversParentTypes['LootboxUserClaimPageInfoResponse']> = {
  _lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ClaimEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ClaimPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MacScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['MAC'], any> {
  name: 'MAC';
}

export type MarketplacePreviewAffiliateResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplacePreviewAffiliate'] = ResolversParentTypes['MarketplacePreviewAffiliate']> = {
  audienceSize?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  publicContactEmail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['OrganizerRank']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketplacePreviewOfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarketplacePreviewOffer'] = ResolversParentTypes['MarketplacePreviewOffer']> = {
  advertiserAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lowerEarn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  upperEarn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Memo'] = ResolversParentTypes['Memo']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MintWhitelistSignatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['MintWhitelistSignature'] = ResolversParentTypes['MintWhitelistSignature']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  digest?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isRedeemed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lootboxAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxTicket?: Resolver<Maybe<ResolversTypes['LootboxTicket']>, ParentType, ContextType>;
  lootboxTicketID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  whitelistedAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addOfferAdSetToTournament?: Resolver<ResolversTypes['AddOfferAdSetToTournamentResponse'], ParentType, ContextType, RequireFields<MutationAddOfferAdSetToTournamentArgs, 'payload'>>;
  addStream?: Resolver<ResolversTypes['AddStreamResponse'], ParentType, ContextType, RequireFields<MutationAddStreamArgs, 'payload'>>;
  addUpdatePromoterRateQuoteInTournament?: Resolver<ResolversTypes['AddUpdatePromoterRateQuoteInTournamentResponse'], ParentType, ContextType, RequireFields<MutationAddUpdatePromoterRateQuoteInTournamentArgs, 'payload'>>;
  answerAirdropQuestion?: Resolver<ResolversTypes['AnswerAirdropQuestionResponse'], ParentType, ContextType, RequireFields<MutationAnswerAirdropQuestionArgs, 'payload'>>;
  authenticateWallet?: Resolver<ResolversTypes['AuthenticateWalletResponse'], ParentType, ContextType, RequireFields<MutationAuthenticateWalletArgs, 'payload'>>;
  bulkCreateReferral?: Resolver<ResolversTypes['BulkCreateReferralResponse'], ParentType, ContextType, RequireFields<MutationBulkCreateReferralArgs, 'payload'>>;
  bulkEditLootboxTournamentSnapshots?: Resolver<ResolversTypes['BulkEditLootboxTournamentSnapshotsResponse'], ParentType, ContextType, RequireFields<MutationBulkEditLootboxTournamentSnapshotsArgs, 'payload'>>;
  bulkWhitelist?: Resolver<ResolversTypes['BulkWhitelistResponse'], ParentType, ContextType, RequireFields<MutationBulkWhitelistArgs, 'payload'>>;
  completeClaim?: Resolver<ResolversTypes['CompleteClaimResponse'], ParentType, ContextType, RequireFields<MutationCompleteClaimArgs, 'payload'>>;
  connectWallet?: Resolver<ResolversTypes['ConnectWalletResponse'], ParentType, ContextType, RequireFields<MutationConnectWalletArgs, 'payload'>>;
  createActivation?: Resolver<ResolversTypes['CreateActivationResponse'], ParentType, ContextType, RequireFields<MutationCreateActivationArgs, 'payload'>>;
  createAd?: Resolver<ResolversTypes['CreateAdResponse'], ParentType, ContextType, RequireFields<MutationCreateAdArgs, 'payload'>>;
  createAdSet?: Resolver<ResolversTypes['CreateAdSetResponse'], ParentType, ContextType, RequireFields<MutationCreateAdSetArgs, 'payload'>>;
  createClaim?: Resolver<ResolversTypes['CreateClaimResponse'], ParentType, ContextType, RequireFields<MutationCreateClaimArgs, 'payload'>>;
  createConquest?: Resolver<ResolversTypes['CreateConquestResponse'], ParentType, ContextType, RequireFields<MutationCreateConquestArgs, 'advertiserID' | 'payload'>>;
  createLootbox?: Resolver<ResolversTypes['CreateLootboxResponse'], ParentType, ContextType, RequireFields<MutationCreateLootboxArgs, 'payload'>>;
  createOffer?: Resolver<ResolversTypes['CreateOfferResponse'], ParentType, ContextType, RequireFields<MutationCreateOfferArgs, 'advertiserID' | 'payload'>>;
  createPartyBasket?: Resolver<ResolversTypes['CreatePartyBasketResponse'], ParentType, ContextType, RequireFields<MutationCreatePartyBasketArgs, 'payload'>>;
  createReferral?: Resolver<ResolversTypes['CreateReferralResponse'], ParentType, ContextType, RequireFields<MutationCreateReferralArgs, 'payload'>>;
  createTournament?: Resolver<ResolversTypes['CreateTournamentResponse'], ParentType, ContextType, RequireFields<MutationCreateTournamentArgs, 'payload'>>;
  createUserRecord?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, Partial<MutationCreateUserRecordArgs>>;
  createUserWithPassword?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserWithPasswordArgs, 'payload'>>;
  createUserWithWallet?: Resolver<ResolversTypes['CreateUserResponse'], ParentType, ContextType, RequireFields<MutationCreateUserWithWalletArgs, 'payload'>>;
  deleteStream?: Resolver<ResolversTypes['DeleteStreamResponse'], ParentType, ContextType, RequireFields<MutationDeleteStreamArgs, 'id'>>;
  deleteTournament?: Resolver<ResolversTypes['DeleteTournamentResponse'], ParentType, ContextType, RequireFields<MutationDeleteTournamentArgs, 'id'>>;
  editActivation?: Resolver<ResolversTypes['EditActivationResponse'], ParentType, ContextType, RequireFields<MutationEditActivationArgs, 'payload'>>;
  editAd?: Resolver<ResolversTypes['EditAdResponse'], ParentType, ContextType, RequireFields<MutationEditAdArgs, 'payload'>>;
  editAdSet?: Resolver<ResolversTypes['EditAdSetResponse'], ParentType, ContextType, RequireFields<MutationEditAdSetArgs, 'payload'>>;
  editLootbox?: Resolver<ResolversTypes['EditLootboxResponse'], ParentType, ContextType, RequireFields<MutationEditLootboxArgs, 'payload'>>;
  editOffer?: Resolver<ResolversTypes['EditOfferResponse'], ParentType, ContextType, RequireFields<MutationEditOfferArgs, 'payload'>>;
  editPartyBasket?: Resolver<ResolversTypes['EditPartyBasketResponse'], ParentType, ContextType, RequireFields<MutationEditPartyBasketArgs, 'payload'>>;
  editStream?: Resolver<ResolversTypes['EditStreamResponse'], ParentType, ContextType, RequireFields<MutationEditStreamArgs, 'payload'>>;
  editTournament?: Resolver<ResolversTypes['EditTournamentResponse'], ParentType, ContextType, RequireFields<MutationEditTournamentArgs, 'payload'>>;
  editWhitelistAffiliateToOffer?: Resolver<ResolversTypes['EditWhitelistAffiliateToOfferResponse'], ParentType, ContextType, RequireFields<MutationEditWhitelistAffiliateToOfferArgs, 'payload'>>;
  generateClaimsCsv?: Resolver<ResolversTypes['GenerateClaimsCsvResponse'], ParentType, ContextType, RequireFields<MutationGenerateClaimsCsvArgs, 'payload'>>;
  getWhitelistSignatures?: Resolver<ResolversTypes['GetWhitelistSignaturesResponse'], ParentType, ContextType, RequireFields<MutationGetWhitelistSignaturesArgs, 'payload'>>;
  redeemSignature?: Resolver<ResolversTypes['RedeemSignatureResponse'], ParentType, ContextType, RequireFields<MutationRedeemSignatureArgs, 'payload'>>;
  removeOfferAdSetFromTournament?: Resolver<ResolversTypes['RemoveOfferAdSetFromTournamentResponse'], ParentType, ContextType, RequireFields<MutationRemoveOfferAdSetFromTournamentArgs, 'payload'>>;
  removePromoterFromTournament?: Resolver<ResolversTypes['RemovePromoterFromTournamentResponse'], ParentType, ContextType, RequireFields<MutationRemovePromoterFromTournamentArgs, 'payload'>>;
  removeWallet?: Resolver<ResolversTypes['RemoveWalletResponse'], ParentType, ContextType, RequireFields<MutationRemoveWalletArgs, 'payload'>>;
  syncProviderUser?: Resolver<ResolversTypes['SyncProviderUserResponse'], ParentType, ContextType>;
  updateAdvertiserDetails?: Resolver<ResolversTypes['UpdateAdvertiserDetailsResponse'], ParentType, ContextType, RequireFields<MutationUpdateAdvertiserDetailsArgs, 'advertiserID' | 'payload'>>;
  updateAffiliateDetails?: Resolver<ResolversTypes['UpdateAffiliateDetailsResponse'], ParentType, ContextType, RequireFields<MutationUpdateAffiliateDetailsArgs, 'affiliateID' | 'payload'>>;
  updateClaimRedemptionStatus?: Resolver<ResolversTypes['UpdateClaimRedemptionStatusResponse'], ParentType, ContextType, RequireFields<MutationUpdateClaimRedemptionStatusArgs, 'payload'>>;
  updateConquest?: Resolver<ResolversTypes['UpdateConquestResponse'], ParentType, ContextType, RequireFields<MutationUpdateConquestArgs, 'advertiserID' | 'payload'>>;
  updateUser?: Resolver<ResolversTypes['UpdateUserResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'payload'>>;
  updateUserAuth?: Resolver<ResolversTypes['UpdateUserResponse'], ParentType, ContextType, RequireFields<MutationUpdateUserAuthArgs, 'payload'>>;
  upgradeToAdvertiser?: Resolver<ResolversTypes['UpgradeToAdvertiserResponse'], ParentType, ContextType>;
  upgradeToAffiliate?: Resolver<ResolversTypes['UpgradeToAffiliateResponse'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  whitelistAffiliateToOffer?: Resolver<ResolversTypes['WhitelistAffiliateToOfferResponse'], ParentType, ContextType, RequireFields<MutationWhitelistAffiliateToOfferArgs, 'payload'>>;
  whitelistAllUnassignedClaims?: Resolver<ResolversTypes['WhitelistAllUnassignedClaimsResponse'], ParentType, ContextType, RequireFields<MutationWhitelistAllUnassignedClaimsArgs, 'payload'>>;
  whitelistMyLootboxClaims?: Resolver<ResolversTypes['WhitelistMyLootboxClaimsResponse'], ParentType, ContextType, RequireFields<MutationWhitelistMyLootboxClaimsArgs, 'payload'>>;
};

export type MyLootboxByNonceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyLootboxByNonceResponse'] = ResolversParentTypes['MyLootboxByNonceResponse']> = {
  __resolveType: TypeResolveFn<'MyLootboxByNonceResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type MyLootboxByNonceResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyLootboxByNonceResponseSuccess'] = ResolversParentTypes['MyLootboxByNonceResponseSuccess']> = {
  lootbox?: Resolver<ResolversTypes['Lootbox'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MyTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyTournamentResponse'] = ResolversParentTypes['MyTournamentResponse']> = {
  __resolveType: TypeResolveFn<'MyTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type MyTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['MyTournamentResponseSuccess'] = ResolversParentTypes['MyTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface NegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeFloat'], any> {
  name: 'NegativeFloat';
}

export interface NegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NegativeInt'], any> {
  name: 'NegativeInt';
}

export interface NonEmptyStringScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonEmptyString'], any> {
  name: 'NonEmptyString';
}

export interface NonNegativeFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeFloat'], any> {
  name: 'NonNegativeFloat';
}

export interface NonNegativeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonNegativeInt'], any> {
  name: 'NonNegativeInt';
}

export interface NonPositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveFloat'], any> {
  name: 'NonPositiveFloat';
}

export interface NonPositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['NonPositiveInt'], any> {
  name: 'NonPositiveInt';
}

export interface ObjectIdScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjectID'], any> {
  name: 'ObjectID';
}

export type OfferResolvers<ContextType = any, ParentType extends ResolversParentTypes['Offer'] = ResolversParentTypes['Offer']> = {
  activations?: Resolver<Array<ResolversTypes['Activation']>, ParentType, ContextType>;
  adSetPreviews?: Resolver<Array<ResolversTypes['AdSetPreview']>, ParentType, ContextType>;
  adSets?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  affiliateBaseLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  airdropMetadata?: Resolver<Maybe<ResolversTypes['OfferAirdropMetadata']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  mmp?: Resolver<ResolversTypes['MeasurementPartnerType'], ParentType, ContextType>;
  spentBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OfferStatus'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['OfferStrategyType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferAffiliateViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfferAffiliateView'] = ResolversParentTypes['OfferAffiliateView']> = {
  activationsForAffiliate?: Resolver<Array<ResolversTypes['RateQuoteEstimate']>, ParentType, ContextType, RequireFields<OfferAffiliateViewActivationsForAffiliateArgs, 'affiliateID'>>;
  adSetPreviews?: Resolver<Array<ResolversTypes['AdSetPreview']>, ParentType, ContextType>;
  advertiserAvatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  advertiserName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  spentBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OfferStatus'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferAirdropMetadataResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfferAirdropMetadata'] = ResolversParentTypes['OfferAirdropMetadata']> = {
  batchCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  callToActionLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  excludedOffers?: Resolver<Array<ResolversTypes['ID']>, ParentType, ContextType>;
  instructionsCallToAction?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instructionsLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lootboxTemplateID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxTemplateStamp?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  oneLiner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  questions?: Resolver<Array<ResolversTypes['QuestionAnswerPreview']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferAirdropPromoterViewResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfferAirdropPromoterView'] = ResolversParentTypes['OfferAirdropPromoterView']> = {
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  airdropMetadata?: Resolver<Maybe<ResolversTypes['OfferAirdropMetadata']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfferPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['OfferPreview'] = ResolversParentTypes['OfferPreview']> = {
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  maxBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  spentBudget?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  startDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OfferStatus'], ParentType, ContextType>;
  strategy?: Resolver<ResolversTypes['OfferStrategyType'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizerOfferPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizerOfferPreview'] = ResolversParentTypes['OrganizerOfferPreview']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizerOfferWhitelistResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizerOfferWhitelist'] = ResolversParentTypes['OrganizerOfferWhitelist']> = {
  advertiserID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  offerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organizerID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['OrganizerOfferWhitelistStatus'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizerOfferWhitelistWithProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizerOfferWhitelistWithProfile'] = ResolversParentTypes['OrganizerOfferWhitelistWithProfile']> = {
  organizer?: Resolver<ResolversTypes['OrganizerOfferPreview'], ParentType, ContextType>;
  whitelist?: Resolver<ResolversTypes['OrganizerOfferWhitelist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrganizerProfileResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrganizerProfile'] = ResolversParentTypes['OrganizerProfile']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginateLootboxTournamentSnapshotEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginateLootboxTournamentSnapshotEdge'] = ResolversParentTypes['PaginateLootboxTournamentSnapshotEdge']> = {
  cursor?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  node?: Resolver<ResolversTypes['LootboxTournamentSnapshot'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginateLootboxTournamentSnapshotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginateLootboxTournamentSnapshots'] = ResolversParentTypes['PaginateLootboxTournamentSnapshots']> = {
  edges?: Resolver<Array<ResolversTypes['PaginateLootboxTournamentSnapshotEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginatedLootboxTournamentSnapshotPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginatedLootboxTournamentSnapshotPageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginatedLootboxTournamentSnapshotPageInfo'] = ResolversParentTypes['PaginatedLootboxTournamentSnapshotPageInfo']> = {
  endCursor?: Resolver<Maybe<ResolversTypes['LootboxTournamentSnapshotCursor']>, ParentType, ContextType>;
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartyBasketResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartyBasket'] = ResolversParentTypes['PartyBasket']> = {
  address?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainIdHex?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  creatorAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  factory?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  joinCommunityUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lootboxAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxSnapshot?: Resolver<Maybe<ResolversTypes['LootboxSnapshot']>, ParentType, ContextType>;
  maxClaimsAllowed?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nftBountyValue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  runningCompletedClaims?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['PartyBasketStatus']>, ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['PartyBasketTimestamps'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartyBasketTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartyBasketTimestamps'] = ResolversParentTypes['PartyBasketTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PartyBasketWhitelistSignatureResolvers<ContextType = any, ParentType extends ResolversParentTypes['PartyBasketWhitelistSignature'] = ResolversParentTypes['PartyBasketWhitelistSignature']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isRedeemed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  nonce?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  partyBasketAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  signature?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  signer?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['PartyBasketTimestamps'], ParentType, ContextType>;
  whitelistedAddress?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface PhoneNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PhoneNumber'], any> {
  name: 'PhoneNumber';
}

export interface PortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Port'], any> {
  name: 'Port';
}

export interface PositiveFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveFloat'], any> {
  name: 'PositiveFloat';
}

export interface PositiveIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PositiveInt'], any> {
  name: 'PositiveInt';
}

export interface PostalCodeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PostalCode'], any> {
  name: 'PostalCode';
}

export type PotentialAirdropClaimerResolvers<ContextType = any, ParentType extends ResolversParentTypes['PotentialAirdropClaimer'] = ResolversParentTypes['PotentialAirdropClaimer']> = {
  advertiserID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  batchAlias?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lootboxAddress?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lootboxID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  offerID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['ClaimRedemptionStatus']>, ParentType, ContextType>;
  tournamentID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicUser'] = ResolversParentTypes['PublicUser']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  claims?: Resolver<Maybe<ResolversTypes['UserClaimsResponseSuccess']>, ParentType, ContextType, RequireFields<PublicUserClaimsArgs, 'first'>>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  headshot?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  socials?: Resolver<Maybe<ResolversTypes['UserSocials']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PublicUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicUserResponse'] = ResolversParentTypes['PublicUserResponse']> = {
  __resolveType: TypeResolveFn<'PublicUserResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type PublicUserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['PublicUserResponseSuccess'] = ResolversParentTypes['PublicUserResponseSuccess']> = {
  user?: Resolver<ResolversTypes['PublicUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  advertiserAdminView?: Resolver<ResolversTypes['AdvertiserAdminViewResponse'], ParentType, ContextType>;
  advertiserPublicView?: Resolver<ResolversTypes['AdvertiserPublicViewResponse'], ParentType, ContextType, RequireFields<QueryAdvertiserPublicViewArgs, 'advertiserId'>>;
  affiliateAdminView?: Resolver<ResolversTypes['AffiliateAdminViewResponse'], ParentType, ContextType>;
  affiliatePublicView?: Resolver<ResolversTypes['AffiliatePublicViewResponse'], ParentType, ContextType, RequireFields<QueryAffiliatePublicViewArgs, 'affiliateID'>>;
  baseClaimStatsForLootbox?: Resolver<ResolversTypes['BaseClaimStatsForLootboxResponse'], ParentType, ContextType, RequireFields<QueryBaseClaimStatsForLootboxArgs, 'lootboxID'>>;
  baseClaimStatsForTournament?: Resolver<ResolversTypes['BaseClaimStatsForTournamentResponse'], ParentType, ContextType, RequireFields<QueryBaseClaimStatsForTournamentArgs, 'tournamentID'>>;
  battleFeed?: Resolver<ResolversTypes['BattleFeedResponse'], ParentType, ContextType, RequireFields<QueryBattleFeedArgs, 'first'>>;
  browseActiveOffers?: Resolver<ResolversTypes['BrowseActiveOffersResponse'], ParentType, ContextType>;
  browseAllAffiliates?: Resolver<ResolversTypes['BrowseAllAffiliatesResponse'], ParentType, ContextType>;
  campaignClaimsForLootbox?: Resolver<ResolversTypes['CampaignClaimsForLootboxResponse'], ParentType, ContextType, RequireFields<QueryCampaignClaimsForLootboxArgs, 'lootboxID'>>;
  campaignClaimsForTournament?: Resolver<ResolversTypes['CampaignClaimsForTournamentResponse'], ParentType, ContextType, RequireFields<QueryCampaignClaimsForTournamentArgs, 'tournamentID'>>;
  checkIfUserAnsweredAirdropQuestions?: Resolver<ResolversTypes['CheckIfUserAnsweredAirdropQuestionsResponse'], ParentType, ContextType, RequireFields<QueryCheckIfUserAnsweredAirdropQuestionsArgs, 'lootboxID'>>;
  checkPhoneEnabled?: Resolver<ResolversTypes['CheckPhoneEnabledResponse'], ParentType, ContextType, RequireFields<QueryCheckPhoneEnabledArgs, 'email'>>;
  claimByID?: Resolver<ResolversTypes['ClaimByIDResponse'], ParentType, ContextType, RequireFields<QueryClaimByIdArgs, 'claimID'>>;
  claimerStatisticsForLootboxTournament?: Resolver<ResolversTypes['ClaimerStatsForLootboxTournamentResponse'], ParentType, ContextType, RequireFields<QueryClaimerStatisticsForLootboxTournamentArgs, 'lootboxID' | 'tournamentID'>>;
  claimerStatsForTournament?: Resolver<ResolversTypes['ClaimerStatsForTournamentResponse'], ParentType, ContextType, RequireFields<QueryClaimerStatsForTournamentArgs, 'eventID'>>;
  dailyClaimStatisticsForTournament?: Resolver<ResolversTypes['DailyClaimStatisticsForTournamentResponse'], ParentType, ContextType, RequireFields<QueryDailyClaimStatisticsForTournamentArgs, 'payload'>>;
  decisionAdApiBetaV2?: Resolver<ResolversTypes['DecisionAdApiBetaV2Response'], ParentType, ContextType, RequireFields<QueryDecisionAdApiBetaV2Args, 'payload'>>;
  fansListForTournament?: Resolver<ResolversTypes['FansListForTournamentResponse'], ParentType, ContextType, RequireFields<QueryFansListForTournamentArgs, 'tournamentID'>>;
  getAnonToken?: Resolver<ResolversTypes['GetAnonTokenResponse'], ParentType, ContextType, RequireFields<QueryGetAnonTokenArgs, 'idToken'>>;
  getAnonTokenV2?: Resolver<ResolversTypes['GetAnonTokenResponse'], ParentType, ContextType, RequireFields<QueryGetAnonTokenV2Args, 'userID'>>;
  getConquest?: Resolver<ResolversTypes['GetConquestResponse'], ParentType, ContextType, RequireFields<QueryGetConquestArgs, 'advertiserID' | 'conquestID'>>;
  getLootboxByAddress?: Resolver<ResolversTypes['GetLootboxByAddressResponse'], ParentType, ContextType, RequireFields<QueryGetLootboxByAddressArgs, 'address'>>;
  getLootboxByID?: Resolver<ResolversTypes['GetLootboxByIDResponse'], ParentType, ContextType, RequireFields<QueryGetLootboxByIdArgs, 'id'>>;
  getMyProfile?: Resolver<ResolversTypes['GetMyProfileResponse'], ParentType, ContextType>;
  getPartyBasket?: Resolver<ResolversTypes['GetPartyBasketResponse'], ParentType, ContextType, RequireFields<QueryGetPartyBasketArgs, 'address'>>;
  listAdSetsOfAdvertiser?: Resolver<ResolversTypes['ListAdSetsOfAdvertiserResponse'], ParentType, ContextType, RequireFields<QueryListAdSetsOfAdvertiserArgs, 'advertiserID'>>;
  listAdsOfAdvertiser?: Resolver<ResolversTypes['ListAdsOfAdvertiserResponse'], ParentType, ContextType, RequireFields<QueryListAdsOfAdvertiserArgs, 'advertiserID'>>;
  listAvailableLootboxesForClaim?: Resolver<ResolversTypes['ListAvailableLootboxesForClaimResponse'], ParentType, ContextType, RequireFields<QueryListAvailableLootboxesForClaimArgs, 'tournamentID'>>;
  listConquestPreviews?: Resolver<ResolversTypes['ListConquestPreviewsResponse'], ParentType, ContextType, RequireFields<QueryListConquestPreviewsArgs, 'advertiserID'>>;
  listCreatedOffers?: Resolver<ResolversTypes['ListCreatedOffersResponse'], ParentType, ContextType, RequireFields<QueryListCreatedOffersArgs, 'advertiserID'>>;
  listEventsOfAdvertiser?: Resolver<ResolversTypes['ListEventsOfAdvertiserResponse'], ParentType, ContextType, RequireFields<QueryListEventsOfAdvertiserArgs, 'advertiserID'>>;
  listOffersAvailableForOrganizer?: Resolver<ResolversTypes['ListOffersAvailableForOrganizerResponse'], ParentType, ContextType, RequireFields<QueryListOffersAvailableForOrganizerArgs, 'affiliateID'>>;
  listPartnersOfAdvertiser?: Resolver<ResolversTypes['ListPartnersOfAdvertiserResponse'], ParentType, ContextType, RequireFields<QueryListPartnersOfAdvertiserArgs, 'advertiserID'>>;
  listPotentialAirdropClaimers?: Resolver<ResolversTypes['ListPotentialAirdropClaimersResponse'], ParentType, ContextType, RequireFields<QueryListPotentialAirdropClaimersArgs, 'payload'>>;
  listWhitelistedAffiliatesToOffer?: Resolver<ResolversTypes['ListWhitelistedAffiliatesToOfferResponse'], ParentType, ContextType, RequireFields<QueryListWhitelistedAffiliatesToOfferArgs, 'payload'>>;
  lootboxCompletedClaimsForTournament?: Resolver<ResolversTypes['LootboxCompletedClaimsForTournamentResponse'], ParentType, ContextType, RequireFields<QueryLootboxCompletedClaimsForTournamentArgs, 'tournamentID'>>;
  lootboxFeed?: Resolver<ResolversTypes['LootboxFeedResponse'], ParentType, ContextType, RequireFields<QueryLootboxFeedArgs, 'first'>>;
  myLootboxByNonce?: Resolver<ResolversTypes['MyLootboxByNonceResponse'], ParentType, ContextType, RequireFields<QueryMyLootboxByNonceArgs, 'nonce'>>;
  myTournament?: Resolver<ResolversTypes['MyTournamentResponse'], ParentType, ContextType, RequireFields<QueryMyTournamentArgs, 'id'>>;
  publicUser?: Resolver<ResolversTypes['PublicUserResponse'], ParentType, ContextType, RequireFields<QueryPublicUserArgs, 'id'>>;
  referral?: Resolver<ResolversTypes['ReferralResponse'], ParentType, ContextType, RequireFields<QueryReferralArgs, 'slug'>>;
  referrerClaimsForLootbox?: Resolver<ResolversTypes['ReferrerClaimsForLootboxResponse'], ParentType, ContextType, RequireFields<QueryReferrerClaimsForLootboxArgs, 'lootboxID'>>;
  referrerClaimsForTournament?: Resolver<ResolversTypes['ReferrerClaimsForTournamentResponse'], ParentType, ContextType, RequireFields<QueryReferrerClaimsForTournamentArgs, 'tournamentID'>>;
  reportAdvertiserAffiliatePerf?: Resolver<ResolversTypes['ReportAdvertiserAffiliatePerfResponse'], ParentType, ContextType, RequireFields<QueryReportAdvertiserAffiliatePerfArgs, 'payload'>>;
  reportAdvertiserOfferPerformance?: Resolver<ResolversTypes['ReportAdvertiserOfferPerformanceResponse'], ParentType, ContextType, RequireFields<QueryReportAdvertiserOfferPerformanceArgs, 'offerID'>>;
  reportAdvertiserTournamentPerf?: Resolver<ResolversTypes['ReportAdvertiserTournamentPerfResponse'], ParentType, ContextType, RequireFields<QueryReportAdvertiserTournamentPerfArgs, 'payload'>>;
  reportOrganizerOfferPerf?: Resolver<ResolversTypes['ReportOrganizerOfferPerfResponse'], ParentType, ContextType, RequireFields<QueryReportOrganizerOfferPerfArgs, 'payload'>>;
  reportOrganizerTournamentPerf?: Resolver<ResolversTypes['ReportOrganizerTournamentResponse'], ParentType, ContextType, RequireFields<QueryReportOrganizerTournamentPerfArgs, 'payload'>>;
  reportPromoterTournamentPerf?: Resolver<ResolversTypes['ReportPromoterTournamentPerfResponse'], ParentType, ContextType, RequireFields<QueryReportPromoterTournamentPerfArgs, 'payload'>>;
  reportTotalEarningsForAffiliate?: Resolver<ResolversTypes['ReportTotalEarningsForAffiliateResponse'], ParentType, ContextType>;
  tournament?: Resolver<ResolversTypes['TournamentResponse'], ParentType, ContextType, RequireFields<QueryTournamentArgs, 'id'>>;
  truncatedEmailByPhone?: Resolver<ResolversTypes['TruncatedEmailByPhoneResponse'], ParentType, ContextType, RequireFields<QueryTruncatedEmailByPhoneArgs, 'phoneNumber'>>;
  userClaims?: Resolver<ResolversTypes['UserClaimsResponse'], ParentType, ContextType, RequireFields<QueryUserClaimsArgs, 'first' | 'userId'>>;
  version?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  viewAd?: Resolver<ResolversTypes['ViewAdResponse'], ParentType, ContextType, RequireFields<QueryViewAdArgs, 'adID'>>;
  viewAdSet?: Resolver<ResolversTypes['ViewAdSetResponse'], ParentType, ContextType, RequireFields<QueryViewAdSetArgs, 'adSetID'>>;
  viewCreatedOffer?: Resolver<ResolversTypes['ViewCreatedOfferResponse'], ParentType, ContextType, RequireFields<QueryViewCreatedOfferArgs, 'offerID'>>;
  viewMyTournamentsAsOrganizer?: Resolver<ResolversTypes['ViewMyTournamentsAsOrganizerResponse'], ParentType, ContextType, RequireFields<QueryViewMyTournamentsAsOrganizerArgs, 'affiliateID'>>;
  viewOfferDetailsAsAffiliate?: Resolver<ResolversTypes['ViewOfferDetailsAsEventAffiliateResponse'], ParentType, ContextType, RequireFields<QueryViewOfferDetailsAsAffiliateArgs, 'payload'>>;
  viewTournamentAsOrganizer?: Resolver<ResolversTypes['ViewTournamentAsOrganizerResponse'], ParentType, ContextType, RequireFields<QueryViewTournamentAsOrganizerArgs, 'tournamentID'>>;
};

export type QuestionAnswerPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['QuestionAnswerPreview'] = ResolversParentTypes['QuestionAnswerPreview']> = {
  batch?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['QuestionFieldType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RgbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGB'], any> {
  name: 'RGB';
}

export interface RgbaScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RGBA'], any> {
  name: 'RGBA';
}

export type RateQuoteDealConfigResolvers<ContextType = any, ParentType extends ResolversParentTypes['RateQuoteDealConfig'] = ResolversParentTypes['RateQuoteDealConfig']> = {
  activationID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  activationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activationOrder?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  affiliateAvatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  affiliateID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  affiliateName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pricing?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rateQuoteID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RateQuoteEstimateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RateQuoteEstimate'] = ResolversParentTypes['RateQuoteEstimate']> = {
  activationID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  activationName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  affiliateID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  order?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pricing?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedeemSignatureResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemSignatureResponse'] = ResolversParentTypes['RedeemSignatureResponse']> = {
  __resolveType: TypeResolveFn<'RedeemSignatureResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type RedeemSignatureResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RedeemSignatureResponseSuccess'] = ResolversParentTypes['RedeemSignatureResponseSuccess']> = {
  signature?: Resolver<ResolversTypes['PartyBasketWhitelistSignature'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferralResolvers<ContextType = any, ParentType extends ResolversParentTypes['Referral'] = ResolversParentTypes['Referral']> = {
  campaignName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  claims?: Resolver<Maybe<Array<ResolversTypes['Claim']>>, ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostCosmic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isRewardDisabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nConversions?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  promoterId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  referrerId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  seedLootbox?: Resolver<Maybe<ResolversTypes['Lootbox']>, ParentType, ContextType>;
  seedLootboxID?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  seedPartyBasket?: Resolver<Maybe<ResolversTypes['PartyBasket']>, ParentType, ContextType>;
  seedPartyBasketId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  slug?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['ReferralTimestamps'], ParentType, ContextType>;
  tournament?: Resolver<Maybe<ResolversTypes['Tournament']>, ParentType, ContextType>;
  tournamentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ReferralType']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferralResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralResponse'] = ResolversParentTypes['ReferralResponse']> = {
  __resolveType: TypeResolveFn<'ReferralResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReferralResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralResponseSuccess'] = ResolversParentTypes['ReferralResponseSuccess']> = {
  referral?: Resolver<ResolversTypes['Referral'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferralTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferralTimestamps'] = ResolversParentTypes['ReferralTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferrerClaimsForLootboxResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferrerClaimsForLootboxResponse'] = ResolversParentTypes['ReferrerClaimsForLootboxResponse']> = {
  __resolveType: TypeResolveFn<'ReferrerClaimsForLootboxResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReferrerClaimsForLootboxResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferrerClaimsForLootboxResponseSuccess'] = ResolversParentTypes['ReferrerClaimsForLootboxResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['ReferrerClaimsForLootboxRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferrerClaimsForLootboxRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferrerClaimsForLootboxRow'] = ResolversParentTypes['ReferrerClaimsForLootboxRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferrerClaimsForTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferrerClaimsForTournamentResponse'] = ResolversParentTypes['ReferrerClaimsForTournamentResponse']> = {
  __resolveType: TypeResolveFn<'ReferrerClaimsForTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReferrerClaimsForTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferrerClaimsForTournamentResponseSuccess'] = ResolversParentTypes['ReferrerClaimsForTournamentResponseSuccess']> = {
  data?: Resolver<Array<ResolversTypes['ReferrerClaimsForTournamentRow']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReferrerClaimsForTournamentRowResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReferrerClaimsForTournamentRow'] = ResolversParentTypes['ReferrerClaimsForTournamentRow']> = {
  claimCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  userAvatar?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userID?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveOfferAdSetFromTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveOfferAdSetFromTournamentResponse'] = ResolversParentTypes['RemoveOfferAdSetFromTournamentResponse']> = {
  __resolveType: TypeResolveFn<'RemoveOfferAdSetFromTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type RemoveOfferAdSetFromTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveOfferAdSetFromTournamentResponseSuccess'] = ResolversParentTypes['RemoveOfferAdSetFromTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemovePromoterFromTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemovePromoterFromTournamentResponse'] = ResolversParentTypes['RemovePromoterFromTournamentResponse']> = {
  __resolveType: TypeResolveFn<'RemovePromoterFromTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type RemovePromoterFromTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemovePromoterFromTournamentResponseSuccess'] = ResolversParentTypes['RemovePromoterFromTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RemoveWalletResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveWalletResponse'] = ResolversParentTypes['RemoveWalletResponse']> = {
  __resolveType: TypeResolveFn<'RemoveWalletResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type RemoveWalletResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['RemoveWalletResponseSuccess'] = ResolversParentTypes['RemoveWalletResponseSuccess']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportAdvertiserAffiliatePerfResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportAdvertiserAffiliatePerfResponse'] = ResolversParentTypes['ReportAdvertiserAffiliatePerfResponse']> = {
  __resolveType: TypeResolveFn<'ReportAdvertiserAffiliatePerfResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportAdvertiserAffiliatePerfResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportAdvertiserAffiliatePerfResponseSuccess'] = ResolversParentTypes['ReportAdvertiserAffiliatePerfResponseSuccess']> = {
  events?: Resolver<Array<ResolversTypes['AnalyticsAdEvent']>, ParentType, ContextType>;
  memos?: Resolver<Array<ResolversTypes['AnalyticsMemo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportAdvertiserOfferPerformanceResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportAdvertiserOfferPerformanceResponse'] = ResolversParentTypes['ReportAdvertiserOfferPerformanceResponse']> = {
  __resolveType: TypeResolveFn<'ReportAdvertiserOfferPerformanceResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportAdvertiserOfferPerformanceResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportAdvertiserOfferPerformanceResponseSuccess'] = ResolversParentTypes['ReportAdvertiserOfferPerformanceResponseSuccess']> = {
  events?: Resolver<Array<ResolversTypes['AnalyticsAdEvent']>, ParentType, ContextType>;
  memos?: Resolver<Array<ResolversTypes['AnalyticsMemo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportAdvertiserTournamentPerfResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportAdvertiserTournamentPerfResponse'] = ResolversParentTypes['ReportAdvertiserTournamentPerfResponse']> = {
  __resolveType: TypeResolveFn<'ReportAdvertiserTournamentPerfResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportAdvertiserTournamentPerfResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportAdvertiserTournamentPerfResponseSuccess'] = ResolversParentTypes['ReportAdvertiserTournamentPerfResponseSuccess']> = {
  events?: Resolver<Array<ResolversTypes['AnalyticsAdEvent']>, ParentType, ContextType>;
  memos?: Resolver<Array<ResolversTypes['AnalyticsMemo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportOrganizerOfferPerfResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportOrganizerOfferPerfResponse'] = ResolversParentTypes['ReportOrganizerOfferPerfResponse']> = {
  __resolveType: TypeResolveFn<'ReportOrganizerOfferPerfResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportOrganizerOfferPerfResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportOrganizerOfferPerfResponseSuccess'] = ResolversParentTypes['ReportOrganizerOfferPerfResponseSuccess']> = {
  events?: Resolver<Array<ResolversTypes['AnalyticsAdEvent']>, ParentType, ContextType>;
  memos?: Resolver<Array<ResolversTypes['AnalyticsMemo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportOrganizerTournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportOrganizerTournamentResponse'] = ResolversParentTypes['ReportOrganizerTournamentResponse']> = {
  __resolveType: TypeResolveFn<'ReportOrganizerTournamentResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportOrganizerTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportOrganizerTournamentResponseSuccess'] = ResolversParentTypes['ReportOrganizerTournamentResponseSuccess']> = {
  events?: Resolver<Array<ResolversTypes['AnalyticsAdEvent']>, ParentType, ContextType>;
  memos?: Resolver<Array<ResolversTypes['AnalyticsMemo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportPromoterTournamentPerfResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportPromoterTournamentPerfResponse'] = ResolversParentTypes['ReportPromoterTournamentPerfResponse']> = {
  __resolveType: TypeResolveFn<'ReportPromoterTournamentPerfResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportPromoterTournamentPerfResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportPromoterTournamentPerfResponseSuccess'] = ResolversParentTypes['ReportPromoterTournamentPerfResponseSuccess']> = {
  events?: Resolver<Array<ResolversTypes['AnalyticsAdEvent']>, ParentType, ContextType>;
  memos?: Resolver<Array<ResolversTypes['AnalyticsMemo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReportTotalEarningsForAffiliateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportTotalEarningsForAffiliateResponse'] = ResolversParentTypes['ReportTotalEarningsForAffiliateResponse']> = {
  __resolveType: TypeResolveFn<'ReportTotalEarningsForAffiliateResponseSuccess' | 'ResponseError', ParentType, ContextType>;
};

export type ReportTotalEarningsForAffiliateResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReportTotalEarningsForAffiliateResponseSuccess'] = ResolversParentTypes['ReportTotalEarningsForAffiliateResponseSuccess']> = {
  sum?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResponseErrorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseError'] = ResolversParentTypes['ResponseError']> = {
  error?: Resolver<ResolversTypes['Status'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface RoutingNumberScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['RoutingNumber'], any> {
  name: 'RoutingNumber';
}

export interface SafeIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SafeInt'], any> {
  name: 'SafeInt';
}

export interface SemVerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SemVer'], any> {
  name: 'SemVer';
}

export type StatusResolvers<ContextType = any, ParentType extends ResolversParentTypes['Status'] = ResolversParentTypes['Status']> = {
  code?: Resolver<ResolversTypes['StatusCode'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StreamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Stream'] = ResolversParentTypes['Stream']> = {
  creatorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['StreamTimestamps'], ParentType, ContextType>;
  tournamentId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['StreamType'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StreamTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['StreamTimestamps'] = ResolversParentTypes['StreamTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SyncProviderUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SyncProviderUserResponse'] = ResolversParentTypes['SyncProviderUserResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'SyncProviderUserResponseSuccess', ParentType, ContextType>;
};

export type SyncProviderUserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['SyncProviderUserResponseSuccess'] = ResolversParentTypes['SyncProviderUserResponseSuccess']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export interface TimeZoneScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TimeZone'], any> {
  name: 'TimeZone';
}

export interface TimestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Timestamp'], any> {
  name: 'Timestamp';
}

export type TournamentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tournament'] = ResolversParentTypes['Tournament']> = {
  communityURL?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  coverPhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creatorId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  dealConfigs?: Resolver<Array<ResolversTypes['DealConfigTournament']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isPostCosmic?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lootboxSnapshots?: Resolver<Maybe<Array<ResolversTypes['LootboxTournamentSnapshot']>>, ParentType, ContextType, Partial<TournamentLootboxSnapshotsArgs>>;
  magicLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organizer?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  organizerProfile?: Resolver<Maybe<ResolversTypes['OrganizerProfile']>, ParentType, ContextType>;
  paginateLootboxSnapshots?: Resolver<Maybe<ResolversTypes['PaginateLootboxTournamentSnapshots']>, ParentType, ContextType, RequireFields<TournamentPaginateLootboxSnapshotsArgs, 'first'>>;
  prize?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  promoters?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>;
  runningCompletedClaims?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  streams?: Resolver<Maybe<Array<ResolversTypes['Stream']>>, ParentType, ContextType>;
  timestamps?: Resolver<ResolversTypes['TournamentTimestamps'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tournamentDate?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  tournamentLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TournamentPreviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentPreview'] = ResolversParentTypes['TournamentPreview']> = {
  coverPhoto?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TournamentResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentResponse'] = ResolversParentTypes['TournamentResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'TournamentResponseSuccess', ParentType, ContextType>;
};

export type TournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentResponseSuccess'] = ResolversParentTypes['TournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TournamentTimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TournamentTimestamps'] = ResolversParentTypes['TournamentTimestamps']> = {
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TruncatedEmailByPhoneResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TruncatedEmailByPhoneResponse'] = ResolversParentTypes['TruncatedEmailByPhoneResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'TruncatedEmailByPhoneResponseSuccess', ParentType, ContextType>;
};

export type TruncatedEmailByPhoneResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['TruncatedEmailByPhoneResponseSuccess'] = ResolversParentTypes['TruncatedEmailByPhoneResponseSuccess']> = {
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export interface UsCurrencyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['USCurrency'], any> {
  name: 'USCurrency';
}

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export interface UnsignedFloatScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedFloat'], any> {
  name: 'UnsignedFloat';
}

export interface UnsignedIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UnsignedInt'], any> {
  name: 'UnsignedInt';
}

export type UpdateAdvertiserDetailsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAdvertiserDetailsResponse'] = ResolversParentTypes['UpdateAdvertiserDetailsResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpdateAdvertiserDetailsResponseSuccess', ParentType, ContextType>;
};

export type UpdateAdvertiserDetailsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAdvertiserDetailsResponseSuccess'] = ResolversParentTypes['UpdateAdvertiserDetailsResponseSuccess']> = {
  advertiser?: Resolver<ResolversTypes['Advertiser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateAffiliateDetailsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAffiliateDetailsResponse'] = ResolversParentTypes['UpdateAffiliateDetailsResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpdateAffiliateDetailsResponseSuccess', ParentType, ContextType>;
};

export type UpdateAffiliateDetailsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateAffiliateDetailsResponseSuccess'] = ResolversParentTypes['UpdateAffiliateDetailsResponseSuccess']> = {
  affiliate?: Resolver<ResolversTypes['Affiliate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateClaimRedemptionStatusResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateClaimRedemptionStatusResponse'] = ResolversParentTypes['UpdateClaimRedemptionStatusResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpdateClaimRedemptionStatusResponseSuccess', ParentType, ContextType>;
};

export type UpdateClaimRedemptionStatusResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateClaimRedemptionStatusResponseSuccess'] = ResolversParentTypes['UpdateClaimRedemptionStatusResponseSuccess']> = {
  claimID?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateConquestResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateConquestResponse'] = ResolversParentTypes['UpdateConquestResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpdateConquestResponseSuccess', ParentType, ContextType>;
};

export type UpdateConquestResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateConquestResponseSuccess'] = ResolversParentTypes['UpdateConquestResponseSuccess']> = {
  conquest?: Resolver<Maybe<ResolversTypes['Conquest']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdatePromoterRateQuoteInTournamentResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdatePromoterRateQuoteInTournamentResponseSuccess'] = ResolversParentTypes['UpdatePromoterRateQuoteInTournamentResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateUserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserResponse'] = ResolversParentTypes['UpdateUserResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpdateUserResponseSuccess', ParentType, ContextType>;
};

export type UpdateUserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateUserResponseSuccess'] = ResolversParentTypes['UpdateUserResponseSuccess']> = {
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpgradeToAdvertiserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpgradeToAdvertiserResponse'] = ResolversParentTypes['UpgradeToAdvertiserResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpgradeToAdvertiserResponseSuccess', ParentType, ContextType>;
};

export type UpgradeToAdvertiserResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpgradeToAdvertiserResponseSuccess'] = ResolversParentTypes['UpgradeToAdvertiserResponseSuccess']> = {
  advertiser?: Resolver<ResolversTypes['Advertiser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpgradeToAffiliateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpgradeToAffiliateResponse'] = ResolversParentTypes['UpgradeToAffiliateResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UpgradeToAffiliateResponseSuccess', ParentType, ContextType>;
};

export type UpgradeToAffiliateResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpgradeToAffiliateResponseSuccess'] = ResolversParentTypes['UpgradeToAffiliateResponseSuccess']> = {
  affiliate?: Resolver<ResolversTypes['Affiliate'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['Timestamp']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  headshot?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxes?: Resolver<Maybe<Array<ResolversTypes['Lootbox']>>, ParentType, ContextType>;
  partyBaskets?: Resolver<Maybe<Array<ResolversTypes['PartyBasket']>>, ParentType, ContextType>;
  phoneNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  socials?: Resolver<Maybe<ResolversTypes['UserSocials']>, ParentType, ContextType>;
  tournaments?: Resolver<Maybe<Array<ResolversTypes['Tournament']>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wallets?: Resolver<Maybe<Array<ResolversTypes['Wallet']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserClaimsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserClaimsResponse'] = ResolversParentTypes['UserClaimsResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'UserClaimsResponseSuccess', ParentType, ContextType>;
};

export type UserClaimsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserClaimsResponseSuccess'] = ResolversParentTypes['UserClaimsResponseSuccess']> = {
  edges?: Resolver<Array<ResolversTypes['ClaimEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['ClaimPageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSocialsResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSocials'] = ResolversParentTypes['UserSocials']> = {
  discord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  facebook?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  instagram?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  snapchat?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tiktok?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitch?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  web?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UtcOffsetScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UtcOffset'], any> {
  name: 'UtcOffset';
}

export type ViewAdResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewAdResponse'] = ResolversParentTypes['ViewAdResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'ViewAdResponseSuccess', ParentType, ContextType>;
};

export type ViewAdResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewAdResponseSuccess'] = ResolversParentTypes['ViewAdResponseSuccess']> = {
  ad?: Resolver<ResolversTypes['Ad'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewAdSetResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewAdSetResponse'] = ResolversParentTypes['ViewAdSetResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'ViewAdSetResponseSuccess', ParentType, ContextType>;
};

export type ViewAdSetResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewAdSetResponseSuccess'] = ResolversParentTypes['ViewAdSetResponseSuccess']> = {
  adSet?: Resolver<ResolversTypes['AdSet'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewCreatedOfferResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewCreatedOfferResponse'] = ResolversParentTypes['ViewCreatedOfferResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'ViewCreatedOfferResponseSuccess', ParentType, ContextType>;
};

export type ViewCreatedOfferResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewCreatedOfferResponseSuccess'] = ResolversParentTypes['ViewCreatedOfferResponseSuccess']> = {
  offer?: Resolver<ResolversTypes['Offer'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewMyTournamentsAsOrganizerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewMyTournamentsAsOrganizerResponse'] = ResolversParentTypes['ViewMyTournamentsAsOrganizerResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'ViewMyTournamentsAsOrganizerResponseSuccess', ParentType, ContextType>;
};

export type ViewMyTournamentsAsOrganizerResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewMyTournamentsAsOrganizerResponseSuccess'] = ResolversParentTypes['ViewMyTournamentsAsOrganizerResponseSuccess']> = {
  tournaments?: Resolver<Array<ResolversTypes['Tournament']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewOfferDetailsAsEventAffiliateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewOfferDetailsAsEventAffiliateResponse'] = ResolversParentTypes['ViewOfferDetailsAsEventAffiliateResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'ViewOfferDetailsAsEventAffiliateResponseSuccess', ParentType, ContextType>;
};

export type ViewOfferDetailsAsEventAffiliateResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewOfferDetailsAsEventAffiliateResponseSuccess'] = ResolversParentTypes['ViewOfferDetailsAsEventAffiliateResponseSuccess']> = {
  offer?: Resolver<ResolversTypes['OfferAffiliateView'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ViewTournamentAsOrganizerResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewTournamentAsOrganizerResponse'] = ResolversParentTypes['ViewTournamentAsOrganizerResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'ViewTournamentAsOrganizerResponseSuccess', ParentType, ContextType>;
};

export type ViewTournamentAsOrganizerResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['ViewTournamentAsOrganizerResponseSuccess'] = ResolversParentTypes['ViewTournamentAsOrganizerResponseSuccess']> = {
  tournament?: Resolver<ResolversTypes['Tournament'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type WalletResolvers<ContextType = any, ParentType extends ResolversParentTypes['Wallet'] = ResolversParentTypes['Wallet']> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Timestamp'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lootboxSnapshots?: Resolver<Maybe<Array<ResolversTypes['LootboxSnapshot']>>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WhitelistAffiliateToOfferResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WhitelistAffiliateToOfferResponse'] = ResolversParentTypes['WhitelistAffiliateToOfferResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'WhitelistAffiliateToOfferResponseSuccess', ParentType, ContextType>;
};

export type WhitelistAffiliateToOfferResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['WhitelistAffiliateToOfferResponseSuccess'] = ResolversParentTypes['WhitelistAffiliateToOfferResponseSuccess']> = {
  whitelist?: Resolver<ResolversTypes['OrganizerOfferWhitelist'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WhitelistAllUnassignedClaimsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WhitelistAllUnassignedClaimsResponse'] = ResolversParentTypes['WhitelistAllUnassignedClaimsResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'WhitelistAllUnassignedClaimsResponseSuccess', ParentType, ContextType>;
};

export type WhitelistAllUnassignedClaimsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['WhitelistAllUnassignedClaimsResponseSuccess'] = ResolversParentTypes['WhitelistAllUnassignedClaimsResponseSuccess']> = {
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  signatures?: Resolver<Array<Maybe<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WhitelistMyLootboxClaimsResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['WhitelistMyLootboxClaimsResponse'] = ResolversParentTypes['WhitelistMyLootboxClaimsResponse']> = {
  __resolveType: TypeResolveFn<'ResponseError' | 'WhitelistMyLootboxClaimsResponseSuccess', ParentType, ContextType>;
};

export type WhitelistMyLootboxClaimsResponseSuccessResolvers<ContextType = any, ParentType extends ResolversParentTypes['WhitelistMyLootboxClaimsResponseSuccess'] = ResolversParentTypes['WhitelistMyLootboxClaimsResponseSuccess']> = {
  signatures?: Resolver<Array<ResolversTypes['MintWhitelistSignature']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AccountNumber?: GraphQLScalarType;
  Activation?: ActivationResolvers<ContextType>;
  Ad?: AdResolvers<ContextType>;
  AdEvent?: AdEventResolvers<ContextType>;
  AdEventAffiliateAttribution?: AdEventAffiliateAttributionResolvers<ContextType>;
  AdPreviewInDealConfig?: AdPreviewInDealConfigResolvers<ContextType>;
  AdServed?: AdServedResolvers<ContextType>;
  AdSet?: AdSetResolvers<ContextType>;
  AdSetPreview?: AdSetPreviewResolvers<ContextType>;
  AdSetPreviewInDealConfig?: AdSetPreviewInDealConfigResolvers<ContextType>;
  AdTargetTag?: AdTargetTagResolvers<ContextType>;
  AdTimestamps?: AdTimestampsResolvers<ContextType>;
  AddOfferAdSetToTournamentResponse?: AddOfferAdSetToTournamentResponseResolvers<ContextType>;
  AddOfferAdSetToTournamentResponseSuccess?: AddOfferAdSetToTournamentResponseSuccessResolvers<ContextType>;
  AddStreamResponse?: AddStreamResponseResolvers<ContextType>;
  AddStreamResponseSuccess?: AddStreamResponseSuccessResolvers<ContextType>;
  AddUpdatePromoterRateQuoteInTournamentResponse?: AddUpdatePromoterRateQuoteInTournamentResponseResolvers<ContextType>;
  Advertiser?: AdvertiserResolvers<ContextType>;
  AdvertiserAdminViewResponse?: AdvertiserAdminViewResponseResolvers<ContextType>;
  AdvertiserAdminViewResponseSuccess?: AdvertiserAdminViewResponseSuccessResolvers<ContextType>;
  AdvertiserPublicViewResponse?: AdvertiserPublicViewResponseResolvers<ContextType>;
  AdvertiserPublicViewResponseSuccess?: AdvertiserPublicViewResponseSuccessResolvers<ContextType>;
  Affiliate?: AffiliateResolvers<ContextType>;
  AffiliateAdminViewResponse?: AffiliateAdminViewResponseResolvers<ContextType>;
  AffiliateAdminViewResponseSuccess?: AffiliateAdminViewResponseSuccessResolvers<ContextType>;
  AffiliatePublicViewResponse?: AffiliatePublicViewResponseResolvers<ContextType>;
  AffiliatePublicViewResponseSuccess?: AffiliatePublicViewResponseSuccessResolvers<ContextType>;
  AnalyticsAdEvent?: AnalyticsAdEventResolvers<ContextType>;
  AnalyticsMemo?: AnalyticsMemoResolvers<ContextType>;
  AnswerAirdropQuestionResponse?: AnswerAirdropQuestionResponseResolvers<ContextType>;
  AnswerAirdropQuestionResponseSuccess?: AnswerAirdropQuestionResponseSuccessResolvers<ContextType>;
  AuthenticateWalletResponse?: AuthenticateWalletResponseResolvers<ContextType>;
  AuthenticateWalletResponseSuccess?: AuthenticateWalletResponseSuccessResolvers<ContextType>;
  BaseClaimStatsForLootbox?: BaseClaimStatsForLootboxResolvers<ContextType>;
  BaseClaimStatsForLootboxResponse?: BaseClaimStatsForLootboxResponseResolvers<ContextType>;
  BaseClaimStatsForLootboxResponseSuccess?: BaseClaimStatsForLootboxResponseSuccessResolvers<ContextType>;
  BaseClaimStatsForTournament?: BaseClaimStatsForTournamentResolvers<ContextType>;
  BaseClaimStatsForTournamentResponse?: BaseClaimStatsForTournamentResponseResolvers<ContextType>;
  BaseClaimStatsForTournamentResponseSuccess?: BaseClaimStatsForTournamentResponseSuccessResolvers<ContextType>;
  BattleFeedEdge?: BattleFeedEdgeResolvers<ContextType>;
  BattleFeedResponse?: BattleFeedResponseResolvers<ContextType>;
  BattleFeedResponseSuccess?: BattleFeedResponseSuccessResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  BrowseActiveOffersResponse?: BrowseActiveOffersResponseResolvers<ContextType>;
  BrowseActiveOffersResponseSuccess?: BrowseActiveOffersResponseSuccessResolvers<ContextType>;
  BrowseAllAffiliatesResponse?: BrowseAllAffiliatesResponseResolvers<ContextType>;
  BrowseAllAffiliatesResponseSuccess?: BrowseAllAffiliatesResponseSuccessResolvers<ContextType>;
  BulkCreateReferralResponse?: BulkCreateReferralResponseResolvers<ContextType>;
  BulkCreateReferralResponseSuccess?: BulkCreateReferralResponseSuccessResolvers<ContextType>;
  BulkEditLootboxTournamentSnapshotsResponse?: BulkEditLootboxTournamentSnapshotsResponseResolvers<ContextType>;
  BulkEditLootboxTournamentSnapshotsResponseSuccess?: BulkEditLootboxTournamentSnapshotsResponseSuccessResolvers<ContextType>;
  BulkReferralCSVRow?: BulkReferralCsvRowResolvers<ContextType>;
  BulkWhitelistResponse?: BulkWhitelistResponseResolvers<ContextType>;
  BulkWhitelistResponseSuccess?: BulkWhitelistResponseSuccessResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  CampaignClaimsForLootboxResponse?: CampaignClaimsForLootboxResponseResolvers<ContextType>;
  CampaignClaimsForLootboxResponseSuccess?: CampaignClaimsForLootboxResponseSuccessResolvers<ContextType>;
  CampaignClaimsForLootboxRow?: CampaignClaimsForLootboxRowResolvers<ContextType>;
  CampaignClaimsForTournamentResponse?: CampaignClaimsForTournamentResponseResolvers<ContextType>;
  CampaignClaimsForTournamentResponseSuccess?: CampaignClaimsForTournamentResponseSuccessResolvers<ContextType>;
  CampaignClaimsForTournamentRow?: CampaignClaimsForTournamentRowResolvers<ContextType>;
  CheckIfUserAnsweredAirdropQuestionsResponse?: CheckIfUserAnsweredAirdropQuestionsResponseResolvers<ContextType>;
  CheckIfUserAnsweredAirdropQuestionsResponseSuccess?: CheckIfUserAnsweredAirdropQuestionsResponseSuccessResolvers<ContextType>;
  CheckPhoneEnabledResponse?: CheckPhoneEnabledResponseResolvers<ContextType>;
  CheckPhoneEnabledResponseSuccess?: CheckPhoneEnabledResponseSuccessResolvers<ContextType>;
  Claim?: ClaimResolvers<ContextType>;
  ClaimByIDResponse?: ClaimByIdResponseResolvers<ContextType>;
  ClaimByIDResponseSuccess?: ClaimByIdResponseSuccessResolvers<ContextType>;
  ClaimEdge?: ClaimEdgeResolvers<ContextType>;
  ClaimPageInfo?: ClaimPageInfoResolvers<ContextType>;
  ClaimTimestamps?: ClaimTimestampsResolvers<ContextType>;
  ClaimerStatsForLootboxTournamentResponse?: ClaimerStatsForLootboxTournamentResponseResolvers<ContextType>;
  ClaimerStatsForLootboxTournamentResponseSuccess?: ClaimerStatsForLootboxTournamentResponseSuccessResolvers<ContextType>;
  ClaimerStatsForLootboxTournamentRow?: ClaimerStatsForLootboxTournamentRowResolvers<ContextType>;
  ClaimerStatsForTournamentResponse?: ClaimerStatsForTournamentResponseResolvers<ContextType>;
  ClaimerStatsForTournamentResponseSuccess?: ClaimerStatsForTournamentResponseSuccessResolvers<ContextType>;
  ClaimerStatsForTournamentRow?: ClaimerStatsForTournamentRowResolvers<ContextType>;
  CompleteClaimResponse?: CompleteClaimResponseResolvers<ContextType>;
  CompleteClaimResponseSuccess?: CompleteClaimResponseSuccessResolvers<ContextType>;
  ConnectWalletResponse?: ConnectWalletResponseResolvers<ContextType>;
  ConnectWalletResponseSuccess?: ConnectWalletResponseSuccessResolvers<ContextType>;
  Conquest?: ConquestResolvers<ContextType>;
  ConquestPreview?: ConquestPreviewResolvers<ContextType>;
  CountryCode?: GraphQLScalarType;
  CreateActivationResponse?: CreateActivationResponseResolvers<ContextType>;
  CreateActivationResponseSuccess?: CreateActivationResponseSuccessResolvers<ContextType>;
  CreateAdResponse?: CreateAdResponseResolvers<ContextType>;
  CreateAdResponseSuccess?: CreateAdResponseSuccessResolvers<ContextType>;
  CreateAdSetResponse?: CreateAdSetResponseResolvers<ContextType>;
  CreateAdSetResponseSuccess?: CreateAdSetResponseSuccessResolvers<ContextType>;
  CreateClaimResponse?: CreateClaimResponseResolvers<ContextType>;
  CreateClaimResponseSuccess?: CreateClaimResponseSuccessResolvers<ContextType>;
  CreateConquestResponse?: CreateConquestResponseResolvers<ContextType>;
  CreateConquestResponseSuccess?: CreateConquestResponseSuccessResolvers<ContextType>;
  CreateLootboxResponse?: CreateLootboxResponseResolvers<ContextType>;
  CreateLootboxResponseSuccess?: CreateLootboxResponseSuccessResolvers<ContextType>;
  CreateOfferResponse?: CreateOfferResponseResolvers<ContextType>;
  CreateOfferResponseSuccess?: CreateOfferResponseSuccessResolvers<ContextType>;
  CreatePartyBasketResponse?: CreatePartyBasketResponseResolvers<ContextType>;
  CreatePartyBasketResponseSuccess?: CreatePartyBasketResponseSuccessResolvers<ContextType>;
  CreateReferralResponse?: CreateReferralResponseResolvers<ContextType>;
  CreateReferralResponseSuccess?: CreateReferralResponseSuccessResolvers<ContextType>;
  CreateTournamentResponse?: CreateTournamentResponseResolvers<ContextType>;
  CreateTournamentResponseSuccess?: CreateTournamentResponseSuccessResolvers<ContextType>;
  CreateUserResponse?: CreateUserResponseResolvers<ContextType>;
  CreateUserResponseSuccess?: CreateUserResponseSuccessResolvers<ContextType>;
  Creative?: CreativeResolvers<ContextType>;
  Cuid?: GraphQLScalarType;
  Currency?: GraphQLScalarType;
  DID?: GraphQLScalarType;
  DailyClaimStatisticsForTournamentResponse?: DailyClaimStatisticsForTournamentResponseResolvers<ContextType>;
  DailyClaimStatisticsForTournamentResponseSuccess?: DailyClaimStatisticsForTournamentResponseSuccessResolvers<ContextType>;
  DailyClaimStatisticsForTournamentRow?: DailyClaimStatisticsForTournamentRowResolvers<ContextType>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DealConfigTournament?: DealConfigTournamentResolvers<ContextType>;
  DecisionAdApiBetaV2Response?: DecisionAdApiBetaV2ResponseResolvers<ContextType>;
  DecisionAdApiBetaV2ResponseSuccess?: DecisionAdApiBetaV2ResponseSuccessResolvers<ContextType>;
  DeleteStreamResponse?: DeleteStreamResponseResolvers<ContextType>;
  DeleteStreamResponseSuccess?: DeleteStreamResponseSuccessResolvers<ContextType>;
  DeleteTournamentResponse?: DeleteTournamentResponseResolvers<ContextType>;
  DeleteTournamentResponseSuccess?: DeleteTournamentResponseSuccessResolvers<ContextType>;
  Duration?: GraphQLScalarType;
  EditActivationResponse?: EditActivationResponseResolvers<ContextType>;
  EditActivationResponseSuccess?: EditActivationResponseSuccessResolvers<ContextType>;
  EditAdResponse?: EditAdResponseResolvers<ContextType>;
  EditAdResponseSuccess?: EditAdResponseSuccessResolvers<ContextType>;
  EditAdSetResponse?: EditAdSetResponseResolvers<ContextType>;
  EditAdSetResponseSuccess?: EditAdSetResponseSuccessResolvers<ContextType>;
  EditLootboxResponse?: EditLootboxResponseResolvers<ContextType>;
  EditLootboxResponseSuccess?: EditLootboxResponseSuccessResolvers<ContextType>;
  EditOfferResponse?: EditOfferResponseResolvers<ContextType>;
  EditOfferResponseSuccess?: EditOfferResponseSuccessResolvers<ContextType>;
  EditPartyBasketResponse?: EditPartyBasketResponseResolvers<ContextType>;
  EditPartyBasketResponseSuccess?: EditPartyBasketResponseSuccessResolvers<ContextType>;
  EditStreamResponse?: EditStreamResponseResolvers<ContextType>;
  EditStreamResponseSuccess?: EditStreamResponseSuccessResolvers<ContextType>;
  EditTournamentResponse?: EditTournamentResponseResolvers<ContextType>;
  EditTournamentResponseSuccess?: EditTournamentResponseSuccessResolvers<ContextType>;
  EditWhitelistAffiliateToOfferResponse?: EditWhitelistAffiliateToOfferResponseResolvers<ContextType>;
  EditWhitelistAffiliateToOfferResponseSuccess?: EditWhitelistAffiliateToOfferResponseSuccessResolvers<ContextType>;
  EmailAddress?: GraphQLScalarType;
  EventMetadata?: EventMetadataResolvers<ContextType>;
  FanListRowForTournament?: FanListRowForTournamentResolvers<ContextType>;
  FansListFavoriteLootbox?: FansListFavoriteLootboxResolvers<ContextType>;
  FansListForTournamentResponse?: FansListForTournamentResponseResolvers<ContextType>;
  FansListForTournamentResponseSuccess?: FansListForTournamentResponseSuccessResolvers<ContextType>;
  GUID?: GraphQLScalarType;
  GenerateClaimsCsvResponse?: GenerateClaimsCsvResponseResolvers<ContextType>;
  GenerateClaimsCsvResponseSuccess?: GenerateClaimsCsvResponseSuccessResolvers<ContextType>;
  GetAnonTokenResponse?: GetAnonTokenResponseResolvers<ContextType>;
  GetAnonTokenResponseSuccess?: GetAnonTokenResponseSuccessResolvers<ContextType>;
  GetConquestResponse?: GetConquestResponseResolvers<ContextType>;
  GetConquestResponseSuccess?: GetConquestResponseSuccessResolvers<ContextType>;
  GetLootboxByAddressResponse?: GetLootboxByAddressResponseResolvers<ContextType>;
  GetLootboxByIDResponse?: GetLootboxByIdResponseResolvers<ContextType>;
  GetMyProfileResponse?: GetMyProfileResponseResolvers<ContextType>;
  GetMyProfileSuccess?: GetMyProfileSuccessResolvers<ContextType>;
  GetPartyBasketResponse?: GetPartyBasketResponseResolvers<ContextType>;
  GetPartyBasketResponseSuccess?: GetPartyBasketResponseSuccessResolvers<ContextType>;
  GetWhitelistSignaturesResponse?: GetWhitelistSignaturesResponseResolvers<ContextType>;
  GetWhitelistSignaturesResponseSuccess?: GetWhitelistSignaturesResponseSuccessResolvers<ContextType>;
  HSL?: GraphQLScalarType;
  HSLA?: GraphQLScalarType;
  HexColorCode?: GraphQLScalarType;
  Hexadecimal?: GraphQLScalarType;
  IBAN?: GraphQLScalarType;
  IP?: GraphQLScalarType;
  IPv4?: GraphQLScalarType;
  IPv6?: GraphQLScalarType;
  ISBN?: GraphQLScalarType;
  ISO8601Duration?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  JSONObject?: GraphQLScalarType;
  JWT?: GraphQLScalarType;
  Latitude?: GraphQLScalarType;
  ListAdSetsOfAdvertiserResponse?: ListAdSetsOfAdvertiserResponseResolvers<ContextType>;
  ListAdSetsOfAdvertiserResponseSuccess?: ListAdSetsOfAdvertiserResponseSuccessResolvers<ContextType>;
  ListAdsOfAdvertiserResponse?: ListAdsOfAdvertiserResponseResolvers<ContextType>;
  ListAdsOfAdvertiserResponseSuccess?: ListAdsOfAdvertiserResponseSuccessResolvers<ContextType>;
  ListAvailableLootboxesForClaimResponse?: ListAvailableLootboxesForClaimResponseResolvers<ContextType>;
  ListAvailableLootboxesForClaimResponseSuccess?: ListAvailableLootboxesForClaimResponseSuccessResolvers<ContextType>;
  ListConquestPreviewsResponse?: ListConquestPreviewsResponseResolvers<ContextType>;
  ListConquestPreviewsResponseSuccess?: ListConquestPreviewsResponseSuccessResolvers<ContextType>;
  ListCreatedOffersResponse?: ListCreatedOffersResponseResolvers<ContextType>;
  ListCreatedOffersResponseSuccess?: ListCreatedOffersResponseSuccessResolvers<ContextType>;
  ListEventsOfAdvertiserResponse?: ListEventsOfAdvertiserResponseResolvers<ContextType>;
  ListEventsOfAdvertiserResponseSuccess?: ListEventsOfAdvertiserResponseSuccessResolvers<ContextType>;
  ListOffersAvailableForOrganizerResponse?: ListOffersAvailableForOrganizerResponseResolvers<ContextType>;
  ListOffersAvailableForOrganizerResponseSuccess?: ListOffersAvailableForOrganizerResponseSuccessResolvers<ContextType>;
  ListPartnersOfAdvertiserResponse?: ListPartnersOfAdvertiserResponseResolvers<ContextType>;
  ListPartnersOfAdvertiserResponseSuccess?: ListPartnersOfAdvertiserResponseSuccessResolvers<ContextType>;
  ListPotentialAirdropClaimersResponse?: ListPotentialAirdropClaimersResponseResolvers<ContextType>;
  ListPotentialAirdropClaimersResponseSuccess?: ListPotentialAirdropClaimersResponseSuccessResolvers<ContextType>;
  ListWhitelistedAffiliatesToOfferResponse?: ListWhitelistedAffiliatesToOfferResponseResolvers<ContextType>;
  ListWhitelistedAffiliatesToOfferResponseSuccess?: ListWhitelistedAffiliatesToOfferResponseSuccessResolvers<ContextType>;
  LocalDate?: GraphQLScalarType;
  LocalEndTime?: GraphQLScalarType;
  LocalTime?: GraphQLScalarType;
  Locale?: GraphQLScalarType;
  Long?: GraphQLScalarType;
  Longitude?: GraphQLScalarType;
  Lootbox?: LootboxResolvers<ContextType>;
  LootboxAirdropMetadata?: LootboxAirdropMetadataResolvers<ContextType>;
  LootboxAirdropMetadataQuestion?: LootboxAirdropMetadataQuestionResolvers<ContextType>;
  LootboxChain?: LootboxChainResolvers<ContextType>;
  LootboxCompletedClaimsForTournamentResponse?: LootboxCompletedClaimsForTournamentResponseResolvers<ContextType>;
  LootboxCompletedClaimsForTournamentResponseSuccess?: LootboxCompletedClaimsForTournamentResponseSuccessResolvers<ContextType>;
  LootboxCompletedClaimsForTournamentRow?: LootboxCompletedClaimsForTournamentRowResolvers<ContextType>;
  LootboxCustomSchema?: LootboxCustomSchemaResolvers<ContextType>;
  LootboxCustomSchemaData?: LootboxCustomSchemaDataResolvers<ContextType>;
  LootboxFeedEdge?: LootboxFeedEdgeResolvers<ContextType>;
  LootboxFeedResponse?: LootboxFeedResponseResolvers<ContextType>;
  LootboxFeedResponseSuccess?: LootboxFeedResponseSuccessResolvers<ContextType>;
  LootboxMetadata?: LootboxMetadataResolvers<ContextType>;
  LootboxResponseSuccess?: LootboxResponseSuccessResolvers<ContextType>;
  LootboxSnapshot?: LootboxSnapshotResolvers<ContextType>;
  LootboxSnapshotTimestamps?: LootboxSnapshotTimestampsResolvers<ContextType>;
  LootboxSocials?: LootboxSocialsResolvers<ContextType>;
  LootboxSocialsWithoutEmail?: LootboxSocialsWithoutEmailResolvers<ContextType>;
  LootboxTicket?: LootboxTicketResolvers<ContextType>;
  LootboxTimestamps?: LootboxTimestampsResolvers<ContextType>;
  LootboxTournamentSnapshot?: LootboxTournamentSnapshotResolvers<ContextType>;
  LootboxTournamentSnapshotCursor?: LootboxTournamentSnapshotCursorResolvers<ContextType>;
  LootboxUserClaimPageInfo?: LootboxUserClaimPageInfoResolvers<ContextType>;
  LootboxUserClaimPageInfoResponse?: LootboxUserClaimPageInfoResponseResolvers<ContextType>;
  MAC?: GraphQLScalarType;
  MarketplacePreviewAffiliate?: MarketplacePreviewAffiliateResolvers<ContextType>;
  MarketplacePreviewOffer?: MarketplacePreviewOfferResolvers<ContextType>;
  Memo?: MemoResolvers<ContextType>;
  MintWhitelistSignature?: MintWhitelistSignatureResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MyLootboxByNonceResponse?: MyLootboxByNonceResponseResolvers<ContextType>;
  MyLootboxByNonceResponseSuccess?: MyLootboxByNonceResponseSuccessResolvers<ContextType>;
  MyTournamentResponse?: MyTournamentResponseResolvers<ContextType>;
  MyTournamentResponseSuccess?: MyTournamentResponseSuccessResolvers<ContextType>;
  NegativeFloat?: GraphQLScalarType;
  NegativeInt?: GraphQLScalarType;
  NonEmptyString?: GraphQLScalarType;
  NonNegativeFloat?: GraphQLScalarType;
  NonNegativeInt?: GraphQLScalarType;
  NonPositiveFloat?: GraphQLScalarType;
  NonPositiveInt?: GraphQLScalarType;
  ObjectID?: GraphQLScalarType;
  Offer?: OfferResolvers<ContextType>;
  OfferAffiliateView?: OfferAffiliateViewResolvers<ContextType>;
  OfferAirdropMetadata?: OfferAirdropMetadataResolvers<ContextType>;
  OfferAirdropPromoterView?: OfferAirdropPromoterViewResolvers<ContextType>;
  OfferPreview?: OfferPreviewResolvers<ContextType>;
  OrganizerOfferPreview?: OrganizerOfferPreviewResolvers<ContextType>;
  OrganizerOfferWhitelist?: OrganizerOfferWhitelistResolvers<ContextType>;
  OrganizerOfferWhitelistWithProfile?: OrganizerOfferWhitelistWithProfileResolvers<ContextType>;
  OrganizerProfile?: OrganizerProfileResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  PaginateLootboxTournamentSnapshotEdge?: PaginateLootboxTournamentSnapshotEdgeResolvers<ContextType>;
  PaginateLootboxTournamentSnapshots?: PaginateLootboxTournamentSnapshotsResolvers<ContextType>;
  PaginatedLootboxTournamentSnapshotPageInfo?: PaginatedLootboxTournamentSnapshotPageInfoResolvers<ContextType>;
  PartyBasket?: PartyBasketResolvers<ContextType>;
  PartyBasketTimestamps?: PartyBasketTimestampsResolvers<ContextType>;
  PartyBasketWhitelistSignature?: PartyBasketWhitelistSignatureResolvers<ContextType>;
  PhoneNumber?: GraphQLScalarType;
  Port?: GraphQLScalarType;
  PositiveFloat?: GraphQLScalarType;
  PositiveInt?: GraphQLScalarType;
  PostalCode?: GraphQLScalarType;
  PotentialAirdropClaimer?: PotentialAirdropClaimerResolvers<ContextType>;
  PublicUser?: PublicUserResolvers<ContextType>;
  PublicUserResponse?: PublicUserResponseResolvers<ContextType>;
  PublicUserResponseSuccess?: PublicUserResponseSuccessResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  QuestionAnswerPreview?: QuestionAnswerPreviewResolvers<ContextType>;
  RGB?: GraphQLScalarType;
  RGBA?: GraphQLScalarType;
  RateQuoteDealConfig?: RateQuoteDealConfigResolvers<ContextType>;
  RateQuoteEstimate?: RateQuoteEstimateResolvers<ContextType>;
  RedeemSignatureResponse?: RedeemSignatureResponseResolvers<ContextType>;
  RedeemSignatureResponseSuccess?: RedeemSignatureResponseSuccessResolvers<ContextType>;
  Referral?: ReferralResolvers<ContextType>;
  ReferralResponse?: ReferralResponseResolvers<ContextType>;
  ReferralResponseSuccess?: ReferralResponseSuccessResolvers<ContextType>;
  ReferralTimestamps?: ReferralTimestampsResolvers<ContextType>;
  ReferrerClaimsForLootboxResponse?: ReferrerClaimsForLootboxResponseResolvers<ContextType>;
  ReferrerClaimsForLootboxResponseSuccess?: ReferrerClaimsForLootboxResponseSuccessResolvers<ContextType>;
  ReferrerClaimsForLootboxRow?: ReferrerClaimsForLootboxRowResolvers<ContextType>;
  ReferrerClaimsForTournamentResponse?: ReferrerClaimsForTournamentResponseResolvers<ContextType>;
  ReferrerClaimsForTournamentResponseSuccess?: ReferrerClaimsForTournamentResponseSuccessResolvers<ContextType>;
  ReferrerClaimsForTournamentRow?: ReferrerClaimsForTournamentRowResolvers<ContextType>;
  RemoveOfferAdSetFromTournamentResponse?: RemoveOfferAdSetFromTournamentResponseResolvers<ContextType>;
  RemoveOfferAdSetFromTournamentResponseSuccess?: RemoveOfferAdSetFromTournamentResponseSuccessResolvers<ContextType>;
  RemovePromoterFromTournamentResponse?: RemovePromoterFromTournamentResponseResolvers<ContextType>;
  RemovePromoterFromTournamentResponseSuccess?: RemovePromoterFromTournamentResponseSuccessResolvers<ContextType>;
  RemoveWalletResponse?: RemoveWalletResponseResolvers<ContextType>;
  RemoveWalletResponseSuccess?: RemoveWalletResponseSuccessResolvers<ContextType>;
  ReportAdvertiserAffiliatePerfResponse?: ReportAdvertiserAffiliatePerfResponseResolvers<ContextType>;
  ReportAdvertiserAffiliatePerfResponseSuccess?: ReportAdvertiserAffiliatePerfResponseSuccessResolvers<ContextType>;
  ReportAdvertiserOfferPerformanceResponse?: ReportAdvertiserOfferPerformanceResponseResolvers<ContextType>;
  ReportAdvertiserOfferPerformanceResponseSuccess?: ReportAdvertiserOfferPerformanceResponseSuccessResolvers<ContextType>;
  ReportAdvertiserTournamentPerfResponse?: ReportAdvertiserTournamentPerfResponseResolvers<ContextType>;
  ReportAdvertiserTournamentPerfResponseSuccess?: ReportAdvertiserTournamentPerfResponseSuccessResolvers<ContextType>;
  ReportOrganizerOfferPerfResponse?: ReportOrganizerOfferPerfResponseResolvers<ContextType>;
  ReportOrganizerOfferPerfResponseSuccess?: ReportOrganizerOfferPerfResponseSuccessResolvers<ContextType>;
  ReportOrganizerTournamentResponse?: ReportOrganizerTournamentResponseResolvers<ContextType>;
  ReportOrganizerTournamentResponseSuccess?: ReportOrganizerTournamentResponseSuccessResolvers<ContextType>;
  ReportPromoterTournamentPerfResponse?: ReportPromoterTournamentPerfResponseResolvers<ContextType>;
  ReportPromoterTournamentPerfResponseSuccess?: ReportPromoterTournamentPerfResponseSuccessResolvers<ContextType>;
  ReportTotalEarningsForAffiliateResponse?: ReportTotalEarningsForAffiliateResponseResolvers<ContextType>;
  ReportTotalEarningsForAffiliateResponseSuccess?: ReportTotalEarningsForAffiliateResponseSuccessResolvers<ContextType>;
  ResponseError?: ResponseErrorResolvers<ContextType>;
  RoutingNumber?: GraphQLScalarType;
  SafeInt?: GraphQLScalarType;
  SemVer?: GraphQLScalarType;
  Status?: StatusResolvers<ContextType>;
  Stream?: StreamResolvers<ContextType>;
  StreamTimestamps?: StreamTimestampsResolvers<ContextType>;
  SyncProviderUserResponse?: SyncProviderUserResponseResolvers<ContextType>;
  SyncProviderUserResponseSuccess?: SyncProviderUserResponseSuccessResolvers<ContextType>;
  Time?: GraphQLScalarType;
  TimeZone?: GraphQLScalarType;
  Timestamp?: GraphQLScalarType;
  Tournament?: TournamentResolvers<ContextType>;
  TournamentPreview?: TournamentPreviewResolvers<ContextType>;
  TournamentResponse?: TournamentResponseResolvers<ContextType>;
  TournamentResponseSuccess?: TournamentResponseSuccessResolvers<ContextType>;
  TournamentTimestamps?: TournamentTimestampsResolvers<ContextType>;
  TruncatedEmailByPhoneResponse?: TruncatedEmailByPhoneResponseResolvers<ContextType>;
  TruncatedEmailByPhoneResponseSuccess?: TruncatedEmailByPhoneResponseSuccessResolvers<ContextType>;
  URL?: GraphQLScalarType;
  USCurrency?: GraphQLScalarType;
  UUID?: GraphQLScalarType;
  UnsignedFloat?: GraphQLScalarType;
  UnsignedInt?: GraphQLScalarType;
  UpdateAdvertiserDetailsResponse?: UpdateAdvertiserDetailsResponseResolvers<ContextType>;
  UpdateAdvertiserDetailsResponseSuccess?: UpdateAdvertiserDetailsResponseSuccessResolvers<ContextType>;
  UpdateAffiliateDetailsResponse?: UpdateAffiliateDetailsResponseResolvers<ContextType>;
  UpdateAffiliateDetailsResponseSuccess?: UpdateAffiliateDetailsResponseSuccessResolvers<ContextType>;
  UpdateClaimRedemptionStatusResponse?: UpdateClaimRedemptionStatusResponseResolvers<ContextType>;
  UpdateClaimRedemptionStatusResponseSuccess?: UpdateClaimRedemptionStatusResponseSuccessResolvers<ContextType>;
  UpdateConquestResponse?: UpdateConquestResponseResolvers<ContextType>;
  UpdateConquestResponseSuccess?: UpdateConquestResponseSuccessResolvers<ContextType>;
  UpdatePromoterRateQuoteInTournamentResponseSuccess?: UpdatePromoterRateQuoteInTournamentResponseSuccessResolvers<ContextType>;
  UpdateUserResponse?: UpdateUserResponseResolvers<ContextType>;
  UpdateUserResponseSuccess?: UpdateUserResponseSuccessResolvers<ContextType>;
  UpgradeToAdvertiserResponse?: UpgradeToAdvertiserResponseResolvers<ContextType>;
  UpgradeToAdvertiserResponseSuccess?: UpgradeToAdvertiserResponseSuccessResolvers<ContextType>;
  UpgradeToAffiliateResponse?: UpgradeToAffiliateResponseResolvers<ContextType>;
  UpgradeToAffiliateResponseSuccess?: UpgradeToAffiliateResponseSuccessResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserClaimsResponse?: UserClaimsResponseResolvers<ContextType>;
  UserClaimsResponseSuccess?: UserClaimsResponseSuccessResolvers<ContextType>;
  UserSocials?: UserSocialsResolvers<ContextType>;
  UtcOffset?: GraphQLScalarType;
  ViewAdResponse?: ViewAdResponseResolvers<ContextType>;
  ViewAdResponseSuccess?: ViewAdResponseSuccessResolvers<ContextType>;
  ViewAdSetResponse?: ViewAdSetResponseResolvers<ContextType>;
  ViewAdSetResponseSuccess?: ViewAdSetResponseSuccessResolvers<ContextType>;
  ViewCreatedOfferResponse?: ViewCreatedOfferResponseResolvers<ContextType>;
  ViewCreatedOfferResponseSuccess?: ViewCreatedOfferResponseSuccessResolvers<ContextType>;
  ViewMyTournamentsAsOrganizerResponse?: ViewMyTournamentsAsOrganizerResponseResolvers<ContextType>;
  ViewMyTournamentsAsOrganizerResponseSuccess?: ViewMyTournamentsAsOrganizerResponseSuccessResolvers<ContextType>;
  ViewOfferDetailsAsEventAffiliateResponse?: ViewOfferDetailsAsEventAffiliateResponseResolvers<ContextType>;
  ViewOfferDetailsAsEventAffiliateResponseSuccess?: ViewOfferDetailsAsEventAffiliateResponseSuccessResolvers<ContextType>;
  ViewTournamentAsOrganizerResponse?: ViewTournamentAsOrganizerResponseResolvers<ContextType>;
  ViewTournamentAsOrganizerResponseSuccess?: ViewTournamentAsOrganizerResponseSuccessResolvers<ContextType>;
  Void?: GraphQLScalarType;
  Wallet?: WalletResolvers<ContextType>;
  WhitelistAffiliateToOfferResponse?: WhitelistAffiliateToOfferResponseResolvers<ContextType>;
  WhitelistAffiliateToOfferResponseSuccess?: WhitelistAffiliateToOfferResponseSuccessResolvers<ContextType>;
  WhitelistAllUnassignedClaimsResponse?: WhitelistAllUnassignedClaimsResponseResolvers<ContextType>;
  WhitelistAllUnassignedClaimsResponseSuccess?: WhitelistAllUnassignedClaimsResponseSuccessResolvers<ContextType>;
  WhitelistMyLootboxClaimsResponse?: WhitelistMyLootboxClaimsResponseResolvers<ContextType>;
  WhitelistMyLootboxClaimsResponseSuccess?: WhitelistMyLootboxClaimsResponseSuccessResolvers<ContextType>;
};

