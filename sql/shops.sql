/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50533
Source Host           : localhost:3306
Source Database       : v113

Target Server Type    : MYSQL
Target Server Version : 50533
File Encoding         : 65001

Date: 2017-05-08 00:27:51
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `shops`
-- ----------------------------
DROP TABLE IF EXISTS `shops`;
CREATE TABLE `shops` (
  `shopid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `npcid` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`shopid`)
) ENGINE=MyISAM AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shops
-- ----------------------------
INSERT INTO `shops` VALUES ('1', '11000');
INSERT INTO `shops` VALUES ('2', '11100');
INSERT INTO `shops` VALUES ('3', '21000');
INSERT INTO `shops` VALUES ('4', '1011000');
INSERT INTO `shops` VALUES ('5', '1011001');
INSERT INTO `shops` VALUES ('6', '1011100');
INSERT INTO `shops` VALUES ('7', '1012004');
INSERT INTO `shops` VALUES ('8', '1031000');
INSERT INTO `shops` VALUES ('9', '1031001');
INSERT INTO `shops` VALUES ('10', '1031100');
INSERT INTO `shops` VALUES ('11', '1061001');
INSERT INTO `shops` VALUES ('12', '1061002');
INSERT INTO `shops` VALUES ('13', '1032103');
INSERT INTO `shops` VALUES ('14', '1021001');
INSERT INTO `shops` VALUES ('15', '1021000');
INSERT INTO `shops` VALUES ('16', '1021100');
INSERT INTO `shops` VALUES ('17', '1051000');
INSERT INTO `shops` VALUES ('18', '1051001');
INSERT INTO `shops` VALUES ('19', '1051002');
INSERT INTO `shops` VALUES ('20', '1001100');
INSERT INTO `shops` VALUES ('21', '1001000');
INSERT INTO `shops` VALUES ('22', '1001001');
INSERT INTO `shops` VALUES ('23', '1091002');
INSERT INTO `shops` VALUES ('24', '1091001');
INSERT INTO `shops` VALUES ('25', '1091000');
INSERT INTO `shops` VALUES ('26', '1100002');
INSERT INTO `shops` VALUES ('27', '1100001');
INSERT INTO `shops` VALUES ('28', '1301000');
INSERT INTO `shops` VALUES ('29', '1200001');
INSERT INTO `shops` VALUES ('30', '1200002');
INSERT INTO `shops` VALUES ('31', '2051000');
INSERT INTO `shops` VALUES ('32', '2050003');
INSERT INTO `shops` VALUES ('33', '2040049');
INSERT INTO `shops` VALUES ('34', '1052104');
INSERT INTO `shops` VALUES ('35', '2022002');
INSERT INTO `shops` VALUES ('36', '2080003');
INSERT INTO `shops` VALUES ('37', '2070001');
INSERT INTO `shops` VALUES ('38', '2070003');
INSERT INTO `shops` VALUES ('39', '2070002');
INSERT INTO `shops` VALUES ('40', '2060004');
INSERT INTO `shops` VALUES ('41', '2060003');
INSERT INTO `shops` VALUES ('42', '2060007');
INSERT INTO `shops` VALUES ('43', '2080001');
INSERT INTO `shops` VALUES ('44', '2080004');
INSERT INTO `shops` VALUES ('45', '2080002');
INSERT INTO `shops` VALUES ('46', '2090006');
INSERT INTO `shops` VALUES ('47', '2090001');
INSERT INTO `shops` VALUES ('48', '2090002');
INSERT INTO `shops` VALUES ('49', '2090003');
INSERT INTO `shops` VALUES ('50', '2093001');
INSERT INTO `shops` VALUES ('51', '2093000');
INSERT INTO `shops` VALUES ('52', '2093002');
INSERT INTO `shops` VALUES ('53', '2100002');
INSERT INTO `shops` VALUES ('54', '2100003');
INSERT INTO `shops` VALUES ('55', '2100004');
INSERT INTO `shops` VALUES ('56', '2110001');
INSERT INTO `shops` VALUES ('57', '9201060');
INSERT INTO `shops` VALUES ('58', '9201059');
INSERT INTO `shops` VALUES ('59', '9201058');
INSERT INTO `shops` VALUES ('60', '9270022');
INSERT INTO `shops` VALUES ('61', '9270027');
INSERT INTO `shops` VALUES ('62', '9270019');
INSERT INTO `shops` VALUES ('63', '9270020');
INSERT INTO `shops` VALUES ('64', '9270065');
INSERT INTO `shops` VALUES ('65', '2130000');
INSERT INTO `shops` VALUES ('66', '2010004');
INSERT INTO `shops` VALUES ('67', '2012004');
INSERT INTO `shops` VALUES ('68', '2012003');
INSERT INTO `shops` VALUES ('69', '2012005');
INSERT INTO `shops` VALUES ('70', '2020001');
INSERT INTO `shops` VALUES ('71', '2022000');
INSERT INTO `shops` VALUES ('72', '2022001');
INSERT INTO `shops` VALUES ('73', '2030009');
INSERT INTO `shops` VALUES ('74', '2041002');
INSERT INTO `shops` VALUES ('75', '2041003');
INSERT INTO `shops` VALUES ('76', '2041006');
INSERT INTO `shops` VALUES ('77', '2041016');
INSERT INTO `shops` VALUES ('78', '9330048');
INSERT INTO `shops` VALUES ('79', '9330047');
INSERT INTO `shops` VALUES ('80', '9330053');
INSERT INTO `shops` VALUES ('81', '9120004');
INSERT INTO `shops` VALUES ('82', '9120019');
INSERT INTO `shops` VALUES ('83', '9120000');
INSERT INTO `shops` VALUES ('84', '9120002');
INSERT INTO `shops` VALUES ('85', '9120001');
INSERT INTO `shops` VALUES ('86', '9110001');
INSERT INTO `shops` VALUES ('87', '9110003');
INSERT INTO `shops` VALUES ('88', '9110006');
INSERT INTO `shops` VALUES ('89', '9110005');
INSERT INTO `shops` VALUES ('90', '9110007');
INSERT INTO `shops` VALUES ('91', '9110004');
INSERT INTO `shops` VALUES ('92', '9330029');
INSERT INTO `shops` VALUES ('93', '9110100');
INSERT INTO `shops` VALUES ('94', '9110102');
INSERT INTO `shops` VALUES ('95', '9270021');
INSERT INTO `shops` VALUES ('97', '2040051');
INSERT INTO `shops` VALUES ('98', '2050000');
INSERT INTO `shops` VALUES ('99', '1081000');
INSERT INTO `shops` VALUES ('100', '9200001');
INSERT INTO `shops` VALUES ('101', '9250038');
