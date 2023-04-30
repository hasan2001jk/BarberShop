(function() {
    try {
        var eventMethod  = window.addEventListener ? 'addEventListener' : 'attachEvent';
        var eventer      = window[eventMethod];
        var messageEvent = eventMethod === 'attachEvent' ? 'onmessage' : 'message';

        window.fastEditLoaded = true;

        eventer(messageEvent, function(event) {
            var data = JSON.parse(event.data);

            if ( typeof data.reload === 'string' ) {
                document.location = data.reload;
            }

            if ( typeof data.reload === 'boolean' ) {
                document.location.reload();
            }

            if ( data.getUrl ) {
                parent.postMessage(JSON.stringify({iframeLocation: document.location.href}),'*');
            }

            if ( data.getUrlForPopupMode ) {
                parent.postMessage(JSON.stringify({iframeLocationForPopupMode: document.location.href}),'*');
            }

            if ( data.getUrlForPopupMainMode ) {
                parent.postMessage(JSON.stringify({iframeLocationForPopupMainMode: document.location.href}),'*');
            }

            if ( data.getUrlForPopupPage ) {
                parent.postMessage(JSON.stringify({iframeLocationForPopupPage: document.location.href}),'*');
            }

            if ( data.feedbackRun ) {
                window.FeedbackFactory.run()
            }

            if ( data.removeTargetBlankOnLinks === true ) {
                var targetBlankLinks = document.querySelectorAll('a[target=_blank]');

                for ( var i = 0; i < targetBlankLinks.length; i++){
                    targetBlankLinks[i].removeAttribute('target');
                }
            }
        });

        eventer('unload', function() {
            parent.postMessage(JSON.stringify({pageReload: true}),'*');
        });
    } catch (e) {}
})();
