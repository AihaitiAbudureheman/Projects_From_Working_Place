'use strict';

/**
 * @ngdoc service
 * @name wdcApp.main
 * @description
 * # main
 * Service in the wdcApp.
 */
angular.module('wdcApp')
    .service('youtubePlay', function() {
        this.video = function(v_code) {
            document.getElementById("youtube_video").style.display = "block";
            document.getElementById('youtube_video').insertAdjacentHTML('beforeend', '<iframe class="player" width="100%" height="100%" src="https://www.youtube.com/embed/' + v_code + '?autoplay=1&showinfo=0&loop=1&rel=0" frameborder="0" allowfullscreen></iframe>');
            document.getElementById('close_me').onclick = function() {
                closeMe();
            }

            document.onkeydown = function(evt) {
                evt = evt || window.event;
                if (evt.keyCode == 27) {
                    closeMe();
                }
            };

            function closeMe() {
                document.getElementById("youtube_video").style.display = "none";
                document.querySelector(".player").remove();
                window.scrollTo(0, 0);
            }
        }
    });
