SET NAMES 'utf8';
CREATE TABLE IF NOT EXISTS `Cinema` (
  `ID` varchar(255) NOT NULL,
  `choice` varchar(255) NOT NULL,
  `QuestionID` varchar(255) NOT NULL,
  FOREIGN KEY (`ID`) REFERENCES Users(`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
