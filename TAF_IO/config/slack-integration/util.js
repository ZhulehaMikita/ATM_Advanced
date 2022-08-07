const firstMessage = {
    "blocks": [
        {
            "type": "header",
            "text": {
                "type": "plain_text",
                "text": "Test has been started",
                "emoji": true
            }
        }
    ]
};

const failedAttachment = function(world, errorMessage, { duration }) {
    const failedMessage = {
      color: `#dc3545`,
      author_name: `${world.pickle.name}`,
      footer: `Uh! Oh! FAILED - Duration: ${timeConverter(duration)}\n${errorMessage}`,
      footer_icon: `https://www.pinclipart.com/picdir/big/31-316209_circle-x-clipart-reject-icon-png-download.png`,
      ts: Date.now()
    };
    return failedMessage;
};

const passedAttachment = function(world, { duration }) {
    const passedMessage = {
        color: `#6bc77c`,
        author_name: `${world.pickle.name}`,
        footer: `Woo! Ooh! PASSED - Duration: ${timeConverter(duration)}`,
        footer_icon: `https://vectorified.com/images/icon-pass-19.png`
    };
    return passedMessage;
};

function timeConverter(duration) {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return minutes + `:` + (seconds < 10 ? `0` : ``) + seconds;
}

module.exports = { failedAttachment, passedAttachment, firstMessage };

  