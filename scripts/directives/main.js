'use strict';

/**
 * @ngdoc directive
 * @name wdcApp.directive:main
 * @description
 * # main
 */
angular.module('wdcApp')
    .directive('homeTestimonials', function() {
        return {
            link: function(scope, element, attr) {
                /*--Code for testimonials section hover starts--*/
                element.on('mouseover', function() {
                        var targetElement = element;
                        this.classList.add("zoom_frame2");
                    }),
                    element.on('mouseleave', function() {
                        var targetElement = element;
                        this.classList.remove("zoom_frame2");
                    }) /*--Code for testimonials section hover starts--*/
                angular.element(".testimonials md-list-item:nth-child(6) a").click(function() {
                    return false;
                });
            }
        }
    })
    .directive('homeSlider', function() {
        return {
            link: function(element) {
                /*--Code for hoem slider windowheight starts--*/
                function resize() {
                    var heights = window.innerHeight;
                    document.getElementById("home_slider").style.height = heights - 64 + "px";
                }
                resize();
                window.onresize = function() {
                    resize();
                };
                /*--Code for hoem slider windowheight ends--*/

                /*--Code for home page slider starts--*/
                $(function() {
                    var Page = (function() {
                        var $navArrows = $('#nav-arrows'),
                            $nav = $('#nav-dots > span'),
                            slitslider = $('#slider').slitslider({
                                autoplay: true,
                                onBeforeChange: function(slide, pos) {
                                    $nav.removeClass('nav-dot-current');
                                    $nav.eq(pos).addClass('nav-dot-current');
                                }
                            }),
                            init = function() {
                                initEvents();
                            },
                            initEvents = function() {
                                // add navigation events
                                $navArrows.children(':last').on('click', function() {
                                    slitslider.next();
                                    return false;
                                });
                                $navArrows.children(':first').on('click', function() {
                                    slitslider.previous();
                                    return false;
                                });
                                $nav.each(function(i) {
                                    $(this).on('click', function(event) {
                                        var $dot = $(this);
                                        if (!slitslider.isActive()) {
                                            $nav.removeClass('nav-dot-current');
                                            $dot.addClass('nav-dot-current');
                                        }
                                        slitslider.jump(i + 1);
                                        return false;
                                    });
                                });
                            };
                        return {
                            init: init
                        };
                    })();
                    Page.init();
                });
                /*--Code for home page slider ends--*/
            }
        }
    });
