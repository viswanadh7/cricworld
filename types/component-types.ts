export type TTableComponent = {
  headerArray: string[];
  widthArray: (number | string)[];
  headerHeight: number;
  cellHeight: number;
  data: (number | string)[][];

  textAlign?: "left" | "right" | "center";
  borderWidth?: number;
  borderColor?: string;
};


type TeamInfo = {
  teamId: number;
  teamName: string;
  teamSName: string;
  imageId: number;
};

type VenueInfo = {
  id: number;
  ground: string;
  city: string;
  timezone: string;
};

type InningsScore = {
  inningsId: number;
  runs: number;
  wickets: number;
  overs: number;
};

type TeamScore = {
  inngs1?: InningsScore;
};

type MatchInfo = {
  matchId: number;
  seriesId: number;
  seriesName: string;
  matchDesc: string;
  matchFormat: string;
  startDate: string;
  endDate: string;
  state: string;
  status: string;
  team1: TeamInfo;
  team2: TeamInfo;
  venueInfo: VenueInfo;
  currBatTeamId: number;
  seriesStartDt: string;
  seriesEndDt: string;
  isTimeAnnounced: boolean;
  stateTitle: string;
};

type MatchScore = {
  team1Score: TeamScore;
  team2Score: TeamScore;
};

export type TMatchData = {
  matchInfo: MatchInfo;
  matchScore: MatchScore;
};

