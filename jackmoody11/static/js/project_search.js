// Keep track of currently applied filters
var filters = [];

// Document objects to add event listeners to
const cards = document.getElementsByClassName("project-card-container");
var filter_tags = document.getElementsByClassName("tag-filter");

// Add card badge event listeners
for (var card of cards) {
    card_tags = card.querySelectorAll(".badge");
    for (var badge of card_tags) {
        badge.addEventListener("click", addFilter);
    }
}

// Add currently applied filters event listeners
for (var tag of filter_tags) {
    tag.addEventListener("click", removeFilter)
}

function removeFilter() {
    filters = filters.filter(e => e !== this.innerText);
    this.remove();

    // Check if clear button needs to be removed
    if (filters === undefined || filters.length == 0) {
        document.getElementById("filter-clear-btn").remove();
    }

    // Add back cards that contain all filters
    cardCheck();
}


function addFilter() {
    const tag_filters = document.getElementById("tag-filters");


    // Add badge to list of filters if not already added
    if (!filters.includes(this.innerText)) {
        var filter_badge = document.createElement("span");
        filter_badge.classList.add("badge", "badge-light", "m-1", "tag-filter");
        filter_badge.innerText = this.innerText;

        // Create close link and icon
        close_link = document.createElement("a");
        close_link.classList.add("close-btn");
        close_icon = document.createElement("i");
        close_icon.classList.add("far", "fa-times-circle", "p-1");
        close_link.appendChild(close_icon)

        // Add close link to filter and badge to filter list
        filter_badge.appendChild(close_link);
        tag_filters.appendChild(filter_badge);
        filters.push(this.innerText);

        // Add event listener to newly added filter
        filter_badge.addEventListener("click", removeFilter);
    }

    // Refresh which cards match filter
    cardCheck();

    // Add button to clear all filters if not yet added
    if (!document.contains(document.getElementById("filter-clear-btn"))) {
        var clear_btn = document.createElement("div");
        clear_btn.classList.add("btn", "btn-outline-primary", "float-right");
        clear_btn.id = "filter-clear-btn";
        clear_btn.innerHTML = "Clear Filters";
        clear_btn.addEventListener("click", removeAllFilters);
        tag_filters.appendChild(clear_btn);
    }
}

function cardCheck() {
    const cards = document.getElementsByClassName("project-card-container");

    // Check if all tags are in card and hide cards that don't match
    for (card of cards) {
        badge_tags = card.querySelectorAll(".filter-badge");
        tags = [];
        for (badge_tag of badge_tags) {
            tags.push(badge_tag.innerText);
        }
        if (!filters.every(val => tags.includes(val))) {
            if (!card.classList.contains("d-none")) {
                card.classList.add("d-none");
            }
        } else if (card.classList.contains("d-none")) {
            card.classList.remove("d-none");
        }
    }
}

function removeAllFilters() {
    // Remove all filters and filter clear button
    filter_tags = document.getElementsByClassName("tag-filter");
    while (filter_tags.length !== 0) {
        filter_tags[0].remove();
    }

    filters = [];

    cardCheck();
    document.getElementById("filter-clear-btn").remove();

}