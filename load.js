  $(function() {
    $('#button').click(function() {
      if (!$('#iframe').length) {
        $('#iframeHolder').html('<iframe id="iframe" src="source.html" width="1" height="1" style="opacity:0;"></iframe>');
      }
    });
  });
