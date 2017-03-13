/*
Navicat MySQL Data Transfer

Source Server         : localMysql
Source Server Version : 50709
Source Host           : 127.0.0.1:3306
Source Database       : chatroom

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2017-03-13 20:14:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for chatrecord
-- ----------------------------
DROP TABLE IF EXISTS `chatrecord`;
CREATE TABLE `chatrecord` (
  `nickname` varchar(60) NOT NULL,
  `saytime` datetime DEFAULT NULL,
  `content` text,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
