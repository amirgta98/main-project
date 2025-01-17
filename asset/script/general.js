/**
 * Main Configuration and Initialization
 * Handles RTL/LTR direction setup and CDN configurations
 */
$(document).ready(function() {


    // Helper function to setup direction and CDN attributes
    function setupDirection(dir, config) {
        direction.css("direction", dir);
        scriptCdn.attr({
            "scr": config.script,
            "integrity": config.scriptIntegrity
        });
        cssCdn.attr({
            "scc": config.css,
            "integrity": config.cssIntegrity
        });
    }
});

/**
 * Numeric Up/Down Counter Implementation
 * Handles increment/decrement functionality for product quantities
 */
$(".nud-container").each(function() {
    const container = $(this);
    const number = container.find(".nud-num h5");
    
    // Increment handler
    container.find(".nud-plus").click(function() {
        const currentValue = parseInt(number.text());
        number.text(currentValue + 1);
    });
    
    // Decrement handler with product removal
    container.find(".nud-mines").click(function() {
        const currentValue = parseInt(number.text());
        if (currentValue > 1) {
            number.text(currentValue - 1);
        } else {
            container.closest(".I-prudact").addClass("d-none");
        }
    });
});

/**
 * Product List Item Toggle Implementation
 * Handles showing/hiding product items
 */
$(".I-prudact").each(function() {
    const product = $(this);
    product.find(".product-list-items-text").click(function() {
        product.find(".product-items").toggleClass("d-none");
    });
});

/**
 * Payment Button Selection Handler
 */
$(".k-Btn").click(function() {
    $(".k-Btn").removeClass("pay-K-Btn-selected");
    $(this).addClass("pay-K-Btn-selected");
});

/**
 * Category Navigation Implementation
 * Handles subcategory display toggling
 */
$(".catgury-container").each(function() {
    const container = $(this);
    const subOpener = container.find(".catgury-open-sub-cat");
    let isOpen = false;
    
    subOpener.click(function() {
        const subCatBox = container.find(".catgury-open-sub-cat-box");
        
        if (isOpen) {
            subOpener.removeClass("catgury-open-sub-cat-rotated");
            subCatBox.addClass("d-none");
        } else {
            // Close all other open categories
            $(".catgury-open-sub-cat").removeClass("catgury-open-sub-cat-rotated");
            $(".catgury-container .catgury-open-sub-cat-box").addClass("d-none");
            
            // Open current category
            subOpener.addClass("catgury-open-sub-cat-rotated");
            subCatBox.removeClass("d-none");
        }
        isOpen = !isOpen;
    });
});

/**
 * Collapse Implementation
 * Handles content switching in collapse containers
 */
$(".collapse-containe").each(function() {
    const container = $(this);
    
    container.find('.colapse-Btn-container button').click(function() {
        const button = $(this);
        const target = button.attr('target');
        
        container.find(".colapse-Btn-container button").removeClass("btn-style-selected");
        button.addClass("btn-style-selected");
        
        container.find('.collapse-content').addClass('d-none');
        container.find('#' + target).removeClass('d-none');
    });
});

/**
 * Address Box Toggle Implementation
 */
$(".collapse-content").each(function() {
    const content = $(this);
    content.find(".pos-address-opener").click(function() {
        content.find(".pos-adressBoxcontainer").toggleClass("d-none");
    });
});

/**
 * Product Display Animation
 * Implements auto-scroll functionality for product display
 */
function initializeProductScroll() {
    const windowSize = $(".us-product").outerHeight();
    const productSize = $(".us-L-procudt").outerHeight();
    
    if (productSize >= windowSize) {
        $(".us-R-procudt").removeClass("d-none");
        $(".us-product").addClass("us-product-lot");
        
        function scrollToBottom() {
            $('.us-product').animate(
                { scrollTop: $('.us-product')[0].scrollHeight }, 
                4000, 
                scrollToTop
            );
        }
        
        function scrollToTop() {
            $('.us-product').animate(
                { scrollTop: 0 }, 
                4000, 
                scrollToBottom
            );
        }
        
        scrollToBottom();
    }
}

initializeProductScroll();

/**
 * Navigation Implementation
 * Handles navigation item selection and space calculation
 */
$(".nav-item").click(function() {
    $(".nav-item").removeClass("nav-item-Selected");
    $(this).addClass("nav-item-Selected");
});

// Navigation space calculation helper
function calculateNavigationSpace(nav, spaceMaker) {
    const navigationHeight = $(nav).outerHeight() * 1.2;
    $(spaceMaker).outerHeight(navigationHeight);
}

// Initialize navigation spaces
calculateNavigationSpace(".pos-navigetion-container", ".nav-space-maker");
calculateNavigationSpace(".checkoutBtn", ".kiosk-space-maker");

/**
 * Modal and Navigation Control Implementation
 */
$('.pos-modal-container').click(function(event) {
    if (!$(event.target).closest('.pos-modal').length) {
        $(this).addClass('d-none');
        $(".nav-item").removeClass("nav-item-Selected");
        $('.nav-item[target="pos-home-page"]').addClass("nav-item-Selected");
    }
});

// Navigation item click handlers
$(".nav-container .nav-item").click(function() {
    const targetId = $(this).attr("target");
    const target = $("#" + targetId);
    
    target.removeClass("d-none");
    
    if (targetId === "pos-total-page") {
        $(".pos-product-unselected-container").removeClass("d-none");
        $(".pos-product-selected-container").addClass("d-none");
    }
});

// Back button handler
$(".pos-back-btn").click(function() {
    $(".pos-product-unselected-container").addClass("d-none");
    $(".pos-product-selected-container").removeClass("d-none");
    $(".nav-item").removeClass("nav-item-Selected");
    $('.nav-item[target="pos-home-page"]').addClass("nav-item-Selected");
});

/**
 * Creates a typing effect for the given text
 * @param {string} text - The text to be typed
 * @param {string} selector - jQuery selector for target element
 * @param {object} options - Configuration options
 */
function typeEffect(text, selector, options = {}) {
    const settings = {
        speed: options.speed || 100,
        delay: options.delay || 0,
        onComplete: options.onComplete || function() {}
    };

    const element = $(selector);
    
    if (!element.length) {
        console.error(`Element "${selector}" not found`);
        return;
    }

    // ایجاد یک المان موقت و جایگزینی &nbsp; با فاصله عادی
    const tempDiv = $('<div>').html(text);
    const processedText = tempDiv.html().replace(/&nbsp;/g, ' ');
    
    let currentHtml = '';
    let index = 0;
    element.empty();

    setTimeout(() => {
        const typeInterval = setInterval(() => {
            if (index < processedText.length) {
                // اگر کاراکتر جاری بخشی از یک تگ HTML است
                if (processedText[index] === '<') {
                    let tagContent = '<';
                    index++;
                    
                    // جمع‌آوری کل تگ
                    while (index < processedText.length && processedText[index] !== '>') {
                        tagContent += processedText[index];
                        index++;
                    }
                    if (index < processedText.length) {
                        tagContent += '>';
                        currentHtml += tagContent;
                        index++;
                    }
                } else {
                    currentHtml += processedText[index];
                    index++;
                }
                
                element.html(currentHtml);
            } else {
                clearInterval(typeInterval);
                settings.onComplete();
            }
        }, settings.speed);
    }, settings.delay);
}


/**
 * Animates a number counting up to a target value
 * @param {string} selector - jQuery selector for the target element
 * @param {object} options - Configuration options
 * @param {number} options.speed - Animation duration in milliseconds
 * @param {number} options.delay - Initial delay before animation starts
 * @param {string} options.suffix - Text to append after the number (default: 'cal')
 * @param {function} options.onComplete - Callback function when animation completes
 */
function countUp(selector, options = {}) {
    const settings = {
        speed: options.speed || 1000,
        delay: options.delay || 0,
        suffix: options.suffix || 'cal',
        onComplete: options.onComplete || function() {}
    };

    const element = $(selector);
    const destination = parseInt(element.text().replace(/\D/g, ''));
    
    if (isNaN(destination)) {
        console.error('Invalid number format');
        return;
    }

    // Set initial value
    element.text(`0${settings.suffix}`);

    // Wait for specified delay
    setTimeout(() => {
        const startTime = performance.now();
        
        // Use requestAnimationFrame for smooth animation
        function animate(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / settings.speed, 1);

            // Use easeOutQuad for smoother animation
            const easeProgress = 1 - (1 - progress) * (1 - progress);
            const currentValue = Math.round(destination * easeProgress);

            element.text(`${currentValue}${settings.suffix}`);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final value is exact
                element.text(`${destination}${settings.suffix}`);
                settings.onComplete();
            }
        }

        requestAnimationFrame(animate);
    }, settings.delay);
}
