-- created by Babylon

-- --------------------------------

-- V1_0__baseline



SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';


DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `question` text NOT NULL,
  `comment` text NOT NULL,
  `orderby` int(11) NOT NULL DEFAULT '0',
  `yes` int(11) NOT NULL DEFAULT '0',
  `no` int(11) NOT NULL DEFAULT '0'
)ENGINE=INNODB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `results`;
CREATE TABLE `results` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `img` varchar(1000) NOT NULL,
  `title` varchar(255) NOT NULL,
  `dsc` text NOT NULL,
  `link` varchar(255) NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `contacts`;
CREATE TABLE `contacts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `phone` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `site` varchar(255) NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `tests`;
CREATE TABLE `tests` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `date` timestamp NULL DEFAULT NULL,
  `result_id` int(11) unsigned NOT NULL
)ENGINE=INNODB DEFAULT CHARSET=utf8;



ALTER TABLE `tests` ADD FOREIGN KEY (`result_id`) REFERENCES `results` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/* Machine God set us free */