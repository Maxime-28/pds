SET NAMES 'utf8';
CREATE TABLE IF NOT EXISTS `Data` (
  `ID` varchar(255) NOT NULL,
  `Sex` boolean NOT NULL default 1,
  `Student` boolean NOT NULL default 1,
  `City` varchar(255) NOT NULL,
  `Pseudo` varchar(255) NOT NULL,
  `Score` int(10) NOT NULL default 0,
  `Level` int(10) NOT NULL default 0,
  FOREIGN KEY (`ID`) REFERENCES Users(`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
