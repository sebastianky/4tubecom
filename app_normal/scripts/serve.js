var th_cb=new Date().getTime();function getKwds(){var th_title=document.title;var th_metadata=document.getElementsByTagName("meta");var th_keywords='';var th_desc='';var th_kwds='';var len=th_metadata.length;for(var i=0;i<len;i++){if(th_metadata[i].name=='keywords'){th_keywords=','+th_metadata[i].content.split(/[\s,]+/).join(',');}
if(th_metadata[i].name=='description'){th_desc=','+th_metadata[i].content.split(/[\s,]+/).join(',');}}
th_keywords+=th_desc+','+th_title.split(/[\s,]+/).join(',');if(th_keywords){th_kwds=th_keywords.substring(1,1500);}else{th_kwds="nokeywords";}
return th_kwds;}
var kwds=getKwds();document.write('<iframe width="'+th_width+'" scrolling="no" height="'+th_height+'" frameborder="0" allowtransparency="true" marginheight="0" marginwidth="0" src="'+(location.protocol=='https:'?'https:':'http:')+'//syndication.traffichaus.com/adserve/index.php?z='+th_zoneid+'&loc='+kwds+'&cb='+th_cb+'"></iframe>');