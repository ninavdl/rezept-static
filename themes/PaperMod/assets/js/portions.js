(function() {
    let $portions = document.querySelector("#rezept-portions-input");
    let defaultPortions = parseInt($portions.dataset.default);
    $portions.value = defaultPortions;
    $portions.addEventListener("change", (event) => {
        let newValue = parseInt(event.target.value);
        
        document.querySelectorAll(".rezept-amount").forEach(element => {
            let originalAmount;
            if("originalAmount" in element.dataset) {
                originalAmount = parseInt(element.dataset.originalAmount);
            } else {
                if(element.innerHTML=="") return;
                originalAmount = parseInt(element.innerHTML);
                element.dataset.originalAmount = originalAmount;
            }

            newAmount = originalAmount * (newValue / defaultPortions);
            element.innerHTML = roundAmount(newAmount);
        });
    });

    function roundAmount(amount) {
        return Number(amount).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
})();