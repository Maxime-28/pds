SET NAMES 'utf8';
CREATE TABLE IF NOT EXISTS `Suggestions` (
  `ID` varchar(255) NOT NULL,
  `Person1` varchar(255) NOT NULL,
  `Person2` varchar(255) NOT NULL,
  `Person3` varchar(255) NOT NULL,
  `Person4` varchar(255) NOT NULL,
  `Person5` varchar(255) NOT NULL,
  FOREIGN KEY (`ID`) REFERENCES Users(`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
