var myScroll;
    function loaded() {
      myScroll = new iScroll('wrapper', {
        checkDOMChanges: true
      });
    }
document.addEventListener('DOMContentLoaded', loaded, false);