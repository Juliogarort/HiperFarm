'use strict';

        // Contador de logros animados
        $(document).ready(function() {
            $('.achievement-counter').each(function() {
                var $this = $(this);
                $({ count: 0 }).animate({ count: $this.data('target') }, {
                    duration: 2000,
                    step: function() {
                        $this.text(Math.floor(this.count));
                    }
                });
            });
        });