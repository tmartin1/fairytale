(function () {
    'use strict';

    angular.module('fairytale.sparkleDirective', [])
        .directive('sparkle', sparkleDirective);

    function sparkleDirective () {
        return {
            restrict: 'A',
            link: sparkleLink
        };

        function sparkleLink (scope) {
            scope.$root.$on('$stateChangeSuccess', function () {
                var element = angular.element('html');
                element.sparkleh({
                    color: 'rainbow',
                    count: 0,
                });
                setTimeout(function () {
                    var element = angular.element('html');
                    element.sparkleh({
                        color: 'rainbow',
                        count: 200
                        // count: (element[0].offsetHeight / 10),
                        // height: element[0].offsetHeight,
                        // width: element[0].offsetWidth
                    });
                }, 1000);
            });
        }
    }

    // function sparkleh (element, options) {
    //     return element.each(function (k, v) {
    //         var spark = angular.element(v).css('position', 'relative');
    //
    //         var settings = angular.extend({
    //             width: spark.outerWidth(),
    //             height: spark.outerHeight(),
    //             color: '#FFFFFF',
    //             count: 30,
    //             overlap: 0,
    //             speed: 1
    //         }, options);
    //
    //         var sparkle = new Sparkle(spark, settings);
    //
    //         spark.on({
    //             'mouseover focus': function (e) {
    //                 sparkle.over();
    //             },
    //             'mouseout blur': function (e) {
    //                 sparkle.out();
    //             }
    //         });
    //
    //     });
    // }
    //
    // function Sparkle ($parent, options) {
    //     this.options = options;
    //     this.init($parent);
    // }
    //
    // Sparkle.prototype = {
    //     init: function ($parent) {
    //         var _this = this;
    //         this.$canvas = $('<canvas>')
    //             .addClass('sparkle-canvas')
    //             .css({
    //                 position: 'absolute',
    //                 top: '-' + _this.options.overlap + 'px',
    //                 left: '-' + _this.options.overlap + 'px',
    //                 'pointer-events': 'none'
    //             })
    //             .appendTo($parent);
    //
    //         this.canvas = this.$canvas[0];
    //         this.context = this.canvas.getContext('2d');
    //
    //         this.sprite = new Image();
    //         this.sprites = [0, 6, 13, 20];
    //         this.sprite.src = this.datauri;
    //
    //         this.canvas.width = this.options.width + (this.options.overlap * 2);
    //         this.canvas.height = this.options.height + (this.options.overlap * 2);
    //
    //         this.particles = this.createSparkles(this.canvas.width, this.canvas.height);
    //
    //         this.anim = null;
    //         this.fade = false;
    //     },
    //     createSparkles: function (w, h) {
    //         var holder = [];
    //         for (var i = 0; i < this.options.count; i++) {
    //             var color = this.options.color;
    //
    //             if (this.options.color == 'rainbow') {
    //                 color = '#' + ('000000' + Math.floor(Math.random() * 16777215)
    //                     .toString(16)).slice(-6);
    //             } else if ($.type(this.options.color) === 'array') {
    //                 color = this.options
    //                     .color[Math.floor(Math.random() * this.options.color.length)];
    //             }
    //
    //             holder[i] = {
    //                 position: {
    //                     x: Math.floor(Math.random() * w),
    //                     y: Math.floor(Math.random() * h)
    //                 },
    //                 style: this.sprites[Math.floor(Math.random() * 4)],
    //                 delta: {
    //                     x: Math.floor(Math.random() * 1000) - 500,
    //                     y: Math.floor(Math.random() * 1000) - 500
    //                 },
    //                 size: parseFloat((Math.random() * 2).toFixed(2)),
    //                 color: color
    //             };
    //         }
    //         return holder;
    //     },
    //     draw: function (time, fade) {
    //         var ctx = this.context;
    //         ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    //         for (var i = 0; i < this.options.count; i++) {
    //             var derpicle = this.particles[i];
    //             var modulus = Math.floor(Math.random() * 7);
    //
    //             if (Math.floor(time) % modulus === 0) {
    //                 derpicle.style = this.sprites[Math.floor(Math.random() * 4)];
    //             }
    //
    //             ctx.save();
    //             ctx.globalAlpha = derpicle.opacity;
    //             ctx.drawImage(this.sprite, derpicle.style, 0, 7, 7, derpicle.position.x,
    //                 derpicle.position.y, 7, 7);
    //
    //             if (this.options.color) {
    //
    //                 ctx.globalCompositeOperation = 'source-atop';
    //                 ctx.globalAlpha = 0.5;
    //                 ctx.fillStyle = derpicle.color;
    //                 ctx.fillRect(derpicle.position.x, derpicle.position.y, 7, 7);
    //
    //             }
    //             ctx.restore();
    //         }
    //     },
    //     update: function () {
    //         var _this = this;
    //         this.anim = window.requestAnimationFrame(function (time) {
    //             for (var i = 0; i < _this.options.count; i++) {
    //                 var u = _this.particles[i];
    //                 var randX = (Math.random() > Math.random() * 2);
    //                 var randY = (Math.random() > Math.random() * 3);
    //
    //                 if (randX) {
    //                     u.position.x += ((u.delta.x * _this.options.speed) / 1500);
    //                 }
    //
    //                 if (!randY) {
    //                     u.position.y -= ((u.delta.y * _this.options.speed) / 800);
    //                 }
    //
    //                 if (u.position.x > _this.canvas.width) {
    //                     u.position.x = -7;
    //                 } else if (u.position.x < -7) {
    //                     u.position.x = _this.canvas.width;
    //                 }
    //
    //                 if (u.position.y > _this.canvas.height) {
    //                     u.position.y = -7;
    //                     u.position.x = Math.floor(Math.random() * _this.canvas.width);
    //                 } else if (u.position.y < -7) {
    //                     u.position.y = _this.canvas.height;
    //                     u.position.x = Math.floor(Math.random() * _this.canvas.width);
    //                 }
    //
    //                 u.opacity -= _this.fade ? 0.02 : 0.005;
    //                 // if (_this.fade) {
    //                 //     u.opacity -= 0.02;
    //                 // } else {
    //                 //     u.opacity -= 0.005;
    //                 // }
    //
    //                 if (u.opacity <= 0) {
    //                     u.opacity = (_this.fade) ? 0 : 1;
    //                 }
    //             }
    //
    //             _this.draw(time);
    //
    //             if (_this.fade) {
    //                 _this.fadeCount -= 1;
    //                 if (_this.fadeCount < 0) {
    //                     window.cancelAnimationFrame(_this.anim);
    //                 } else {
    //                     _this.update();
    //                 }
    //             } else {
    //                 _this.update();
    //             }
    //
    //         });
    //     },
    //     cancel: function () {
    //         this.fadeCount = 100;
    //     },
    //     over: function () {
    //         window.cancelAnimationFrame(this.anim);
    //         for (var i = 0; i < this.options.count; i++) {
    //             this.particles[i].opacity = Math.random();
    //         }
    //
    //         this.fade = false;
    //         this.update();
    //     },
    //     out: function () {
    //         this.fade = true;
    //         this.cancel();
    //     },
    //     datauri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAHCAYAAAD5wDa1AAAAGXRFWHRT' +
    //     'b2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2t' +
    //     'ldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD' +
    //     '0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxM' +
    //     'C8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8' +
    //     'xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6e' +
    //     'G1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmN' +
    //     'vbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZ' +
    //     'XNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIE1hY2ludG9zaCIgeG1' +
    //     'wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNDNFMzM5REEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiIgeG1wTU06R' +
    //     'G9jdW1lbnRJRD0ieG1wLmRpZDozNDNFMzM5RUEyMkUxMUUzOEE3NEI3Q0U1QUIzMTc4NiI+IDx4bXBNTTpEZXJ' +
    //     'pdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM0M0UzMzlCQTIyRTExRTM4QTc0QjdDRTVBQjMxN' +
    //     'zg2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM0M0UzMzlDQTIyRTExRTM4QTc0QjdDRTVBQjMxNzg2Ii8' +
    //     '+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+j' +
    //     'zOsUQAAANhJREFUeNqsks0KhCAUhW/Sz6pFSc1AD9HL+OBFbdsVOKWLajH9EE7GFBEjOMxcUNHD8dxPBCEE/DK' +
    //     'yLGMqraoqcd4j0ChpUmlBEGCFRBzH2dbj5JycJAn90CEpy1J2SK4apVSM4yiKonhePYwxMU2TaJrm8BpykpWmK' +
    //     'Q3D8FbX9SOO4/tOhDEG0zRhGAZo2xaiKDLyPGeSyPM8sCxr868+WC/mvu9j13XBtm1ACME8z7AsC/R9r0fGOf+' +
    //     'arOu6jUwS7l6tT/B+xo+aDFRo5BykHfav3/gSYAAtIdQ1IT0puAAAAABJRU5ErkJggg=='
    // };

})();
