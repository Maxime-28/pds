SET NAMES 'utf8';
CREATE TABLE IF NOT EXISTS `Gender` (
  `ID` varchar(255) NOT NULL,
  `choice1` varchar(255) NOT NULL,
  `choice2` varchar(255) NOT NULL,
  `QuestionID` varchar(255) NOT NULL,
  FOREIGN KEY (`ID`) REFERENCES Users(`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
