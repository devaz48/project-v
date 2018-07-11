

var SiteBirthDay=1;
var SiteBirthMonth= 1;
var SiteBirthYear= 0;
var Sitenow=new Date();
var SiteCurrDay=Sitenow.getDate();
var SiteCurrMonth=Sitenow.getMonth()+1;
var SiteCurrYear=Sitenow.getFullYear();
var SiteMyAge=SiteCurrYear-SiteBirthYear-1;
if ((SiteBirthMonth<SiteCurrMonth) || ((SiteBirthMonth==SiteCurrMonth) && (SiteBirthDay<=SiteCurrDay))) {SiteMyAge++;}



document.write(' Copyright &copy; 2013- ' +SiteMyAge+ ' Lingkakarya Media Formasi Indonesia<br>All rights reserved. ');
