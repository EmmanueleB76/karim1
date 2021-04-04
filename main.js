"use strict";

$(document).ready(function () {
  $(".nav-button").click(function () {
    $(".nav-button").toggleClass("change");
  });

  /* Animation About */
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 650) {
      $(".ibno-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".ibno-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });

  /* Animation Card Goal */
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 1850) {
      $(".card-goal-1").addClass("moveFromLeft");
      $(".card-goal-2").addClass("moveFromLeft");
      $(".card-goal-3").addClass("moveFromLeft");
      $(".card-goal-4").addClass("moveFromRight");
      $(".card-goal-5").addClass("moveFromRight");
      $(".card-goal-6").addClass("moveFromRight");
    } else {
      $(".card-goal-1").removeClass("moveFromLeft");
      $(".card-goal-2").removeClass("moveFromLeft");
      $(".card-goal-3").removeClass("moveFromLeft");
      $(".card-goal-4").removeClass("moveFromRight");
      $(".card-goal-5").removeClass("moveFromRight");
      $(".card-goal-6").removeClass("moveFromRight");
    }
  });

    /* Animation Card Nutrition */
    $(window).scroll(function () {
      let position = $(this).scrollTop();
      if (position >= 750) {
        $(".protein-img").addClass("fromLeft");
        $(".mission-text").addClass("fromRight");
        $(".carbo-img").addClass("fromRight");
        $(".mission2-text").addClass("fromLeft");
        $(".fats-img").addClass("fromLeft");
        $(".mission3-text").addClass("fromRight");
        $(".vita-img").addClass("fromRight");
        $(".mission4-text").addClass("fromLeft");
        $(".mine-img").addClass("fromLeft");
        $(".mission5-text").addClass("fromRight");
        $(".water-img").addClass("fromRight");
        $(".mission6-text").addClass("fromLeft");
      } else {
        $(".protein-img").removeClass("fromLeft");
        $(".mission-text").removeClass("fromRight");
        $(".carbo-img").removeClass("fromRight");
        $(".mission2-text").removeClass("fromLeft");
        $(".fats-img").removeClass("fromLeft");
        $(".mission3-text").removeClass("fromRight");
        $(".vita-img").removeClass("fromRight");
        $(".mission4-text").removeClass("fromLeft");
        $(".mine-img").removeClass("fromLeft");
        $(".mission5-text").removeClass("fromRight");
        $(".water-img").removeClass("fromRight");
        $(".mission6-text").removeClass("fromLeft");
      }
    });
  
      /* Accordion */
  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  });