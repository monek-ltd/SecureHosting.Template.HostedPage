$('form').card({
    container: '.card-wrapper',
    width: 280,

    formSelectors: {
        expiry: 'input[name="cardexpiremonth"], input[name="cardexpireyear"]'
    }
});