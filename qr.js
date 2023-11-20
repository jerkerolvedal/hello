<html>
<head>
<SCRIPT language="javascript">
var a=0;
var b=0;
var cha="Text som scrollas á la skrivmaskin, om den här texten är lång bryts den enligt nedan och genererar nya rader. Det är ju bra.. blah, blah, blah, blah";
 
function bouge()
{
if (b<cha.length+10)
{
b++;document.all.mess.innerText=cha.substring(a,B);
}
setTimeout ('bouge()',50) // TEXTENS HASTIGHET
}
</SCRIPT>
</head>
<body bgcolor="#3C3C3C"onload="bouge()">
</DIV>
<DIV ALIGN="left"><div id="mess"style="margin-left:100;margin-right:600;color:lime"></div></div>
<BR><BR>
 
</form></DIV>
 
</body></html>
