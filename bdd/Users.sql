SET NAMES 'utf8';
CREATE TABLE IF NOT EXISTS `Users` (
  `ID` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `BirthDate` date NOT NULL,
  `Nationality` varchar(255) NOT NULL,
  PRIMARY KEY `ID` (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
