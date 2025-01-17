        /**
 * Document ready handler for initializing animations
 */
        $(document).ready(function () {
            // Handle text scrolling for nameBox elements
            $('.nameBox').each(function () {
                const $container = $(this);
                const $text = $container.find('h3');

                // Only apply scrolling if text width exceeds container width
                if ($text.width() > $container.width()) {
                    // Clone the text for seamless scrolling
                    $text.text($text.text() + ' ' + $text.text());

                    // Add necessary CSS
                    $container.css('overflow', 'hidden');
                    $text.css({
                        'display': 'inline-block',
                        'white-space': 'nowrap',
                        'animation': 'scrollText 20s linear infinite'
                    });

                    // Add keyframe animation to head if it doesn't exist
                    if (!document.getElementById('scrollTextAnimation')) {
                        const style = document.createElement('style');
                        style.id = 'scrollTextAnimation';
                        style.innerHTML = `
                    @keyframes scrollText {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `;
                        document.head.appendChild(style);
                    }

                    // Pause animation on hover
                    $container.hover(
                        function () {
                            $text.css('animation-play-state', 'paused');
                        },
                        function () {
                            $text.css('animation-play-state', 'running');
                        }
                    );
                }
            });

            // Handle random animations for QTV items
            var allAnimation = [
                "animation-type1", "animation-type2", "animation-type3", "animation-type4",
                "animation-type5", "animation-type6", "animation-type7", "animation-type8"
            ];

            // Create a copy of the array to manipulate
            var availableAnimations = [...allAnimation];

            // Apply random animations to items
            $(".qtvItems .item-container").each(function () {
                // Check if we still have available animations
                if (availableAnimations.length > 0) {
                    // Get a random index from remaining animations
                    var randomIndex = Math.floor(Math.random() * availableAnimations.length);

                    // Get the animation class and remove it from available options
                    var selectedAnimation = availableAnimations.splice(randomIndex, 1)[0];

                    // Add the animation class to the current element
                    $(this).addClass(selectedAnimation);
                }
            });
        });
