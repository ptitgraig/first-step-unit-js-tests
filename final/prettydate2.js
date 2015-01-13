var prettyDate = {
    format: function(now, time){
        var date = new Date(time || ""),
            diff = (((new Date(now)).getTime() - date.getTime()) / 1000),
            day_diff = Math.floor(diff / 86400);

        if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) {
            return;
        }

        return day_diff === 0 && (
                diff < 60 && "à l'instant" ||
                diff < 120 && "1 minute" ||
                diff < 3600 && Math.floor( diff / 60 ) + " minutes" ||
                diff < 7200 && "1 heure" ||
                diff < 86400 && Math.floor( diff / 3600 ) + " heures") ||
            day_diff === 1 && "Hier" ||
            day_diff < 7 && day_diff + " jours" ||
            day_diff < 31 && Math.ceil( day_diff / 7 ) + " semaines";
    },

    update: function(now) {
        var links = document.getElementsByTagName("a");
        for ( var i = 0; i < links.length; i++ ) {
            if (links[i].title) {
                var date = prettyDate.format(now, links[i].title);
                if (date) {
                    links[i].innerHTML = date;
                }
            }
        }
    }
};