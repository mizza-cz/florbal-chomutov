$(".card-columns").masonry({
  itemSelector: ".card-col", // use a separate class for itemSelector, other than .col-
  columnWidth: ".grid-sizer",
  percentPosition: true,
});
