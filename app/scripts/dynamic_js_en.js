window.searchRemoteUrl   = "http://www.4tube.com/search_suggestions_remote";
window.searchUrl   = "http://www.4tube.com/search";
window.adLogUrl = "http://www.4tube.com/log-add-impression";
window.loginPage = 'http://www.4tube.com/login';
window.recoverPasswordPost = 'http://www.4tube.com/user/password/remember';
window.loginCheckUrl = 'http://www.4tube.com/login_check'
window.usernameCheckUrl = 'http://www.4tube.com/user/username/check'
window.emailCheckUrl = 'http://www.4tube.com/user/email/check'
window.lightboxVideoData = 'http://www.4tube.com/lightbox/video/getData';
window.ajaxAddUser = '/users';

    function getQueryString() {
        var query_string = {};
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            // If first entry with this name
            if (typeof query_string[pair[0]] === "undefined") {
                query_string[pair[0]] = pair[1];
                // If second entry with this name
            } else if (typeof query_string[pair[0]] === "string") {
                var arr = [ query_string[pair[0]], pair[1] ];
                query_string[pair[0]] = arr;
                // If third or later entry with this name
            } else {
                query_string[pair[0]].push(pair[1]);
            }
        }
        return query_string;
    }

    function getCookie(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    }


    function needsTabletAds() {
        var isMobile =/Android|iPad|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
        var mobileAdsForced = false;
        if(getQueryString()['ads'] == 'tablet'){
            mobileAdsForced = true;
        }


        return mobileAdsForced || isMobile;
    }

    var active_ads = {"ntva":[{"id":53,"code":"<script type=\"text\/javascript\" src=\"http:\/\/delivery.trafficforce.com\/show2.php\" charset=\"UTF-8\"><\/script>\r\n<script type=\"text\/javascript\">\r\n sppc_show({site:'311', channel:'1160', dimension:'13', width:'300', height:'250', user:'19821'});\r\n<\/script>","refresh":1,"refreshCount":1,"refreshInterval":240},{"id":54,"code":"<iframe width=\"300\" scrolling=\"no\" height=\"250\" frameborder=\"0\" src=\"http:\/\/ads2.contentabc.com\/ads?spot_id=118873\" allowtransparency=\"true\" marginheight=\"0\" marginwidth=\"0\" name=\"spot_id_118873\"> <\/iframe>","refresh":1,"refreshCount":1,"refreshInterval":240}],"playerAd":[{"id":90,"code":"<iframe id='a920d1f8' name='a920d1f8' src='http:\/\/ads.pornerbros.com\/delivery\/afr.php?zoneid=92&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='300' height='250'><a href='http:\/\/ads.pornerbros.com\/delivery\/ck.php?n=a61022ca&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http:\/\/ads.pornerbros.com\/delivery\/avw.php?zoneid=92&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a61022ca' border='0' alt='' \/><\/a><\/iframe>","refresh":0,"refreshCount":1,"refreshInterval":5}],"tab2":[{"id":86,"code":"<a href=\"http:\/\/redirects.flingguru.com\/?aff_id=42&kwd=Direct_4Tw_dtab\" title=\"Dating\" target=\"_blank\" rel=\"nofollow\">Meet & Fuck<\/a>","refresh":0,"refreshCount":1,"refreshInterval":5}],"ntvb":[{"id":61,"code":"<script type=\"text\/javascript\">var th_zoneid = 269; var th_width = 300; var th_height = 250; if (location.protocol == 'https:'){document.write(\"<script type='text\\\/javascript' src='https:\/\/c3486.hs.llnwd.net\/e1\/scripts\/serve.js'><\\\/script>\");}else{document.write(\"<script type='text\\\/javascript' src='http:\/\/cdn1.traffichaus.com\/scripts\/serve.js'><\\\/script>\");}<\/script>","refresh":1,"refreshCount":1,"refreshInterval":240}],"im-ad":[{"id":45,"code":"<script>\r\nvar im_ad_silent\t= (window.location.search.match(\"cid=401\") ? true:false);\r\nvar im_ad_src\t\t= 'http:\/\/m.sancdn.net\/imad\/imad-san-v1.js?domain=4tubemate.com&tasktitle=&suffix=&p=4tube&v=4&AFNO=1-0-622310-342987&UHNSMTY=459'+(im_ad_silent?\"&volume=0&mute8=\":\"\");\r\nvar im_ad_holder\t= document.createElement('script');\r\n\tim_ad_holder.setAttribute(\"type\",\"text\/javascript\");\r\n\tim_ad_holder.setAttribute(\"id\",\"smimad\");\r\n\tim_ad_holder.setAttribute(\"src\", im_ad_src);\r\n\r\ndocument.getElementsByTagName(\"head\")[0].appendChild(im_ad_holder);\r\n<\/script>","refresh":0,"refreshCount":0,"refreshInterval":0}],"footer":[{"id":47,"code":"<div style=\"text-align:center\">\r\n<iframe style=\"margin-right:6px\" src=\"http:\/\/delivery.trafficforce.com\/show_std.php?id_site=311&id_channel=1161&id_dimension=13&width=300&height=250&id_palette=1&id_user=19821&ident=9942&ck=511&uf=1&m1=&m2=&m3=&vars=%7B%7D\" scrolling=\"no\" allowtransparency=\"true\" style=\"background-color:transparent\" frameborder=\"0\" width=\"300\" height=\"250\"><\/iframe>\r\n<iframe style=\"margin-right:6px\" src=\"http:\/\/delivery.trafficforce.com\/show_std.php?id_site=311&id_channel=1162&id_dimension=13&width=300&height=250&id_palette=1&id_user=19821&ident=9942&ck=511&uf=1&m1=&m2=&m3=&vars=%7B%7D\" scrolling=\"no\" allowtransparency=\"true\" style=\"background-color:transparent\" frameborder=\"0\" width=\"300\" height=\"250\"><\/iframe>\r\n<iframe src=\"http:\/\/delivery.trafficforce.com\/show_std.php?id_site=311&id_channel=1163&id_dimension=13&width=300&height=250&id_palette=1&id_user=19821&ident=9942&ck=511&uf=1&m1=&m2=&m3=&vars=%7B%7D\" scrolling=\"no\" allowtransparency=\"true\" style=\"background-color:transparent\" frameborder=\"0\" width=\"300\" height=\"250\"><\/iframe>\r\n<\/div>","refresh":0,"refreshCount":1,"refreshInterval":5},{"id":46,"code":"<iframe width=\"900\" scrolling=\"no\" height=\"250\" frameborder=\"0\" src=\"http:\/\/ads2.contentabc.com\/ads?spot_id=118894\" allowtransparency=\"true\" marginheight=\"0\" marginwidth=\"0\" name=\"spot_id_118894\"> <\/iframe>","refresh":0,"refreshCount":0,"refreshInterval":0}],"tab3":[{"id":49,"code":"<a href=\"http:\/\/as.sexad.net\/as\/nl?p=4tube&v=4\" title=\"Webcam\" target=\"_blank\" rel=\"nofollow\">Live Sex<\/a>","refresh":0,"refreshCount":0,"refreshInterval":0}],"tab1":[{"id":50,"code":"<a href=\"http:\/\/www1.4tubehd.com\/?l=1111&t=33545\" title=\"Premium\" target=\"_blank\" rel=\"nofollow\">Premium<\/a>","refresh":0,"refreshCount":0,"refreshInterval":0}],"non_cpp":[{"id":56,"code":"<iframe frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\" width=\"760\" height=\"78\" src=\"http:\/\/re.try9.com\/spot.php?sid=586\"><\/iframe>","refresh":0,"refreshCount":0,"refreshInterval":0}],"pop-up":[{"id":51,"code":"<script type=\"text\/javascript\" src=\"http:\/\/delivery.trafficforce.com\/delivery\/pu.php\" charset=\"UTF-8\"><\/script>\r\n<script type=\"text\/javascript\">\r\n sppc_pu({site:'311', channel:'1111', user:'19821'});\r\n<\/script>","refresh":0,"refreshCount":1,"refreshInterval":5}],"listings":[{"id":57,"code":"<script type=\"text\/javascript\" src=\"http:\/\/delivery.trafficforce.com\/show2.php\" charset=\"UTF-8\"><\/script>\r\n<script type=\"text\/javascript\">\r\n sppc_show({site:'311', channel:'1409', dimension:'13', width:'300', height:'250', user:'19821'});\r\n<\/script>","refresh":0,"refreshCount":0,"refreshInterval":0}]};
    if(needsTabletAds()){
        active_ads = {"ntva":[{"id":53,"code":"<script type=\"text\/javascript\" src=\"http:\/\/delivery.trafficforce.com\/show2.php\" charset=\"UTF-8\"><\/script>\r\n<script type=\"text\/javascript\">\r\n sppc_show({site:'311', channel:'1160', dimension:'13', width:'300', height:'250', user:'19821'});\r\n<\/script>","refresh":1,"refreshCount":1,"refreshInterval":240},{"id":54,"code":"<iframe width=\"300\" scrolling=\"no\" height=\"250\" frameborder=\"0\" src=\"http:\/\/ads2.contentabc.com\/ads?spot_id=118873\" allowtransparency=\"true\" marginheight=\"0\" marginwidth=\"0\" name=\"spot_id_118873\"> <\/iframe>","refresh":1,"refreshCount":1,"refreshInterval":240}],"playerAd":[{"id":90,"code":"<iframe id='a920d1f8' name='a920d1f8' src='http:\/\/ads.pornerbros.com\/delivery\/afr.php?zoneid=92&amp;cb=INSERT_RANDOM_NUMBER_HERE' frameborder='0' scrolling='no' width='300' height='250'><a href='http:\/\/ads.pornerbros.com\/delivery\/ck.php?n=a61022ca&amp;cb=INSERT_RANDOM_NUMBER_HERE' target='_blank'><img src='http:\/\/ads.pornerbros.com\/delivery\/avw.php?zoneid=92&amp;cb=INSERT_RANDOM_NUMBER_HERE&amp;n=a61022ca' border='0' alt='' \/><\/a><\/iframe>","refresh":0,"refreshCount":1,"refreshInterval":5}],"tab2":[{"id":86,"code":"<a href=\"http:\/\/redirects.flingguru.com\/?aff_id=42&kwd=Direct_4Tw_dtab\" title=\"Dating\" target=\"_blank\" rel=\"nofollow\">Meet & Fuck<\/a>","refresh":0,"refreshCount":1,"refreshInterval":5}],"ntvb":[{"id":61,"code":"<script type=\"text\/javascript\">var th_zoneid = 269; var th_width = 300; var th_height = 250; if (location.protocol == 'https:'){document.write(\"<script type='text\\\/javascript' src='https:\/\/c3486.hs.llnwd.net\/e1\/scripts\/serve.js'><\\\/script>\");}else{document.write(\"<script type='text\\\/javascript' src='http:\/\/cdn1.traffichaus.com\/scripts\/serve.js'><\\\/script>\");}<\/script>","refresh":1,"refreshCount":1,"refreshInterval":240}],"footer":[{"id":47,"code":"<div style=\"text-align:center\">\r\n<iframe style=\"margin-right:6px\" src=\"http:\/\/delivery.trafficforce.com\/show_std.php?id_site=311&id_channel=1161&id_dimension=13&width=300&height=250&id_palette=1&id_user=19821&ident=9942&ck=511&uf=1&m1=&m2=&m3=&vars=%7B%7D\" scrolling=\"no\" allowtransparency=\"true\" style=\"background-color:transparent\" frameborder=\"0\" width=\"300\" height=\"250\"><\/iframe>\r\n<iframe style=\"margin-right:6px\" src=\"http:\/\/delivery.trafficforce.com\/show_std.php?id_site=311&id_channel=1162&id_dimension=13&width=300&height=250&id_palette=1&id_user=19821&ident=9942&ck=511&uf=1&m1=&m2=&m3=&vars=%7B%7D\" scrolling=\"no\" allowtransparency=\"true\" style=\"background-color:transparent\" frameborder=\"0\" width=\"300\" height=\"250\"><\/iframe>\r\n<iframe src=\"http:\/\/delivery.trafficforce.com\/show_std.php?id_site=311&id_channel=1163&id_dimension=13&width=300&height=250&id_palette=1&id_user=19821&ident=9942&ck=511&uf=1&m1=&m2=&m3=&vars=%7B%7D\" scrolling=\"no\" allowtransparency=\"true\" style=\"background-color:transparent\" frameborder=\"0\" width=\"300\" height=\"250\"><\/iframe>\r\n<\/div>","refresh":0,"refreshCount":1,"refreshInterval":5},{"id":46,"code":"<iframe width=\"900\" scrolling=\"no\" height=\"250\" frameborder=\"0\" src=\"http:\/\/ads2.contentabc.com\/ads?spot_id=118894\" allowtransparency=\"true\" marginheight=\"0\" marginwidth=\"0\" name=\"spot_id_118894\"> <\/iframe>","refresh":0,"refreshCount":0,"refreshInterval":0}],"tab3":[{"id":49,"code":"<a href=\"http:\/\/as.sexad.net\/as\/nl?p=4tube&v=4\" title=\"Webcam\" target=\"_blank\" rel=\"nofollow\">Live Sex<\/a>","refresh":0,"refreshCount":0,"refreshInterval":0}],"tab1":[{"id":50,"code":"<a href=\"http:\/\/www1.4tubehd.com\/?l=1111&t=33545\" title=\"Premium\" target=\"_blank\" rel=\"nofollow\">Premium<\/a>","refresh":0,"refreshCount":0,"refreshInterval":0}],"non_cpp":[{"id":56,"code":"<iframe frameborder=\"0\" scrolling=\"no\" allowtransparency=\"true\" width=\"760\" height=\"78\" src=\"http:\/\/re.try9.com\/spot.php?sid=586\"><\/iframe>","refresh":0,"refreshCount":0,"refreshInterval":0}],"pop-up":[{"id":51,"code":"<script type=\"text\/javascript\" src=\"http:\/\/delivery.trafficforce.com\/delivery\/pu.php\" charset=\"UTF-8\"><\/script>\r\n<script type=\"text\/javascript\">\r\n sppc_pu({site:'311', channel:'1111', user:'19821'});\r\n<\/script>","refresh":0,"refreshCount":1,"refreshInterval":5}],"listings":[{"id":57,"code":"<script type=\"text\/javascript\" src=\"http:\/\/delivery.trafficforce.com\/show2.php\" charset=\"UTF-8\"><\/script>\r\n<script type=\"text\/javascript\">\r\n sppc_show({site:'311', channel:'1409', dimension:'13', width:'300', height:'250', user:'19821'});\r\n<\/script>","refresh":0,"refreshCount":0,"refreshInterval":0}]};
    }

    var cookie_ads = { 'ntva': 0, 'ntvb': 0, 'footer': 0, 'listings': 0, 'playerAd': 0};

    current_ads = {
        'ntva':     activeAddFor('ntva'),
        'ntvb':     activeAddFor('ntvb'),
        'footer':   activeAddFor('footer'),
        'listings': activeAddFor('listings'),
        'playerAd': activeAddFor('playerAd'),
        'pop-up':   activeAddFor('pop-up'),
        'im-ad' :   activeAddFor('im-ad')
    };

    setCookie('4tube_ad', JSON.stringify(cookie_ads), 1);

    function getNeedsRefresh(source)
    {
        return active_ads[source][cookie_ads[source]].refresh;
    }

    function getRefreshCount(source)
    {
        return active_ads[source][cookie_ads[source]].refreshCount;
    }

    function getRefreshInterval(source)
    {
        return active_ads[source][cookie_ads[source]].refreshInterval;
    }

    function activeAddFor(source)
    {
        var code = '';
        if (active_ads[source] != undefined) {
            id = nextIdForAd(source);
            if (active_ads[source][id] == undefined) {
                id = 0;
            }
            code = active_ads[source][id]['code'];
            cookie_ads[source] = id;
        }

        return code;
    }

    function nextIdForAd(source) {
        if (getCookie('4tube_ad') == undefined) {
            id =  Math.floor(Math.random() * active_ads[source].length);
        } else {
            id = JSON.parse(getCookie('4tube_ad'))[source] + 1;
            if (id >= active_ads[source].length) {
                id = 0;
            }
        }
        return id;
    }

    function setCookie(name, value, days) {
        var expires = '',
        date = new Date();
        if (days) {
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function logAdRequest(ad_type)
    {
        var random = Math.floor(Math.random() * 100);
        if (random == 5) {
            $.ajax({
                url: adLogUrl + "?ad_type=" + ad_type,
            }).done(function() {
                $( this ).addClass( "done" );
            });
        }
    }






    var noTagsError = "You need at least one tag";
    var incorrectTagsError = "Incorrect tags: ";
    var incorrectPornstarsError = "Incorrect Pornstars: ";
    var titleError = "You didn&#039;t enter a title";
    var titleTooShortError = "Title too short";
    var uploadError = "You didn&#039;t upload a file";
    var uploading = "File is still uploading...";
    var notifyText = "You might lose the current upload, are you sure you want to exit?";
    var nolinks = "Links cannot be posted at this time";
    var noempty = "Empty comments cannot be posted at this time";
    var txtuploading = "uploading";
    var txtuploaded = "uploaded";
    var txterrorupload = "error on upload";
    var txtacceptterms = "You have to accept terms and conditions";
    var txtanyubscription = "You don&#039;t have any subscription";
    var txtsubscribed = "Subscribed";
    var txtunsubscribe = "Unsubscribe";
    var txtsubscribe = "Subscribe";
    var txtselectoption = "please select an option";
    var txtsendcorrectly = "Our content managers have been succesfully notified and will review your request. Thank you";
    var txterrorsending = "An error occured while processing your request. Please reload page and try again.";
    var voted = "Thanks for voting!";
    var PornstarsTxt = "Pornstars";
    var ChannelsTxt = "Channels";
    var TagsTxt = "Tags";
    var RelatedTxt = "Related";
    var Subscribedto = "Subscribed to";
    var Unsubscribedto = "Unsubscribed to";
    var addToFavorites = "Add to Favorites";
    var addedToFavorites = "Added to Favorites";
    var videoaddedToFavorites = "Video added to your favorites";
    var addedToWatchLater = "Added to Watch Later";
    var videoaddedToWatchLater = "Video added to your watch later list";
    var removedFromFavorites = "Removed from Favorites";
    var videoRemovedFromFavorites = "Video removed from your favorites";
    var removedFromWatchLater = "Removed from Watch Later";
    var videoRemovedFromWatchLater = "Video removed from your watch later list";
    var recoverOkMessage = "An email has been sent";
    var recoverKoMessage = "Email or username is invalid";
    var loginKoMessage = "Invalid username or password";
    var noEmptyValue = "This value should not be empty";
    var shortValue5 = "This value is too short. It should have 5 characters or more";
    var shortValue3 = "This value is too short. It should have 3 characters or more";
    var err1100001 = "This video has been removed";
    var err1200001 = "Invalid validation code";
    var err1300001 = "Invalid link";
    var success1100001 = "Thanks for verifying your e-mail!";
    var success1100002 = "User updated successfully";
    var success1100003 = "Video uploaded correctly";
    var success1100004 = "Thanks for creating your account! Enjoy the site";
    var success1100005 = "Your password has been updated";
    var success1100006 = "An email has been sent";


window.translations_loaded = true;



