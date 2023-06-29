CREATE TABLE Games (
    GameDate date,
    GameID int,
    GameStatus char(16),
    HomeTeamID int,
    AwayTeamID int,
    Season int,
    HomeTeamID_2 int,
    PTSHome varchar(32),
    HomeFG double,
    HomeFT double,
    HomeFG3 double,
    HomeAST int,
    HomeREB int,
    AwayTeamID_2 int,
    PTSAway double,
    AwayFG double,
    AwayFT double,
    AwayFG3 int,
    AwayAST int,
    AwayREB int,
    HomeWins bool
);

CREATE TABLE GamesDetail (
    GameID int,
    TeamID int,
    TeamAbb varchar(32),
    TeamCity varchar(32),
    PlayerID int,
    PlayerName varchar(32),
    NickName varchar(16),
    StartPosition char(1),
    _Comment varchar(32),
    _Min varchar(7),
    FGM varchar(32),
    FGA varchar(32),
    FG_PCT double,
    FG3M double,
    FG3A double,
    FG3_PCT double,
    FTM double,
    FTA double,
    FT_PCT double,
    OREB double,
    DREB double,
    REB double,
    AST double,
    ATL double,
    BLK double,
    _TO double,
    PF double,
    PTS double,
    PLUS_MINUS double
);

CREATE TABLE Players (
    PlayerName varchar(32),
    TeamID int,
    PlayerID int,
    Season int
);

CREATE TABLE Ranking (
    TeamID int,
    LeagueID int,
    SeasonID int,
    StandingsDate date,
    Conference varchar(8),
    Team varchar(32),
    G int,
    W int,
    L int,
    W_PCT double,
    HomeRecord varchar(8),
    RoadRecord varchar(8),
    ReturnToPlay varchar(8)
);

CREATE TABLE Teams (
    LeagueID int,
    TeamID int,
    MinYear int,
    MaxYear int,
    Abb char(3),
    NickName varchar(16),
    YearFound int,
    City varchar(32),
    Arena varchar(32),
    ArenaCapacity varchar(16),
    Owner varchar(64),
    GeneralManager varchar(32),
    HeadCoach varchar(32),
    DLeagueAffiliation varchar(128)
);
