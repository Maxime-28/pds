SET NAMES 'utf8';
CREATE TABLE IF NOT EXISTS `StudentData` (
  `ID` varchar(255) NOT NULL,
  `YearStudy` int(10) NOT NULL,
  `Faculty` varchar(255) NOT NULL,
  FOREIGN KEY (`ID`) REFERENCES Users(`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1;
