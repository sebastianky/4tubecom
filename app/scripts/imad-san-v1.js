var im = (function () {
	
  function getLang() {
	if (navigator.browserLanguage)
		lang = navigator.browserLanguage;
	else
		lang = navigator.language;
    return lang.substr(0,2);
  }
  
  function getURLParam( sParamName ) {
    var sReturn = '',
        sHref = document.getElementById('smimad').src;
        
    if ( sHref.indexOf('?') > -1 ) {
      var sQueryString = sHref.substr(sHref.indexOf('?')).toLowerCase();
      var aQueryString = sQueryString.split('&');
      for ( var iParam = 0; iParam < aQueryString.length; iParam++ ) {
        if ( aQueryString[iParam].indexOf(sParamName.toLowerCase() + "=") > -1 ) {
          var aParam = aQueryString[iParam].split('=');
          sReturn = aParam[1];
          break;
        }
      }
    }
    return unescape(sReturn);
  }
  
  function trim( sInput ) {
    return sInput.replace( /(^\s+|\s+$)/g, '' );
  }

  var domain = getURLParam( 'domain' ) || 'streamate.com',
      baseUrl = trim( 'http://' + domain ), 
      lang = getLang(), 	  		
      muted   = getURLParam( 'muted' ) || 0,
	  pub=getURLParam( 'p' ) || test,
	  variation=getURLParam( 'v' ) || undefined,
      mute8   = getURLParam( 'mute8' ) || 0,	  
      taskbar = getURLParam( 'taskbar' ) || 1,
	  chattitle=getURLParam( 'chattitle' ) || undefined,
	  tasktitle=getURLParam( 'tasktitle' ) || undefined,	  
	  chatbutton=getURLParam( 'chatbutton' ) || undefined,
	  volume=getURLParam( 'volume' ) || 100,	  
	  suffix=getURLParam( 'suffix' ) || undefined,	  
      UHNSMTY = getURLParam( 'UHNSMTY' ) || undefined,
      AFNO    = ( getURLParam( 'AFNO' ) + ( ( typeof UHNSMTY !== 'undefined' ) ? '&UHNSMTY=' + UHNSMTY : '' ) ) || undefined,
      bottomOffset = (taskbar == 1) ? 30 : 0,
      viewPercent = getURLParam( 'viewpercent' ) || 1,
	  videoszVisible = getURLParam( 'videosz' ) || 0,
	  videoszDelay = getURLParam( 'delay' ) || 20,
	  videoszTime = getURLParam( 'time' ) || 10,	  	  
      closeInterval,
      repositionInterval,
      ie6fixed = (navigator.userAgent.indexOf( 'MSIE 6' ) != -1
       && typeof document.documentElement != 'undefined'
       && typeof document.documentElement.clientHeight != 'undefined'), // only use the ie6 fixed hack if we're in standards compliance
      quirksMode = (navigator.userAgent.indexOf( 'MSIE' ) != -1 
       && document.compatMode == 'BackCompat'), // are we in IE quirks mode?
      srcUrl = ( ( window.location.href.indexOf( '#' ) > 13 )
       ? escape( window.location.href.substring( 0, window.location.href.indexOf( '#' ) ) )
       : escape( window.location.href ) );

  /**
   * Sets multiple style properties on the element.
   * @method setStyles
   * @param {styles} hash An object literal of property:value pairs.
   */
  function setStyles( obj, styles ) {
    for ( var k in styles ) {
      if ( styles.hasOwnProperty(k) ) {
        obj.style[k] = styles[k];
      }
    }
  }

  /**
   * Sets multiple attribute properties on the element.
   * @method setAttributes
   * @param {attrs} hash An object literal of property:value pairs.
   */
  function setAttributes( obj, attrs ) {
    for ( var k in attrs ) {
      if ( attrs.hasOwnProperty(k) ) {
        obj.setAttribute( k, attrs[k] );
      }
    }
  }

  /**
   * Attaches an event to an object (cross-platform)
   * @method addEvent
   * @param obj element The element to attach the event to.
   * @param 'type' string The event to attach.
   * @param fn function The function to run on event.
   */
  function addEvent( obj, type, fn ) {
    if ( obj.attachEvent ) {
      obj[ 'e' + type + fn ] = fn;
      obj[ type + fn ] = function () {
        obj[ 'e' + type + fn ]( window.event );
      };
      obj.attachEvent( 'on' + type, obj[ type + fn ] );
    }
    else {
      obj.addEventListener( type, fn, false );
    }
  }

  /**
   * Builds a container <div> (with an optional <iframe>).
   * @method addContainer
   * @param 'id' string The name to use as the ID.
   * @param {styles} hash An object literal of property:value pairs.
   * @param useIFrame boolean Whether or not to use an iframe.
   * @param {attrs} hash An object literal of property:value pairs.
   */
  function addContainer( id, styles, useIframe, attrs ) {
    var container = document.createElement( 'div' );
  
    // Build the taskbar
    container.setAttribute( 'id', id );
    setStyles( container, styles );
  
    if ( useIframe === true ) {
      var iframe = document.createElement( 'iframe' );
      setAttributes( iframe, attrs );
      container.appendChild( iframe );
    }
  
    // Add the new elements to the page
    document.body.appendChild( container );
  }
  /**
   * Slides the chat client up into view.
   * @method slideUp
   */
  function slideUp() {
    if ( parseInt(chatObj.style.bottom, 10) >= bottomOffset ) {
      clearInterval( chatObj.timer );
      chatObj.style.bottom = bottomOffset + 'px';
      delete( chatObj );
    }
    else {
      chatObj.style.bottom = ( parseInt(chatObj.style.bottom, 10) + 10 ) + "px";
    }

    return;
 }

   /**
   * Slides the the videoz ad .
   * @method slideVideo
   */
   
  function timerVideo(){
	 var delay=videoszDelay*1000;
	 var time=videoszTime*1000;	  
	 setTimeout(slideVideo, delay);
	 setTimeout(slideDown, time);	 
  }
  function slideVideo() {
    if ( parseInt(VideozObj.style.bottom, 10) >= bottomOffset ) {
      clearInterval( VideozObj.timer );
      VideozObj.style.bottom = bottomOffset + 'px';
      delete( VideozObj );
    }
    else {
      VideozObj.style.bottom = ( parseInt(VideozObj.style.bottom, 10) + 10 ) + "px";
    }
    return;
 }
  function slideDown() {
	  if ( parseInt(VideozObj.style.bottom, 10) >= bottomOffset ) {
		  if ( navigator.userAgent.indexOf('MSIE') != -1 ) {
			  if ( document.getElementById('videoszArea') ) {
				  document.getElementById('videoszArea').style.display = 'none';
				  document.body.removeChild( document.getElementById('videoszArea') );
			  }
		  }else{
			  if ( document.getElementById('videoszArea') ) {			  
				  document.body.removeChild( document.getElementById('videoszArea') ); 
			  }
		  }
	  }
 } 

  function getCookie( name ) { 
    var n = name + '=', 
        ca = document.cookie.split(';'); 
      
    for ( var i = 0; i < ca.length; i++ ) { 
      var c = ca[i]; 
      while ( c.charAt(0) == ' ' ) { 
        c = c.substring( 1, c.length ); 
      } 
      if ( c.indexOf(n) === 0 ) { 
        return c.substring( n.length, c.length ); 
      } 
    } 
    return null;
  }

  function setCookie( name, hours ) {
    var expires = '';
    if ( hours ) {
      var value = 'ifrm';
      var date = new Date();
      date.setTime( date.getTime() + (hours * 60 * 60 * 1000) );
      var expires = '; expires=' + date.toGMTString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  
  function closePopup( closeAll ) {
    if ( closeAll === false ) {
      setCookie( 'smad', 24 );
      if ( navigator.userAgent.indexOf('MSIE') != -1 ) {
        if ( document.getElementById('chatWindow') ) {
          document.getElementById('chatWindow').style.display = 'none';
          document.body.removeChild( document.getElementById('chatWindow') );
        }
        if ( document.getElementById('chatDisconnect') ) {
          document.getElementById('chatDisconnect').style.display = 'none';
          document.body.removeChild( document.getElementById('chatDisconnect') );
        }
        if ( document.getElementById('closeChatArea') ) {
          document.getElementById('closeChatArea').style.display = 'none';
          document.body.removeChild( document.getElementById('closeChatArea') );
        }            
      }
      else {
        if ( document.getElementById('chatWindow') ) {
          document.body.removeChild( document.getElementById('chatWindow') );
        }
        if ( document.getElementById('chatDisconnect') ) {
          document.body.removeChild( document.getElementById('chatDisconnect') );
        }
        if ( document.getElementById('closeChatArea') ) {
          document.body.removeChild( document.getElementById('closeChatArea') );
        }
      }
    }
	else if(closeAll == "videosz"){
		closevideoszpop();
	}
    else {
      setCookie( 'smad2', 24 );
	  closevideoszpop();
      if ( navigator.userAgent.indexOf('MSIE') != -1 ) {
        if ( document.getElementById('chatWindow') ) {
          document.getElementById('chatWindow').style.display = 'none';
          document.body.removeChild( document.getElementById('chatWindow') );
        }
        if ( document.getElementById('chatDisconnect') ) {
          document.getElementById('chatDisconnect').style.display = 'none';
          document.body.removeChild( document.getElementById('chatDisconnect') );
        }
        if ( document.getElementById('closeChatArea') ) {
          document.getElementById('closeChatArea').style.display = 'none';
          document.body.removeChild( document.getElementById('closeChatArea') );
        }
        if ( document.getElementById('taskbar') ) {
          document.getElementById('taskbar').style.display = 'none';
          document.body.removeChild( document.getElementById('taskbar') );
        }
        if ( document.getElementById('closeArea') ) {
          document.getElementById('closeArea').style.display = 'none';
          document.body.removeChild( document.getElementById('closeArea') );
        }
      }
      else {
        if ( document.getElementById('chatWindow') ) {
          document.body.removeChild( document.getElementById('chatWindow') );
        }
        if ( document.getElementById('chatDisconnect') ) {
          document.body.removeChild( document.getElementById('chatDisconnect') );
        }
        if ( document.getElementById('closeChatArea') ) {
          document.body.removeChild( document.getElementById('closeChatArea') );
        }
        if ( document.getElementById('taskbar') ) {
          document.body.removeChild( document.getElementById('taskbar') );
        }
        if ( document.getElementById('closeArea') ) {
          document.body.removeChild( document.getElementById('closeArea') );
        }
      }
    }
  }
  
  function closevideoszpop() {
      setCookie( 'videosz', 24 );
      if ( navigator.userAgent.indexOf('MSIE') != -1 ) {
        if ( document.getElementById('closeVideosZ') ) {
          document.getElementById('closeVideosZ').style.display = 'none';
          document.body.removeChild( document.getElementById('closeVideosZ') );
        }            		
        if ( document.getElementById('videoszArea') ) {
          document.getElementById('videoszArea').style.display = 'none';
          document.body.removeChild( document.getElementById('videoszArea') );
        }            				
      }
      else {
        if ( document.getElementById('closeVideosZ') ) {
          document.body.removeChild( document.getElementById('closeVideosZ') );
        }		
        if ( document.getElementById('videoszArea') ) {
          document.body.removeChild( document.getElementById('videoszArea') );
        }				
      }
  }  
  
  function pollHash() {
    if ( window.location.hash.indexOf('#smimadcls') != -1 ) {
      // entire ad was closed
      if ( window.location.hash.indexOf('#smimadcls2') != -1 ) {
        closePopup( true );

        if ( closeInterval ) {
          clearInterval( closeInterval );
        }
      }
      // just flash was closed
      else
      if ( window.location.hash.indexOf('#smimadcls') != -1 ) {
        closePopup( false );
      }
      window.location.hash = '';
    }
    return false;
  }

  function repositionContainers() {
    if ( ie6fixed && ! quirksMode ) {
      if ( document.getElementById('taskbar') ) {
        document.getElementById('taskbar').style.top = document.documentElement.clientHeight
         + document.documentElement.scrollTop - document.getElementById('taskbar').offsetHeight;
      }
      if ( document.getElementById('chatWindow') ) {
        document.getElementById('chatWindow').style.top = document.documentElement.clientHeight
         + document.documentElement.scrollTop - document.getElementById('chatWindow').offsetHeight
         - bottomOffset;
      }
	  //videosZ
      if ( document.getElementById('videoszArea') ) {
        document.getElementById('videoszArea').style.top = document.documentElement.clientHeight
         + document.documentElement.scrollTop - document.getElementById('videoszArea').offsetHeight
         - bottomOffset;
      }	  	  
    }
    else
    if ( quirksMode ) {
      if ( document.getElementById('taskbar') ) {
        document.getElementById('taskbar').style.top = document.body.clientHeight
         + document.body.scrollTop - document.getElementById('taskbar').offsetHeight;
      }
      if ( document.getElementById('chatWindow') ) {
        document.getElementById('chatWindow').style.top = document.body.clientHeight
         + document.body.scrollTop - document.getElementById('chatWindow').offsetHeight
         - bottomOffset;
      }
	  //videosZ
      if ( document.getElementById('videoszArea') ) {
        document.getElementById('videoszArea').style.top = document.body.clientHeight
         + document.body.scrollTop - document.getElementById('videoszArea').offsetHeight
         - bottomOffset;
      }	  
    }
  }
  
  // Don't do anything if the ad was closed
  // Temporarily only 1/[viewPercent] traffic see the ad
  if ( getCookie('smad2') == null && Math.floor(Math.random()*viewPercent) == 0 ) {
    if ( taskbar == 1 ) {
      // Build the taskbar
      addContainer( 'taskbar', {
        display: 'block',
        width: '100%',
        height: '36px',
        margin: '0px',
        zIndex: 99998,
        position: ( (ie6fixed || quirksMode) ? 'absolute' : 'fixed' ),
        bottom: '0px',
        left: '0px'
      }, true, {
        id: 'tbFrame',
        name: 'tbFrame',
        src: 'http://as.sexad.net/as/if?w=1000&h=30&lang='+lang+'&domain='+getURLParam( 'domain' )+( ( typeof tasktitle != 'undefined' ) ? '&tasktitle=' + tasktitle : '' )+( ( typeof suffix != 'undefined' ) ? '&suffix=' + suffix : '' )+( ( typeof pub != 'undefined' ) ? '&p=' + pub : '' )+( ( typeof variation != 'undefined' ) ? '&v=' + variation : '' )+( ( typeof AFNO != 'undefined' ) ? '&AFNO=' + AFNO : '' )+ '&mute8=' + mute8,
        width: '100%',
        height: '36px',
        scrolling: 'no',
        frameBorder: 'no',
        allowTransparency: true,
        marginHeight: 0,
        marginWidth: 0
      });
    }
    closeInterval = setInterval( pollHash, 1000 );

    if ( ie6fixed || quirksMode ) {
      repositionInterval = setInterval( repositionContainers, 33 );
    }


	//videosz ad
	if ( getCookie('videosz') == null ) {
	  //videosz
		if(videoszVisible==1){	
			var frameSrc  = 'http://ifa.camads.net/dif/?cid=imad-videosz';
			
			
			// Build the chat client
			addContainer( 'videoszArea', {
			overflow: 'hidden',
			display: 'block',
			background: 'none',
			width: '280px',
			height: '160px',
			margin: '0px',
			zIndex: 99996,
			position: ( (ie6fixed || quirksMode) ? 'absolute' : 'fixed' ),
			bottom: ( (ie6fixed || quirksMode) ? ( (taskbar) ? '30px' : '0px') : '-160px' ),
			left: ( (ie6fixed || quirksMode) ? '0px' : '30px' )
			}, true, {
			id: 'videoszFrame',
			name: 'videoszFrame',
			src: frameSrc,
			width: 280,
			height: 160,
			scrolling: 'no',
			frameBorder: 'no',
			allowTransparency: true,
			marginHeight: 0,
			marginWidth: 0
			});
		  
		  if ( ! (ie6fixed || quirksMode) ) {
			// Build the ad chat close
			addContainer( 'closeVideosZ', {
			  display: 'block',
			  width: '20px',
			  height: '20px',
			  margin: '0px',
			  zIndex: 99999,
			  position: 'fixed',
			  bottom: '170px',
			  left: '290px',
			  cursor: 'pointer'
			})
		// Build the close chat link (for IE)
		var closeVideoszLink = document.createElement( 'a' );
		closeVideoszLink.setAttribute( 'id', 'closeVideoszPopup' );
		setStyles( closeVideoszLink, {
		  display: 'block',
		  width: '20px',
		  height: '20px'
		});
		closeVideoszLink.setAttribute( 'onclick', 'im.closePopup("videosz")' );
		closeVideoszLink.href = 'javascript:im.closePopup("videosz");';
		// Add the new element to the page
		document.getElementById('closeVideosZ').appendChild( closeVideoszLink );		  		  
		}		
		var VideozObj = document.getElementById('videoszArea');
		if ( typeof VideozObj != 'undefined' && ! (ie6fixed || quirksMode) ) {
		VideozObj.timer = setInterval( timerVideo, 33 );
		}		
	}
}
	
    // Don't do anything if the chat window was closed
    if ( getCookie('smad') == null ) {
	  	
      var frameSrc  = 'http://as.sexad.net/as/if?w=311&h=278&lang='+lang+'&domain=' + domain+ ( ( typeof volume != 'undefined' ) ? '&volume=' + volume : '' ) + '&muted=' + muted+( ( typeof chatbutton != 'undefined' ) ? '&chatbutton=' + chatbutton : '' )+( ( typeof chattitle != 'undefined' ) ? '&chattitle=' + chattitle : '' )+( ( typeof pub != 'undefined' ) ? '&p=' + pub : '' )+( ( typeof variation != 'undefined' ) ? '&v=' + variation : '' )+( ( typeof AFNO != 'undefined' ) ? '&AFNO=' + AFNO : '' )+ '&mute8=' + mute8;
		
      // Build the chat client
      addContainer( 'chatWindow', {
        overflow: 'hidden',
        display: 'block',
        background: 'none',
        width: '311px',
        height: '278px',
        margin: '0px',
        zIndex: 99996,
        position: ( (ie6fixed || quirksMode) ? 'absolute' : 'fixed' ),
        bottom: ( (ie6fixed || quirksMode) ? ( (taskbar) ? '30px' : '0px') : '-311px' ),
        right: ( (ie6fixed || quirksMode) ? '0px' : '30px' )
      }, true, {
        id: 'cwFrame',
        name: 'cwFrame',
        src: frameSrc,
        width: 311,
        height: 278,
        scrolling: 'no',
        frameBorder: 'no',
        allowTransparency: true,
        marginHeight: 0,
        marginWidth: 0
      });

      if ( ! (ie6fixed || quirksMode) ) {
        // Build the ad chat close
        addContainer( 'closeChatArea', {
          display: 'block',
          width: '20px',
          height: '20px',
          margin: '0px',
          zIndex: 99999,
          position: 'fixed',
          bottom: '288px',
          right: '30px',
          cursor: 'pointer'
        });

        // Build the close chat link (for IE)
        var closeChatLink = document.createElement( 'a' );
        closeChatLink.setAttribute( 'id', 'closeChatPopup' );
        setStyles( closeChatLink, {
          display: 'block',
          width: '20px',
          height: '20px'
        });
        closeChatLink.setAttribute( 'onclick', 'im.closePopup(false)' );
        closeChatLink.href = 'javascript:im.closePopup(false);';
        // Add the new element to the page
        document.getElementById('closeChatArea').appendChild( closeChatLink );
      }
		
      var chatObj = document.getElementById('chatWindow');
      if ( typeof chatObj != 'undefined' && ! (ie6fixed || quirksMode) ) {
        chatObj.timer = setInterval( slideUp, 33 );
      }
   }
	
    if ( taskbar == 1 ) {
      // Build the ad close
      addContainer( 'closeArea', {
        display: 'block',
        width: '30px',
        height: '36px',
        margin: '0px',
        zIndex: 99999,
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        cursor: 'pointer'
      });
  
      // Build the close link (for IE)
      var closeLink = document.createElement( 'a' );
      closeLink.setAttribute( 'id', 'closePopup' );
      setStyles( closeLink, {
        display: 'block',
        width: '30px',
        height: '36px',
        margin: '0px',
        zIndex: 99999,
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        cursor: 'pointer'
      });
      closeLink.setAttribute( 'onclick', 'im.closePopup()' );
      closeLink.href = 'javascript:im.closePopup();';
      // Add the new element to the page
      document.getElementById('closeArea').appendChild( closeLink );
    }

    return {
      closePopup: closePopup
    };
  }
})();

